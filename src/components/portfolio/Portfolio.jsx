import React from 'react';

import "./Portfolio.scss";
import {
  featuredPortfolio,
  flickerPhotoGallery,
  sharkSmartVR,
  expenseTracker,
  foodOrder,
} from "../../data";
import PortfolioModal from "../portfolioModal/PortfolioModal";
import { useState } from "react";

function Portfolio() {
  const dummyData = {
    id: "someid",
    title: "Title",
    description: "some Description",
    images: ["./Assets/flickerPhotoGallery.png"],
  };
  console.log("in portfolio");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(dummyData);

  const onClickItem = (id) => {
    switch (id) {
      case "1":
        setData(flickerPhotoGallery);
        setIsOpen(true);
        break;

      case "2":
        setData(sharkSmartVR);
        setIsOpen(true);
        break;

      case "3":
        setData(expenseTracker);
        setIsOpen(true);
        break;

      case "4":
        setData(foodOrder);
        setIsOpen(true);
        break;

      default:
        break;
    }
  };
  return (
    <div className="portfolio" id="portfolio">
      <h2>My Works</h2>
      <div className="container">
        {featuredPortfolio.map((item) => (
          <div className="item" key={item.id} data-aos={item.id % 2 === 0 ? "fade-right" : "fade-left" } data-aos-anchor="#portfolio">
            <figure onClick={() => onClickItem(item.id)}>
              <img src={item.img} alt="" />
              <div className="overlay">
                <figcaption>{item.title}</figcaption>
                <span className='learnMore'>Learn More</span>
              </div>
            </figure>
          </div>
        ))}
      </div>
      <PortfolioModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        data={data}
      ></PortfolioModal>
    </div>
  );
}

export default React.memo(Portfolio);
