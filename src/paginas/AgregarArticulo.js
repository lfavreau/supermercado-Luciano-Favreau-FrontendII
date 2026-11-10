import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const categorias = ['Abarrotes', 'Lácteos', 'Frutas y verduras', 'Bebidas', 'Limpieza'];
const formularioVacio = { nombre: '', marca: '', tipo: '', categoria: 'Abarrotes', precio: '', stock: '', descripcion: '' };

function AgregarArticulo({ agregarArticulo }) {
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState(formularioVacio);
  const [error, setError] = useState('');

  const actualizar = e => {
    const { name, value } = e.target;
    setFormulario(anterior => ({ ...anterior, [name]: value }));
    setError('');
  };

  const guardar = e => {
    e.preventDefault();
    const precio = Number(formulario.precio);
    const stock = Number(formulario.stock);

    if (!formulario.nombre.trim() || !formulario.marca.trim() || !formulario.tipo.trim() ||
        !formulario.descripcion.trim() || formulario.precio.trim() === '' ||
        formulario.stock.trim() === '' || !Number.isInteger(precio) || precio <= 0 ||
        !Number.isInteger(stock) || stock < 0) {
      setError('Completa todos los campos. El precio debe ser mayor que cero y el stock un entero no negativo.');
      return;
    }

    const nuevoArticulo = {
      id: String(Date.now()),
      nombre: formulario.nombre.trim(),
      marca: formulario.marca.trim(),
      tipo: formulario.tipo.trim(),
      categoria: formulario.categoria,
      precio,
      stock,
      descripcion: formulario.descripcion.trim()
    };

    agregarArticulo(nuevoArticulo);
    navigate('/inventario');
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Link to="/inventario" className="mb-5 inline-flex text-sm font-semibold text-marca-700 hover:underline">← Volver al inventario</Link>
      <h1 className="text-3xl font-extrabold text-slate-900">Agregar nuevo artículo</h1>
      <p className="mb-7 mt-2 text-slate-600">Registra nombre, marca, tipo, categoría, precio y cantidad.</p>
      <form onSubmit={guardar} className="panel space-y-5" noValidate>
        {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p>}
        <div>
          <label htmlFor="nombre" className="label-form">Nombre del artículo</label>
          <input id="nombre" name="nombre" className="form-input" value={formulario.nombre} onChange={actualizar} placeholder="Ej. Harina 1 kg" maxLength="80" required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="marca" className="label-form">Marca</label>
            <input id="marca" name="marca" className="form-input" value={formulario.marca} onChange={actualizar} placeholder="Ej. Marca propia" maxLength="60" required />
          </div>
          <div>
            <label htmlFor="tipo" className="label-form">Tipo de producto</label>
            <input id="tipo" name="tipo" className="form-input" value={formulario.tipo} onChange={actualizar} placeholder="Ej. Harina" maxLength="60" required />
          </div>
        </div>
        <div>
          <label htmlFor="categoria" className="label-form">Categoría</label>
          <select id="categoria" name="categoria" className="form-input" value={formulario.categoria} onChange={actualizar}>
            {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="precio" className="label-form">Precio (CLP)</label>
            <input id="precio" name="precio" type="number" min="1" step="1" className="form-input" value={formulario.precio} onChange={actualizar} placeholder="Ej. 1990" required />
          </div>
          <div>
            <label htmlFor="stock" className="label-form">Stock inicial</label>
            <input id="stock" name="stock" type="number" min="0" step="1" className="form-input" value={formulario.stock} onChange={actualizar} placeholder="Ej. 15" required />
          </div>
        </div>
        <div>
          <label htmlFor="descripcion" className="label-form">Descripción</label>
          <textarea id="descripcion" name="descripcion" className="form-input min-h-28" value={formulario.descripcion} onChange={actualizar} placeholder="Descripción breve del artículo" maxLength="250" required />
        </div>
        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
          <Link to="/inventario" className="btn-secondary">Cancelar</Link>
          <button type="submit" className="btn-primary">Guardar artículo</button>
        </div>
      </form>
    </div>
  );
}

export default AgregarArticulo;
