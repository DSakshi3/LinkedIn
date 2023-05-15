import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import '../css/Widgets.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

  const newsTopic = (heading, subtitle) => (
    <div className="newsTopic">
        <div className="newsTopic__left">
            <FiberManualRecordIcon className='newsTopic__left__icon'/>
        </div>
        <div className="newsTopic__right">
            <h2>{heading}</h2>
            <p>{subtitle}</p>
        </div>
    </div>
);

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn  News</h2>
            <InfoIcon />  
        </div>
        <div className="widgets__newsTopics">
            {newsTopic("LinkedIn’s Top Voices Green in India", "Top news • 7,342 readers")}
            {newsTopic("Will blocked Twitter users be back?", "3d ago • 228,933 readers")}
            {newsTopic("Moonlighters knock on CA doors", "2d ago • 7,572 readers")}
            {newsTopic("Games24x7 launches ₹400 crore-fund", "3d ago • 7,054 readers")}
            {newsTopic("Google halts Play billing policy", "4d ago • 2,892 readers")}
        </div>
        <div className="widgets__bottom">
          <h3>See more ...</h3>
        </div>
    </div>
  )
}

export default Widgets