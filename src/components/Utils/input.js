import styled from 'styled-components'


const Input = styled.input`
  font-family: "Poppins", sans-serif;
    border-radius: .2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: .375rem .75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: white;
    border-top:transparent;
    border-left:transparent;
    border-right-color:transparent;
    border-radius: .25rem;
    margin:1em;
    margin: 0;
    font-size: inherit;
    line-height: inherit;
    &:placeholder-shown{
        text-align:start;
    }
`

export default Input