import { faker } from "@faker-js/faker";

export function loadTodos() {
  const todos = [];

  for (let i = 0; i < 15; i++) {
    todos.push({
      id: faker.string.uuid(),
      task: faker.git.commitMessage(),
      done: false,
    });
  }

  return todos;
}
