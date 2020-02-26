import React from "react"
import FooterArea from './Utils/footerComponents/footerArea'
import Container from './Utils/headerComponents/container'

const Footer = () => (
  <footer>
    <FooterArea>
      <div style={{padding:'12px 0', backGround:'#fff'}}>
        <Container>
          <div className='col-xl-5 col-md-5'>
            <div className='hader_left'>
              <p>Welcome to NEW consulting service</p>
            </div>
          </div>
        </Container>
      </div>
    </FooterArea>
  </footer>
)


export default Footer
