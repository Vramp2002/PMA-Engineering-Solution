import React from 'react';

const Features = () => {
  const list = [
  {
    icon: '🧩',
    title: 'Test Fixtures',
    desc: 'High-precision ICT, FCT, Hi-Pot, and functional test fixtures designed for reliable PCB testing and industrial durability.'
  },

  {
    icon: '⚙️',
    title: 'SMT & Wave Pallets',
    desc: 'Customized SMT, wave soldering, router, and manual soldering pallets built for accurate positioning and smooth production flow.'
  },

  {
    icon: '🏭',
    title: 'Industrial Automation',
    desc: 'Engineering solutions designed to improve manufacturing productivity, operator handling, and process efficiency.'
  },

  {
    icon: '🛠️',
    title: 'PCBA Assembly Fixtures',
    desc: 'Precision-designed assembly fixtures that enhance production accuracy and reduce operational rework.'
  },

  {
    icon: '🚚',
    title: 'Conveyor Manufacturing',
    desc: 'Reliable conveyor systems designed for smooth material handling and efficient manufacturing workflow.'
  },

  {
    icon: '🔩',
    title: 'Customized Jig & Fixture Solutions',
    desc: 'Tailor-made jigs, fixtures, and retrofit solutions developed based on customer-specific manufacturing requirements.'
  }
];

  return (
    <section id="features" className="features-root">
      <div className="container">
        <div className="kicker">Engineering Services</div>
        <h2 className="section-title">Precision Manufacturing Solutions</h2>
        <p className="section-sub">
         We provide customized engineering solutions designed to improve manufacturing efficiency, production accuracy, and industrial performance.
        </p>

        {/* ===== DESKTOP VIEW ===== */}
        <div className="icon-row desktop-only">
          {list.map((f, i) => (
            <div key={i} className="icon-item">
              <div className="icon-circle">{f.icon}</div>
              <div className="icon-popup">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== MOBILE VIEW ===== */}
        <div className="mobile-only">
          {list.map((f, i) => (
            <div key={i} className="feature-mobile-card">
              <div className="feature-mobile-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
