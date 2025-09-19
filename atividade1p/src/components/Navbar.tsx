export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md w-full">
           <h1 className="text-2xl font-bold ">Atividade</h1>
            <div className="flex-1 flex justify-end">
                <ul className="flex gap-8 text-lg list-none m-0 p-0">
                    <li className="hover:text-gray-200 cursor-pointer">Home -</li>
                    <li className="hover:text-gray-200 cursor-pointer">Sobre -</li>
                    <li className="hover:text-gray-200 cursor-pointer">Contador</li>
                </ul>
            </div>
        </nav>
    );
}