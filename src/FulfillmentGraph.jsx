import * as React from 'react';

import { BarChart } from '@mui/x-charts/BarChart';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function FulfillmentGraph({ mssLabels, mssData }) {
    let positiveMss = []
    let negativeMss = []

    mssData.forEach((val, index, _) => {
        if (val > 0) {
        positiveMss.push(mssData[index])
        negativeMss.push(0)
        } else {
        negativeMss.push(mssData[index])
        positiveMss.push(0)
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <BarChart
            colors={["blue", "red"]}
            xAxis={[
            {
                id: 'barCategories',
                data: mssLabels,
                scaleType: 'band'
            },
            ]}
            yAxis={[
            {
                label: 'Fulfillment %'
            }
            ]}
            series={[
            { data: positiveMss, stack: 'a' },
            { data: negativeMss, stack: 'a' },
            ]}
            width={700}
            height={500}
            />
        </ThemeProvider>
    )
}