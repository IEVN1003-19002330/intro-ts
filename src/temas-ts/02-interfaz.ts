
interface Alumno{ //Primero debe crearse la interfaz donde se le colocarán los valores que están dentro de la constante
    nombre:string;
    edad:number;
    email:string;
    calificacion?:number; //se agrega el signo de interrogacion cuando un campo es opcional
}


const alumno:Alumno={

    nombre:'Mario',
    edad:23,
    email:'mario@gmail.com'
}

console.log(alumno)