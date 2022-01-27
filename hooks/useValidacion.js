import React, { useState, useEffect }from 'react';



const useValidacion = (stateInicial, validar, fn) => {

    const [ valores, setValores ] = useState(stateInicial);
    const [ errores, setErrores]  = useState({});
    const [ submitForm, setSubmitForm] = useState(false);
    

    useEffect( () => {
        if (submitForm) {
            const noErrores = Object.keys(errores).length === 0;

            if (noErrores) {
                fn(); // fn = a la funcion enviada por el componente
                

            }
            setSubmitForm(false);
        }
    }, [errores]);

    // funcion que se ejecuta mientra el usuario escribe
    const handleChange = e => {
        setValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }

    // funcion cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
        setSubmitForm(true);
        
    }

    // cuando realiza el evento blur
    const handleBlur = () =>{
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
    }
    return {
        valores,
        errores,
        submitForm,
        handleChange,
        handleBlur
    }
}
 
export default useValidacion;