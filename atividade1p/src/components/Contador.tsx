import { useState } from "react";

export default function Contador() {
    const [valor, setValor] = useState(0);

    return (
        <div className="flex flex-col items-center mt-6 bg-white rounded-2xl shadow-md p-8 w-full max-w-xs">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Contador</h2>
            <p className="text-gray-600 mb-4">Valor atual: <span className="font-semibold">{valor}</span></p>
            <div className="flex gap-4">
                <button
                    onClick={() => setValor(valor + 1)}
                    className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
                >
                    +
                </button>
                <button
                    onClick={() => setValor(valor - 1)}
                    className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition"
                >
                    -
                </button>
            </div>
        </div>
    );
}