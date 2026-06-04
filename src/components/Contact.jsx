import React from "react";

function Contact() {
  const links = [
    {
      label: "Email",
      value: "ayubsoaliha125@gmail.com",
      href: "mailto:ayubsoaliha125@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 88250 07252",
      href: "tel:+918825007252",
    },
    {
      label: "GitHub",
      value: "ayubsoaliha-SS",
      href: "https://github.com/ayubsoaliha-SS",
    },
    {
      label: "LinkedIn",
      value: "soaliha-ayub",
      href: "https://www.linkedin.com/in/soaliha-ayub-83b06825b",
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="section-shell">
        <div className="contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">Let's Connect</span>
            <h2>Ready To Build Something Useful?</h2>
            <p>
              Open to opportunities, collaborations, and meaningful conversations.
              Reach out for roles, internships, freelance work, or project discussions.
            </p>
          </div>

          <div className="contact-grid">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="contact-card"
              >
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
