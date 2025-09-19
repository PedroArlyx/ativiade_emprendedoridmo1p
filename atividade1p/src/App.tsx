
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Contador from "./components/Contador";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center gap-16 p-8">
        <div className="flex flex-col md:flex-row gap-16 w-full max-w-5xl items-start justify-center">
          <Contador />
          <Card />
        </div>
      </main>
    </div>
  );
}