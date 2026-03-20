import Pedido from "./Pedido";
import Cartao from "./Cartao";
import Feedback from "./Feedback";

const App = () => {
   const textoOK = 'Já chegou'
   const textNOK = 'Não chegou ainda'
   const funcaoOK = () => alert('Obrigado pelo feedback')
   const funcaoNOK = () => alert('Verificaremos')
   const componenteFeedback = 
   <Feedback 
    textoOK={textoOK} 
    textoNOK={textNOK} 
    funcaoOK={funcaoOK} 
    funcaoNOK={funcaoNOK}/>


  return (
    <div className="container border">
        <div className="row">
            <div className="col-12">
                <i className="fa-solid fa-hippo fa-2x"></i>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-6 col-xl-3">
                <Cartao cabecalho="22/06/2025">
                <Pedido 
                    icone="book"
                    titulo="Livro"
                    descricao="Um bom livro..."/>
                    {componenteFeedback}
                </Cartao>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3">
                <Cartao cabecalho="30/11/2025">   
                <Pedido 
                    icone="bicycle"
                    titulo="Bicicleta"
                    descricao="Uma boa bicicleta..."/>
                    {componenteFeedback}
                </Cartao>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3">
                <Cartao cabecalho="15/12/2025">   
                <Pedido 
                    icone="shirt"
                    titulo="Camiseta"
                    descricao="Um boa camiseta.."/>
                    {componenteFeedback}
                </Cartao>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3">       
                <Cartao cabecalho="08/01/2026">
                <Pedido 
                    icone="camera"
                    titulo="Camera"
                    descricao="Uma boa camera..."/>
                    {componenteFeedback}
                </Cartao>
            </div>
        </div>
    </div>
    )
}
export default App