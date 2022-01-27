import styled from "@emotion/styled";

export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;


`;

export const Campo = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    label{
        flex: 0 0 150px;
        font-size: 1.8rem;
    
    }
    input{
        flex: 1;
        padding: 1rem;
    }

`;
export const InputSubmit = styled.input`
    background-color: var(--opuesto);
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.8rem;
    border: none;
    

    &:hover{
        cursor: pointer;
    }

`;

export const Error = styled.p`
    background-color: red;
    padding: 1rem;
    
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;

`;