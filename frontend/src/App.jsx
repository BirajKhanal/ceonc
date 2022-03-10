import React, { useState, useEffect, useRef } from 'react'

import Dataset1 from './components/Dataset1';
import Dataset2 from './components/Dataset2';

const App = () => {
  const [switchSelect, setSwitchSelect] = useState("1")
  const [width, setWidth] = useState()
  const bodySwitch = {
    "1" : <Dataset1 graphWidth={width}/>,
    "2" : <Dataset2 graphWidth={width}/>,
  }

  const listRef = useRef(0)
  const getListSize = () => {
    const newWidth = listRef.current.offsetWidth
    setWidth(newWidth);
  };

  useEffect(() => {
    getListSize()
    window.addEventListener("resize", getListSize);
  }, [])

  function switcher(itemKey) {
    let switchItem
    Object.keys(bodySwitch).map((key) => {
      if (key === itemKey) {
        switchItem = bodySwitch[key]
      }
      return "Encountered some error"
    })
    return switchItem
  }

  function navSelect(item) {
    let listItems = document.getElementById("items").getElementsByTagName("li");
    let length = listItems.length
    for (let i = 0; i < length; i++) {
      listItems[i].className = i+1 == item ? "navItem select" : "navItem";
    }
  }

  return (
    <div className='mainContainer' ref={listRef}>
      <nav className="navContainer">
        <ul className="navItems" id="items">
          <li className="navItem select" onClick={() => {
            navSelect(1)
            setSwitchSelect("1")
          }}>Quality Improvement Process Reporting</li>
          <li className="navItem" onClick={() => {
            navSelect(2)
            setSwitchSelect("2")
          }}>Onsite Clinical Coaching Mentoring</li>
        </ul>
      </nav>
      <div className="mainBodyContainer">
        {switcher(switchSelect)}
      </div>
    </div>
  );
}

export default App;
