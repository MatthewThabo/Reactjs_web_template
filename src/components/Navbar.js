import React,{useState} from "react";
import { NavLink } from "react-router-dom";
// import { SocialIcon  } from "react-social-icons";


export default function Navbar() {
    const [show,setShow]=useState(true)
//     // grab everything we need
// const btn = document.querySelector('button.mobile-menu-button');
// const menu = document.querySelector('.mobile-menu');

// // add event listeners
// btn.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
// });

    return (
        <header className="bg-red-600">
            <div className="max-w-6xl mx-auto px-4 flex justify-between">
                    <nav className="flex space-x-4">
                        <NavLink 
                            to="/" 
                            exact
                            activeClassName="text-white" 
                            className="inflex-flex items-center py-7 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                            Thabo
                        </NavLink>
                        <NavLink 
                            to="/post"
                            activeClassName="text-red-100 bg-red-700"
                            className="hidden md:flex inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                            Blog Posts
                        </NavLink>
                        <NavLink 
                            to="/project" 
                            activeClassName="text-red-100 bg-red-700"
                            className="hidden md:flex inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                            Projects
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            activeClassName="text-red-100 bg-red-700"
                            className="hidden md:flex inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                            About Me!
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            activeClassName="text-red-100 bg-red-700"
                            className="hidden md:flex inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                            Contact
                        </NavLink>
                    </nav>
                    {/* mobile button goes here */}
                        <div className="md:hidden flex items-center">
                            <button onClick={()=>setShow(!show)} >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
               
            </div>
                 {/* mobile menu */}
                 <div className="md:hidden">
                    {
                     show?<a href="/post" className="block py-2 px-6 text-red-200 text-sm hover:bg-red-700 hover:text-green-800">Blog Posts</a>:null
                    }
                 </div>
                 <div className="md:hidden">
                    {
                     show?<a href="/project" className="block py-2 px-6 text-red-200 text-sm hover:bg-red-700 hover:text-green-800">Projects</a>:null
                    }
                 </div>
                 <div className="md:hidden">
                    {
                     show?<a href="/about" className="block py-2 px-6 text-red-200 text-sm hover:bg-red-700 hover:text-green-800">About Me!</a>:null
                    }
                 </div>
                 <div className="md:hidden">
                    {
                     show?<a href="/contact" className="block py-2 px-6 text-red-200 text-sm hover:bg-red-700 hover:text-green-800">Contact</a>:null
                    }
                 </div>
                       
        </header>
    )
}
 {/* <div className="inline-flex  py-3 px-3 my-6">
                    <SocialIcon  url="https://twitter.com/kapehe_ok" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon  url="https://youtube.com/c/kapehe" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon  url="https://linkedin.com/in/kapehe" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                </div> */}