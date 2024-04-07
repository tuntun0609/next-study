'use client'

import { deleteLastTodo } from './actions'

export const DeleteLastTodoButton = () => {
  const handleClick = async () => {
    const res = await deleteLastTodo()
    console.log(res)
  }

  return (
    <button type="button" onClick={handleClick}>
      delete last todo
    </button>
  )
}
