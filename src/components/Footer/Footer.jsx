import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer">

                {/* Eammu Group Websites Section */}
                <nav className='text-[#696969] font-light text-[18px] '>
                    <header className="text-2xl text-[#4b4b4b] font-bold mb-2">Eammu Group Websites</header>
                    <Link className='mb-[6px]' to='/'><a className="link link-hover hover:text-[#005a31]">Eammu</a></Link>
                    <Link className='mb-[6px]' to='/eammuimmigrationservices'><a className="link link-hover hover:text-[#005a31]">Eammu Immigration Services</a></Link>
                    <Link className='mb-[6px]' to='/eammumarketing'><a className="link link-hover hover:text-[#005a31]">Eammu IT & Marketing Solutions</a></Link>
                    <Link className='mb-[6px]' to='/eammuevent'><a className="link link-hover hover:text-[#005a31]">Eammu Event Management</a></Link>
                    <Link className='mb-[6px]' to='/eammudairy'><a className="link link-hover hover:text-[#005a31]">Eammu Dairy & Poultry Farm</a></Link>
                    <Link className='mb-[6px]' to='/eammufashion'><a className="link link-hover hover:text-[#005a31]">Eammu Fashion</a></Link>
                    <Link className='mb-[6px]' to='/eammutextile'><a className="link link-hover hover:text-[#005a31]">Eammu Textile & Industry</a></Link>
                    <Link className='mb-[6px]' to='/flyzoo'><a className="link link-hover hover:text-[#005a31]">Flyzoo</a></Link>
                </nav>

                {/* Useful Links Section */}
                <nav className='text-[#696969] font-light text-[18px] '>
                    <header className="text-2xl text-[#4b4b4b] font-bold mb-2">Eammu Useful Links</header>
                    <Link className='mb-[6px]' to='/eammunewsfeeds'><a className="link link-hover hover:text-[#005a31]">Eammu Newsfeeds</a></Link>
                    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#005a31]">Eammu Recent Projects</a></Link>
                    <Link className='mb-[6px]' to='/messagefromleadingteam'><a className="link link-hover hover:text-[#005a31]">Our Leading Team</a></Link>
                    <Link className='mb-[6px]' to='/eammucareers'><a className="link link-hover hover:text-[#005a31]">Careers</a></Link>
                    <Link className='mb-[6px]' to='/eammuterms'><a className="link link-hover hover:text-[#005a31]">Terms of use & Privacy policy</a></Link>
                    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#005a31]">Why Choose Us</a></Link>
                </nav>

                {/* Social Media Section */}
                <nav className='text-[#696969] font-light text-[18px] '>
                    <header className="text-2xl text-[#4b4b4b] font-bold mb-2">Eammu Social Media</header>
                    <a className="link link-hover hover:text-[#005a31] mb-[6px]" href="https://facebook.com/eammuimmigrationservices" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a className="link link-hover hover:text-[#005a31] mb-[6px]" href="https://twitter.com/eammu" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a className="link link-hover hover:text-[#005a31] mb-[6px]" href="https://linkedin.com/company/eammu-immigration-services" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="link link-hover hover:text-[#005a31] mb-[6px]" href="https://instagram.com/eammutour" target="_blank" rel="noopener noreferrer">Instagram</a>
                </nav>

                {/* Newsletter Section */}
                <form>
                    <header className="text-2xl text-[#4b4b4b] font-bold mb-2">Newsletter</header>
                    <fieldset className="form-control lg:w-80">
                        <label className="label">
                            <span className="label-text text-[#696969] font-light text-[18px] mb-2">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="info@eammu.com" className="input input-bordered join-item" />
                            <button className="btn bg-[#005a31] text-white hover:text-black join-item">Subscribe</button>
                        </div>

                        {/* Auth Buttons */}
                        <div className="gap-3 mt-3">
                            <Link to='/login'>
                                <h3 className="text-lg bg-[#005a31] text-[#ffffff] hover:bg-white hover:text-[#005a31] hover:shadow-md hover:border-[1.5px] hover:border-[#005a31] btn">
                                    Log in
                                </h3>
                            </Link>
                            <Link to='/signup'>
                                <h3 className="btn text-lg hover:bg-[#005a31] hover:text-[#ffffff] bg-white text-[#005a31] border-[1.5px] border-[#005a31]">
                                    Sign Up
                                </h3>
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </footer>

            {/* Copyright Bottom */}
            <div className="lg:flex justify-around items-center text-center my-16">
                <p>
                    © Copyright 2022 <a className='text-[#005a31] hover:text-gray-600 font-bold' href="https://www.eammu.com/" target="_blank" rel="noopener noreferrer">Eammu</a>, All rights reserved.
                </p>
                <h1 className='text-[#005a31] lg:text-[26px] text-[20px] lg:mt-0 mt-2'>Something New..!</h1>
            </div>
        </div>
    );
};

export default Footer;
