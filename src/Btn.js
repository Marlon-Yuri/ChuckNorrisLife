import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function ChuckJokes({btn}){
  const [item, setItem] = useState('')
  const randomChuck=()=>{
    axios.get('https://api.chucknorris.io/jokes/random').then((response) =>{
      console.log(response)
      setItem(response.data)
    })
  }
  return(
    <>
    <button onClick={randomChuck}>AAAA</button>
    </>
  )
}