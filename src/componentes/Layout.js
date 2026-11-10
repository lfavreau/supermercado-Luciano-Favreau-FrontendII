
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout({ cantidadCarrito }) {
  const claseEnlace = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-marca-100 text-marca-900'
        : 'text-slate-600 hover:bg-slate-100'
    }`;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-marca-700">
              Supermercado
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Mi Inventario
            </h2>
          </div>

          <nav
            aria-label="Gestión de inventario"
            className="flex flex-wrap gap-2"
          >
            <NavLink to="/inventario" end className={claseEnlace}>
              Inventario
            </NavLink>

            <NavLink to="/inventario/nuevo" className={claseEnlace}>
              Agregar artículo
            </NavLink>

            <NavLink to="/carrito" className={claseEnlace}>
              Carrito ({cantidadCarrito})
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <nav
            aria-label="Menú inferior"
            className="flex flex-wrap gap-3"
          >
            <NavLink to="/" end className={claseEnlace}>
              Inicio
            </NavLink>

            <NavLink to="/quienes-somos" className={claseEnlace}>
              Quiénes somos
            </NavLink>

            <NavLink to="/contacto" className={claseEnlace}>
              Contáctanos
            </NavLink>
          </nav>

          <p className="mt-5 text-sm text-slate-500">
            Desarrollo Frontend II
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
