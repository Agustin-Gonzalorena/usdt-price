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
      dif: (
        ((data.binance.totalAsk - data.binance.totalBid) /
          data.binance.totalBid) *
        100
      ).toFixed(2),
    },
    {
      id: 2,
      exchange: "Ripio",
      link: "https://www.ripio.com/ar/",
      icon: "https://r2.criptoya.com/logos/Ripio.png",
      buy: data.ripio.totalAsk,
      sell: data.ripio.totalBid,
      dif: (
        ((data.ripio.totalAsk - data.ripio.totalBid) / data.ripio.totalBid) *
        100
      ).toFixed(2),
    },
    {
      id: 3,
      exchange: "Cocos Crypto",
      link: "https://cocos.capital/",
      icon: "https://r2.criptoya.com/logos/Cocos%20Crypto.png",
      buy: data.cocoscrypto.totalAsk,
      sell: data.cocoscrypto.totalBid,
      dif: (
        ((data.cocoscrypto.totalAsk - data.cocoscrypto.totalBid) /
          data.cocoscrypto.totalBid) *
        100
      ).toFixed(2),
    },
    {
      id: 4,
      exchange: "Belo",
      link: "https://www.belo.app/",
      icon: "https://r2.criptoya.com/logos/belo.png",
      buy: data.belo.totalAsk,
      sell: data.belo.totalBid,
      dif: (
        ((data.belo.totalAsk - data.belo.totalBid) / data.belo.totalBid) *
        100
      ).toFixed(2),
    },
    {
      id: 5,
      exchange: "Fiwind",
      link: "https://www.fiwind.io/",
      icon: "https://r2.criptoya.com/logos/Fiwind.png",
      buy: data.fiwind.totalAsk,
      sell: data.fiwind.totalBid,
      dif: (
        ((data.fiwind.totalAsk - data.fiwind.totalBid) / data.fiwind.totalBid) *
        100
      ).toFixed(2),
    },
    {
      id: 6,
      exchange: "Lemon",
      link: "https://www.lemon.me/",
      icon: "https://r2.criptoya.com/logos/Lemon%20Cash.png",
      buy: data.lemoncash.totalAsk,
      sell: data.lemoncash.totalBid,
      dif: (
        ((data.lemoncash.totalAsk - data.lemoncash.totalBid) /
          data.lemoncash.totalBid) *
        100
      ).toFixed(2),
    },
    {
      id: 7,
      exchange: "Bitmonedero",
      link: "https://www.bitmonedero.com/",
      icon: "https://r2.criptoya.com/logos/Bitmonedero.png",
      buy: data.bitmonedero.totalAsk,
      sell: data.bitmonedero.totalBid,
      dif: (
        ((data.bitmonedero.totalAsk - data.bitmonedero.totalBid) /
          data.bitmonedero.totalBid) *
        100
      ).toFixed(2),
    },
    {
      id: 8,
      exchange: "TruBit",
      link: "https://www.trubit.com/new/signup/criptoya",
      icon: "https://r2.criptoya.com/logos/TruBit.png",
      buy: data.trubit.totalAsk,
      sell: data.trubit.totalBid,
      dif: (
        ((data.trubit.totalAsk - data.trubit.totalBid) / data.trubit.totalBid) *
        100
      ).toFixed(2),
    },
    {
      id: 9,
      exchange: "Eluter",
      link: "https://www.eluter.com/",
      icon: "https://r2.criptoya.com/logos/Eluter.png",
      buy: data.eluter.totalAsk,
      sell: data.eluter.totalBid,
      dif: (
        ((data.eluter.totalAsk - data.eluter.totalBid) / data.eluter.totalBid) *
        100
      ).toFixed(2),
    },
    {
      id: 10,
      exchange: "ArgenBTC",
      link: "https://argenbtc.com/",
      icon: "https://r2.criptoya.com/logos/ArgenBTC.png",
      buy: data.argenbtc.totalAsk,
      sell: data.argenbtc.totalBid,
      dif: (
        ((data.argenbtc.totalAsk - data.argenbtc.totalBid) /
          data.argenbtc.totalBid) *
        100
      ).toFixed(2),
    }
  );
  array.sort((a, b) => a.buy - b.buy);
  return array;
}
