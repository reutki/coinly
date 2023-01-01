import styled from "@emotion/styled";

export const CoinStyledScheme = styled.div`
.MuiPaper-root{
    margin-bottom: 10px;
}
.MuiCardActionArea-root{
    display: grid;
        grid-template-columns: max-content 40% 20% max-content;
        padding: 17px;
        border-radius: 10px;
    }
        
    .name{
        display: grid;
        margin-left: 12px;
    }
    .price{
        display: grid;
    }
    .chart{
        display: grid;
        max-height:20vh;
    }
    .chartMinimized{
        display: grid;
        max-width:100%;
        max-height:100%;
    }
    `