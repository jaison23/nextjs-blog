import styled from "@emotion/styled"




const Botom = styled.a`
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: .8rem 2rem;
    margin-right: 1rem;
    background-color: ${props => props.bgColor ? 'var(--opuesto)'   : 'while'};
    color: ${props => props.bgColor ? 'while'   : '#000'}; 

    &:last-of-type{
        margin-right: 0;
    }

    &:hover{
        background-color:blanchedalmond;
        cursor: pointer;
    }
`;

export default Botom;