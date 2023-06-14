import styled from "@emotion/styled";

export const CoinStyledScheme = styled.div`

.card-container{
    margin-bottom: 1.5vh;
    max-height: 100px;
}
.card-body{
    overflow: hidden;
        display: grid;
        grid-template-columns: max-content 1fr max-content  max-content;
        padding:1rem;
        border-radius: 10px;
        align-items: center;
       
    }
        
    .name{
        display: grid;
        align-items: center;
        grid-template-columns: max-content max-content max-content;
        overflow-y: hidden;
        grid-gap: 0.5rem;
        margin-left: 1rem;
    }
    .price{
        display: grid;
    }
    .chart{
        display: grid;
        max-height:20vh;
    }
    .precentage-price-up{
        color:green;
    }
    .precentage-price-down{
        color:red;
    }
    .modal_item{
    }
 .chart_container{
    max-width: 10vw;
    max-height: 100%;
    canvas{
    aspect-ratio:16/9;
    }
 }
 
  
    `;

