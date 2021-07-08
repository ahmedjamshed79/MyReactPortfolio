import './NavBar.scss';
import {Person, Mail} from "@material-ui/icons"

function NavBar({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Ahmed.</a>
                    <div className="itemContainer">
                        <Person className="icon"></Person>
                        <span>0412866776</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>ahmedjamshed79@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default NavBar; 
