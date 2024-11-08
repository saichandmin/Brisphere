// components/Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      name: "High Speed Internet",
      description:
        "Enjoy seamless connectivity with our high-speed internet, perfect for remote work.",
    },
    {
      name: "Transportation",
      description:
        "Convenient transportation options to explore the beautiful landscapes of Ladakh.",
    },
    {
      name: "Job Support",
      description:
        "Get assistance with your remote job setup and any technical issues.",
    },
    {
      name: "Rental Service",
      description:
        "Rent bikes, cars, or equipment to make your stay more enjoyable.",
    },
    {
      name: "Online Shop",
      description:
        "Access a variety of local products and essentials through our online shop.",
    },
    {
      name: "Food Delivery",
      description:
        "Delicious meals delivered right to your doorstep, tailored to your preferences.",
    },
    {
      name: "Tourism",
      description:
        "Guided tours to explore the rich culture and stunning landscapes of Ladakh.",
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>India's First True Digital Tourism Ecosystem</h1>
        <p>Work from Ladakh - Experience Remote Work Like Never Before</p>
        <Link to="/book" className="cta-button">
          Book Your Stay
        </Link>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {services.map((service) => (
            <div key={service.name} className="service-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Homely Stay</h3>
          <p>
            Designed for working professionals with spacious interiors,
            comfortable beds, and sleek attached kitchens.
          </p>
        </div>
        <div className="feature">
          <h3>Healthy Meals</h3>
          <p>
            A healthy breakfast and pleasant dinner served daily with flexible
            meal options.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
