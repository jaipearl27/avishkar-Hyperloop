import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const navItem1 = [
        {
            name: 'Media',
            path: '#'
        },
        {
            name: 'Pod',
            path: '#'
        },
        {
            name: 'Infrastructure',
            path: '#'
        },
        // {
        //     name: 'Research',
        //     path: '#'
        // },
    ]
    const navItem2 = [
        {
            name: 'Partners',
            path: '#'
        },
        {
            name: 'Blog',
            path: '#'
        },
        {
            name: 'Team',
            path: '#'
        },
        {
            name: 'Contact Us',
            path: '/contactUs'
        },
        {
            name: 'Ticket Calculator',
            path: '#'
        },
    ]
    return (
        <nav className='w-full fixed top-4 z-50'>
            <div className='max-w-5xl mx-auto bg-white/80 backdrop-blur-md shadow-lg py-2 rounded-full flex items-center justify-evenly '>
                <div className='flex'>
                    {
                        navItem1?.map(item => {
                            return <div className='text-black px-3 border-b-2 border-transparent hover:border-stone-950 !font-medium hover:text-stone-950 cursor-pointer'>{item.name}</div>
                        })
                    }
                </div>
                <Link to='/'>
                    <img className='h-10' src="http://avishkarhyperloop.com/images/Indexphpwebpfiles/logo.webp" alt="" />
                </Link>
                <div className='flex'>
                    {
                        navItem2?.map(item => {
                            return <Link to={item.path}>
                                <div className='text-black px-3 border-b-2 border-transparent hover:border-stone-950 !font-medium hover:text-stone-950 cursor-pointer'>{item.name}</div>
                            </Link>
                        })
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header