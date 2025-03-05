import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchCustomerByDeviceData } from '../../services/Dashboardservice';

const Linechart=()=>{
    const [data , setData] = useState();
    const fetchData =async ()=>{
            
            const response = await  fetchCustomerByDeviceData();

            const arr = response.map((ele)=>{

                let temp =ele;
                temp.total_sale=ele.web_sales + ele.offline_sales;

                return temp;
            })
            setData(arr);

            console.log(arr)
            
    
        }
    
        
            useEffect(()=>{
    
                fetchData();
            } ,[]);
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="toatl_sale" />
          <YAxis tickFormatter={(value) => `${value / 1000}k`}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="web_sales" stroke="#00CED195"  name='Web Sales' dot={false} strokeWidth={3}/>
          <Line type="monotone" dataKey="offline_sales" stroke="#007FFF" name="Offline Sales"  dot={false} strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
    );
  
}
    export default Linechart;

