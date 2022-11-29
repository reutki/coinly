import styled from "@emotion/styled";

export const CoinStyledScheme = styled.div`
    .MuiCardActionArea-root{
        display: grid;
        grid-template-columns: max-content 40% 20% max-content;
        padding: 17px;
        border-radius: 10px;
    }
        
    .name{
        display: grid;
        margin-left: 12px;
        /* margin-right:60px */
    }
    .price{
        display: grid;
        /* margin-left: 24px; */
    }
`