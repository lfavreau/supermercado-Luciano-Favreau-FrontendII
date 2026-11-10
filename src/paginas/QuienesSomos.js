
import React from 'react';

function QuienesSomos() {
  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-extrabold text-slate-900">
        Quiénes somos
      </h1>

      <div className="panel mt-6 space-y-4">
        <p className="text-slate-700">
          Somos un supermercado que ofrece
          productos de distintas categorías para
          satisfacer las necesidades de nuestros clientes.
        </p>

        <h2 className="text-xl font-bold">
          Nuestra misión
        </h2>

        <p className="text-slate-700">
          Organizar nuestros productos y facilitar
          su disponibilidad mediante un sistema
          de gestión de inventario.
        </p>

        <h2 className="text-xl font-bold">
          Nuestro compromiso
        </h2>

        <p className="text-slate-700">
          Otorgar información sobre los artículos,
          sus características y su stock disponible.
        </p>
      </div>
    </section>
  );
}

export default QuienesSomos;
