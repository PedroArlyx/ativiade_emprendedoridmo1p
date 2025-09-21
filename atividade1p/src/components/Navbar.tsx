export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md w-full ">
            <h1 className="text-3xl font-extrabold tracking-tight">Atividade</h1>
            <ul className="flex gap-8 text-lg list-none m-0 p-0">
                <li className="hover:text-gray-200 cursor-pointer transition-colors">Home</li>
                <li className="hover:text-gray-200 cursor-pointer transition-colors">Sobre</li>
                <li className="hover:text-gray-200 cursor-pointer transition-colors">Contador</li>
            </ul>
        </nav>
    );
}