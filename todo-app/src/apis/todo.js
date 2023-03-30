const todoDataUrl = "http://localhost:3100/todos";

export const getAllTodosData = async () => {
  const response = await fetch(todoDataUrl);
  return response.json();
};

export const addTodoData = async (todo) => {
  const response = await fetch(todoDataUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });
  return response.json();
};

export const deleteTodoData = async (id) => {
  await fetch(`${todoDataUrl}/${id}`, {
    method: 'DELETE'
  });
  return id;
};

export const updateTodoData = async (id, todo) => {
  const response = await fetch(`${todoDataUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });
  return response.json();
};
