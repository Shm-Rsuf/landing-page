
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [toggle, setToggle]=useState(false);
  return (
    <>
    <header className="bg-slate-200 w-full h-20 flex justify-center items-center border border-b-2 shadow-md">
      <nav className="wrapper flex justify-between items-center">
      <Link to="/" className="logo uppercase font-semibold">
        landing-page
      </Link>

          <div className="hidden sm:block">
            <ul className="flex justify-between items-center gap-5">
              <Link to="/" className="cursor-pointer duration-300 hover:underline">FAQ</Link>
              <Link to="/about" className="cursor-pointer duration-300 hover:underline">About</Link>
              <Link to="/contact" className="cursor-pointer duration-300 hover:underline">Contact</Link>
              <Link to="/developers" className="cursor-pointer duration-300 hover:underline">Developers</Link>
              <Link to="/services" className="cursor-pointer duration-300 hover:underline">Services</Link>
            </ul>
          </div>
          <span className="sm:hidden cursor-pointer duration-300 z-20" onClick={()=>setToggle(!toggle)}>{toggle?"On":"off"}</span>
      </nav>
      
    </header>
    {
      toggle && (
        <ul className="sm:hidden w-full h-full bg-slate-500/30 backdrop-blur-3xl fixed top-0 right-0 left-0 bottom-0 z-10 p-20 font-semibold text-2xl">
          <li className="border-b border-slate-400 cursor-pointer duration-300">Home</li>
          <li className="border-b border-slate-400 cursor-pointer duration-300">About</li>
          <li className="border-b border-slate-400 cursor-pointer duration-300">Contact</li>
        </ul>
      )
    }
    </>
  )
}

export default Navbar