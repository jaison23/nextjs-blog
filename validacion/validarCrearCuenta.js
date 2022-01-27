export default function validarCrearCuenta(valores) {

    let errores= {};
    
    // validar el nombre
    if (!valores.nombre) {
        errores.nombre="El nombre es obligatorio";
    } 

    //validar el email
    if (!valores.email) {
        errores.email="el email es obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
        errores.email="el email no es valido";
    }

    //validar password
    if (!valores.password) {
        errores.password="La password es obligatoria";
    } else if( valores.password.length < 6){
        errores.password="La password debe tener 6 o mas carateres";
    }

    return errores;
}