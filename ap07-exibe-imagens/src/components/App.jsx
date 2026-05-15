import React, { Component } from 'react'
import Busca from './Busca.jsx'
// import { createClient } from 'pexels'
import pexelsClient from '../utils/pexelsClient.js'
import PexelsLogo from './PexelsLogo.jsx'
import ListaImagens from './ListaImagens.jsx'


export default class App extends Component {

  state = {photos: []}

  onBuscaRealizada = (termoDeBusca) => {
      pexelsClient.get('/search', {
      params: {
        query: termoDeBusca
      }
    })
    .then((result) => {
      this.setState({ photos: result.data.photos });
    });
  }

  // pexelsClient = null

  // componentDidMount() {
    //chave de api do pexels
  //  this.pexelsClient = createClient('lcgxwCkHCjltmfbiOIexIHeOlol3ar0to9sDvJsceGrXWXpYKkqoMK4z')
  // }
  
  // onBuscaRealizada = (termoDeBusca) => {
  //  this.pexelsClient.photos.search({ 
  //    query: termoDeBusca 
  //  }).then((result) => {
  //    this.setState( {photos: result.photos })
  //  })
  //}
  
  render() {
    return (
      <div className='grid justify-content-center m-auto w-9 border-1'>
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className='col-12'>
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className='col-12'>
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagens 
              photos={this.state.photos} 
              imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'} 
              />
          </div> 
        </div>
      </div>
    )
  }
}

