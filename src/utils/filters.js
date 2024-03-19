export const changeOrderBuy = ({ newOrder, setNewOrder, setOrderActive }) => {
  const array = [...newOrder];
  if (array[0].buy > array[array.length - 1].buy) {
    array.sort((a, b) => a.buy - b.buy);
    setOrderActive("buyAsc");
  } else {
    array.sort((a, b) => b.buy - a.buy);
    setOrderActive("buyDesc");
  }
  setNewOrder(array);
};
export const changeOrderSell = ({ newOrder, setNewOrder, setOrderActive }) => {
  const array = [...newOrder];
  if (array[0].sell > array[array.length - 1].sell) {
    array.sort((a, b) => a.sell - b.sell);
    setOrderActive("SellAsc");
  } else {
    array.sort((a, b) => b.sell - a.sell);
    setOrderActive("SellDesc");
  }
  setNewOrder(array);
};

export const changeOrderDif = ({ newOrder, setNewOrder, setOrderActive }) => {
  const array = [...newOrder];
  if (array[0].dif > array[array.length - 1].dif) {
    array.sort((a, b) => a.dif - b.dif);
    setOrderActive("DifAsc");
  } else {
    array.sort((a, b) => b.dif - a.dif);
    setOrderActive("DifDesc");
  }
  setNewOrder(array);
};

export const changeOrderName = ({ newOrder, setNewOrder, setOrderActive }) => {
  const array = [...newOrder];
  if (array[0].exchange > array[array.length - 1].exchange) {
    array.sort((a, b) => a.exchange.localeCompare(b.exchange));
    setOrderActive("NameAsc");
  } else {
    array.sort((a, b) => b.exchange.localeCompare(a.exchange));
    setOrderActive("NameDesc");
  }
  setNewOrder(array);
};
