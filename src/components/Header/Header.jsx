import {useState} from 'react';
// useState to establish variables that appear on the DOM
// useEffect to call a function when the component is displayed

function Header({color}) {

    // any function or useState go here

    // return what should be displayed on the DOM/rendered
    return (
        <header>
            {/* Inline styling */}
            <h1 style={{backgroundColor: color}}>Hello Phrygian</h1>
            <div>
                {color}
            </div>
        </header>
    )
}

export default Header;