import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [time,setTime]=useState(0);
    const[isRunning,setIsRunning]=useState(false);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    

    useEffect(()=>{
        let interval;
        if(isRunning){
           interval= setInterval(()=>{
                setTime((prev)=>prev+1)
            },1000);
        }
        else{
            clearInterval(interval);
        }
        return(()=>{
            clearInterval(interval);
        })
    },[isRunning])
  return (
    <div>
        <h1>Stopwatch</h1>
        <p>Time: {formatTime(time)}</p>
        <button onClick={()=>setIsRunning((prev)=>!prev)}>{isRunning?"Stop":"Start"}</button>
        
        <button onClick={()=>{setTime(0); setIsRunning(false);}}>Reset</button>
    </div>
  )
}

export default Stopwatch