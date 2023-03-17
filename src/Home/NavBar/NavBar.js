import { Navbar } from 'flowbite-react';
import React from 'react';

const NavBar = () => {

    const nav =[
        {
            id:1,
            name:"Home",
            link:"/",
        },
        {
            id:2,
            name:"About",
            link:"#about",
        },
        {
            id:3,
            name:"Causes",
            link:"#causes",
        },
        {
            id:4,
            name:"Blog",
            link:"#blog",
        },
        {
            id:5,
            name:"Pages",
            link:"#pages",
        },
        {
            id:6,
            name:"Contact",
            link:"#contact",
        }
    ]

    return (
        <div>
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href="/">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> LOGO </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    {
                        nav.map(n=><Navbar.Link className='text-lg' key={n.id} href={n.link}>{n.name}</Navbar.Link>)
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;