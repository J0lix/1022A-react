// Faça um componente um retãngulo de largura da tela por 200px
// Crie uma variavel com let no javascript qwue contenha o valor "Meu Componente"
// Crie uma div no comnponente que dentro dela mostre um paragrafo <P> contendo o valor da variavel.
export default MeuComponente;
import "./MeuComponente.css"
function MeuComponente() {
    let variavel = "Meu Componente"

    return (
      <div className="minha-div"> 
       <p > Olá eu sou {variavel} </p>  
      </div>
    ) //JSX - java script XML
  }