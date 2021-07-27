import "./PortfolioModal.scss";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ReactDom from "react-dom";
import ModalImageSlider from "../modalImageSlider/ModalImageSlider";


function PortfolioModal(props) {
    if (!props.open) return null;

    return ReactDom.createPortal(
        <div className="portfolioModal">
            <div className="backdrop"  onClick={props.onClose}></div>
            <div className="container">
                <div className="header">
                    <h3>Title</h3>
                    <CloseRoundedIcon className="close_icon" onClick={props.onClose}/>
                </div>
                <div className="imgContainer">
                    <ModalImageSlider></ModalImageSlider>
                </div>
                <ul>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                </ul>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default PortfolioModal
