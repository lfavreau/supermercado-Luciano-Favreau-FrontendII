
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-marca-900 px-6 py-12 text-white sm:px-10">
        <span className="text-sm font-semibold text-teal-200">
          Sistema de gestión de supermercado
        </span>

        <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
          Bienvenido a nuestro supermercado
        </h1>

        <p className="mt-5 max-w-2xl text-base text-teal-50">
          Administra los artículos del inventario,
          consulta las existencias disponibles y
          selecciona productos para el carrito de compras.
        </p>

        <Link
          to="/inventario"
          className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 font-bold text-marca-900 hover:bg-teal-50"
        >
          Ver inventario
        </Link>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <div className="panel">
          <h2 className="text-xl font-bold">Inventario</h2>
          <p className="mt-2 text-slate-600">
            Consulta los artículos disponibles y filtra por categoría.
          </p>
          <Link to="/inventario" className="mt-4 inline-block font-semibold text-marca-700">
            Consultar artículos
          </Link>
        </div>

        <div className="panel">
          <h2 className="text-xl font-bold">Registrar artículos</h2>
          <p className="mt-2 text-slate-600">
            Agrega nuevos productos indicando sus características.
          </p>
          <Link to="/inventario/nuevo" className="mt-4 inline-block font-semibold text-marca-700">
            Agregar producto
          </Link>
        </div>

        <div className="panel">
          <h2 className="text-xl font-bold">Carrito</h2>
          <p className="mt-2 text-slate-600">
            Gestiona las cantidades seleccionadas y el stock disponible.
          </p>
          <Link to="/carrito" className="mt-4 inline-block font-semibold text-marca-700">
            Revisar carrito
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
