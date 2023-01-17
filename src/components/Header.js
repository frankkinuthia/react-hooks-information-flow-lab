import React from "react";


const Header = ({onDarkModeClick, darkMode}) => {
    return (
      <div>
          <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                    {darkMode ? "Dark" : "Light"} Mode
                </button>
            </header>
      </div>    
    )
}

export default Header