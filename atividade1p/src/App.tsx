
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Contador from "./components/Contador";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-700 flex flex-col">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-5xl"><Navbar /></div>
      </div>
      <main className="flex-1 flex flex-col items-center justify-center gap-16 w-full max-w-5xl mx-auto p-8">
        <div className="flex flex-col md:flex-row gap-16 items-center justify-center w-full">
          <Contador />
          <Card />
        </div>
      </main>
    </div>
  );
}