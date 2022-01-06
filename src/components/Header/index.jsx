import Navbar from './NavBar';

const Header = () => {

    return (
        <header className="content-header">
            <div className="content-logo">
                <img className="logo" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
            </div>
            <div className="content-navbar">
                <Navbar />
            </div>
        </header>
    )
}
export default Header;