import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled/';

const Nav = styled.nav`
    
    
    
    
    a{
        
        margin-left: 2rem;
        font-size: 1.8rem;
        color: #000;
    }


    &:last-of-type{
        margin-right: 0;
    }
    & a:hover{
        color: #EDF2F4;
        cursor: pointer;
    }
`;

const Navegacion = () => {
    return ( 
        <Nav>
            
            <Link href="/carateristicas">Carateristicas</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/plantilla-de-firma">Plantilla de Firma</Link>
        </Nav>
     );
}
 
export default Navegacion;