'use client'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';

export default function ViewBreakdown({ dataset } : any) {
    
    let data : any = [];

    Object.keys(dataset).forEach((value : any, index : any, arr : any) => {
        data.push({
            name: value,
            mss: dataset[value]
        })
    });

    return (
        <BarChart
            layout='vertical'
            width={1000}
            height={1200}
            data={data}
            margin={{
                top: 5,
                right: 100,
                left: 100,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Legend />
            <Bar dataKey="mss" fill="#8884d8" />
        </BarChart>
    );
}