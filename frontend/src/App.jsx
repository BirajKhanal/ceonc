import React, { useState } from 'react'

import Dataset1 from './components/Dataset1';
import Dataset2 from './components/Dataset2';
import Dataset3 from './components/Dataset3';
import Dataset4 from './components/Dataset4'
import Dataset5 from './components/Dataset5'

const App = () => {
  const [switchSelect, setSwitchSelect] = useState("1")
  const bodySwitch = {
    "1" : <Dataset1 />,
    "2" : <Dataset2 />,
    "3" : <Dataset3 />,
    "4" : <Dataset4 />,
    "5" : <Dataset5 />,
  }

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

  return (
    <div className='mainContainer'>
      <nav className="navContainer">
        <ul className="navItems">
          <li className="navItem" onClick={() => setSwitchSelect("1")}>Onsite Clinical Coaching Mentoring</li>
          <li className="navItem" onClick={() => setSwitchSelect("2")}>Dataset 2</li>
          <li className="navItem" onClick={() => setSwitchSelect("3")}>Quality Improvement Process Reporting</li>
          <li className="navItem" onClick={() => setSwitchSelect("4")}>Dataset 4</li>
          <li className="navItem" onClick={() => setSwitchSelect("5")}>Dataset 5</li>
        </ul>
      </nav>
      <div className="mainBodyContainer">
        {switcher(switchSelect)}
      </div>
    </div>
  );
}

export default App;
