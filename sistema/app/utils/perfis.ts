// Perfis de acesso da tabela de permissões (seção 8.4) e do RF40.
export const PERFIS = ['voluntario', 'coordenacao'] as const

export type Perfil = (typeof PERFIS)[number]

export function ehPerfilValido(valor: unknown): valor is Perfil {
  return typeof valor === 'string' && (PERFIS as readonly string[]).includes(valor)
}

// A Coordenação tem todas as permissões do Voluntário, mais as exclusivas dela.
export function ehCoordenacao(perfil: Perfil | null | undefined): boolean {
  return perfil === 'coordenacao'
}
