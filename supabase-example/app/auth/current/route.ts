import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const supabase = createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (!error) {
    return new Response(
      JSON.stringify({ message: 'success', code: 200, user: user }),
      {
        status: 200,
      }
    )
  }
  console.log(error)
  // 响应头为 403
  return new Response(
    JSON.stringify({ message: error.message, code: error.status }),
    {
      status: error.status,
    }
  )
}
