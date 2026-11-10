import React, { useReducer } from 'react';
import AppRoutes from './AppRoutes';
import { ACCIONES, estadoInicial, inventarioReducer } from './estado/inventarioReducer';

function App() {
  const [estado, dispatch] = useReducer(inventarioReducer, estadoInicial);

  // Las rutas comparten el mismo estado; ninguna pantalla guarda una copia del stock.
  const agregarArticulo = articulo => dispatch({ type: ACCIONES.AGREGAR_ARTICULO, payload: articulo });
  const agregarAlCarrito = id => dispatch({ type: ACCIONES.AGREGAR_AL_CARRITO, payload: id });
  const aumentarCantidad = id => dispatch({ type: ACCIONES.AUMENTAR_CANTIDAD, payload: id });
  const disminuirCantidad = id => dispatch({ type: ACCIONES.DISMINUIR_CANTIDAD, payload: id });

  return (
    <AppRoutes
      productos={estado.productos}
      carrito={estado.carrito}
      agregarArticulo={agregarArticulo}
      agregarAlCarrito={agregarAlCarrito}
      aumentarCantidad={aumentarCantidad}
      disminuirCantidad={disminuirCantidad}
    />
  );
}

export default App;
