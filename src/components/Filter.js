import React from 'react'
import '../filter.css'

function Filter(props) {

    function handleChange(e) {
        const { value } = e.target;
        console.log(value)

        const countryName = document.querySelectorAll('.country_name');
        countryName.forEach((name) => {
            if (name.textContent.toLowerCase().includes(value.toLowerCase())) {
                name.parentElement.parentElement.style.display = 'block';
            }
            else {
                name.parentElement.parentElement.style.display = 'none';
            }
        })
    }

    return (
        <div className='container_filter'>
            <form className='form'>
                <input type='search' name='search' id='search' placeholder='Search for a country...' onChange={handleChange}></input>
                <button id='search_button' type='button'><i className="fa-solid fa-magnifying-glass"></i></button>

                <div className='container_select'>
                    <select name='select' id='select' className='select' onChange={props.handleChange}>
                        <option value='Filter by region' disabled defaultChecked>Filter by region</option>
                        <option value='All'>All</option>
                        <option value='Africa'>Africa</option>
                        <option value='Americas'>Americas</option>
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