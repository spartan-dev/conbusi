import styled from 'styled-components'

const  Button = styled.button`
  color: ${props => props.azul? '#fff':'#5DB2FF !important'};
  display: inline-block;
  background-color:${props => props.azul  ? '#5db2ff' :'#fff'};
  padding: 14px 31px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 500;
  border: 0;
  border: 1px solid #5DB2FF;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  text-align: center;
  text-transform: capitalize;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  cursor: pointer;
  letter-spacing: 2px;
  &:hover{
    background: #5DB2FF;
  color: #fff !important;
  border: 1px solid transparent;
  }
  &:focus{
    outline: none;
  }
  .large-width{
      width:200px;
  }
`

export default Button