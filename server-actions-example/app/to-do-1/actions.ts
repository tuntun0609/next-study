'use server'

import { revalidatePath } from 'next/cache'

const data = ['阅读', '写作', '冥想']

export const getTodoList = async () => {
  console.log('getTodoList')
  return data
}

export const addTodo = async (formData: FormData) => {
  const todo = formData.get('todo') as string
  if (todo) {
    data.push(todo)
    revalidatePath('/to-do-1')
    return {
      message: 'success',
    }
  } else {
    return {
      message: 'error',
    }
  }
}

export const deleteLastTodo = async () => {
  data.pop()
  revalidatePath('/to-do-1')
  return {
    message: 'success',
  }
}
