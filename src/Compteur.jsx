import React, { useState } from 'react';

function Compteur() {
  const [compte, setCompte] = useState(0);

  const incrementer = () => setCompte(compte + 1);
  const decrementer = () => setCompte(compte - 1);
  const reset = () => setCompte(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Compteur : <span className="text-blue-600">{compte}</span></h1>
        <div className="flex space-x-4">
          <button onClick={decrementer} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">-</button>
          <button onClick={reset} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition">Remise à zéro</button>
          <button onClick={incrementer} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">+</button>
        </div>
      </div>
    </div>
  );
}

export default Compteur; 