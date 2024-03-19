import React, { useEffect, useState } from "react";
import { getData } from "../../utils/feching";
import TablePriceItem from "../TablePriceItem/TablePriceItem";
import TableThead from "../TableThead/TableThead";

const TablePrice = () => {
  const [dataArray, setDataArray] = useState([]);
  const [newOrder, setNewOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderActive, setOrderActive] = useState("buyAsc");

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
      <TableThead
        newOrder={newOrder}
        setNewOrder={setNewOrder}
        setOrderActive={setOrderActive}
        orderActive={orderActive}
      />
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
