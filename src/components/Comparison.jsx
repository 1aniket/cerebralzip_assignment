import React from "react";
import Barchart from "../utils/UI/Barchart";
import { FormControl, InputLabel, Select } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

const Comparison = () => {
  return (
    <div className="pt-[10px] h-[40vh]  ">
      <div className="w-[100%] flex flex-row justify-between  pb-5">
        <div className="flex items-center mb-10 ">
           <h1 className="text-xl font-bold ">Comparison</h1>
        </div>
        <div className="flex flex-row items-center rounded-full border-1 border-slate-300 px-2 w-max">
          <h1>6 Months &nbsp;</h1><FaAngleDown />
        </div>
      </div>
      <div className="">
      <Barchart />
      </div>
    </div>
  );
};

export default Comparison;
