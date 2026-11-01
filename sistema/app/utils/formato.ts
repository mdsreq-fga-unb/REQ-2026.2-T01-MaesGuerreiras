import type { UnidadeMedida } from './doacoes'

const ABREVIACOES: Record<UnidadeMedida, string> = {
  quilo: 'kg',
  unidade: 'un.',
  pacote: 'pct.',
}

export function abreviarUnidade(unidade: UnidadeMedida | null | undefined): string {
  return unidade ? ABREVIACOES[unidade] : '—'
}

export function formatarNumero(valor: number): string {
  return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 3 }).format(valor)
}

export function formatarData(iso: string | null | undefined): string {
  if (!iso) return '—'
  const soData = /^\d{4}-\d{2}-\d{2}$/.test(iso)
  const data = new Date(soData ? `${iso}T12:00:00` : iso)
  if (Number.isNaN(data.getTime())) return iso
  return soData
    ? data.toLocaleDateString('pt-BR')
    : data.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
}

export function iniciais(texto: string | null | undefined): string {
  if (!texto) return '?'
  const partes = texto.replace(/@.*/, '').split(/[\s._-]+/).filter(Boolean)
  return ((partes[0]?.[0] ?? '') + (partes[1]?.[0] ?? '')).toUpperCase() || '?'
}

export function hojeISO(): string {
  const agora = new Date()
  const local = new Date(agora.getTime() - agora.getTimezoneOffset() * 60_000)
  return local.toISOString().slice(0, 10)
}
