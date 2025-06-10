export default function NavBar() {
  return (
    <nav className="bg-transparent text-white p-4">
      <ul className="flex space-x-4 md:w-auto justify-end items-center">
        <li className="font-bold text-lg">
          <a href="#home">Inicio</a>
        </li>
        <li className="font-bold text-lg">
          <a href="#about">Sobre nosotros</a>
        </li>
        <li className="font-bold text-lg">
          <a href="#services">Servicios</a>
        </li>
        <li className="font-bold text-lg">
          <a href="#projects">Proyectos</a>
        </li>
        <li className="font-bold text-lg">
          <a href="#contact">Contáctanos</a>
        </li>
      </ul>
    </nav>
  );
}
