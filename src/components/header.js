import React from "react"
import HeaderArea from '../components/Utils/headerComponents/headerArea'
import Container from '../components/Utils/headerComponents/container'
import Row from '../components/Utils/Row'
const Header = () => (
  <header>
    <HeaderArea>
      <div style={{padding:'12px 0', backGround:'#fff'}}>
        <Container>
          <Row>
          <div className='col-xl-5 col-md-5'>
            <div className='hader_left'>
              <p>Welcome to Conbusi consulting service</p>
            </div>
          </div>

          </Row>
        </Container>
      </div>
    </HeaderArea>
  </header>
)


export default Header
