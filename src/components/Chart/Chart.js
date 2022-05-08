import React from "react";
import ChartBar from './ChartBar.js'
import './Chart.css'
const Chart = props => {
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                />
            ))}

        </div>

    )
}
export default Chart;