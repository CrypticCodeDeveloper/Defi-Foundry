
const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50">
            <img src="/Logo.png" alt="logo" className="max-lg:w-[100px]"/>
            {/*  menu  */}
            <div
                className="text-white bg-[#09251C80] md:flex items-center gap-3 lg:gap-6 p-4 rounded-full text-sm w-[390px] lg:w-[482px] justify-evenly relative hidden"
            >
                {/* Gradient Border */}
                <div className="w-[90%]  h-[1px] absolute bottom-0 bg-gradient-to-r from-transparent via-[#18A57A] to-transparent"></div>
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
            </div>
            <button className="button">Join us</button>
        </nav>
    );
}

export default Navbar