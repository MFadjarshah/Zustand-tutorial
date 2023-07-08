import create from "zustand";

const useStore = create((set) => ({
  todos: [],
  todo: "",
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (index) =>
    set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
}));

export default useStore;
