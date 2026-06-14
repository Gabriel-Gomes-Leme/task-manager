import "./App.css";
import { MessagesContainer } from "./components/Messages";
import { TaskContextProvider } from "./contexts/TaskContextProvider";
import { MainRouter } from "./routers/MainRouter";

function App() {
  return (
    <>
      <TaskContextProvider>
        <MessagesContainer>
        <MainRouter></MainRouter>
      </MessagesContainer>
      </TaskContextProvider>
    </>
  );
}

export default App;
