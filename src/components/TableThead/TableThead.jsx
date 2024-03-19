import {
  changeOrderBuy,
  changeOrderDif,
  changeOrderName,
  changeOrderSell,
} from "../../utils/filters";

const TableThead = ({ newOrder, setNewOrder, setOrderActive, orderActive }) => {
  return (
    <thead>
      <tr className="select-none">
        <th
          className="text-start border-b-2 cursor-pointer w-3/12 md:w-5/12"
          onClick={() =>
            changeOrderName({ newOrder, setNewOrder, setOrderActive })
          }
        >
          Exchange {""}
          {orderActive == "NameDesc"
            ? "⬇"
            : orderActive == "NameAsc"
            ? "⬆"
            : "-"}
        </th>
        <th
          className="text-start border-b-2 cursor-pointer w-2/12"
          onClick={() =>
            changeOrderBuy({ newOrder, setNewOrder, setOrderActive })
          }
        >
          Comprás a {""}
          {orderActive == "buyDesc" ? "⬇" : orderActive == "buyAsc" ? "⬆" : "-"}
        </th>
        <th
          className="text-start border-b-2 cursor-pointer w-2/12"
          onClick={() =>
            changeOrderDif({ newOrder, setNewOrder, setOrderActive })
          }
        >
          Diferencia {""}
          {orderActive == "DifDesc" ? "⬇" : orderActive == "DifAsc" ? "⬆" : "-"}
        </th>
        <th
          className="text-start border-b-2 cursor-pointer w-2/12"
          onClick={() =>
            changeOrderSell({ newOrder, setNewOrder, setOrderActive })
          }
        >
          Vendés a {""}
          {orderActive == "SellDesc"
            ? "⬇"
            : orderActive == "SellAsc"
            ? "⬆"
            : "-"}
        </th>
      </tr>
    </thead>
  );
};

export default TableThead;
