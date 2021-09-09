import "./Portfolio.scss";
import {
  featuredPortfolio,
  flickerPhotoGallery,
  sharkSmartVR,
  expenseTracker,
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

      default:
        break;
    }
  };
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="container">
        {featuredPortfolio.map((item) => (
          <div className="item" key={item.id}>
            <figure onClick={() => onClickItem(item.id)}>
              <img src={item.img} alt="" />
              <div className="overlay">
                <figcaption>{item.title}</figcaption>
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

export default Portfolio;
