
import React from 'react';

function Contacto() {
  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-extrabold text-slate-900">
        Contáctanos
      </h1>

      <div className="panel mt-6 space-y-5">
        <div>
          <h2 className="font-bold">Atención al cliente</h2>
          <p className="mt-1 text-slate-600">
            Consultas relacionadas con productos y disponibilidad.
          </p>
        </div>

        <div>
          <h2 className="font-bold">Consultas de inventario</h2>
          <p className="mt-1 text-slate-600">
            Información sobre artículos, categorías y existencias.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
