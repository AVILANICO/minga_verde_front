import { createAction } from "@reduxjs/toolkit";

// la accion es un intermediario entre la vista y las operaciones de reduccion!!, es la que dispara/ejecuta la modificacion/reduccion de los estados globales
const chapter_bar = createAction(
  'chapter_bar', //nombre de la accion
  (object) => {    //funcion que va a enviar datos al reductor 
     console.log(object);             //el objeto debe tener todas las propiedades a guardarse en el estado global
    return {
      payload: {
        title: object.title,
        order: object.order
      } 
    }               
  } 
)
//la accion no tiene demasiada logica xq su unico objetivo es enviar informacion al reductor. 
//Y en este mismo se realiza TODA la logica necesaria para modificar/reducir los estados globales.
const actions = {chapter_bar}
//construyo un objeto con la accion (mas adelante se van a agregar mas acciones)
export default actions
