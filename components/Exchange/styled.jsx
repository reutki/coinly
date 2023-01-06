import styled from "@emotion/styled";

export const ExchangeStyle = styled.div`
    display: grid;
    grid-template-rows: max-content max-content max-content;
    height: 100vh;
    margin:0 10px;
    .MuiButtonBase-root{
        background-color: transparent;
    }
    .title{
        width: 100%;
        text-align: center;
        margin-top: 17px;
        margin-bottom: 17px;
    }
    .bg_paper{
        background: #b38c5f;
        display: grid;
        grid-template-rows: max-content max-content;
        border-radius: 15px;
        padding: 15px 30px; 
        
    }
    .toggle_group{
        margin-bottom: 17px;
        width: 100%;
        justify-content:end;
    }
  
  
`;
export const ExchangeLine = styled.div`
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 1rem;
    :first-of-type{
        margin-bottom:50px ;
    }
`
export const ButtonLine = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
  justify-items: center;
    button{
        font-size: 1rem;
        border-radius: 50% !important;
        max-width: max-content;
    }
    
`
export const NumpadContainer = styled.div`
  .numpad{
        margin-bottom: 65px;
        display: grid;
        height: 100% !important;
        background-color: #b38c5f;
        border-radius: 15px;
        align-self: end;
    }
  display: grid;
  align-self: end
`