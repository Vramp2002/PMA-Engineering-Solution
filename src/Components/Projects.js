import React from "react";
import wave1 from "../Images/Projects/wave1.jpeg"
import smt1 from "../Images/Projects/smt1.jpeg"
import manual from "../Images/Projects/manual-soldering-fixtures.jpg.jpeg"
import pcba1 from "../Images/Projects/pcba-screwing-fixture.webp"
import router1 from"../Images/Projects/router1.png"
import screwing from"../Images/Projects/screwing.png"
import retrofit from"../Images/Projects/retrofit.png"
import pcba2 from "../Images/Projects/pcba-assembly-fixture.png"
import fixture from "../Images/Projects/fixture_plate.jpeg"




const products = [

{
image: wave1,
title: "Wave Pallet"
},

{
image: router1,
title: "Router Pallet"
},

{
  image: fixture,
  title: "Precision Fixture Plate"
},

{
image: smt1,
title: "SMT Pallet"
},

{
image: manual,
title: "Manual Soldering Fixture"
},

{
image: pcba1,
title: "PCB Assembly Fixture"
},

{
image: screwing,
title: "Screwing Fixture"
},

{
image: pcba2,
title: "PCBA Assembly Fixture"
},

{
image: retrofit,
title: "Retrofit Components"
}

];

const Projects = () => {

return (


<section className="projects-section">

  <div className="container">

    <div className="kicker">
      Products & Solutions
    </div>

    <h2 className="projects-title">
      Our Engineering Products
    </h2>

    <p className="projects-subtitle">
      Precision-engineered jigs, fixtures, pallets, and automation
      solutions designed for industrial manufacturing excellence.
    </p>

    <div className="projects-grid">

      {products.map((item, index) => (

        <div className="project-card" key={index}>

          <img
            src={item.image}
            alt={item.title}
            className="project-image"
          />

          <div className="project-content">

            <h3>{item.title}</h3>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


);
};

export default Projects;
