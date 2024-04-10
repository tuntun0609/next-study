'use client'

import { useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

export const ClientBtn = () => {
  return (
    <button
      onClick={async () => {
        const supabase = createClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()
        console.log(user)
      }}>
      client
    </button>
  )
}
