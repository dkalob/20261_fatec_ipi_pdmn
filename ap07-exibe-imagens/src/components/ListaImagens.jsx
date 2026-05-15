import React from 'react'
import Imagem from './Imagem.jsx'

const ListaImagens = ( { photos, imgStyle } ) => {
  return (
    photos.map((photo, key) => (
        <Imagem 
            key={key} 
            src={photo.src.small} 
            alt={photo.alt}
            imgStyle={imgStyle}
            />
      ))   
  )
}

export default ListaImagens