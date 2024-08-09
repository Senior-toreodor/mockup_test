import './Slider.css'; 
import blackbird from './assets/WorkWithLogos/blackbird.png';
import courtyard from './assets/WorkWithLogos/courtyard.png';
import dydx from './assets/WorkWithLogos/dydx.svg';  
import friendtech from './assets/WorkWithLogos/friendtech.png';  
import hyperliquid from './assets/WorkWithLogos/hyperliquid.svg';  
import opensea from './assets/WorkWithLogos/opensea.svg'; 
import poap from './assets/WorkWithLogos/poap.png'; 
import tu from './assets/WorkWithLogos/tu.png'; 
import zora from './assets/WorkWithLogos/zora.png';  

const images = [
    { src: blackbird, alt: 'Image 1' },
    { src: courtyard, alt: 'Image 2' },
    { src: dydx, alt: 'Image 3' },
    { src: friendtech, alt: 'Image 4' },
    { src: hyperliquid, alt: 'Image 5' },
    { src: opensea, alt: 'Image 6' },
    { src: poap, alt: 'Image 7' },
    { src: tu, alt: 'Image 8' },
    { src: zora, alt: 'Image 9' },
];
function MultipleItems() {  
    return (

        <div className="ticker-container">
            <div className="ticker">
                {images.concat(images).map((image, index) => (
                    <div className="ticker-item" key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))} 
                {images.concat(images).map((image, index) => (
                    <div className="ticker-item" key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>   
        </div>
    );
}

export default MultipleItems;