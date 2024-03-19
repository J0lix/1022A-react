import "./Main.css"
function Main(){
    return(
        <main> 
            <div className = "estudante-box">
                <img className="estudante-foto" src ="https://github.com/J0lix.png" alt = ""/>
                  <div className ="informacoes">
                <h3 className="estudante_nome"> Júlia Strey Bem</h3>
                <p className ="estudante_descrição">Estudante do IFMS, está 5° periodo de informática para a internet</p>
                <a className="link-git" href ="https://github.com/J0lix">Git Hub </a>
                 </div>
            </div>

        </main>
        
    )
}
export default Main;