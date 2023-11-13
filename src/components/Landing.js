import * as React from 'react'
import '../css/aix_base.css'
import '../css/animations.css';

import Alerts from './Alerts/Alerts';

import SolidButtons from './Buttons/SolidButtons';
import OpacityButtons from './Buttons/OpacityButton';
import ActionButton from './Buttons/ActionButton';
import StrokeButton from './Buttons/StrokeButton';

import Inputs from './Inputs/Inputs';
import Switches from './Switches/Switches';
import ProgressBar from './ProgressBars/ProgressBar';
import CheckBoxs from './CheckBoxs/CheckBoxs';
import RadioButtons from './RadioButtons/RadionButtons';

import SegmentControls from './SegmentControls/SegmentControls';
import Pagination from './Pagination/Pagination';

function Landing () {
    return (
      <div className="App">
        <div className='relative flex justify-center w-full h-full body'>
          <div className='flex flex-col items-center gap-10 my-20'>
            <Alerts />
            <SolidButtons />
            <OpacityButtons />
            <ActionButton />
            <StrokeButton />
            <Inputs />
            <Switches />
            <ProgressBar />
            <CheckBoxs />
            <RadioButtons />
            <SegmentControls />
            <Pagination />
          </div>
        </div>
      </div>
    );
}

export default Landing;

/*
Side Controller
Stroke Button
Bread Crumb
Dropdown
*/