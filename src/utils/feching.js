export async function getData() {
  try {
    const response = await fetch("https://criptoya.com/api/usdt/ars/1");
    const data = await response.json();
    const array = [];
    array.push(
      {
        id: 1,
        exchange: "Binance",
        link: "https://www.binance.com/es",
        icon: "https://r2.criptoya.com/logos/Binance.png",
        buy: data.binance?.totalAsk || 0,
        sell: data.binance?.totalBid || 0,
        dif: (
          (((data.binance?.totalAsk || 0) - (data.binance?.totalBid || 0)) /
            (data.binance?.totalBid || 0) || 0) * 100
        ).toFixed(2),
      },
      {
        id: 2,
        exchange: "Ripio",
        link: "https://www.ripio.com/ar/",
        icon: "https://r2.criptoya.com/logos/Ripio.png",
        buy: data.ripio?.totalAsk || 0,
        sell: data.ripio?.totalBid || 0,
        dif: (
          (((data.ripio?.totalAsk || 0) - (data.ripio?.totalBid || 0)) /
            (data.ripio?.totalBid || 0) || 0) * 100
        ).toFixed(2),
      },
      {
        id: 3,
        exchange: "Cocos Crypto",
        link: "https://cocos.capital/",
        icon: "https://r2.criptoya.com/logos/Cocos%20Crypto.png",
        buy: data.cocoscrypto?.totalAsk || 0,
        sell: data.cocoscrypto?.totalBid || 0,
        dif: (
          (((data.cocoscrypto?.totalAsk || 0) -
            (data.cocoscrypto?.totalBid || 0)) /
            (data.cocoscrypto?.totalBid || 0) || 0) * 100
        ).toFixed(2),
      },
      {
        id: 4,
        exchange: "Belo",
        link: "https://www.belo.app/",
        icon: "https://r2.criptoya.com/logos/belo.png",
        buy: data.belo?.totalAsk || 0,
        sell: data.belo?.totalBid || 0,
        dif: (
          (((data.belo?.totalAsk || 0) - (data.belo?.totalBid || 0)) /
            (data.belo?.totalBid || 0) || 0) * 100
        ).toFixed(2),
      },
      {
        id: 5,
        exchange: "Fiwind",
        link: "https://www.fiwind.io/",
        icon: "https://r2.criptoya.com/logos/Fiwind.png",
        buy: data.fiwind?.totalAsk || 0,
        sell: data.fiwind?.totalBid || 0,
        dif: (
          (((data.fiwind?.totalAsk || 0) - (data.fiwind?.totalBid || 0)) /
            (data.fiwind?.totalBid || 0) || 0) * 100
        ).toFixed(2),
      },
      {
        id: 6,
        exchange: "Lemon",
        link: "https://www.lemon.me/",
        icon: "https://r2.criptoya.com/logos/Lemon%20Cash.png",
        buy: data.lemoncash?.totalAsk || 0,
        sell: data.lemoncash?.totalBid || 0,
        dif: (
          (((data.lemoncash?.totalAsk || 0) - (data.lemoncash?.totalBid || 0)) /
            (data.lemoncash?.totalBid || 0) || 0) * 100
        ).toFixed(2),
      },
      {
        id: 7,
        exchange: "Bitmonedero",
        link: "https://www.bitmonedero.com/",
        icon: "https://r2.criptoya.com/logos/Bitmonedero.png",
        buy: data.bitmonedero?.totalAsk || 0,
        sell: data.bitmonedero?.totalBid || 0,
        dif: (
          (((data.bitmonedero?.totalAsk || 0) -
            (data.bitmonedero?.totalBid || 0)) /
            (data.bitmonedero?.totalBid || 0) || 0) * 100
        ).toFixed(2),
      },
      {
        id: 8,
        exchange: "Trubit",
        link: "https://www.trubit.com/new/signup/criptoya",
        icon: "https://r2.criptoya.com/logos/TruBit.png",
        buy: data.trubit?.totalAsk || 0,
        sell: data.trubit?.totalBid || 0,
        dif: (
          (((data.trubit?.totalAsk || 0) - (data.trubit?.totalBid || 0)) /
            (data.trubit?.totalBid || 0) || 0) * 100
        ).toFixed(2),
      },
      {
        id: 9,
        exchange: "Eluter",
        link: "https://www.eluter.com/",
        icon: "https://r2.criptoya.com/logos/Eluter.png",
        buy: data.eluter?.totalAsk || 0,
        sell: data.eluter?.totalBid || 0,
        dif: (
          (((data.eluter?.totalAsk || 0) - (data.eluter?.totalBid || 0)) /
            (data.eluter?.totalBid || 0) || 0) * 100
        ).toFixed(2),
      },
      {
        id: 10,
        exchange: "Argenbtc",
        link: "https://argenbtc.com/",
        icon: "https://r2.criptoya.com/logos/ArgenBTC.png",
        buy: data.argenbtc?.totalAsk || 0,
        sell: data.argenbtc?.totalBid || 0,
        dif: (
          (((data.argenbtc?.totalAsk || 0) - (data.argenbtc?.totalBid || 0)) /
            (data.argenbtc?.totalBid || 0) || 0) * 100
        ).toFixed(2),
      },
      {
        id: 11,
        exchange: "Paydecep2p",
        link: "https://app.paydece.io/p2p/marketplace?type=buy",
        icon: "https://r2.criptoya.com/logos/Paydece%20P2P.png",
        buy: data.paydecep2p?.totalAsk || 0,
        sell: data.paydecep2p?.totalBid || 0,
        dif: (
          (((data.paydecep2p?.totalAsk || 0) -
            (data.paydecep2p?.totalBid || 0)) /
            (data.paydecep2p?.totalBid || 0) || 0) * 100
        ).toFixed(2),
      }
    );
    return array;
  } catch (error) {
    console.log(error);
  }
}
