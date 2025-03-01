import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">DR. GABRIEL RODRIGUEZ</h1>
      <h3 className="home__subtitle">ABOGADO</h3>
      <p className="home__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla
        cupiditate eius iusto quisquam dolore!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Pariatur nulla cupiditate eius iusto
        quisquam dolore!
      </p>
      <a
        href="#"
        className="button button--flex"
        style={{
          boxShadow: "9px 3px 12px #808080",
          transition: "color 0.3s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-0.3rem)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        Contactame <i className="uil uil-message button__icon"></i>
      </a>
    </div>
  );
};

export default Data;
