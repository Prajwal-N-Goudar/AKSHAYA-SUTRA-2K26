import { p } from "framer-motion/client";
import { useState } from "react";
import { FaRocket, FaLightbulb, FaMapMarkedAlt } from "react-icons/fa";

export default function Prizes(){

const [popup,setPopup] = useState(null);

const tracks = [
{
name:"Viksit Bharat Hackathon" ,

icon:<FaRocket size={50}/>,
prizes:["₹20,000","₹12,000","₹8,000"]
},
{
name:"Project Showcase",
icon:<FaLightbulb size={50}/>,
prizes:["₹5,000","₹3,000","₹2,000"]
},
{
name:"Treasure Hunt",
icon:<FaMapMarkedAlt size={50}/>,
prizes:["₹4,000","₹3,000","₹2,000"]
}
];

return(

<section id="prizes" className="section">

<h2>🏆 Prizes</h2>

<div className="prize-tracks">

{tracks.map((track,index)=>(

<div
key={index}
className="prize-card"
onClick={()=>setPopup(track)}
>

<div className="track-icon">
{track.icon}
</div>

<h3>{track.name}</h3>

<button
className="track-btn"
onClick={()=>setPopup(track)}
>
    Click Me
</button>

</div>

))}

</div>


{/* Popup */}
{popup && (

<div className="popup-overlay">

<div className="popup">

<button className="close" onClick={()=>setPopup(null)}>✖</button>

<h2>{popup.name}</h2>

<div className="popup-prizes">

<div className="gold">🥇 {popup.prizes[0]}</div>
<div className="silver">🥈 {popup.prizes[1]}</div>
<div className="bronze">🥉 {popup.prizes[2]}</div>

</div>

</div>

</div>

)}

</section>

);
}