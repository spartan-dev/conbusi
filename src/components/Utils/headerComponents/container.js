import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    /* margin-right: auto;
    margin-left: auto; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media(min-width: 1200px){
        max-width: 1140px;
    }
    @media (min-width: 992px){
        max-width:960px;
    }
    @media (min-width: 768px){
    max-width: 720px;
        }
        @media (min-width: 576px){
            max-width: 540px;
        }
`

export default Container