import React, { PureComponent } from 'react';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
  
export default function FulfillmentGraph({ mssLabels, mssData } : any) {
    
    let data : any = [];

    mssLabels.forEach((value : any, index : any, arr : any) => {
        data.push({
            name: value,
            mss: mssData[index]
        })
    });

    console.log(data)

    return (
        <BarChart
            width={400}
            height={380}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="mss" fill="#8884d8" />
        </BarChart>
    );
}