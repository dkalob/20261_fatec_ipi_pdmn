import React, { Component } from 'react'
import Busca from './Busca.jsx'
import { CreateClient } from pexels


export default class App extends Component {

  pexelsClient = null

  componentDidMount() {
    //chave de api do pexels
    this.pexelsClient = createClient('lcgxwCkHCjltmfbiOIexIHeOlol3ar0to9sDvJsceGrXWXpYKkqoMK4z')
  }
  
  onBuscaRealizada = (termoDeBusca) => {
    console.log(termoDeBusca)
  }
  
  render() {
    return (
      <div className='grid justify-content-center m-auto w-9 border-1'>
        <div className='col-12'>
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className='col-12'>
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
      </div>
    )
  }
}

