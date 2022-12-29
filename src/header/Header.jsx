import React from 'react';
import {Link} from 'react-router-dom';
import homesvg from '../asset/Icons/homesvg.svg';
import profilePNG from '../asset/Icons/profile.png'

const Header = () =>{
    return(
        <>

    <div className='flex justify-between p-5 border drop-shadow-lg bg-mintcream-400 text-white'>
        <div><img src={homesvg} alt="" className='w-10'/></div>
        <div className='flex justify-between w-1/4 clear-none list-none'>
            <div><li className='drop-shado-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl p-2'><Link to='/home'>Home</Link></li></div>
            <div><li className='drop-shado-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl p-2'><Link to='/contactUs'>Contact us</Link></li></div>
            <div><li className='drop-shado-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl p-2'><Link to='/aboutUs'>About us</Link></li></div>
        </div>
        <div className='flex text-white'>
            <input type="search" name="" id="" className='border-2 border-blue-500 px-2 py-1 focus:outline-0 rounded-2xl bg-blue-500 drop-shadow-lg hover:bg-indigo-500' placeholder='Search Items'/>
        </div>
        <div><img src={profilePNG} className='w-10 drop-shado-lg' alt="" /></div>
    </div>
        
        </>
    )
}
export default Header
