import Clients from "./Clients";
import HeaderPage from "./HeaderPage";
import Tail from "./Tail";
import Works from "./Works";

export default function Main (){
  return(
    <>
      <HeaderPage />
      <Clients />
      <Works />
      <Tail />
    </>
  )
}