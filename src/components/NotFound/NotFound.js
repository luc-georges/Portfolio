import React from 'react'
import './styles.scss'
import Navbar from '../Navbar/Navbar'

const NotFound = ({Open, setOpen}) => (
    <div className="homepage bg-white"> 
    <a href="/"><Navbar Open={Open} setOpen={setOpen} /></a>
    
    <div className=" flex justify-center items-center h-screen w-screen bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url("404.jpg")' }}>
    <a className="bg-blue-400 text-white  p-4 rounded-xl" href="/"> retour à l'accueil</a>
    </div>
    </div>
);
export default NotFound ;