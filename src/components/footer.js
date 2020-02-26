import React from "react"
import FooterArea from './Utils/footerComponents/footerArea'
import FooterTop from './Utils/footerComponents/footerTop'

const Footer = () => (
  <footer>
    <FooterArea>
      <FooterTop />
      <div style={{padding:'12px 0', backGround:'#fff'}}>
              <p>Welcome to NEW consulting service</p>
      </div>
    </FooterArea>
  </footer>
)


export default Footer
