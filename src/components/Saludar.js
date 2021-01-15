//Propiedades y objetos.
import React from "react";


// Las propiedades se pasan dinamicamente cuando se crea una instancia del componente en el componente padre.
export default function Saludar(props){


    //Asignacion por destructuring para recortar los nombres de las propiedades (props.userInfo.name.)
    const {userInfo, saludarFn} = props;
    //Definimos valores por defecto, en caso no exista la propiedad (Evadir Undefined).
    const {name = "No Undefined", age = 0, colour = "Black"} = userInfo;


    // Para pasar una funcion con parametros de un componente a otro, se utiliza una funcion de diamante antes de llamar
    // a la funcion principal para evitar que se ejecute al cargar el componente.
    return (

        <div>
            <button onClick={() => saludarFn(name, age, colour)}>SALUDAR</button>
        </div>


    );


}