import { createRoot } from "react-dom/client";
import Main from "./components/main";

const containerapp = document.getElementById('app')
const root = createRoot(containerapp)
root.render(<Main />)