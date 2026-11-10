import productosIniciales from '../datos/productosIniciales';

export const estadoInicial = { productos: productosIniciales, carrito: [] };

export const ACCIONES = {
  AGREGAR_ARTICULO: 'AGREGAR_ARTICULO',
  AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
  AUMENTAR_CANTIDAD: 'AUMENTAR_CANTIDAD',
  DISMINUIR_CANTIDAD: 'DISMINUIR_CANTIDAD'
};

export function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case ACCIONES.AGREGAR_ARTICULO: {
      const articulo = accion.payload;
      if (!articulo || !articulo.nombre?.trim() || !articulo.marca?.trim() ||
          !articulo.tipo?.trim() || !articulo.categoria?.trim() ||
          estado.productos.some(p => p.id === articulo.id) ||
          !Number.isInteger(articulo.stock) || articulo.stock < 0 ||
          !Number.isInteger(articulo.precio) || articulo.precio <= 0) {
        return estado;
      }
      return { ...estado, productos: [...estado.productos, articulo] };
    }

    case ACCIONES.AGREGAR_AL_CARRITO:
    case ACCIONES.AUMENTAR_CANTIDAD: {
      const id = accion.payload;
      const articulo = estado.productos.find(p => p.id === id);
      if (!articulo || articulo.stock < 1) return estado;

      const itemActual = estado.carrito.find(item => item.id === id);
      const carritoActualizado = itemActual
        ? estado.carrito.map(item => item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item)
        : [...estado.carrito, { id, cantidad: 1 }];

      return {
        ...estado,
        productos: estado.productos.map(p => p.id === id ? { ...p, stock: p.stock - 1 } : p),
        carrito: carritoActualizado
      };
    }

    case ACCIONES.DISMINUIR_CANTIDAD: {
      const id = accion.payload;
      const itemActual = estado.carrito.find(item => item.id === id);
      if (!itemActual || itemActual.cantidad < 1) return estado;

      return {
        ...estado,
        productos: estado.productos.map(p => p.id === id ? { ...p, stock: p.stock + 1 } : p),
        carrito: itemActual.cantidad === 1
          ? estado.carrito.filter(item => item.id !== id)
          : estado.carrito.map(item => item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item)
      };
    }

    default:
      return estado;
  }
}
