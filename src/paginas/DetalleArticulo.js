import React from 'react';
import { Link, useParams } from 'react-router-dom';

function DetalleArticulo({ productos, agregarAlCarrito }) {
  const { id } = useParams();
  const articulo = productos.find(p => p.id === id);

  if (!articulo) {
    return (
      <div className="panel">
        <h1 className="text-2xl font-bold">Artículo no encontrado</h1>
        <p className="mt-2 text-slate-600">No existe un producto con ese identificador.</p>
        <Link to="/inventario" className="btn-secondary mt-5">Volver al inventario</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Link to="/inventario" className="mb-5 inline-flex text-sm font-semibold text-marca-700 hover:underline">← Volver al inventario</Link>
      <div className="panel">
        <span className="pill">{articulo.categoria}</span>
        <h1 className="mt-4 text-3xl font-extrabold text-slate-900">{articulo.nombre}</h1>
        <p className="mt-4 text-slate-600">{articulo.descripcion}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <p className="text-slate-600"><strong className="text-slate-900">Marca:</strong> {articulo.marca}</p>
          <p className="text-slate-600"><strong className="text-slate-900">Tipo:</strong> {articulo.tipo}</p>
        </div>
        <div className="my-7 grid gap-4 border-y border-slate-100 py-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-slate-500">Precio por unidad</p>
            <p className="mt-1 text-3xl font-extrabold text-marca-900">${articulo.precio.toLocaleString('es-CL')}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Stock disponible</p>
            <p className="mt-1 text-3xl font-extrabold">{articulo.stock} <span className="text-base font-medium text-slate-500">unidades</span></p>
          </div>
        </div>
        <p className="mb-4 text-sm text-slate-600">Al agregar un artículo al carrito se descuenta una unidad del inventario.</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" className="btn-primary" disabled={articulo.stock === 0} onClick={() => agregarAlCarrito(articulo.id)}>
            {articulo.stock === 0 ? 'Artículo agotado' : 'Agregar al carrito'}
          </button>
          <Link to="/carrito" className="btn-secondary">Ver carrito</Link>
        </div>
      </div>
    </div>
  );
}

export default DetalleArticulo;
