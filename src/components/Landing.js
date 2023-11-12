import * as React from 'react'
import '../css/aix_base.css'
import '../css/animations.css';

import Alerts from './Alerts/Alerts';
import SolidButtons from './Buttons/SolidButtons';
import OpacityButtons from './Buttons/OpacityButton';

function Landing () {
    return (
      <div className="App">
        <div className='relative flex justify-center w-full h-full body'>
          <div className='flex flex-col items-center gap-10 my-20'>
            <Alerts />
            <SolidButtons />
            <OpacityButtons />
          </div>
        </div>
      </div>
    );
}

export default Landing;
