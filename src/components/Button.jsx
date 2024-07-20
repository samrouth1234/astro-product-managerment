import { useState } from "react";

const Button = () => {
  const [number, setNumber] = useState(1);

  const handleSum = () => { 
    setNumber(number + 1);
  }

  return (
    <button onClick={() => handleSum()} className="bg-slate-400 p-3 border rounded-lg w-32 font-medium" >Click Me! : { number}</button>
  )
}

export default Button;