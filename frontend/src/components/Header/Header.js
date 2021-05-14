import Logo from './../Logo/Logo';
import Nav from '../Nav/Nav';
import SocialMediaList from '../SocialMediaList/SocialMediaList';

const Header = () => {
    return <header className="header-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <Logo />
                </div>
                <div className="col-lg-6">
                    <Nav />
                </div>
                <div className="col-lg-3">
                    <div className="top-option">
                        <div className="to-social">
                            <SocialMediaList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
};

export default Header;