import React, { useState, useEffect, useRef } from 'react'

import Dataset1 from './components/Dataset1';
import Dataset2 from './components/Dataset2';
import Dataset3 from './components/Dataset3';
import { Dashboard } from './components/Dashboard';

const App = () => {
  const [switchSelect, setSwitchSelect] = useState("1")
  const [width, setWidth] = useState()
  const bodySwitch = {
    "1" : <Dashboard graphWidth={width}/>,
    "2" : <Dataset1 graphWidth={width} location="nav"/>,
    "3" : <Dataset2 graphWidth={width} location="nav"/>,
    "4" : <Dataset3 graphWidth={width} location="nav"/>,
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
      listItems[i].className = i+1 === item ? "navItem select" : "navItem";
    }
  }

  return (
    <div className='mainContainer' ref={listRef}>
      <nav className="navContainer">
        <h2 className="navHeader">CEONC Dashboard</h2>
        <ul className="navItems" id="items">
          <li className="navItem select" onClick={() => {
            navSelect(1)
            setSwitchSelect("1")
            window.location.reload(false)
          }}>Dashboard</li>
          <li className="navItem" onClick={() => {
            navSelect(2)
            setSwitchSelect("2")
          }}>BE/BEONC</li>
          <li className="navItem" onClick={() => {
            navSelect(3)
            setSwitchSelect("3")
          }}>CEONC</li>
          <li className="navItem" onClick={() => {
            navSelect(4)
            setSwitchSelect("4")
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
