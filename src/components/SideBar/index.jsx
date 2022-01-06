const Sidebar = () => {

    return (
        <div className="content-sidebar">
            <ul className="content-sidebar__icon">
                <li><img className="sidebar-icon__logo" src={process.env.PUBLIC_URL + "/iconYoga.png"} alt="logo" /></li>
                <li><img className="sidebar-icon__logo" src={process.env.PUBLIC_URL + "/iconSwPool.png"} alt="logo" /></li>
                <li><img className="sidebar-icon__logo" src={process.env.PUBLIC_URL + "/iconBiker.png"} alt="logo" /></li>
                <li><img className="sidebar-icon__logo" src={process.env.PUBLIC_URL + "/iconAlter.png"} alt="logo" /></li>
            </ul>
            <p className="content-sidebar__text">copyrigth,SportSee.2020</p>
        </div>
    )
}
export default Sidebar;