import React from "react"
import styled from "styled-components"
import FooterContent from './footerContent'

const FooterTopStyle = styled.div`
`
;
const FooterTop = () => {
  return <FooterTopStyle>
    <div className="footer_top">
      <div className="container">
        <div className="row">
<FooterContent />
        </div>
      </div>
    </div>
  </FooterTopStyle>
}
export default FooterTop
