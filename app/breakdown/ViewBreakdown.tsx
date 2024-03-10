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

export default function ViewBreakdown({ dataset, title } : any) {
    let data : any = [];

    Object.keys(dataset).forEach((value : any, index : any, arr : any) => {
        data.push({
            name: value,
            mss: dataset[value]
        })
    });

    data.sort((a, b) => b.mss - a.mss);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl dark:text-white'>
                Nutritional Contribution by Item
            </h2>
            <BarChart
                layout='vertical'
                width={1000}
                height={data.length * 50}
                data={data}
                margin={{
                    top: 10,
                    right: 100,
                    left: 100,
                    bottom: 10,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="mss" fill="#8884d8" />
            </BarChart>
        </div>
    );
}