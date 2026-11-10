import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Inventario({ productos }) {
  // El filtro es estado local; no reemplaza ni altera el inventario compartido.
  const [categoria, setCategoria] = useState('Todas');
  const categorias = ['Todas', ...new Set(productos.map(p => p.categoria))];
  const productosFiltrados = categoria === 'Todas'
    ? productos
    : productos.filter(p => p.categoria === categoria);
  const totalUnidades = productos.reduce((total, p) => total + p.stock, 0);

  return (
    <>
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm font-semibold text-marca-700">Panel de productos</p>
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Inventario de artículos</h1>
          <p className="mt-2 text-slate-600">Listado, categorías y existencias disponibles.</p>
        </div>
        <Link to="/inventario/nuevo" className="btn-primary self-start">+ Agregar artículo</Link>
      </div>
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="panel"><p className="text-sm text-slate-500">Productos diferentes</p><p className="mt-1 text-3xl font-extrabold">{productos.length}</p></div>
        <div className="panel"><p className="text-sm text-slate-500">Unidades disponibles</p><p className="mt-1 text-3xl font-extrabold">{totalUnidades}</p></div>
      </div>
      <div className="panel mb-6">
        <label htmlFor="filtro-categoria" className="label-form">Filtrar por categoría</label>
        <select id="filtro-categoria" className="form-input max-w-sm" value={categoria} onChange={e => setCategoria(e.target.value)}>
          {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <p className="mt-3 text-sm text-slate-500" aria-live="polite">
          Mostrando {productosFiltrados.length} de {productos.length} artículos
        </p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-marca-900 text-white">
              <tr>
                <th scope="col" className="px-5 py-4">Artículo</th>
                <th scope="col" className="px-5 py-4">Marca</th>
                <th scope="col" className="px-5 py-4">Tipo</th>
                <th scope="col" className="px-5 py-4">Categoría</th>
                <th scope="col" className="px-5 py-4">Precio</th>
                <th scope="col" className="px-5 py-4">Stock</th>
                <th scope="col" className="px-5 py-4">Detalle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {productosFiltrados.map(producto => (
                <tr key={producto.id} className="hover:bg-slate-50">
                  <td className="px-5 py-4 font-semibold text-slate-900">{producto.nombre}</td>
                  <td className="px-5 py-4">{producto.marca}</td>
                  <td className="px-5 py-4">{producto.tipo}</td>
                  <td className="px-5 py-4">{producto.categoria}</td>
                  <td className="px-5 py-4">${producto.precio.toLocaleString('es-CL')}</td>
                  <td className="px-5 py-4"><span className={producto.stock === 0 ? 'font-bold text-red-600' : 'font-semibold text-emerald-700'}>{producto.stock}</span></td>
                  <td className="px-5 py-4"><Link to={`/inventario/${producto.id}`} className="font-semibold text-marca-700 hover:underline">Ver detalle</Link></td>
                </tr>
              ))}
              {productosFiltrados.length === 0 && (
                <tr><td colSpan="7" className="px-5 py-10 text-center text-slate-500">No hay artículos en esta categoría.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Inventario;
