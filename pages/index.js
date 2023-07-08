import { Button, Input, Card } from "@nextui-org/react";
import { useState } from "react";
import useStore from "../store";

export default function Home() {
  const [newtodo, setNewTodo] = useState("");

  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const removeTodo = useStore((state) => state.removeTodo);

  // this function will check if the input is valid or not
  const AddNewTodo = () => {
    if (newtodo.length > 0) {
      addTodo(newtodo);
      setNewTodo("");
    }
  };

  return (
    <div className="container text-black mx-auto flex flex-col items-center p-28">
      <div className="w-full">
        <h1 className="text-3xl">Todo</h1>
      </div>
      <div className="mt-2 flex items-center w-full">
        <Input
          value={newtodo}
          onChange={(e) => setNewTodo(e.target.value)}
          fullWidth
          placeholder="Enter TODO"
          clearable
        ></Input>
        <Button onClick={AddNewTodo} shadow className="m-2">
          ADD
        </Button>
      </div>

{/* Map all the current Todos */}
      {todos.map((todo, index) => (
        <div key={index} className="mt-5 w-full flex items-center">
          <Card className="w-full">
            <Card.Body>{todo}</Card.Body>
          </Card>
          <Button
            onClick={() => removeTodo(index)}
            size="lg"
            shadow
            auto
            color="error"
            className="m-2"
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}
