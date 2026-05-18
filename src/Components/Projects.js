import React from "react";

// import pallet1 from "../Images/Projects/pallet1.png";
// import pallet2 from "../Images/Projects/pallet2.png";
// import pallet3 from "../Images/Projects/pallet3.png";

// import smt1 from "../Images/Projects/smt1.png";
// import smt2 from "../Images/Projects/smt2.png";
// import smt3 from "../Images/Projects/smt3.png";

// import fixture1 from "../Images/Projects/fixture1.png";
// import fixture2 from "../Images/Projects/fixture2.png";
// import fixture3 from "../Images/Projects/fixture3.png";

const products = [

{
// image: pallet1,
title: "Wave Pallet"
},

{
// image: pallet2,
title: "Router Pallet"
},

{
// image: pallet3,
title: "Industrial Fixture Pallet"
},

{
// image: smt1,
title: "SMT Pallet"
},

{
// image: smt2,
title: "Manual Soldering Fixture"
},

{
// image: smt3,
title: "PCB Assembly Fixture"
},

{
// image: fixture1,
title: "Screwing Fixture"
},

{
// image: fixture2,
title: "PCBA Assembly Fixture"
},

{
// image: fixture3,
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
