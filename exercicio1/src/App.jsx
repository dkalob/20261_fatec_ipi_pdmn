import { useState } from 'react'

function App() {

  const [contador, setContador] = useState(1) // controla o nível do personagem
  const [nome, setNome] = useState('') // controla o nome do personagem
  const [classe, setClasse] = useState('') // controla a classe do personagem
  const [emblema, setEmblema] = useState('') // controla o emblema do personagem

  const emblemas = {
    'guerreiro': 'shield',
    'mago': 'hat-wizard',
    'arqueiro': 'bullseye',
    'curandeiro': 'hand-holding-medical',

  }


  return (
    <div className="App">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6">
            <div className="header">
              <h1 className='text-center'> 
                Criador de Personagem RPG
              </h1>
              </div>
              
              {/* FORMULÁRIO DO PERSONAGEM */}
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center"></div>
                  
                  <div>Nome do Personagem</div>
                    <input 
                      type="text" 
                      onChange={(e) => setNome(e.target.value)} 
                      style={{width: '100%'}} />

                  <div>Classe</div>
                  <select 
                    onChange={(e) => {
                      setClasse(e.target.value);
                      setEmblema(e.target.value);
                    }} 
                    style={{width: '100%'}}
                  >
                    <option value="guerreiro">Guerreiro</option>
                    <option value="mago">Mago</option>
                    <option value="arqueiro">Arqueiro</option>
                    <option value="curandeiro">Curandeiro</option>
                  </select>

                  <div>Nível</div>
                  <button
                    onClick={() => 
                      setContador(contador - 1)}
                      style={{marginRight: 8, width: '10%', borderRadius: 5}}>
                      -
                  </button>
                  <input 
                    type="number"
                    value={contador} 
                    style={{width: '10%', textAlign: 'center'}}
                  />
                  <button
                    onClick={() => 
                      setContador(contador + 1)}
                      style={{marginLeft: 8, width: '10%', borderRadius: 5}}>
                      +
                  </button>
                </div>
              </div>

              {/* EMBLEMA */}

              <div className="card" style={{marginTop: 16}}>
                <div className="card-header">
                  <i className={`fa-solid fa-3x fa-${emblemas[emblema]}`}></i>
                </div>
                <div className="card-body">
                  <p className="card-text">Nome: {nome}</p>
                  <p className="card-text">Classe: {classe}</p>
                  <p className="card-text">Nível: {contador}</p>
                  </div>

                </div>

          </div>
        </div>
      </div>
  )
}

export default App
