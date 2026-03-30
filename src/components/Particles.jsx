import { useEffect } from "react"

export default function Particles(){

useEffect(()=>{

const canvas=document.getElementById("particles")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<60;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:2,
dx:(Math.random()-0.5)*1,
dy:(Math.random()-0.5)*1
})
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="#00eaff"
ctx.fill()

p.x+=p.dx
p.y+=p.dy

})

requestAnimationFrame(animate)

}

animate()

},[])

return <canvas id="particles"></canvas>

}