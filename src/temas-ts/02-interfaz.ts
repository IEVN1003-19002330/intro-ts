
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

console.table(alumno);

let mascotas=['perro','gato','perico'];
mascotas[1]='nuevo gato';
mascotas.push('leon');
console.log(mascotas);

let tem:(string|number)[]=[];
tem.push(11);
tem.push('hola');
console.log(tem);