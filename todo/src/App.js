import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

const AddTodo = props => {

  return (
    <>
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.onClick}>追加</button>
    </>
  )
}

const TodoElement = props => {

  return (
    <li>
      {props.value}
    </li>
  )
}

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = e => setValue(e.target.value);

  const handleAdd = () => {
    const newTodo = { id: todoList.length, value: value };
    setTodoList([...todoList, newTodo]);
    setValue("");
  }

  return (
    <div>
      <h1>TodoApp</h1>
      <div>
        <AddTodo
         value={value}
         onChange={handleChange}
         onClick={handleAdd}
        />
        <ul>
          {todoList.map(todo => (
            <TodoElement
             key={todo.id}
             value={todo.value}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

// const AddTodo = props => {
//   return (
//     <>
//       <input type="text" value={props.value} onChange={props.onChange} />
//       <button onClick={props.onClick}>追加</button>
//     </>
//   );
// };

// const TodoElement = props => {
//   return (
//     <li>
//       {props.content}
//       <button onClick={props.onDelete}>削除</button>
//     </li>
//   );
// };

// const TodoApp = () => {
//   const [value, setValue] = useState("");
//   const [todoList, setTodoList] = useState([]);

//   const handleChange = e => setValue(e.target.value);

//   const handleAdd = () => {
//     const newTodo = { id: todoList.length, content: value };
//     setTodoList([...todoList, newTodo]);
//     setValue("");
//   };

//   const handleDelete = id => {
//     const newTodoList = todoList.filter(todo => todo.id !== id);
//     setTodoList(newTodoList);
//   };
  
//   return (
//     <div>
//       <h1>TODO App</h1>
//       <div>
//         <AddTodo
//           value={value}
//           onChange={handleChange}
//           onClick={handleAdd}
//         />
//         <ul>
//           {todoList.map(todo => (
//             <TodoElement
//               key={todo.id}
//               content={todo.content}
//               onDelete={() => handleDelete(todo.id)}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <TodoApp />
  );
};

export default App;
