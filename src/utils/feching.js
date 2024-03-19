export async function getData() {
  const response = await fetch("https://criptoya.com/api/usdt/ars/1");
  const data = await response.json();
  const array = [];
  array.push(
    {
      id: 1,
      exchange: "Binance",
      link: "https://www.binance.com/es",
      icon: "https://r2.criptoya.com/logos/Binance.png",
      buy: data.binance.totalAsk,
      sell: data.binance.totalBid,
    },
    {
      id: 2,
      exchange: "Ripio",
      link: "https://www.ripio.com/ar/",
      icon: "https://r2.criptoya.com/logos/Ripio.png",
      buy: data.ripio.totalAsk,
      sell: data.ripio.totalBid,
    },
    {
      id: 3,
      exchange: "Cocos Crypto",
      link: "https://cocos.capital/",
      icon: "https://r2.criptoya.com/logos/Cocos%20Crypto.png",
      buy: data.cocoscrypto.totalAsk,
      sell: data.cocoscrypto.totalBid,
    },
    {
      id: 4,
      exchange: "Belo",
      link: "https://www.belo.app/",
      icon: "https://r2.criptoya.com/logos/belo.png",
      buy: data.belo.totalAsk,
      sell: data.belo.totalBid,
    },
    {
      id: 5,
      exchange: "Fiwind",
      link: "https://www.fiwind.io/",
      icon: "https://r2.criptoya.com/logos/Fiwind.png",
      buy: data.fiwind.totalAsk,
      sell: data.fiwind.totalBid,
    },
    {
      id: 6,
      exchange: "Lemon",
      link: "https://www.lemon.me/",
      icon: "https://r2.criptoya.com/logos/Lemon%20Cash.png",
      buy: data.lemoncash.totalAsk,
      sell: data.lemoncash.totalBid,
    },
    {
      id: 7,
      exchange: "Bitmonedero",
      link: "https://www.bitmonedero.com/",
      icon: "https://r2.criptoya.com/logos/Bitmonedero.png",
      buy: data.bitmonedero.totalAsk,
      sell: data.bitmonedero.totalBid,
    },
    {
      id: 8,
      exchange: "TruBit",
      link: "https://www.trubit.com/new/signup/criptoya",
      icon: "https://r2.criptoya.com/logos/TruBit.png",
      buy: data.trubit.totalAsk,
      sell: data.trubit.totalBid,
    },
    {
      id: 9,
      exchange: "Eluter",
      link: "https://www.eluter.com/",
      icon: "https://r2.criptoya.com/logos/Eluter.png",
      buy: data.eluter.totalAsk,
      sell: data.eluter.totalBid,
    },
    {
      id: 10,
      exchange: "ArgenBTC",
      link: "https://argenbtc.com/",
      icon: "https://r2.criptoya.com/logos/ArgenBTC.png",
      buy: data.argenbtc.totalAsk,
      sell: data.argenbtc.totalBid,
    }
  );
  array.sort((a, b) => a.buy - b.buy);
  return array;
}
