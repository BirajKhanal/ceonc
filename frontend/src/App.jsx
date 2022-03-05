import React, { useState } from 'react'

import Dataset1 from './components/Dataset1';
import Dataset2 from './components/Dataset2';

const App = () => {
  const [switchSelect, setSwitchSelect] = useState("1")
  const bodySwitch = {
    "1" : <Dataset1 />,
    "2" : <Dataset2 />,
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
          <li className="navItem" onClick={() => setSwitchSelect("1")}>Quality Improvement Process Reporting</li>
          <li className="navItem" onClick={() => setSwitchSelect("2")}>Onsite Clinical Coaching Mentoring</li>
        </ul>
      </nav>
      <div className="mainBodyContainer">
        {switcher(switchSelect)}
      </div>
    </div>
  );
}

export default App;
