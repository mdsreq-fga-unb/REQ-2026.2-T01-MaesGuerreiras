# 8.2 Regras de negócio

As regras ficam separadas do texto dos requisitos (DoR, seção [13](../13-dor-dod/index.md)). Cada
regra tem um registro próprio. Os RFs que aplicam cada regra estão **na ficha do RF**, no
[catálogo](index.md), campo *Condições*. Os critérios de aceitação desses RFs precisam cobrir a
regra, inclusive as exceções.

### RN01 {#rn01}

A solicitação de contato exige nome, mensagem e ao menos um meio de retorno (telefone ou e-mail).

*Origem:* [RF06](index.md#rf06)

### RN02 {#rn02}

Cada categoria de item tem uma unidade de medida (unidade, quilo ou pacote), usada em todas as entradas, saídas e no saldo.

*Origem:* [RF11](index.md#rf11)

### RN03 {#rn03}

A lista pública de itens necessários é mantida manualmente pela Coordenação; o sistema não a calcula a partir do saldo.

*Origem:* Validação 28/09

### RN04 {#rn04}

No cadastro de família, são obrigatórios só o nome do responsável, o telefone e o endereço.

*Origem:* Validação 28/09

### RN05 {#rn05}

No cadastro de participante, são obrigatórios só o nome completo e a data de nascimento.

*Origem:* Validação 28/09

### RN06 {#rn06}

Só a Coordenação inativa famílias e participantes. O cadastro inativo sai das buscas padrão, mas o histórico e os relatórios do período continuam disponíveis.

*Origem:* [RF15](index.md#rf15), [RF17](index.md#rf17)

### RN07 {#rn07}

Ao inativar um participante, as inscrições em turmas em andamento são canceladas com o motivo "desligamento da associação".

*Origem:* [RF17](index.md#rf17)

### RN08 {#rn08}

Participante menor de 18 anos precisa de responsável legal; a exceção (por exemplo, acolhimento) exige motivo registrado.

*Origem:* [RF18](index.md#rf18)

### RN09 {#rn09}

A data de término da turma deve ser posterior à de início.

*Origem:* [RF20](index.md#rf20)

### RN10 {#rn10}

As vagas não podem ser reduzidas para menos que o número de inscritos; o sistema recusa e informa o total.

*Origem:* [RF21](index.md#rf21)

### RN11 {#rn11}

Encerrar uma turma antes do fim do período exige motivo.

*Origem:* [RF22](index.md#rf22)

### RN12 {#rn12}

Só participante ativo é inscrito, e só em turma com vaga. Sem vaga, a inscrição é recusada e o sistema informa que a turma está cheia (RF23); o encaminhamento à lista de espera é oferecido a partir do RF25.

*Origem:* [RF23](index.md#rf23), [RF25](index.md#rf25)

### RN13 {#rn13}

O cancelamento de inscrição exige motivo de uma lista (desistência, mudança de endereço, conflito de horário, desligamento ou outro); texto livre só para "outro".

*Origem:* [RF24](index.md#rf24)

### RN14 {#rn14}

A lista de espera segue a ordem de registro. Quando abre vaga ou as vagas aumentam, o sistema avisa a Coordenação, que confirma a inscrição.

*Origem:* [RF21](index.md#rf21), [RF25](index.md#rf25)

### RN15 {#rn15}

A chamada só é aberta na data do encontro e lista apenas os inscritos na turma.

*Origem:* [RF27](index.md#rf27)

### RN16 {#rn16}

Falta com motivo informado vira falta justificada e não conta para o limite.

*Origem:* [RF29](index.md#rf29)

### RN17 {#rn17}

A Educadora (Voluntário) só corrige a chamada que fez, até o fim do mesmo dia. Depois, só a Coordenação corrige, com motivo. O registro anterior é sempre preservado.

*Origem:* [RF30](index.md#rf30); validação 28/09

### RN18 {#rn18}

O participante é sinalizado ao atingir 3 faltas seguidas sem justificativa. O limite é definido pela Coordenação.

*Origem:* [RF32](index.md#rf32); validação 28/09

### RN19 {#rn19}

O consentimento é registrado separadamente para quatro finalidades (cadastro e atendimento, frequência, contato com a família, relatórios a apoiadores), cada uma com data. No mesmo fluxo, registra-se a autorização ou recusa de imagem, com meios e data. Dados reais só entram depois do consentimento.

*Origem:* [RF42](index.md#rf42); validação 28/09; seção 9

### RN20 {#rn20}

A primeira conta de Coordenação é criada pela equipe na implantação; as demais, pela Coordenação.

*Origem:* [RF39](index.md#rf39)
