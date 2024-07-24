import React from 'react'

const Header = () => {
    const navItem1 = [
        {
            name: 'Media',
            path: ''
        },
        {
            name: 'Pod',
            path: ''
        },
        {
            name: 'Infrastructure',
            path: ''
        },
        {
            name: 'Research',
            path: ''
        },
    ]
    const navItem2 = [
        {
            name: 'Partners',
            path: ''
        },
        {
            name: 'Blog',
            path: ''
        },
        {
            name: 'Team',
            path: ''
        },
        {
            name: 'Contact Us',
            path: ''
        },
        {
            name: 'Ticket Calculator',
            path: ''
        },
    ]
    return (
        <nav className='w-full fixed top-4 z-50'>
            <div className='max-w-7xl mx-auto bg-white shadow-lg shadow-white/60  py-2 rounded-full flex items-center justify-evenly '>
                <div className='flex'>
                    {
                        navItem1?.map(item => {
                            return <div className='text-black px-6 py-3 !font-medium hover:text-indigo-600 cursor-pointer'>{item.name}</div>
                        })
                    }
                </div>
                <img className='h-12' src="https://avishkarhyperloop.com/images/Indexphpwebpfiles/logo.webp" alt="" />
                <div className='flex'>
                    {
                        navItem2?.map(item => {
                            return <div className='text-black px-6 py-3 !font-medium hover:text-indigo-600 cursor-pointer'>{item.name}</div>
                        })
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header