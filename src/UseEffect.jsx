import { useEffect,useState } from "react";
const Challenge=()=>{
const[count,setCount]=useState(0);
const[name,setName]=useState("Kolya");

useEffect(()=>{
    document.title=`Count:${count}`;
},[count]);

useEffect(()=>{
    console.log(name);
},[name]);
return(
 <div>
    <h1>Challenge</h1>
    <p>
        count:<span>{count}</span>
    </p>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <p>
        Name:<span>{name}</span>
    </p>
    <input typ="text"
     value={name}
     onChange={(event)=>setName(event.target.value)}
     />
 </div>   
);
};
export  default Challenge;