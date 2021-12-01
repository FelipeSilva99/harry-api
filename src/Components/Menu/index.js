import React from 'react'
import * as S from "./styles"
import { Link } from "gatsby"

import logo from "../../images/Harry.png"

export default function index() {
  return (
    <S.Container>
      <S.wrapper>
        <S.LogoBox>
          <S.Logo src={logo} alt="logo" />
        </S.LogoBox>
        <Link to="/home">Inicio</Link>
        <Link to="/home2">Personagens</Link>
      </S.wrapper>
    </S.Container>
  )
}
