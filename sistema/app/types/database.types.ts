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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      eh_coordenacao: { Args: never, Returns: boolean }
    }
    Enums: {
      perfil_acesso: 'voluntario' | 'coordenacao'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
