import React from "react";
import Overview from "../components/Overview";
import Comparison from "../components/Comparison";
import TopProducts from "../components/TopProducts";
import Summary from "../components/Summary";
import Cummunityfeedback from "../components/Communityfeedback";
import CustomerByDevice from "../components/CustomerByDevice";
import Navigation from "../components/Navigation";


const Dashboard = () => {
  return (
    
      < div className="flex flex-row px-2 overflow-hidden  px-5 bg-slate-300 gap-2 py-5">

        <div className="flex w-2/12  h-[100vh] ">
          <Navigation />
        </div>
        
        <div className="flex flex-col w-7/12 h-[100vh] px-2 py-3 bg-white rounded-[10px]  gap-3">
        <div className="flex justify-between">
        <h5 className="text-2xl font-bold">Dashboard</h5>
        <div className="flex">
        compare to&ensp; <div className="px-2 rounded-full border-1 border-gray-300">Last year</div>
        </div>
        </div>

          <Overview />
          <Comparison />
          <TopProducts />
        </div>
      

     
        <div className="flex flex-col w-3/12 gap-2 ">
        <Summary />
        <CustomerByDevice />
        <Cummunityfeedback />
        </div>
      
        </div>
  );
};

export default Dashboard;
