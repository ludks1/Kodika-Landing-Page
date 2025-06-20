import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <div className="bg-[#0f172a]">
        <NavBar />
        <Hero />
        <Projects />
      </div>
    </>
  );
}
