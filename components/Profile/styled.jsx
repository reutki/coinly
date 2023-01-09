import styled from '@emotion/styled';

export const ProfileStyle = styled.div`
    max-width: 450px;
    margin: 0 auto;
    .card_option{
        display: grid;
        grid-template-columns: max-content max-content;
        padding: 20px;
        align-items: center;
        column-gap: 7px;
        margin-bottom: 10px;
        height: 30px;
    }
`

export const AvatarPaper = styled.div`
padding: 5px 3px;
.profile_paper{
    background-color: #181818;
    color: white;
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 15px 0;
}
.profile_name{
margin-left: 15px;
}

`
export const Balance = styled.div`
display: grid;
grid-template-columns: max-content max-content;
justify-content: center;
`
export const PortofolioPaper = styled.div`
padding: 5px 3px;
.portofolio_paper{
    background-color: #0063F5;
    color: white;
    display: grid;
    justify-content: center;
    padding: 15px 0;
margin-bottom: 30px;

}

`
