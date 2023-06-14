import styled from "@emotion/styled";

export const StyledTrendingLayout = styled.div`
    padding: 20px 15px;
    
    .top_bar_trending{
        display: grid;
        grid-template-columns: 1fr max-content max-content;
    }
`
export const StyledButtonBackToTop = styled.div`
        button{
        color: 'white';
        border-radius:50%;
        position: 'fixed';
        bottom: '5rem';
        right: '2rem';
        z-index: 9999;
        }
`
export const StyledLoading = styled.div`
        display: grid;
        margin: 0 auto;
        justify-content: center;
        align-content: center;
        width:100vw;
        height: 100vh;
`