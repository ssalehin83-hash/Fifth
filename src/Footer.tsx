
import logo from "./assets/logo-text.png"
const Footer = () => {
    return (
        <div className="grid grid-cols-4 mx-20 my-20">
            <div >
               <img src={logo} alt="" />
               <p className="my-4">Curated tools, technologies, and resources for developers building
                  modern software.</p>
               <div className="">
                <button className="btn btn-neutral mx-3">Github</button>
                <button className="btn btn-neutral mx-3">Twitter</button>
                <button className="btn btn-neutral mx-3">LinkedIn</button>
               </div>
            </div>
            <div className="ml-20">
                <h3 className="font-bold mb-3">PRODUCT</h3>
                <ul>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div className="ml-20">
                <h3 className="font-bold mb-3">COMPANY</h3>
                <ul>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                 <h3 className="font-bold mb-3">LEGAL</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;