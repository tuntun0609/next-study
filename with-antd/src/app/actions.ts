'use server'

import { cookies } from 'next/headers'

export const getCookies = async () => {
  const cookieStore = cookies()
  console.log(cookieStore.getAll())
  cookieStore.set('test', 'test')
  return cookieStore.getAll()
}
