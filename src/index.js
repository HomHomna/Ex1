import { createRoot } from "react-dom/client";
import Main from "./components/Main";

const containerapp = document.getElementById('main')
const root = createRoot(containerapp)
root.render(<Main />)