import "./PortfolioModal.scss";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import ReactDom from "react-dom";
import ModalImageSlider from "../modalImageSlider/ModalImageSlider";
import LaunchIcon from '@material-ui/icons/Launch';

function PortfolioModal(props) {
  if (!props.open) return null;

  return ReactDom.createPortal(
    <div className="portfolioModal">
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="container">
        <div className="header">
          <label> {props.data.title} </label>
          <CloseRoundedIcon className="close_icon" onClick={props.onClose} />
        </div>
        <div className="imgContainer">
          <ModalImageSlider images={props.data.images}></ModalImageSlider>
        </div>
        <div className="description-container">
          <h5>Project Description:</h5>
          <p>{props.data.description}</p>
          <a href={props.data.projectLink} target="_blank" rel="noreferrer">
            <button className="button"> Visit Site &nbsp; <LaunchIcon/></button>
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default PortfolioModal;
