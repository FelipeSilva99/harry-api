import React from 'react'
import Menu from '../Components/Menu'
import styled,{ createGlobalStyle } from 'styled-components'

import Background from "../images/logo1.png"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  background-color: #BFBFBF;
  width: 100%;
  height: 91.7vh;
`

export default function index() {
  return (
    <div>
      <GlobalStyle />
      <Menu />
      <Box>
        <img src={Background} alt="#" />
      </Box>
    </div>
  )
}
