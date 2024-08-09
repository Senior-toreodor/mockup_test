import './GifContainer.css'; 
import arrow from './assets/Arrow.svg'; 
import { useState, useRef } from 'react';

const GifContainer = () => {
    const [authMethods, setAuthMethods] = useState({
        email: false,
        google: false,
        facebook: false,
        twitter: false,
        sms: false,
        apple: false, 
        metamask: false,
        rainbow: false,
        coinbase: false,
        other:false,
    });

    const panelRef = useRef(null);  

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setAuthMethods(prevMethods => ({
            ...prevMethods,
            [name]: checked,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected Authentication Methods:', authMethods);
        // You can add logic here to handle the selected authentication methods
    };

    const [isOn, setIsOn] = useState(true);
    const [isOnWallets, setIsOnWallets] = useState(true);

    const toggleSwitch = () => {
        setIsOn(!isOn); 
    }; 

    const toggleSwitchWallets = () => {
        setIsOnWallets(!isOnWallets);
    }; 

    return (
        <div className="centralPanel">
            <div className="mainBar">
                <div className="advertismentPanel">
                    <span className="mainText">Decentralized <span className="cursive-word">Cloud</span> Database Marketplace</span>
                    <span className="quoteText">&quot;Like Filecoin for databases&quot;</span>

                    <div className="buttonPannel">
                        <button>
                            Deploy now! <img src={arrow} className="arrow" />
                        </button>
                        <button>
                            View Docs <img src={arrow} className="arrow" />
                        </button>
                        <button>
                            Become a provider <img src={arrow} className="arrow" />
                        </button>
                    </div>
                </div>
                <div className="gradient-border">
                    <div className="auth-panel">
                        <h2>Authentication</h2>
                        <div className="headPanel">
                            <p>Email/sms/Socials</p>
                            <div
                                className={`mainCheckBox ${isOn ? 'on' : 'off'}`}
                                onClick={toggleSwitch}
                            >
                                <div className="mainCheckBoxButton"></div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className={`panel ${isOn ? 'panel-open' : 'panel-closed'}`}
                            ref={panelRef}
                        >
                            <div className="mailDiv">
                                <div className="checkbox-group">
                                    Email
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="email"
                                            checked={authMethods.email}
                                            onChange={handleCheckboxChange}
                                        /> 
                                    </label>
                                </div>
                                <div className="checkbox-group">
                                    SMS
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="sms"
                                            checked={authMethods.sms}
                                            onChange={handleCheckboxChange}
                                        /> 
                                    </label>
                                </div> 
                            </div> 

                        </form>

                        <h2 className="line"></h2>

                        <form onSubmit={handleSubmit} className={`panel ${isOn ? 'panel-open' : 'panel-closed'}`}
                            ref={panelRef}
                        >
                            <div className="mailDiv">
                                <div className="authPanelContent">
                                    <div className="checkbox-group">
                                        Google
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Google"
                                                checked={authMethods.Google}
                                                onChange={handleCheckboxChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="checkbox-group">
                                        Apple
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Apple"
                                                checked={authMethods.Apple}
                                                onChange={handleCheckboxChange}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="checkbox-group">
                                        <span>Twitter</span>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Twitter"
                                                checked={authMethods.Twitter}
                                                onChange={handleCheckboxChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="checkbox-group">
                                        <span>Facebook</span>         
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Facebook"
                                                checked={authMethods.Facebook}
                                                onChange={handleCheckboxChange}
                                            />
                                        </label>
                                    </div>
                                </div> 
                            </div> 
                        </form>

                        <div className="headPanel">
                            <p>Wallets</p>
                            <div
                                className={`mainCheckBox ${isOnWallets ? 'on' : 'off'}`}
                                onClick={toggleSwitchWallets}
                            >
                                <div className="mainCheckBoxButton"></div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className={`walletsPanel ${isOnWallets ? 'panel-open' : 'panel-closed'}`}
                            ref={panelRef}
                        >
                            <div className="mailDiv">
                                <div>
                                    <div className="checkbox-group">
                                        MetaMask
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="MetaMask"
                                                checked={authMethods.Metamask}
                                                onChange={handleCheckboxChange}
                                            />
                                        </label>

                                    </div>
                                    <div className="checkbox-group">
                                        RainBow
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="RainBow"
                                                checked={authMethods.Rainbow}
                                                onChange={handleCheckboxChange}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="checkbox-group">
                                        <span>CoinBase</span>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="CoinBase"
                                                checked={authMethods.Coinbase}
                                                onChange={handleCheckboxChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="checkbox-group">
                                        <span>Other</span>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="Other"
                                                checked={authMethods.Other}
                                                onChange={handleCheckboxChange}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <h2 className="line"></h2>

                        <button type="submit" className="submitButton">Submit</button>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default GifContainer;