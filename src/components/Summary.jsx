import React, { useEffect, useState } from "react";

import { fetchSummaryData } from "../services/Dashboardservice";
import { useUser } from "../context/context";
import { SemiCircularProgressBar } from "../utils/UI/SemiCircularProgressBar";
import { Button } from "@mui/material";
import { Oval } from "react-loader-spinner";

const Summary = () => {
  const [summaryData, setSummaryData] = useState();
  const { user } = useUser();

  let response;

  const fetchData = async () => {
    try {
      response = await fetchSummaryData(user);
      setSummaryData(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    
  }, []);

  return (
    <div className="h-[32vh] w-[100%] flex flex-col items-center justify-center overflow-hidden px-3 rounded-[10px] shadow-lg bg-white">
      
      {summaryData ? (
        <>
          <div className="flex justify-center w-[100%] h-[20%] ">
            <SemiCircularProgressBar percentage={summaryData?.score} />
          </div>

          <div className="bg-slate-200 w-[70%] h-[2px] mt-[10px]"></div>

          <div className="flex flex-col gap-2 pt-12 pb-3">
            <h1 className="flex font-bold">{summaryData?.title}</h1>
            <p className="flex">{summaryData?.message}</p>

            <button className=" border-1 w-max rounded-full px-3 border-gray-300 py-2 hover:bg-[#007FFF] hover:text-white">
              Improve your score
            </button>
            
          </div>
         
        </>
      ) : (
        <Oval
          visible={true}
          height="80"
          width="80"
          secondaryColor="gray"
          color="#007FFF"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
    </div>
  );
};

export default Summary;
