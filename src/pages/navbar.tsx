function NavBar() {
    return (    
        <div className="px-10 bg-moon opacity-80">
            <nav className="flex flex-row justify-between mb-12 py-10">  
                <h1 className="text-xl font-roboto">Carson Norman</h1>
                <ul className="flex items-center justify-around w-1/3 flex-wrap">
                    <li className="bg-gradient-to-r from-cyan-500 to-teal-500 border rounded px-1 cursor-pointer text-md mx font-roboto"><a href="#about">About</a> </li>
                    <li className="bg-gradient-to-r from-cyan-500 to-teal-500 border rounded px-1 cursor-pointer text-md font-roboto"> <a href="#work">Work</a></li>
                    <li className="bg-gradient-to-r from-cyan-500 to-teal-500 border rounded px-1 cursor-pointer text-md font-roboto"><a href="#contact">Contact</a> </li>
                </ul>
            </nav>
        </div>
     );
}

export default NavBar;