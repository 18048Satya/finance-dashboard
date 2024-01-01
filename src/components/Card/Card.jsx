import React, { useState } from 'react';
import { LayoutGroup ,motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import { LineChart } from '@mui/x-charts/LineChart';
import './Card.css'
function Card(props) {
    const [expanded , setExpanded] = useState(false)
  return (
   <LayoutGroup>
    {
        expanded ?(
            <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
        ):
        <CompactCard  param = {props} setExpanded={()=>setExpanded(true)}/>
    }
</LayoutGroup>
 

  )
}

 function CompactCard({param, setExpanded}){
    const Png = param.png;
    return(
        <motion.div className="CompactCard" 
        
        style={
              {
                background: param.color.Background,
                boxShadow:param.color.boxShadow
            
            }
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        onClick={setExpanded}
        >
            <div className="radialBar">
            <CircularProgressbar value={param.barValue} text={`${param.barValue}%`} 
           styles={buildStyles({
            textColor:'white'
           })}
           />
            <span>{param.title}</span>
            </div>
            <div className="details">
            <Png/>
            <span>₹{param.value}</span>
            <span>Last 1 Year</span>
            </div>
        </motion.div>
    )
 }
 function ExpandedCard({param, setExpanded}){
    const Data = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec',
    ]
   
    return(
    <motion.div 
    className="ExpandedCard"
    style={{
        background: param.color.Background,
        boxShadow:param.color.boxShadow
    
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: "easeOut", duration: 1 }}
    >
        <div style={{
            alignSelf:"flex-end", cursor:"pointer", color:"white"
        }} >
        <CloseIcon onClick={setExpanded} />
        </div>
        <span className='titlex'>{param.title}</span>
        <div className="chartContainer">
        <LineChart
  xAxis={[{ scaleType:'point', data:Data }]}
  series={[
    {
       scaleType:'point', showMark:false, data: param.series[0].data, color:"#0000FF",
    },
  ]}
  width={260}
  height={300}
/>
        </div>
        <span className='titley'>Last 1 year</span>
    </motion.div>
    )
 }

export default Card