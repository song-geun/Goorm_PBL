import styled from "styled-components"

export const Box = styled.div`
    width : clamp(250px, 60%, 280px);
    max-height : 85vh;
    overflow-y : auto;
    background-color : white;
    color : black;
    border-radius : 5px;
    padding : 15px 20px;

    .editTags__header {
        display: flex;
        justify-content : space-between;
        align-items : center;
        .editTags__title{
            font-weight : 500;
            font-size : 1.3rem;
        }
        .editTags__close{
            svg{
                font-size : 1.6rem;
            }
        }
    }
    form {
        width : 100%;
        display : flex;
        align-times : center;
        justify-content : space-between;
        height : 30px;
        margin : 30px 0px;
    }
`;