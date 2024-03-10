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

export default function ViewBreakdown({ labels, dataset } : any) {
    
    let data : any = [];

    labels.forEach((value : any, index : any, arr : any) => {
        data.push({
            name: value,
            mss: dataset[index]
        })
    });

    console.log(data)

    return (
        <BarChart
            layout='vertical'
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
            <XAxis />
            <YAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="mss" fill="#8884d8" />
        </BarChart>
    );
}