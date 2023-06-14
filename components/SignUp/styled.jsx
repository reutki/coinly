import styled from "@emotion/styled";

export const SignUpStyles = styled.div`
@media (max-width: 768px ){
    margin: 0px 1rem;
}
    max-width: 768px;
    margin:0 auto;
    h2{
        text-align: center;
    }
  .signUp-input{
    margin-bottom: 15px;
  }
  .container-signUp{
    margin-bottom:15px;
  }
  .logIn_action_area{
    @media (max-width: 425px ){
       grid-template-columns: max-content;
      
}
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 1rem;
    align-items: center;
 button{
        background-color: black;
       }
  }
`;