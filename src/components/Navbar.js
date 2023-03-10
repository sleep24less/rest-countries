import React from 'react'
import '../navbar.css'

function Navbar() {

    // function for dark/light mode toggle //
    function handleChange(e) {
        if (e.target.checked) {
            document.querySelector(':root').classList.add('dark');
        }
        else {
            document.querySelector(':root').classList.remove('dark');
        }
    }

    return (
        <div className='container_navbar'>
            <nav className='navbar'>
                <h1 className='logo'>Where in the world?</h1>
                <label className="switch">
                    <input type="checkbox" onChange={(e) => handleChange(e)}></input>
                    <span className="slider"></span>
                </label >
            </nav>
        </div>
    )
}

export default Navbar