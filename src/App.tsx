import "./App.css";
import { MessagesContainer } from "./components/Messages";
import { MainRouter } from "./routers/MainRouter";

function App() {
  return (
    <>
      <MessagesContainer>
        <MainRouter></MainRouter>
      </MessagesContainer>
    </>
  );
}

export default App;
