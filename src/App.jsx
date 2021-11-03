import TaskProvider from "./Context/TaskProvider";
import { FormTask, Header, TaskList } from "./Components";

function App() {
  return (
    <TaskProvider>
      <Header />
      <FormTask />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
