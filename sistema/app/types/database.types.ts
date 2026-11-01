// Tipos do banco. Regenerar após cada migration com `npm run db:types`
// (requer o Supabase local rodando).
export type Json
  = | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
  public: {
    Tables: {
      autorizacoes_imagem: {
        Row: {
          autorizado: boolean
          id: string
          meios: Database['public']['Enums']['meio_divulgacao'][]
          registrado_em: string
          registrado_por: string
          revogacao: boolean
          titular_id: string
        }
        Insert: {
          autorizado: boolean
          id?: string
          meios?: Database['public']['Enums']['meio_divulgacao'][]
          registrado_em?: string
          registrado_por: string
          revogacao?: boolean
          titular_id: string
        }
        Update: {
          autorizado?: boolean
          id?: string
          meios?: Database['public']['Enums']['meio_divulgacao'][]
          registrado_em?: string
          registrado_por?: string
          revogacao?: boolean
          titular_id?: string
        }
        Relationships: []
      }
      categorias_item: {
        Row: {
          criado_em: string
          criado_por: string
          id: string
          nome: string
          unidade: Database['public']['Enums']['unidade_medida']
        }
        Insert: {
          criado_em?: string
          criado_por: string
          id?: string
          nome: string
          unidade: Database['public']['Enums']['unidade_medida']
        }
        Update: {
          criado_em?: string
          criado_por?: string
          id?: string
          nome?: string
          unidade?: Database['public']['Enums']['unidade_medida']
        }
        Relationships: []
      }
      consentimentos: {
        Row: {
          concedido: boolean
          finalidade: Database['public']['Enums']['finalidade_consentimento']
          id: string
          registrado_em: string
          registrado_por: string
          titular_id: string
        }
        Insert: {
          concedido: boolean
          finalidade: Database['public']['Enums']['finalidade_consentimento']
          id?: string
          registrado_em?: string
          registrado_por: string
          titular_id: string
        }
        Update: {
          concedido?: boolean
          finalidade?: Database['public']['Enums']['finalidade_consentimento']
          id?: string
          registrado_em?: string
          registrado_por?: string
          titular_id?: string
        }
        Relationships: []
      }
      controle_acesso: {
        Row: {
          bloqueado_ate: string | null
          email: string
          tentativas_falhas: number
        }
        Insert: {
          bloqueado_ate?: string | null
          email: string
          tentativas_falhas?: number
        }
        Update: {
          bloqueado_ate?: string | null
          email?: string
          tentativas_falhas?: number
        }
        Relationships: []
      }
      doadores: {
        Row: {
          atualizado_em: string
          criado_em: string
          criado_por: string
          email: string | null
          id: string
          nome: string
          telefone: string | null
          tipo: Database['public']['Enums']['tipo_doador']
        }
        Insert: {
          atualizado_em?: string
          criado_em?: string
          criado_por: string
          email?: string | null
          id?: string
          nome: string
          telefone?: string | null
          tipo: Database['public']['Enums']['tipo_doador']
        }
        Update: {
          atualizado_em?: string
          criado_em?: string
          criado_por?: string
          email?: string | null
          id?: string
          nome?: string
          telefone?: string | null
          tipo?: Database['public']['Enums']['tipo_doador']
        }
        Relationships: []
      }
      doadores_alteracoes: {
        Row: {
          alterado_em: string
          autor_id: string
          campo: string
          doador_id: string
          id: string
          valor_anterior: string | null
          valor_novo: string | null
        }
        Insert: {
          alterado_em?: string
          autor_id: string
          campo: string
          doador_id: string
          id?: string
          valor_anterior?: string | null
          valor_novo?: string | null
        }
        Update: {
          alterado_em?: string
          autor_id?: string
          campo?: string
          doador_id?: string
          id?: string
          valor_anterior?: string | null
          valor_novo?: string | null
        }
        Relationships: []
      }
      movimentacoes_estoque: {
        Row: {
          categoria_id: string
          criado_em: string
          data: string
          destino_sintetico: string | null
          doador_id: string | null
          id: string
          quantidade: number
          registrado_por: string
          tipo: Database['public']['Enums']['tipo_movimentacao']
        }
        Insert: {
          categoria_id: string
          criado_em?: string
          data: string
          destino_sintetico?: string | null
          doador_id?: string | null
          id?: string
          quantidade: number
          registrado_por: string
          tipo: Database['public']['Enums']['tipo_movimentacao']
        }
        Update: {
          categoria_id?: string
          criado_em?: string
          data?: string
          destino_sintetico?: string | null
          doador_id?: string | null
          id?: string
          quantidade?: number
          registrado_por?: string
          tipo?: Database['public']['Enums']['tipo_movimentacao']
        }
        Relationships: []
      }
      perfis: {
        Row: {
          criado_em: string
          id: string
          nome: string
          perfil: Database['public']['Enums']['perfil_acesso']
        }
        Insert: {
          criado_em?: string
          id: string
          nome: string
          perfil?: Database['public']['Enums']['perfil_acesso']
        }
        Update: {
          criado_em?: string
          id?: string
          nome?: string
          perfil?: Database['public']['Enums']['perfil_acesso']
        }
        Relationships: []
      }
      titulares_consentimento: {
        Row: {
          criado_em: string
          criado_por: string
          familia_id: string | null
          id: string
          nome: string
          papel: Database['public']['Enums']['papel_titular']
        }
        Insert: {
          criado_em?: string
          criado_por: string
          familia_id?: string | null
          id?: string
          nome: string
          papel: Database['public']['Enums']['papel_titular']
        }
        Update: {
          criado_em?: string
          criado_por?: string
          familia_id?: string | null
          id?: string
          nome?: string
          papel?: Database['public']['Enums']['papel_titular']
        }
        Relationships: []
      }
    }
    Views: {
      saldos_categoria: {
        Row: {
          categoria_id: string | null
          nome: string | null
          saldo: number | null
          unidade: Database['public']['Enums']['unidade_medida'] | null
        }
        Relationships: []
      }
    }
    Functions: {
      consentimento_vigente: {
        Args: {
          p_finalidade: Database['public']['Enums']['finalidade_consentimento']
          p_titular_id: string
        }
        Returns: boolean
      }
      eh_coordenacao: { Args: never, Returns: boolean }
      estado_bloqueio_login: {
        Args: { p_email: string }
        Returns: {
          bloqueado: boolean
          bloqueado_ate: string | null
          tentativas_falhas: number
        }[]
      }
      imagem_autorizada_vigente: { Args: { p_titular_id: string }, Returns: boolean }
      registrar_tentativa_login: {
        Args: { p_email: string, p_sucesso: boolean }
        Returns: {
          bloqueado: boolean
          bloqueado_ate: string | null
          tentativas_falhas: number
        }[]
      }
      registrar_consentimentos: {
        Args: {
          p_consentimentos: Json
          p_familia_id: string | null
          p_imagem_autorizado: boolean
          p_meios: Database['public']['Enums']['meio_divulgacao'][]
          p_nome: string
          p_papel: Database['public']['Enums']['papel_titular']
        }
        Returns: string
      }
      tem_perfil: { Args: never, Returns: boolean }
    }
    Enums: {
      finalidade_consentimento:
        | 'cadastro_atendimento'
        | 'frequencia'
        | 'contato_familia'
        | 'relatorios_apoiadores'
      meio_divulgacao: 'site' | 'redes_sociais' | 'materiais_impressos'
      papel_titular: 'titular' | 'responsavel_legal'
      perfil_acesso: 'voluntario' | 'coordenacao'
      tipo_doador: 'pessoa' | 'organizacao'
      tipo_movimentacao: 'entrada' | 'saida'
      unidade_medida: 'unidade' | 'quilo' | 'pacote'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
