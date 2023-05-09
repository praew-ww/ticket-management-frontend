import { Container } from "@chakra-ui/layout";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "../public/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Board from "./Board";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Container color={"white"} minW={"90%"}>
              <Header />
              <Main />
            </Container>
          }
        />
        <Route path="/board" element={<Board />} />
      </Routes>
    </>
  );
}

export default App;
