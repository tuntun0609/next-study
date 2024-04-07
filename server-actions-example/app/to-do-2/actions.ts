'use server'

import { revalidatePath } from 'next/cache'

const data = ['阅读', '写作', '冥想']

export const getTodoList = async () => {
  return data
}

export const addTodo = async (
  prevState: { message: string },
  formData: FormData
) => {
  const todo = formData.get('todo') as string
  if (todo) {
    data.push(todo)
    revalidatePath('/to-do-2')
    return {
      message: 'add ' + todo + ' success',
    }
  } else {
    return {
      message: 'add ' + todo + ' error',
    }
  }
}

export const deleteLastTodo = async () => {
  data.pop()
  revalidatePath('/to-do-2')
  return {
    message: 'success',
  }
}
