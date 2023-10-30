
import './ChartBar.css'

const ChartBar = (props) => {
    console.log(props.value)
    let barHeight = '0%'

    if(props.maxValue > 0){
        barHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }
    
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{
                    height: barHeight
                    // to use a css style -> convert properties to string
                    // use camelcased (not string)
                }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar