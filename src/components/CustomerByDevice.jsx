import React, { useEffect, useState } from "react";
import { useUser } from "../context/context";
import { fetchCustomerByDeviceData } from "../services/Dashboardservice";
import Linechart from "../utils/UI/Linechart";


const CustomerByDevice = () => {
  const [CustomerByDeviceData, setCustomerByDeviceData] = useState();
  const { user } = useUser();
  let response;

  const fetchData = async () => {
    try {
      response = await fetchCustomerByDeviceData(user);
      setCustomerByDeviceData(CustomerByDeviceData);
      console.log(response);
    } catch (error) {
      console.log(error);
      
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div className="flex flex-col w-[100%]  h-[45vh] justify-center gap-3 bg-white rounded-[10px] overflow-hidden py-5 px-3">
    <h1 className="text-lg font-bold">Customer by device</h1>
    <Linechart />
  </div>;
};

export default CustomerByDevice;
