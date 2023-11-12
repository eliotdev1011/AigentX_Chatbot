import * as React from 'react'
import '../css/aix_base.css'
import '../css/animations.css';

import Alerts from './Alerts/Alerts';

function Landing () {
    return (
      <div className="App">
        <div className='relative flex justify-center w-full h-full body'>
          <div className='my-20'>
            <Alerts />
          </div>
        </div>
      </div>
    );
}

export default Landing;