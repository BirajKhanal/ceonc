import React from 'react'

import BcQualityDomain from './BcQualityDomain'
import BcSignalFunction from './BcSignalFunction'
import CeoncQualityDomain from './CeoncQualityDomain'
import CeoncSignalFunction from './CeoncSignalFunction'

const Dataset2 = ({graphWidth}) => {
  return (
    <div>
        <h1 className="text-center header-color">Quality Improvement Process Reporting</h1>
        <div className="graphItems">
          <div className="graphItem">
              <BcQualityDomain graphWidth={graphWidth} />
          </div>
          <div className="graphItem">
              <BcSignalFunction graphWidth={graphWidth} />
          </div>
          <div className="graphItem">
              <CeoncQualityDomain graphWidth={graphWidth} />
          </div>
          <div className="graphItem">
              <CeoncSignalFunction graphWidth={graphWidth} />
          </div>
        </div>
    </div>
  )
}

export default Dataset2