import React, { useEffect, useState } from "react";
import { fetchTopProductsData } from "../services/Dashboardservice";
import { FaStar } from "react-icons/fa";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetchTopProductsData();
      setProducts(response);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div >
      <div className="w-[100%] flex flex-row justify-between pb-1">
        <div className="flex items-center mb-3 ">
          <h1 className="text-xl font-bold ">Top Products</h1>
        </div>
        <div className="flex flex-row items-center rounded-full border-1 border-slate-300 px-2 w-max">
          <h1>Full Result </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <table className="table-auto border-spacin w-[100%] text-left ">
            <thead className="border-b-1 border-b-gray-300 gap-3">
              <tr className="text-gray-400 ">
                <th className="font-medium">Product</th>
                <th className="font-medium">Sold amount</th>
                <th className="font-medium">Unit Price</th>
                <th className="font-medium">Revenue</th>
                <th className="font-medium">Rating</th>
              </tr>
            </thead>
            <tbody className="border-spacing-4">
              {products.map((product, index) => (
                <tr key={index} className="">
                  <td className="text-left py-[2px] font-bold">{product.Product}</td>
                  <td className=" ">{product.sold_amount}</td>
                  <td className="">{product.unit_price}</td>
                  <td className="">{product.revenue}</td>
                  <td className="flex py-2 text-center font-bold">
                    <FaStar color="#FFAE42" />
                    &ensp;{product.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TopProducts;
