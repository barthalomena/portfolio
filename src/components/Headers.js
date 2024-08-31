import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Header(){
const [togglemenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold text-black" href="#">Mena</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li>Home</li>
            <li>About</li>
            <li>projects</li>
            <li>contact</li>

        </ul>
        </nav>
       { togglemenu && <nav className="block md:hidden text-black">
        <ul className="flex flex-col text-white mobile-nav">
            <li>Home</li>
            <li>About</li>
            <li>projects</li>
            <li>contact</li>

        </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!togglemenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}