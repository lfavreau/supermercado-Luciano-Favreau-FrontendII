
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Layout from './componentes/Layout';

const Home = lazy(() => import('./paginas/Home'));
const QuienesSomos = lazy(() => import('./paginas/QuienesSomos'));
const Contacto = lazy(() => import('./paginas/Contacto'));
const Inventario = lazy(() => import('./paginas/Inventario'));
const AgregarArticulo = lazy(() => import('./paginas/AgregarArticulo'));
const DetalleArticulo = lazy(() => import('./paginas/DetalleArticulo'));
const Carrito = lazy(() => import('./paginas/Carrito'));

function AppRoutes({
  productos,
  carrito,
  agregarArticulo,
  agregarAlCarrito,
  aumentarCantidad,
  disminuirCantidad
}) {
  const cantidadCarrito = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<p className="p-8">Cargando...</p>}>
        <Routes>
          <Route element={<Layout cantidadCarrito={cantidadCarrito} />}>
            <Route path="/" element={<Home />} />

            <Route
              path="/quienes-somos"
              element={<QuienesSomos />}
            />

            <Route
              path="/contacto"
              element={<Contacto />}
            />

            <Route
              path="/inventario"
              element={<Inventario productos={productos} />}
            />

            <Route
              path="/inventario/nuevo"
              element={
                <AgregarArticulo agregarArticulo={agregarArticulo} />
              }
            />

            <Route
              path="/inventario/:id"
              element={
                <DetalleArticulo
                  productos={productos}
                  agregarAlCarrito={agregarAlCarrito}
                />
              }
            />

            <Route
              path="/carrito"
              element={
                <Carrito
                  productos={productos}
                  carrito={carrito}
                  aumentarCantidad={aumentarCantidad}
                  disminuirCantidad={disminuirCantidad}
                />
              }
            />

            <Route
              path="*"
              element={
                <div className="panel">
                  <h1 className="text-2xl font-bold">
                    Página no encontrada
                  </h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
