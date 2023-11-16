import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-datepicker/dist/react-datepicker.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-r, teal.500, blue.600)",
        color: "teal.900",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>
);
