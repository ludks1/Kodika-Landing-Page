import Hero from "./components/Hero";
import NavBar from "./components/navbar";

export default function App() {
  return (
    <>
      <div className="bg-[#0f172a]">
        <NavBar />
        <Hero />
      </div>
    </>
  );
}
