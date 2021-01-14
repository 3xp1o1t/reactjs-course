import React from "react";

// Un componente tiene que tener el mismo nombre de su funcion y exportarlo de manera
// por defecto (default), un sub componente no es necesario indictar el default, ya que
// solo se puede exportar un default por archivo.
export default function HolaMundo(){
    return (
        // Usar <> (fragments) evita tener que usar un div u otra etiqueta
        // ya que return, solo debe retornar una sola etiqueta.
        <>
            <h2>Jesus Montiel -> on Top!</h2>
        </>
    );
}