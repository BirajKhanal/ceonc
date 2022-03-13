import React from 'react'

import BcQualityDomain from './BcQualityDomain'
import BcSignalFunction from './BcSignalFunction'
import CeoncQualityDomain from './CeoncQualityDomain'
import CeoncSignalFunction from './CeoncSignalFunction'

const Dataset2 = ({graphWidth, data}) => {
  return (
    <div>
        <h1 className="text-center header-color">Quality Improvement Process Reporting</h1>
        <div className="graphItemsContainer">
          <div className="graphItemContainer">
              <BcQualityDomain graphWidth={graphWidth} data1={data} />
          </div>
          <div className="graphItemContainer">
              <BcSignalFunction graphWidth={graphWidth} data2={data} />
          </div>
          <div className="graphItemContainer">
              <CeoncQualityDomain graphWidth={graphWidth} data3={data} />
          </div>
          <div className="graphItemContainer">
              <CeoncSignalFunction graphWidth={graphWidth} data4={data} />
          </div>
        </div>
    </div>
  )
}

export default Dataset2