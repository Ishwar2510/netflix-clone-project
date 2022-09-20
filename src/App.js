

import { useEffect, useState } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Watch from "./Pages/watch/Watch";


function App() {
  const [user,setUsers]=useState([{email:"abc@gmail.com",password:"123456789"}]);
  const [register,setRegister]=useState(false);
  const [signin,setSignin]=useState(false);
  const[verified,setverified]=useState(false);
  const [watch,setWatch]=useState(false);
  
  function restart(){
    setSignin(false);
    setverified(false);
    setRegister(false);
    setWatch(false);

  }
  useEffect(()=>{
    if(verified){
      
      setRegister(false);
      
    }

  },[verified])

  return (
    <>
     
      
      {(!signin && !verified && !watch)&&<Register user={user} setRegister={setRegister} setUsers={setUsers} setSignin={setSignin} setverified={setverified} />}
      {(signin && !verified &&!watch)&& <Login user={user} setverified={setverified}/>}
      
   
       {(verified && !watch) && <Homepage register={register} setWatch={setWatch} restart={restart} />}

       {
        (watch)?<Watch setWatch={setWatch}/>:null
       }
      
      

    </>
   
  );
}

export default App;
