import { addTodo, getTodoList } from './actions'
import { DeleteLastTodoButton } from './delete-last-todo-button'

export default async function ToDoList() {
  const todoList = await getTodoList()
  return (
    <div>
      <h1>to do list</h1>
      <form action={addTodo}>
        <input name="todo" type="text" />
        <button type="submit">add</button>
        <DeleteLastTodoButton></DeleteLastTodoButton>
      </form>
      <div>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </div>
    </div>
  )
}
