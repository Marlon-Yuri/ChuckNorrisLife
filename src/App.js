import axios from 'axios'
import styled from 'styled-components'
import Back from './assets/chuckback.jpg'
import { createGlobalStyle } from 'styled-components'
import React, { useState } from 'react'
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizzing:border-box;
}
`
const Container = styled.div`
border:solid;
height: 99vh;
display:flex;
align-items:flex-end;
justify-content:space-evenly;
background-image: url(${Back});
background-size:cover;
`
const H1 = styled.h1`
font-size:1.8vw;
font-family: 'Bebas Neue', cursive;
`
const BoxH1 = styled.div`
border: solid black;
width:55vw;
height:20vh;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
`
const BoxBtn = styled.div`
width:20vw;
height:15vh;
display:flex;
justify-content:center;
align-items:center;
`
const Btn = styled.button`
border:none;
width:10vw;
height:15vh;
border-radius:50%;
cursor:pointer;
font-size:1.4vw;
font-weight: bolder;
background-color:black;
color:white;
&:hover{
  font-size:1.6vw;
}
`

export default function ChuckJokes() {
  const [item, setItem] = useState('')
  const randomChuck = () => {
    axios.get('https://api.chucknorris.io/jokes/random').then(response => {
      console.log(response)
      setItem(response.data)
    })
  }
  return (
    <Container>
      <GlobalStyle/>
      <BoxBtn>
        <Btn onClick={randomChuck}>Chuck's life</Btn>
      </BoxBtn>
      <BoxH1>
        <H1>{item.value}</H1>
      </BoxH1>

    </Container>
  )
}