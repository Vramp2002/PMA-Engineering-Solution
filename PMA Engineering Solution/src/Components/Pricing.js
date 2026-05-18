import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      features: [
        "Basic AI Tools",
        "Cloud Dashboard",
        "Email Support",
        "API Access (Limited)",
      ],
      btn: "Get Started"
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: [
        "Full AI Automation",
        "Advanced Dashboard",
        "Priority Support",
        "Unlimited API Access",
        "Custom Integrations"
      ],
      btn: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Dedicated Team",
        "Fully Managed Cloud",
        "Compliance & Security",
        "On-Premise Option",
        "24/7 Support"
      ],
      btn: "Talk to Sales"
    },
  ];

  return (
    <section id="pricing" className="pricing-root">
      <div className="container">

        <div className="kicker">Pricing</div>
        <h2 className="section-title">Choose the Perfect Plan</h2>
        <p className="section-sub">
          Clear, transparent pricing designed for startups to enterprises.
        </p>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div key={i} className={`plan-card ${p.popular ? "popular" : ""}`}>
              
              {p.popular && <div className="popular-pill">Most Popular</div>}

              <h3 className="plan-title">{p.name}</h3>

              <div className="plan-price">
                <span className="price">{p.price}</span>
                <span className="period">{p.period}</span>
              </div>

              <ul className="plan-features">
                {p.features.map((f, index) => (
                  <li key={index}>{f}</li>
                ))}
              </ul>

              <button className="btn-primary plan-btn">{p.btn}</button>
            </div>
          ))}
        </div>

        {/* CTA BAND */}
        <div className="pricing-cta">
          <h3>Want a custom solution?</h3>
          <p>We build tailor-made automation systems for your industry.</p>
          <button className="btn-white">Request Custom Quote</button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
