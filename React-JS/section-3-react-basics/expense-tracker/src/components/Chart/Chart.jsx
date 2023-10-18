import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)
    console.log(props.dataPoints)
    return(
        <div className="chart">
            {
                props.dataPoints.map(point => (
                     <ChartBar 
                    key={point.label}
                    value={point.value}
                    maxValue={totalMax}
                    label={point.label}/>
                ))
            }
        </div>
    )
}

export default Chart