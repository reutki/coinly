import styled from "@emotion/styled";

export const NewsStyles = styled.div`

display: grid;
grid-template-columns: repeat(3,max-content);    
@media (max-width:789px) {
grid-template-columns: max-content   
    
}
  
`;