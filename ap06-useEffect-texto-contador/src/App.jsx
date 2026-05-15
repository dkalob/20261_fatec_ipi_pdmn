import { use, useEffect, useState } from 'react'

const App = () => {

  const [texto, setTexto] = useState('')
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log('Função de efeito colateral executou sem vetor')
    return () => {
      console.log('Limpeza executou')
    }
  })

  useEffect(() => {
    console.log('Função de efeito colateral executou um vetor vazio')
  }, [])

  useEffect(() => {
    console.log('Função de efeito colateral executou. Dependência: texto')
  }, [texto])

  useEffect(() => {
    console.log('Função de efeito colateral executou. Dependência: contador')
  }, [contador])

  return (
    <div style={{padding: 20, borderColor: 'black', borderWidth: 1, borderStyle: 'solid'}}>
      <h2>Efeitos Colaterais</h2>
      <div>
        {/* input[placeholder="Digite algo"] */}
        <input
          style={{padding: 8}}
          type="text" 
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite algo"   />
      </div>
      <div style={{marginTop: 12}}>
        <button
          onClick={() => setContador(contador + 1)}>
          Contador: {contador}
        </button>
      </div>
    </div>
  )
}

export default App