import './Footer.css';     
import Slider from './Slider';

const Footer = () => { 
    return ( 
        <div className="siteFooter">
            <div className="footerText">
                <div>
                    <span>Trusted by the most exciting projects in web3</span> 
                </div>
            </div>
            <Slider />
        </div> 
    );
};

export default Footer;