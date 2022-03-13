import React, { useState } from 'react'

import Dataset1 from '../Dataset1'
import Dataset2 from '../Dataset2'

export const Dashboard = ({graphWidth}) => {
  const [data, setdata] = useState()
  return (
      <div>
        <div className='topContainer'>
            <div className="box" onClick={() => {
              setdata("year")
            }}>
                Date
            </div>
        </div>
        <Dataset1 graphWidth={graphWidth} data={data} />
        <Dataset2 graphWidth={graphWidth}/>
      </div>
  )
}
