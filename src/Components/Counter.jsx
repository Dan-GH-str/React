import React, { useState } from "react";

// Здесь компонент это функция(Функциональный компонент), которая обязательно возвращает jsx
const Counter = function() {
  // Состояния. Меняя состояние(через функцию, возвращаемую useState) мы даем понять реакту, что произошли изменения в коде, чтобы тот перерисовал весь компонент на странице в браузере
  const [count, setCount] = useState(0)

  function Increment() {
    setCount(count + 1) // Как я понял, данная функция просто присваивает переменной count то значение, которое указано в парметрах
  }

  function Decrement() {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default Counter;