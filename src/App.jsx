import "./App.css";
import BgAnimated from "./components/BgAnimated/BgAnimated";
import TablePrice from "./components/TablePrice/TablePrice";
import Title from "./components/Title/Title";

function App() {
  const year = new Date().getFullYear();
  return (
    <>
      <BgAnimated />
      <main className="w-full flex justify-center">
        <div className="w-full mb-10 md:max-w-2xl lg:max-w-4xl mt-10 min-h-60 bg-[#242424e0] p-5 shadow-black shadow-lg">
          <Title />
          <TablePrice />
          <section className="w-full text-center text-white p-5">
            <p>
              Datos obtenidos de{" "}
              <a
                href="
                https://criptoya.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                CriptoYa
              </a>
            </p>
          </section>
        </div>
      </main>
      <footer className="w-full bg-black min-h-32 text-white flex flex-col justify-center items-center gap-2">
        <p className="text-sm font-thin">Copyright © {year}</p>
        <p>
          Creado por{" "}
          <a
            href="https://github.com/Agustin-Gonzalorena"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Agustin Gonzalorena
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
