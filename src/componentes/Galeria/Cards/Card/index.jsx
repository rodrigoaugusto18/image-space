import React, { useState } from 'react'
import {AiFillHeart, AiOutlineHeart, AiOutlineClose} from 'react-icons/ai'

export default function Card({foto, styles, aoFavoritar}) {
  function favoritar() {
    aoFavoritar(foto.id)
}

const [model, setModel] = useState(false);
const [tempimgSrc, setTempImgSrc] = useState('');

const propsfavorito = {
    size: 25,
    onClick: favoritar
}

const getImg = (foto) => {
  setTempImgSrc(foto);
  setModel(true);
}

  return (
    <>
      <div className={model? styles.galeria__modelopen : styles.galeria__model}>
        <img className={model? styles.galeria__imgAberta: styles.galeria__imgFechada } src={tempimgSrc} alt="" />
        <AiOutlineClose onClick={() => setModel(false)} className={model? styles.galeria__fechar : styles.galeria__abrir}/>
      </div>

      <li key={foto.id} className={styles.galeria__card} >
          <img 
              className={styles.galeria__imagem}
              src={foto.imagem} 
              alt={foto.titulo}
              onClick={() => getImg(foto.imagem)}
          />
          <p className={styles.galeria__descricao}>{foto.titulo}</p>
          <div>
              <p>{foto.creditos}</p>
              <span>
              <div>
                {foto.favorito ? <AiFillHeart {...propsfavorito} color='#ff0000'  size= '20px' /> :
                <AiOutlineHeart {...propsfavorito} />}
              </div>
              
              </span>
          </div>
      </li>
    </>
  )
}
