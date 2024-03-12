import './App.css'
import MeuComponente from "./componentes/MeuComponente" 
function App() {
  let nome = "julia"
  let sobrenome = "bem"
  return (
    <> 
    <MeuComponente/>
     <h1 className = "meu-nome"> Olá eu sou {nome} {sobrenome} </h1>  
     <h1> Olá eu sou linda </h1>
    </>
  ) //JSX - java script XML
}

export default App
