import React from 'react'
import Card from '../../Components/Card'
import Menu from '../../Components/Menu'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
`

export default function index() {
    return (
        <div>
            <GlobalStyle />
            <Menu />
            <Card />
        </div>
    )
}
