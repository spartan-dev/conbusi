import React from "react"
import Button from "../components/Utils/button"
import Input from "../components/Utils/input"
import Newsletter from "../components/Utils/newsletter"
import styled from 'styled-components'
const UIkitContainer= styled.div`
margin-top:2em;
 display:grid;
 grid-template-columns: 3fr 3fr 3fr 3fr;
 grid-template-rows: 2fr;
 grid-gap: 40px;
`
const uikit = () => (
    <UIkitContainer style={{backgroundColor:'#fff'}}>
        <div>
        <Button className="large-width">More cases</Button>
        <Button azul > Color Fijo</Button>
        </div>
      <div>
          <Input type='text'placeholder ='una entrada'/>
          <Input type='email'placeholder ='un email'/>
      </div>
      <div>
      <Button className="large-width">More cases</Button>
        <Button azul > Color Fijo</Button>
      </div>
      
      <div>
      <Button className="large-width">More cases</Button>
        <Button azul > Color Fijo</Button>
      </div>
      <div>
          <Newsletter>
              <input type='text'/>
              <Button azul>enviar</Button>
          </Newsletter>
      </div>
    </UIkitContainer>
)

export default uikit;