import React from 'react'

import HFImplement from './HFImplement'
import KnowledgeSkill from './KnowledgeSkill'

const Dataset1 = () => {

  return (
    <div>
        <h1 class="text-center">Onsite Clinical Coaching Mentoring</h1>
        <div className="graphItems">
          <div className="graphItem">
              <HFImplement />
          </div>
          {/* <div className="graphItem">
              <KnowledgeSkill />
          </div> */}
        </div>
    </div>
  )
}

export default Dataset1