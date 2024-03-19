import React from "react";

const Title = () => {
  return (
    <div className="text-white mb-5">
      <h1 className="font-bold text-5xl flex items-center gap-2 mb-1">
        {" "}
        <img src="/usdt.svg" alt="icon" className="size-9" />
        USDT
      </h1>
      <p>
        Precio minuto a minuto en pesos argentinos del usdt en diferentes
        exchanges
      </p>
    </div>
  );
};

export default Title;
