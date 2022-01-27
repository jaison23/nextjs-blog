
import React from 'react';
import Header from './Header';
import { Global, css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';





const Layout = props => {
    return ( 
        <>
            <Global 

                styles={css`
                    :root {
                        --primario: #2B2D42;
                        --secundario: #8D99AE;
                        --gris: #EDF2F4;
                        --opuesto: #EF233C;
                        --opuesto2: #D90429;
                    }

                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }

                    *, *:before, *:after{
                        box-sizing: inherit;
                    }

                    body{
                        font-size: 1.6rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1,h2,h3{
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    h1,h2{
                        font-family: 'Roboto', sans-serif;
                        font-weight: 700;

                    }
                    h3{
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul{
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }

                    a{
                        text-decoration: none;
                    }
                
                `}

            />


            <Head>
                <html lang="es" />
                <title>Generardor de Firma de correo</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                <link href="styles/app.css" rel="stylesheet" />
            </Head>
            <Header />
            
            
            <main>
                {props.children}
            </main>
        
        </>

     );
}
 
export default Layout;