import "./App.css";
import BgAnimated from "./components/BgAnimated/BgAnimated";
import TablePrice from "./components/TablePrice/TablePrice";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <BgAnimated />
      <main className="w-full flex justify-center">
        <div className="w-full mb-10 md:max-w-2xl lg:max-w-4xl mt-10 min-h-60 bg-[#242424e0] p-5 shadow-black shadow-lg">
          <Title />
          <TablePrice />
          <footer className="w-full text-center text-white p-5">
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
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
