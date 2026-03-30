import { FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer(){

return(

<footer className="footer">

{/* LEFT SIDE MAP */}

<div className="footer-left">

<h3>Visit Our College</h3>
<br>
</br>

<iframe
src="https://www.google.com/maps?q=Akshaya%20Institute%20of%20Technology%20Tumkur&output=embed"
width="100%"
height="250"
style={{border:0}}
loading="lazy"
allowFullScreen
></iframe>

</div>


{/* RIGHT SIDE */}

<div className="footer-right">

{/* Hackathon Logo */}

<img
src="/Aitlogo.jpeg"
alt="Akshaya Sutra"
className="footer-logo"
/>

{/* Horizontal Line */}

<div className="footer-line"></div>


{/* College Name */}

<h3 className="footer-college">
Akshaya Institute of Technology
</h3>


{/* Social Icons */}

<div className="footer-social">

<a 
href="https://www.instagram.com/tumkurait/" 
target="_blank"
rel="noopener noreferrer"
>
<FaInstagram/>
</a>

<a 
href="https://www.linkedin.com/school/akshaya-institute-of-technology-tumkur-dist/" 
target="_blank"
rel="noopener noreferrer"
>
<FaLinkedin/>
</a>

<a 
href="https://www.youtube.com/@AitTumkur" 
target="_blank"
rel="noopener noreferrer"
>
<FaYoutube/>
</a>

</div>


{/* Address */}

<p className="footer-address">

<FaMapMarkerAlt/>

&nbsp;Lingapura, Obalapura Post  
Koratagere Road, Tumakuru – 572106

</p>


<p className="footer-copy">

© 2026 Akshaya Sutra  
<br/>
Designed & Developed by Prajwal NG

</p>

</div>

</footer>

)

}