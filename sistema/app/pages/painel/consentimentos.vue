<script setup lang="ts">
import type { ConsentimentoResposta } from '~/types/contratos'
import {
  FINALIDADES,
  MEIOS_IMAGEM,
  ROTULOS_FINALIDADE,
  ROTULOS_MEIO,
  type Finalidade,
  type MeioImagem,
  type PapelTitular,
} from '~/utils/consentimentos'
import { formatarData } from '~/utils/formato'
import { mensagemErro } from '~/utils/http'

// Protótipo: "Registrar consentimento (antes do cadastro)" e
// "Consentimento — histórico e revogação" (RF42, RN19).
type Modo = 'lista' | 'novo' | 'detalhe'

const DESCRICOES: Record<Finalidade, string> = {
  cadastro_atendimento: 'Guardar nome, contato e endereço para atender a família',
  frequencia: 'Marcar presença e faltas nas oficinas',
  contato_familia: 'Ligar ou mandar mensagem sobre faltas e atividades',
  relatorios_apoiadores: 'Contar a família nos números enviados a parceiros',
}

const { data: registros, error, refresh } = await useFetch<ConsentimentoResposta[]>('/api/consentimentos')
const { data: sessao } = await useFetch('/api/acesso/sessao')

const modo = ref<Modo>('lista')
const selecionadoId = ref<string | null>(null)
const aviso = ref('')
const sucesso = ref('')
const enviando = ref(false)
const erroNome = ref('')
const nome = ref('')
const papel = ref<PapelTitular>('titular')
const concedidos = ref<Record<Finalidade, boolean>>({
  cadastro_atendimento: true,
  frequencia: true,
  contato_familia: true,
  relatorios_apoiadores: false,
})
const imagemAutorizada = ref<boolean | null>(null)
const meios = ref<MeioImagem[]>([])
const erroImagem = ref('')

const selecionado = computed(() => registros.value?.find(item => item.titularId === selecionadoId.value) ?? null)

const historico = computed(() => {
  const item = selecionado.value
  if (!item) return []
  const linhas = item.consentimentos.map(c => ({
    data: c.registradoEm,
    texto: `${ROTULOS_FINALIDADE[c.finalidade]}: ${c.concedido ? 'sim' : 'não'}.`,
  }))
  if (item.imagem) {
    linhas.push({ data: item.imagem.registradoEm, texto: `Imagem: ${textoImagem(item)}.` })
  }
  return linhas.sort((a, b) => b.data.localeCompare(a.data))
})

function textoImagem(item: ConsentimentoResposta) {
  if (!item.imagem) return 'sem registro'
  if (item.imagem.revogacao) return 'autorização revogada'
  if (!item.imagem.autorizado) return 'não autoriza'
  return `autoriza em ${item.imagem.meios.map(meio => ROTULOS_MEIO[meio].toLowerCase()).join(', ')}`
}

function explicacaoImagem(item: ConsentimentoResposta) {
  if (item.imagem?.revogacao) return 'Nenhuma imagem pode ser publicada a partir de agora.'
  if (item.imagem?.autorizado) return `Meios: ${item.imagem.meios.map(meio => ROTULOS_MEIO[meio]).join(', ')}.`
  return 'A imagem não pode ser publicada.'
}

function statusImagem(item: ConsentimentoResposta) {
  if (!item.imagem) return { texto: 'Sem registro', classe: '' }
  if (item.imagem.revogacao) return { texto: 'Revogada', classe: 'etiqueta--erro' }
  if (!item.imagem.autorizado) return { texto: 'Não autoriza', classe: '' }
  return { texto: 'Autorizada', classe: 'etiqueta--sucesso' }
}

function limpar() {
  nome.value = ''
  papel.value = 'titular'
  concedidos.value = { cadastro_atendimento: true, frequencia: true, contato_familia: true, relatorios_apoiadores: false }
  imagemAutorizada.value = null
  meios.value = []
  erroNome.value = ''
  erroImagem.value = ''
  aviso.value = ''
}

function abrirNovo() {
  limpar()
  sucesso.value = ''
  modo.value = 'novo'
}

function abrirDetalhe(id: string) {
  aviso.value = ''
  selecionadoId.value = id
  modo.value = 'detalhe'
}

function voltarLista() {
  limpar()
  sucesso.value = ''
  modo.value = 'lista'
}

function alternarMeio(meio: MeioImagem, marcado: boolean) {
  meios.value = marcado
    ? [...new Set([...meios.value, meio])]
    : meios.value.filter(item => item !== meio)
}

async function registrar() {
  aviso.value = ''
  erroNome.value = nome.value.trim() ? '' : 'Informe o nome completo de quem está autorizando.'
  erroImagem.value = imagemAutorizada.value === null
    ? 'Marque se autoriza ou não o uso de imagem.'
    : (imagemAutorizada.value && !meios.value.length ? 'Escolha pelo menos um meio autorizado.' : '')
  if (erroNome.value || erroImagem.value) return

  enviando.value = true
  const nomeSalvo = nome.value.trim()
  try {
    await $fetch('/api/consentimentos', {
      method: 'POST',
      body: {
        titular: { nome: nomeSalvo, papel: papel.value },
        consentimentos: FINALIDADES.map(finalidade => ({
          finalidade,
          concedido: Boolean(concedidos.value[finalidade]),
        })),
        imagem: {
          autorizado: Boolean(imagemAutorizada.value),
          meios: imagemAutorizada.value ? meios.value : [],
        },
      },
    })
    await refresh()
    const novo = [...(registros.value ?? [])]
      .filter(item => item.nome === nomeSalvo)
      .sort((a, b) => (b.consentimentos[0]?.registradoEm ?? '').localeCompare(a.consentimentos[0]?.registradoEm ?? ''))[0]
    limpar()
    sucesso.value = 'Consentimento salvo. Na Sprint 7, daqui a família poderá ser cadastrada.'
    if (novo) abrirDetalhe(novo.titularId)
    else modo.value = 'lista'
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
  finally {
    enviando.value = false
  }
}

async function revogar(titularId: string) {
  aviso.value = ''
  sucesso.value = ''
  try {
    await $fetch(`/api/consentimentos/${titularId}/revogar-imagem`, { method: 'POST' })
    sucesso.value = 'Revogação registrada. Nenhuma imagem pode ser publicada a partir de agora.'
    await refresh()
  }
  catch (falha) {
    aviso.value = mensagemErro(falha)
  }
}
</script>

<template>
  <div>
    <CabecalhoPagina
      v-if="modo === 'novo'"
      voltar="Consentimentos"
      titulo="Registrar consentimento"
      @voltar="voltarLista"
    />
    <CabecalhoPagina
      v-else-if="modo === 'detalhe' && selecionado"
      voltar="Consentimentos"
      :titulo="selecionado.nome"
      @voltar="voltarLista"
    />
    <CabecalhoPagina
      v-else
      secao="Proteção de dados"
      titulo="Consentimentos"
    >
      <button
        type="button"
        class="botao botao--primario"
        @click="abrirNovo"
      >
        + Registrar consentimento
      </button>
    </CabecalhoPagina>

    <!-- Registrar -->
    <main
      v-if="modo === 'novo'"
      class="pagina pagina--estreita"
    >
      <ol
        class="passos"
        aria-label="Etapas do cadastro"
      >
        <li aria-current="step">
          1. Consentimento
        </li>
        <li>2. Cadastro da família</li>
        <li>3. Participantes</li>
      </ol>
      <div
        v-if="aviso"
        role="alert"
        class="alerta alerta--erro"
      >
        <strong>Nada foi salvo.</strong>
        <span>{{ aviso }}</span>
      </div>

      <form
        class="cartao"
        novalidate
        @submit.prevent="registrar"
      >
        <div class="cartao__topo">
          <h2>Quem está autorizando</h2>
          <p>Nenhum outro dado da família é salvo antes deste registro.</p>
        </div>
        <div class="cartao__corpo">
          <label class="campo">
            Nome completo de quem autoriza *
            <input
              v-model="nome"
              type="text"
              :aria-invalid="!!erroNome"
              aria-describedby="erro-nome"
            >
            <span
              v-if="erroNome"
              id="erro-nome"
              class="campo__erro"
            >{{ erroNome }}</span>
          </label>
          <fieldset class="grupo">
            <legend>Quem assina *</legend>
            <label class="opcao">
              <input
                v-model="papel"
                type="radio"
                name="papel"
                value="titular"
              >
              O próprio titular (18 anos ou mais)
            </label>
            <label class="opcao">
              <input
                v-model="papel"
                type="radio"
                name="papel"
                value="responsavel_legal"
              >
              O responsável legal (titular menor de 18 anos)
            </label>
          </fieldset>
        </div>

        <div class="cartao__topo cartao__topo--meio">
          <h2>Uso dos dados pessoais</h2>
          <p>Leia cada finalidade e marque a resposta. A data é registrada sozinha.</p>
        </div>
        <div class="cartao__corpo cartao__corpo--finalidades">
          <div
            v-for="finalidade in FINALIDADES"
            :key="finalidade"
            class="finalidade"
          >
            <div>
              <strong>{{ ROTULOS_FINALIDADE[finalidade] }}</strong>
              <span>{{ DESCRICOES[finalidade] }}</span>
            </div>
            <div
              class="sim-nao"
              role="group"
              :aria-label="ROTULOS_FINALIDADE[finalidade]"
            >
              <button
                type="button"
                class="sim"
                :aria-pressed="concedidos[finalidade]"
                @click="concedidos[finalidade] = true"
              >
                Sim
              </button>
              <button
                type="button"
                class="nao"
                :aria-pressed="!concedidos[finalidade]"
                @click="concedidos[finalidade] = false"
              >
                Não
              </button>
            </div>
          </div>
        </div>

        <div class="cartao__topo cartao__topo--meio">
          <h2>Uso de imagem</h2>
          <p>Fotos e vídeos em materiais de divulgação. Registro separado dos dados pessoais.</p>
        </div>
        <div class="cartao__corpo">
          <div
            class="escolhas"
            role="group"
            aria-label="Uso de imagem"
          >
            <button
              type="button"
              class="escolha"
              :aria-pressed="imagemAutorizada === true"
              @click="imagemAutorizada = true"
            >
              <strong>Autoriza</strong>
              <span class="escolha__dica">Escolha os meios abaixo</span>
            </button>
            <button
              type="button"
              class="escolha"
              :aria-pressed="imagemAutorizada === false"
              @click="imagemAutorizada = false; meios = []"
            >
              <strong>Não autoriza</strong>
              <span class="escolha__dica">A imagem não pode ser publicada</span>
            </button>
          </div>
          <fieldset
            v-if="imagemAutorizada"
            class="grupo"
          >
            <legend>Meios autorizados *</legend>
            <label
              v-for="meio in MEIOS_IMAGEM"
              :key="meio"
              class="opcao"
            >
              <input
                type="checkbox"
                :checked="meios.includes(meio)"
                @change="alternarMeio(meio, ($event.target as HTMLInputElement).checked)"
              >
              {{ ROTULOS_MEIO[meio] }}
            </label>
          </fieldset>
          <span
            v-if="erroImagem"
            role="alert"
            class="campo__erro"
          >{{ erroImagem }}</span>
        </div>

        <div class="cartao__rodape">
          <span class="pequeno texto-2">Será registrado hoje por {{ sessao?.usuario.email }}</span>
          <div class="acoes">
            <button
              type="button"
              class="botao"
              @click="voltarLista"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="botao botao--primario"
              :disabled="enviando"
            >
              Salvar consentimento
            </button>
          </div>
        </div>
      </form>
    </main>

    <!-- Detalhe -->
    <main
      v-else-if="modo === 'detalhe' && selecionado"
      class="pagina"
    >
      <div
        v-if="sucesso"
        role="status"
        class="alerta alerta--sucesso"
      >
        {{ sucesso }}
      </div>
      <div
        v-if="aviso"
        role="alert"
        class="alerta alerta--erro"
      >
        {{ aviso }}
      </div>
      <p class="texto-2">
        {{ selecionado.papel === 'responsavel_legal' ? 'Responsável legal' : 'Titular' }}
      </p>
      <div class="grade grade--larga">
        <section class="cartao bloco">
          <h2>Dados pessoais (vigente)</h2>
          <div
            v-for="c in selecionado.consentimentos"
            :key="c.finalidade"
            class="bloco__linha"
          >
            <span>{{ ROTULOS_FINALIDADE[c.finalidade] }}</span>
            <strong :class="c.concedido ? 'sim-texto' : 'texto-2'">{{ c.concedido ? 'Sim' : 'Não' }}</strong>
          </div>
        </section>
        <section class="cartao bloco">
          <h2>Uso de imagem</h2>
          <span
            class="etiqueta etiqueta--alinhada"
            :class="statusImagem(selecionado).classe"
          >{{ statusImagem(selecionado).texto }}</span>
          <p class="texto-2">
            {{ explicacaoImagem(selecionado) }}
          </p>
          <button
            v-if="selecionado.imagem?.autorizado && !selecionado.imagem.revogacao"
            type="button"
            class="botao botao--perigo"
            @click="revogar(selecionado.titularId)"
          >
            Registrar revogação da imagem
          </button>
        </section>
      </div>
      <section class="cartao">
        <div class="cartao__topo">
          <h2>Histórico</h2>
          <p>Nada é apagado: cada mudança vira uma nova linha.</p>
        </div>
        <div class="tabela-caixa">
          <table class="tabela">
            <thead>
              <tr>
                <th>Data</th>
                <th>Registro</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(linha, indice) in historico"
                :key="indice"
              >
                <td>{{ formatarData(linha.data) }}</td>
                <td>{{ linha.texto }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>

    <!-- Lista -->
    <main
      v-else
      class="pagina"
    >
      <p class="texto-2">
        O consentimento é registrado antes de qualquer outro dado da família (RN19).
      </p>
      <div
        v-if="error || aviso"
        role="alert"
        class="alerta alerta--erro"
      >
        {{ aviso || mensagemErro(error) }}
      </div>
      <section class="cartao">
        <div class="tabela-caixa">
          <table class="tabela">
            <thead>
              <tr>
                <th>Quem autorizou</th>
                <th>Dados pessoais</th>
                <th>Imagem</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in registros"
                :key="item.titularId"
              >
                <td>
                  <strong>{{ item.nome }}</strong>
                  <span class="pequeno texto-2 bloco-texto">{{ item.papel === 'responsavel_legal' ? 'Responsável legal' : 'Titular' }}</span>
                </td>
                <td>{{ item.consentimentos.filter(c => c.concedido).length }} de {{ item.consentimentos.length }} finalidades</td>
                <td>
                  <span
                    class="etiqueta"
                    :class="statusImagem(item).classe"
                  >{{ statusImagem(item).texto }}</span>
                </td>
                <td>
                  <button
                    type="button"
                    class="botao botao--pequeno"
                    @click="abrirDetalhe(item.titularId)"
                  >
                    Ver
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p
          v-if="registros && !registros.length"
          class="tabela__vazio"
        >
          Nenhum consentimento registrado ainda.
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.passos {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.passos li {
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--borda-suave);
  color: var(--texto-2);
  font-size: 14px;
}

.passos li[aria-current='step'] {
  background: var(--roxo);
  color: var(--branco);
  font-weight: 600;
}

.cartao__topo--meio {
  border-top: 1px solid var(--borda-suave);
}

.cartao__corpo--finalidades {
  gap: 0;
  padding-top: 0;
}

.bloco {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bloco h2 {
  font-size: 17px;
}

.bloco__linha {
  padding-top: 10px;
  border-top: 1px solid var(--borda-suave);
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.sim-texto {
  color: var(--sucesso-forte);
}

.etiqueta--alinhada {
  align-self: flex-start;
}

.bloco-texto {
  display: block;
}

.botao--perigo {
  align-self: flex-start;
}
</style>
