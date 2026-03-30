import { useState } from "react";

export default function Team() {

const members = [
{
name:"Dr. Pushpa R",
role:"Head, CSE",
img:"/pushpa.jpeg"
},
{
name:"Dr.Somashekhar G.C",
role:"Head, ECE",
img:"/somashekhar.jpeg"
},
{
name:"Dr.Veerappa B.N",
role:"Head, ISE",
img:"/veerappa.jpeg"
},
{
name:"Dr.Champakamala S",
role:"Head, AI & DS",
img:"/Champakamala.jpeg"
},
{
name:"Dr.Vikas L",
role:"Head, AGRI",
img:"/vikas.jpeg"
},
{
name:"Prof. Sannamaregouda M",
role:"Head, MECH",
img:"/Sannamaregouda.jpeg"
}
];

const [index,setIndex] = useState(0);

const next = () =>{
setIndex((index+1) % members.length);
};

const prev = () =>{
setIndex((index-1 + members.length) % members.length);
};

const member = members[index];

return (
<section id="team" className="section">

<h2>👩‍🏫 Organising Committee</h2>
<br>
</br>
<br>
</br>

<div className="team-slider">

<div className="head-card">

<img src={member.img} alt={member.name}/>

<h3>{member.name}</h3>
<p>{member.role}</p>

</div>

<div className="team-buttons">

<button onClick={prev}>◀ Prev</button>

<button onClick={next}>Next ▶</button>

</div>

</div>



</section>
);
}