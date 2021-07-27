import './Portfolio.scss';
import { featuredPortfolio } from '../../data';
import PortfolioModal from '../portfolioModal/PortfolioModal';
import { useState } from 'react';

function Portfolio() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <div className="container">
                {featuredPortfolio.map((item) => (
                    <div className="item">
                        <figure onClick={()=> setIsOpen(true)}>
                            <img
                                src={item.img}
                                alt=""
                            />
                            <div className="overlay">
                                <figcaption>{item.title}</figcaption>
                            </div>
                        </figure>
                    </div>
                ))}
            </div>
            <PortfolioModal open={isOpen} onClose={()=>setIsOpen(false)}></PortfolioModal>
        </div>
    );
}

export default Portfolio
