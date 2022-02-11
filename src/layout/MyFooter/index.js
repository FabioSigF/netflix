import React from "react"
import Container from '../../auxiliar/Container'
import data from "./myFooterData.js";

export default function MyFooter() {

  const social = data.myFooterData

  return (
    <footer className="myFooter">
      <Container customClass="flex flex_ai_c flex_jc_sb">
        <div className="myFooter__description">
          <p>
            Esse é um projeto que foi desenvolvido por um grande fã do Netflix com o principal objetivo de aprender e testar meu conhecimento como desenvolvedor web. Portanto, todos os créditos de imagem são do Netflix Brasil.
          </p>
          <p>Direitos de imagem para Netflix</p>
          <p>Dados utilizados do site Themoviedb.org</p>
        </div>
        <div className="myFooter__social flex">
          <p>Projeto desenvolvido por <strong>Fábio Signorini</strong></p>
          <p>Contatos:</p>
          {social.map((item, key) => (
            <div className="myFooter__social__item flex flex_ai_c" key={key}>
              <span className="myFooter__social__icon">
                {item.icon}
              </span>
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  )
}