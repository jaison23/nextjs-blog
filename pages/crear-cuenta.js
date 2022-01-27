
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Layout from "../components/layout/Layout";
import { Formulario, Campo,InputSubmit,Error } from "../components/ui/Formulario";



import firebase from "../firebase";

//Validacion
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";



const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}



const CrearCuenta = () => {
  const { valores,errores,handleChange,handleSubmit,handleBlur} = useValidacion(STATE_INICIAL,validarCrearCuenta, crearCuenta);
  
  const {nombre,email,password} = valores;
  
  async function crearCuenta() {
    try {
      await firebase.registra(nombre,email,password);
    } catch (error) {
      console.error('Hubo un error al crear el usuario',error);
    }
  }

    return (
        <Layout>
          
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              
              `}
            
            >Crear cuenta</h1>

              <Formulario
                onSubmit={handleSubmit}
                noValidate
              >
                <Campo> 
                  <label htmlFor="nombre">Nombre</label>
                  <input 
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Escribe tu nombre"
                    value={nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.nombre && <Error>{errores.nombre}</Error>}
                
                <Campo> 
                  <label htmlFor="email">Correo Eletronico</label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Escribe tu Correo"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.email && <Error>{errores.email}</Error>}
                <Campo> 
                  <label htmlFor="password">Contraseña</label>
                  <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Escribe tu Contraseña"
                    value={password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.password && <Error>{errores.password}</Error>}
                <InputSubmit
                  type="submit"
                  value="Crear Cuenta"
                
                />
                
                

              </Formulario>
            
          
        </Layout>
      )
}
 
export default CrearCuenta ;