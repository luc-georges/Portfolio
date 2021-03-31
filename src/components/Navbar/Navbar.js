import { Link as Links } from 'react-scroll';
import React from 'react';

const Navbar = ({Open, setOpen})=>{

return (
<nav className="shadow-lg shadow-inner fixed w-screen bg-primary z-50 opacity-100" >
<div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
  <div className="relative flex items-center justify-between h-12">
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button onClick={() => { setOpen(!Open) }} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className={Open ? 'hidden  h-6 w-6' : 'block  h-6 w-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg className={Open ? 'block  h-6 w-6' : 'hidden  h-6 w-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex-shrink-0 flex items-center">
        <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
        <span className="text-gray-100">Mon Portfolio</span>
        {/* Mobile NavBar */}
      </div>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          <Links to="top"  activeClass="bg-purple-700" spy={true} smooth={false} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Accueil</Links>
          <Links to="Git" activeClass="bg-purple-700" spy={true} smooth={false} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">GitHub</Links>
          <Links to="Skill" activeClass="bg-purple-700" spy={true} smooth={false} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Compétences</Links>
          <Links to="Formation" activeClass="bg-purple-700" spy={true} smooth={false} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Formation</Links>
          <Links to="Contact" activeClass="bg-purple-700" spy={true} smooth={false} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Links>
        </div>
      </div>
    </div>
  </div>
</div>
<div className={Open ? "block" : "hidden sm:hidden"}>
  <div className="px-2 pt-2 pb-3 space-y-1">

    {/* Desktop NavBar */}

  <Links to="top"  activeClass="bg-purple-700" spy={true} smooth={false} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Accueil</Links>
    <Links to="Git" activeClass="bg-purple-700" spy={true} smooth={false} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Repos GitHub</Links>
    <Links to="Skill" activeClass="bg-purple-700" spy={true} smooth={false} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Compétences</Links>
    <Links to="Formation" activeClass="bg-purple-700" spy={true} smooth={false} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Formation</Links>
    <Links to="Contact" activeClass="bg-purple-700" spy={true} smooth={false} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Links>
  </div>
</div>
</nav>
)
}
export default Navbar;