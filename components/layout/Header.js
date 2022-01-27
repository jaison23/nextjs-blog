
import Link from 'next/link';
import React from 'react';
import Navegacion from './Navegacion';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Botom from '../ui/Botom';




const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media(min-width:768px ){
        display: flex;
        justify-content: space-between;
    }

`

const Header = () => {

    const usuario = false;


    return ( 
        <header
            css={css`
                border-bottom: 2px solid #e1e1e1;
                padding: 1rem 0;
                
            `}
        >
        
            <ContenedorHeader>
                <div 
                    css={css`
                        display: flex;
                        align-items: center;
                    
                    `}
                
                >
                    <Link href="/">Logo</Link>
                </div>

                <div css={css`
                        display: flex;
                        align-items: center;
                    
                    `}>
                    <Navegacion />
                </div>

                <div
                  css={css`
                    display: flex;
                    align-items: center;
                  
                  `}
                >

                {usuario 
            
                    ?  
                    <>
                        <p
                            css={css`
                                margin-right: 2rem;
                            `}
                        
                        >Hola: Jaison</p>

                        <Botom
                            bgColor="true"
                        >Cerrar session</Botom>
                    </> 
                :
                    <>
                        <Link href="/login">
                                <Botom
                                    bgColor="true"
                                >
                                    Login
                                </Botom></Link>
                            <Link href="/crear-cuenta">
                                <Botom>
                                    Crear Cuenta
                                </Botom>
                        </Link>
                    </>
                }
                   

                    
                </div>
            </ContenedorHeader>
        </header>
     );
}

export default Header;