import React from 'react'

const Industries = () => {
  const WHATSAPP_NUMBER = "918939255485"; // <- your number here

  function openWhatsApp() {
    const message =
      "Hello! I am looking for customized jig, fixture, pallet, or automation solutions for my industry. Can we discuss my requirement?"
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  const items = [
  {
    icon: '⚡',
    title: 'Electronics Industry',
    desc: 'Customized test fixtures, SMT pallets, and PCBA assembly solutions designed for precision electronics manufacturing.',
    stats: 'High-precision PCB solutions'
  },

  {
    icon: '🏥',
    title: 'Medical Equipment Industry',
    desc: 'Reliable engineering fixtures and automation systems developed for medical device manufacturing and assembly processes.',
    stats: 'Reliable industrial solutions'
  },

  {
    icon: '🏭',
    title: 'Industrial Manufacturing',
    desc: 'Precision-engineered jigs, fixtures, conveyors, and automation solutions for efficient industrial production workflows.',
    stats: 'Improved production efficiency'
  },

  {
    icon: '🤖',
    title: 'Automation Industry',
    desc: 'Advanced automation fixtures and ergonomic handling systems that improve operator efficiency and process reliability.',
    stats: 'Enhanced workflow performance'
  },

  {
    icon: '🔩',
    title: 'Custom Engineering Projects',
    desc: 'Tailor-made manufacturing solutions developed based on customer-specific industrial requirements and production needs.',
    stats: 'Customized engineering support'
  },

  {
    icon: '📦',
    title: 'Assembly & Conveyor Systems',
    desc: 'Efficient conveyor and assembly systems designed for smooth material handling and optimized manufacturing operations.',
    stats: 'Efficient material handling'
  }
];

  return (
    <section id="industries" className="industries-root">
      <div className="container">
        
        <div className="kicker">Industries</div>
        <h2 className="section-title">Industries We Serve</h2>

        <p className="section-sub">
          We provide precision-engineered manufacturing solutions tailored to the needs of electronics, automation, medical, and industrial sectors.
        </p>

        <div className="industries-grid">
          {items.map((it, i) => (
            <div key={i} className="industry-card">
              <div className="industry-icon">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <div className="industry-badge">{it.stats}</div>
            </div>
          ))}
        </div>

        <div className="industries-cta">
          <p>Need a customized engineering solution? Our team is ready to support your manufacturing requirements.</p>
          <button className="btn-primary" onClick={openWhatsApp}>
            Contact Our Team
          </button>
        </div>

      </div>
    </section>
  );
}

export default Industries;
