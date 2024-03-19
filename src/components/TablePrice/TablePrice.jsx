import React, { useEffect, useState } from "react";
import { getData } from "../../utils/feching";
import TablePriceItem from "../TablePriceItem/TablePriceItem";

const TablePrice = () => {
  const [dataArray, setDataArray] = useState([]);
  const [newOrder, setNewOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  const changeOrderBuy = () => {
    const array = [...newOrder];
    if (array[0].buy > array[array.length - 1].buy) {
      array.sort((a, b) => a.buy - b.buy);
    } else {
      array.sort((a, b) => b.buy - a.buy);
    }
    setNewOrder(array);
  };
  const changeOrderSell = () => {
    const array = [...newOrder];
    if (array[0].sell > array[array.length - 1].sell) {
      array.sort((a, b) => a.sell - b.sell);
    } else {
      array.sort((a, b) => b.sell - a.sell);
    }
    setNewOrder(array);
  };
  useEffect(() => {
    if (newOrder.length == 0) {
      setNewOrder(dataArray);
    }
  }, [dataArray, newOrder]);
  useEffect(() => {
    if (!dataArray.length > 0) {
      getData().then((data) => {
        setDataArray(data);
        setLoading(false);
      });
    }
    const interval = setInterval(() => {
      getData().then((data) => {
        setDataArray(data);
        setLoading(false);
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <table className="w-full text-white text-xs md:text-base table-auto border-separate border-spacing-y-2">
      <thead>
        <tr>
          <th className="text-start border-b-2">Exchange</th>
          <th
            className="text-start border-b-2 cursor-pointer"
            onClick={changeOrderBuy}
          >
            Comprás a
          </th>
          <th className="text-start border-b-2">Diferencia</th>
          <th
            className="text-start border-b-2 cursor-pointer"
            onClick={changeOrderSell}
          >
            Vendés a
          </th>
        </tr>
      </thead>
      <tbody>
        {loading && (
          <tr>
            <td colSpan="4" className="text-center p-2">
              Cargando...
            </td>
          </tr>
        )}
        {newOrder.map((item, index) => (
          <TablePriceItem key={item.id} item={item} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default TablePrice;
