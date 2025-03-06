import React, { useEffect, useState } from "react";
import { useUser } from "../context/context";
import { fetchOverviewData } from "../services/Dashboardservice";
import { Box, Card } from "@mui/material";
import { FaArrowTrendUp } from "react-icons/fa6";
import { convertToUsd } from "../utils/Converttocurrency";
import { formatCurrency } from "../utils/Formatammount";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FallingLines } from "react-loader-spinner";

const Overview = () => {
  const [overviewData, setOverviewData] = useState();
  const { user } = useUser();
  let response;

  const fetchData = async () => {
    try {
      response = await fetchOverviewData(user);
      setOverviewData(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row w-[100%]  h-[12%] justify-center gap-3 bg-white rounded-[10px]">
      {overviewData ? (<>
      <div className="w-4/12 rounded-[10px]  border-1 border-gray-300 grid grid-cols-1 px-2 py-2 content-between overflow-hidden">
        <div className="text-md flex text-gray-500">Purchase</div>

        <div className="flex flex-column  items-center gap-3">
          <div className="text-3xl font-medium">
            {convertToUsd(overviewData?.purchases).slice(1)}
          </div>
          <div className="flex text-sm flex-column items-center rounded-[10px] text-green-700 bg-[#10B98160] w-max px-2 h-max ">
            <p>+32%&ensp;</p>
            <FaArrowTrendUp />
          </div>
        </div>
      </div>
      <div className="w-4/12 rounded-[10px]  border-1 border-gray-300 grid grid-cols-1 px-2 py-2 content-between overflow-hidden">
        <div className="text-md flex text-gray-500">Revenue</div>

        <div className="flex flex-column  items-center gap-3">
          <div className="text-3xl font-medium">
            {formatCurrency(overviewData?.revenue)}
          </div>
          <div className="flex text-sm flex-column items-center rounded-[10px] text-green-700 bg-[#10B98160] w-max px-2 h-max ">
            <p>+49%&ensp;</p>
            <FaArrowTrendUp />
          </div>
        </div>
      </div>
      <div className="w-4/12 rounded-[10px]  border-1 border-gray-300 grid grid-cols-1 px-2 py-2 content-between overflow-hidden">
        <div className="text-md flex text-gray-500">Refunds</div>

        <div className="flex flex-column  items-center gap-3">
          <div className="text-3xl font-medium">
            {convertToUsd(overviewData?.refunds).slice(1)}
          </div>
          <div className="flex  text-sm flex-column items-center rounded-[10px] text-red-700 bg-[#FF000060] w-max px-2 h-max ">
            <p>+7%&ensp;</p>
            <FaArrowTrendDown />
          </div>
        </div>
      </div>
      </>
      ):(
        <FallingLines
        color="#82C8E5"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
        />
      )}
    </div>
  );
};

export default Overview;
