import type { H3Event } from 'h3'
import { serverSupabaseClient, serverSupabaseServiceRole, serverSupabaseUser } from '#supabase/server'
import type { Database } from '~/types/database.types'

export function dbUsuario(event: H3Event) {
  return serverSupabaseClient<Database>(event)
}

export function dbAdmin(event: H3Event) {
  return serverSupabaseServiceRole<Database>(event)
}

export function authUsuario(event: H3Event) {
  return serverSupabaseUser(event)
}
