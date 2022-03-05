import React from 'react'

import BcQualityDomain from './BcQualityDomain'
import BcSignalFunction from './BcSignalFunction'
import CeoncQualityDomain from './CeoncQualityDomain'
import CeoncSignalFunction from './CeoncSignalFunction'

const Dataset2 = () => {
  return (
    <div>
        <h1 class="text-center">Quality Improvement Process Reporting</h1>
        <div className="graphItems">
          <div className="graphItem">
              <BcQualityDomain />
          </div>
          <div className="graphItem">
              <BcSignalFunction />
          </div>
          <div className="graphItem">
              <CeoncQualityDomain />
          </div>
          <div className="graphItem">
              <CeoncSignalFunction />
          </div>
        </div>
    </div>
  )
}

export default Dataset2