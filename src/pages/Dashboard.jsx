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
    
      < div className="flex flex-row border-2 px-2 overflow-hidden">

        <div className="flex w-2/12 border-1 h-[100vh]">
          <Navigation />
        </div>
        
        <div className="flex flex-col w-7/12 h-[100vh] px-2 border-1">
        <h5 className="text-2xl">Dashboard</h5>
          <Overview />
          <Comparison />
          <TopProducts />
        </div>
      

     
        <div className="flex flex-col w-3/12 border-1 border-red">
        <Summary />
        <Cummunityfeedback />
        <CustomerByDevice />
        </div>
      
        </div>
  );
};

export default Dashboard;
