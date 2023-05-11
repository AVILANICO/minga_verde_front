// import { createReducer } from "@reduxjs/toolkit";
// //importo las acciones
// import inputs_action from '../actions/inputs_filters.js'
// //desestructuro las acciones que necesito configurar
// const {inputs_filter} = inputs_action;
// //defino estado inicial
// let initial_state = {
//   title: '',
//   categories: []
// }

// const reducer = createReducer(
//   initial_state,              //estado inicial
//   (builder) => builder        //funcion constructora de casos
//     .addCase(                  //cada caso implica un cambio de estado para una accion
//       inputs_filter,           //nombre de la accion que tiene la informacion a reducir 
//       (state, action) => {     //funcion que depende del estado y la accion. Y es la encargada de manejar la logica de reduccion/modificacion
//         const new_state = {
//           ...state,
//           title: action.payload.title,
//           categories: action.payload.categories
//         }
//         return new_state;
//       }
//     )                  
// )

// export default reducer;
