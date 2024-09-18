import { useEffect, useState } from "react";

const Title = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      //hora de buenos aires argentina
      const date = new Date(
        new Date().toLocaleString("en-US", {
          timeZone: "America/Argentina/Buenos_Aires",
        })
      );
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      setTime(`  ${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-white mb-5">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-5xl flex items-center gap-2 mb-1">
          {" "}
          <img src="/usdt.svg" alt="icon" className="size-9" />
          USDT
        </h1>
        <div className="md:w-44 flex flex-col text-center">
          <p className="text-lg">
            <span className="hidden md:inline-block">Hora actual: </span>
            <span className="text-xl"> {time}</span>
          </p>
        </div>
      </div>
      <p>
        Precio minuto a minuto del usdt en diferentes exchanges, en pesos
        argentinos 🇦🇷
      </p>
    </div>
  );
};

export default Title;
