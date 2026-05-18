import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      stars: "★★★★★",
      quote: "Eleven11 helped us automate 70% of our manual tasks. Our team can now focus on growth instead of repetitive work.",
      author: "Rahul",
      role: "Development Manager, TechNova",
      avatar: "R"
    },
    {
      stars: "★★★★★",
      quote: "We scaled to 10k users without downtime. Their DevOps and API services are world-class.",
      author: "Vignesh K",
      role: "CTO, NeoStack",
      avatar: "V"
    },
    {
      stars: "★★★★★",
      quote: "The quality and delivery speed were impressive. Their UI/UX work improved our product engagement significantly.",
      author: "Priya N",
      role: "Product Manager, TechGT",
      avatar: "P"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-root">
      <div className="container">
        <div className="kicker">Testimonials</div>
        <h2 className="section-title">Trusted by Innovators</h2>
        <p className="section-sub">
          See how leading companies use Eleven11 to unlock growth and scale faster.
        </p>

        <div className="test-grid">
          {reviews.map((r, i) => (
            <div key={i} className="test-card">
              <div className="stars">{r.stars}</div>
              <p className="quote">{r.quote}</p>

              <div className="author">
                <div className="avatar">{r.avatar}</div>
                <div className="author-info">
                  <h4>{r.author}</h4>
                  <p>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="logo-strip">
          <h4>Loved by teams worldwide</h4>
          <div className="logos">
            <div className="logo-item">AWS</div>
            <div className="logo-item">Google</div>
            <div className="logo-item">Azure</div>
            <div className="logo-item">Figma</div>
            <div className="logo-item">Slack</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
