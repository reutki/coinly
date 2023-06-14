import styled from "@emotion/styled";
export const ExchangeStyle = styled.div`
display: grid;
margin: 0 auto;
justify-content: center;

`;
export const InputStyle = styled.div`
margin: 0 auto;
max-width: 300px;
margin-bottom: 10vh;
`;

export const ChipStyle = styled.div`
  display: flex;
  max-width: 300px;
  margin: 0 auto;
  overflow-x: auto;
  padding: 10px;
  gap: 10px;
//hide scrollbar
  ::-webkit-scrollbar {
    display: none;
  }
  .chip{
   height: 5vh;
  }
`;