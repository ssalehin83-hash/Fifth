import logo from "./assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="grid grid-cols-3 ml-15 my-5 items-center">
           <img src={logo} alt="" className="ml-15"/>
           <ul className="flex gap-4">
            <li className="text-[#DB2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
           <div>
            <a role="button" className="btn">Sign In</a>
            <button className="btn btn-active btn-secondary rounded-3xl">Secondary</button>
           </div>
        </nav>
    );
};

export default Nav;