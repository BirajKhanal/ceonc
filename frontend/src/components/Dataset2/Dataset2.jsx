import React from 'react'

import HFImplement from './HFImplement'
import KnowledgeSkill from './KnowledgeSkill'

const Dataset1 = ({graphWidth}) => {

  return (
    <div>
        <h1 className="text-center header-color">Onsite Clinical Coaching Mentoring</h1>
        <div className="graphItems">
          <div className="graphItem">
              <HFImplement graphWidth={graphWidth}/>
          </div>
          {/* <div className="graphItem">
              <KnowledgeSkill />
          </div> */}
        </div>
    </div>
  )
}

export default Dataset1