import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <React.StrictMode>
      <Box
        minW={"100vh"}
        minH={"100vh"}
        bgGradient="linear-gradient(0deg, rgba(0,0,0,1) 45%, rgba(45,39,39,1) 86%, rgba(65,53,67,1) 96%, rgba(79,67,40,1) 100%)"
      >
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </Box>
    </React.StrictMode>
  </ChakraProvider>
);
