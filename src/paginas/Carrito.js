import React from 'react';
import { Link } from 'react-router-dom';

function Carrito({ productos, carrito, aumentarCantidad, disminuirCantidad }) {
  const items = carrito.map(item => ({ ...item, articulo: productos.find(p => p.id === item.id) })).filter(item => item.articulo);
  const totalUnidades = items.reduce((total, item) => total + item.cantidad, 0);
  const totalCompra = items.reduce((total, item) => total + item.cantidad * item.articulo.precio, 0);

  return (
    <>
      <div className="mb-7">
        <p className="mb-2 text-sm font-semibold text-marca-700">Resumen de selección</p>
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Carrito de compras</h1>
        <p className="mt-2 text-slate-600">Aumenta o disminuye cantidades. El stock del inventario cambia automáticamente.</p>
      </div>
      {items.length === 0 ? (
        <div className="panel py-14 text-center">
          <h2 className="text-xl font-bold">El carrito está vacío</h2>
          <p className="mt-2 text-slate-600">Selecciona un artículo del inventario para comenzar.</p>
          <Link to="/inventario" className="btn-primary mt-6">Explorar inventario</Link>
        </div>
      ) : (
        <div className="grid items-start gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {items.map(item => (
              <article key={item.id} className="panel flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <span className="pill">{item.articulo.categoria}</span>
                  <h2 className="mt-2 text-lg font-bold text-slate-900">{item.articulo.nombre}</h2>
                  <p className="mt-1 text-sm text-slate-500">Precio unitario: ${item.articulo.precio.toLocaleString('es-CL')}</p>
                  <p className="mt-1 text-sm text-slate-500">En inventario: {item.articulo.stock}</p>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                  <p className="text-lg font-extrabold text-marca-900">${(item.cantidad * item.articulo.precio).toLocaleString('es-CL')}</p>
                  <div className="flex items-center gap-3" aria-label={`Cantidad de ${item.articulo.nombre}`}>
                    <button type="button" className="btn-secondary h-10 w-10 px-0" onClick={() => disminuirCantidad(item.id)} aria-label={`Disminuir cantidad de ${item.articulo.nombre}`}>−</button>
                    <span className="min-w-6 text-center font-bold" aria-live="polite">{item.cantidad}</span>
                    <button type="button" className="btn-secondary h-10 w-10 px-0 disabled:cursor-not-allowed disabled:opacity-50" disabled={item.articulo.stock === 0} onClick={() => aumentarCantidad(item.id)} aria-label={`Aumentar cantidad de ${item.articulo.nombre}`}>+</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="panel lg:sticky lg:top-6">
            <h2 className="text-xl font-extrabold">Resumen del carrito</h2>
            <div className="mt-5 flex justify-between text-slate-600"><span>Artículos diferentes</span><strong className="text-slate-900">{items.length}</strong></div>
            <div className="mt-3 flex justify-between text-slate-600"><span>Total de unidades</span><strong className="text-slate-900">{totalUnidades}</strong></div>
            <div className="mt-5 flex justify-between border-t border-slate-200 pt-5 text-xl font-extrabold"><span>Total</span><span className="text-marca-900">${totalCompra.toLocaleString('es-CL')}</span></div>
            <Link to="/inventario" className="btn-primary mt-6 w-full">Seguir viendo artículos</Link>
            <p className="mt-4 text-xs text-slate-500">Esta actividad gestiona un carrito de ejemplo; no procesa pagos.</p>
          </aside>
        </div>
      )}
    </>
  );
}

export default Carrito;
