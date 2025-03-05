import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchComparisonData } from '../../services/Dashboardservice';








const Barchart = () =>{
   
    const [data , setData] = useState();

    const fetchData =async ()=>{
        
        const response = await  fetchComparisonData();

//         const arr = response.map((e)=>{

//             let temp=e;

//             if(e.Last_year>1000)
//             {
//                temp.Last_year=e.Last_year/1000 ;
//             }

//             if(e.This_year>1000)
//             {
//                    temp.This_year=e.This_year/1000 ;
//             }
// return temp;

        // })
        setData(response);

        console.log(response);

    }

    
        useEffect(()=>{

            fetchData();
        } ,[]);

    return (
        <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            bottom: 10,
          }}
        >
          <XAxis dataKey="Month" />
          <YAxis tickFormatter={(value) => `${value / 1000}k`}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Last_year" fill="#00CED195" barSize={20} radius={4} name={"Previous Year"} activeBar={{}}/>
          <Bar dataKey="This_year" fill="#007FFF" barSize={20} radius={4} name={"This Year"} />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default Barchart;