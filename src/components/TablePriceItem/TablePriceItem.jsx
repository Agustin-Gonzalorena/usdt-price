import React from "react";

const TablePriceItem = ({ item, index }) => {
  return (
    <tr
      key={item.id}
      className={index % 2 == 0 ? "bg-[#030712c7]" : "bg-[#1e293bc7]"}
    >
      <td className="text-start ">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 flex items-center gap-2 hover:underline"
        >
          <img src={item.icon} alt={item.exchange} className="size-5" />
          {item.exchange}
        </a>
      </td>
      <td className="text-start">${item.buy}</td>
      <td
        className={
          item.dif > 2 && item.dif <= 4
            ? "text-yellow-400"
            : item.dif > 4 && item.dif <= 7
            ? "text-orange-400"
            : item.dif > 7
            ? "text-red-400"
            : "text-green-400"
        }
      >
        {item.dif}%
      </td>
      <td className="text-start">${item.sell}</td>
    </tr>
  );
};

export default TablePriceItem;
