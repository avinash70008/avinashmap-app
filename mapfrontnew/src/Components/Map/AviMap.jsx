import React from 'react'

import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import MapComponent from './Avimaps2';





export function AviMap() {
    const data2 = useSelector((store) => store.SignIn.data)
    console.log("login check", data2)
    const dispatch = useDispatch()


    const navigate = useNavigate();
     return <div>
        <div style={{
            backgroundColor:"gold",
           
            padding:"20px"
        }}>
<ul style={{
        display:"inline-flex",
        listStyle:"none",
        padding:"10px"
    }}>
    <li style={{
             padding: "10px",
             marginLeft: "20px"
        }}>Bihar</li>
    <li style={{
             padding: "10px",
             marginLeft: "20px"
        }}>Delhi</li>
    <li style={{
             padding: "10px",
             marginLeft: "20px"
        }}>Kolkata</li>
    <li style={{
             padding: "10px",
             marginLeft: "20px"
        }}>Bengaluru</li>
</ul>

        </div>

<MapComponent  />
     </div>
   
   
 

   
    
};
