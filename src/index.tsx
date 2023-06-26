import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import "./assets/font/css/font.css";
import App from "./App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
        <ReactQueryDevtools />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
