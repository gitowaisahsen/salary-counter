
import React,{useState}from 'react'


export default function MySalary() {
    const [salary,setSalary]=useState();
    const [med,setMed]=useState(0);
    const [trans,setTrans]=useState(0);
    const [bonus,setBonus]=useState(0);
    const [gross,setGross]=useState(0);
    const [intax,setIntax]=useState(0);
    const [netsal,setNetSal]=useState(0);

  return (
    <div>
        <div >
            <h1>Net Salary System</h1>
            <input type="text" placeholder='Amount' className="Input" onChange={(event)=> {setSalary(Number(event.target.value))}} />
        </div>
        <br />
        <div>
          <button className='btn' onClick={()=>{
            const medNum=salary+salary*0.5
            setMed(medNum);
            const tranNum=medNum+medNum*0.1
            setTrans(tranNum);
            const boNum=tranNum+1000
            setBonus(boNum);
            const grossNum=boNum
            setGross(grossNum);
            const taxNum=grossNum-grossNum*0.02
            setIntax(taxNum);
            const netNum=taxNum
            setNetSal(netNum);

          }}> Submit

          </button>
        </div>
        <br />

        <div>
          <h2>{`Medical Allowance 50%=${med}`}</h2>
          <h2>{`Transport Allowance 10%=${trans}`}</h2>
          <h2>{`Employee Bonus (Fixed:1000)=${bonus}`}</h2>
          <h1>{`Gross Salary=${gross}`}</h1>
          <h2>{`Income Tax (-2%)=${intax}`}</h2>
          <h1>{`Net Salary=${netsal}`}</h1>

        </div>
    </div>
  )
}
