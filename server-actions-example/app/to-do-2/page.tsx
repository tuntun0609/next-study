import { addTodo, getTodoList } from './actions'
import { Form } from './form'

export default async function ToDoList() {
  const todoList = await getTodoList()
  return (
    <div>
      <h1>to do list 2</h1>
      <Form />
      <div>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </div>
    </div>
  )
}
