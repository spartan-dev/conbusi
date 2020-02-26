import React from "react"
import HeaderArea from '../components/Utils/headerComponents/headerArea'
import HeaderTop from '../components/Utils/headerComponents/headerTop'
import Container from '../components/Utils/headerComponents/container'
import Row from '../components/Utils/Row'
import HeaderBottom from '../components/Utils/headerComponents/headerBottom'
const Header = () => (
  <header>
    <HeaderArea>
      <HeaderTop>
      <Container>
          <Row>
            <div>
              <p>Welcome to Conbusi consulting service</p>
            </div>
            <div className=''>
            <div className=''> 
              <div className=''>
                  <ul>
                    <li>  <span>info@docmed.com</span></li>
                    <li> <span>1601-609 6780</span></li>
                  </ul>
              </div>
            </div>
          </div>
          {/* <div className='col-xl-5 col-md-5'>
            <div className='hader_left'>
              <p>Welcome to Conbusi consulting service</p>
            </div>
          </div>
          <div className='col-xl-7 col-md-7'>
            <div className='header_right d-flex'> 
              <div className='short_contact_list'>
                  <ul>
                    <li>  <span>info@docmed.com</span></li>
                    <li> <span>1601-609 6780</span></li>
                  </ul>
              </div>
            </div>
          </div> */}
          </Row>
        </Container>
      </HeaderTop>
        
    
      <HeaderBottom>
          <h1>transparente</h1>
      </HeaderBottom>
    </HeaderArea>
  </header>
)


export default Header
