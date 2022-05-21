import styled from 'styled-components'

export const StyledBackground = styled.div `
    img {
        width: 100%;
        height: 100%;
        background-size: cover;
        overflow: auto;
        &:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
`;