import { initializeApp } from "firebase/app";
import firebaseConfig from './config';
import 'firebase/auth';

class Firebase {

    constructor(){
        
        const app = initializeApp(firebaseConfig);
        //this.auth = app.auth();
        
    }
    async registra(nombre,email,password){
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email,password);

        return await nuevoUsuario.user.updateProfile({
            displayNombre: nombre
        })
    }
}

const firebase = new Firebase();

export default firebase;