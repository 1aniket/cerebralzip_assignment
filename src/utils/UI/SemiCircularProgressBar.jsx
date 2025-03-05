import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export const SemiCircularProgressBar = ({ percentage }) => {
  const data = [
    { name: 'Progress', value: percentage },
    { name: 'Remaining', value: 100 - percentage }
  ];

  const COLORS = ['#007FFF', '#e5e7eb'];

  return (
    <div className="relative w-48 h-24 flex justify-center items-center">
      <PieChart width={200} height={100}>
        <Pie
          data={data}
          cx={100}
          cy={80}
          startAngle={180}
          endAngle={0}
          innerRadius={65}
          outerRadius={75}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className=" absolute top-10 left-17 text-lg font-bold text-black font-bold flex flex-col items-center">
        <p className='text-2xl'>{percentage}% </p>
        <p className='font-light text-sm'>out of 100</p> 
      </div>
    </div>
  );
};

export default SemiCircularProgressBar;
