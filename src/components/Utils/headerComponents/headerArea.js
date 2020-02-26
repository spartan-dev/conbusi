import styled from "styled-components"

const HeaderArea = styled.div`
  left: 0;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 9;
  position: absolute;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  .header_left {
    p {
      color: #727272;
      font-weight: 400;
      font-size: 13px;
      margin-bottom: 0;
    }
  }
  .header_right {
    display: flex;
    justify-content: flex-end;
    .short_contact_list {
      ul {
        li {
          span {
            font-size: 13px;
            color: #919191;
            margin-right: 50px;
          }
        }
      }
    }
  }
`

export default HeaderArea
