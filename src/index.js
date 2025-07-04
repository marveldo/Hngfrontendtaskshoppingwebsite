import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import axios from "axios";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
<Provider store={store}>
    <App/>
</Provider>

)

axios.defaults.baseURL = 'https://pendobackend.vercel.app/api/v1'