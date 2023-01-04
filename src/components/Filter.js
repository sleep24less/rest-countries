import React from 'react'
import '../filter.css'

function Filter() {
    return (
        <div className='container_filter'>
            <form className='form'>
                <input type='search' name='search' id='search' placeholder='Search for a country...'></input>
                <button id='search_button' type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>

                <div className='container_select'>
                    <select name='select' id='select' className='select'>
                        <option value='Filter by region' disabled defaultChecked>Filter by region</option>
                        <option value='All'>All</option>
                        <option value='Africa'>Africa</option>
                        <option value='America'>America</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>
                        <option value='Oceania'>Oceania</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filter