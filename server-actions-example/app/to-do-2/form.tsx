'use client'

import { useFormState } from 'react-dom'
import { addTodo } from './actions'
import { SubmitButton } from './submit-button'
import { DeleteLastTodoButton } from './delete-last-todo-button'

export const Form = () => {
  'use client'
  const [state, formAction] = useFormState(addTodo, {
    message: '',
  })
  return (
    <form action={formAction}>
      <input name="todo" type="text" />
      <SubmitButton></SubmitButton>
      <DeleteLastTodoButton></DeleteLastTodoButton>
      <div>{state.message}</div>
    </form>
  )
}
