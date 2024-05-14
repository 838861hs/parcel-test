import React from "react";
import Tooltip from '@mui/material/Tooltip';
import '../scss/tooltip.scss';

const ToolTipData = {
  suzuki : {
    name: '恵一',
    age: '44'
  },
  tanaka: {
    name: '伸介',
    age: '22'
  }
}

const practisComponent =() => {
  
  return (
    <>
    <div>
      {Object.entries(ToolTipData).map(([key, { name, age }]) => (
        <div key={key}>
          <h3>{name}</h3>
          <p>Age: {age}</p>
          <Tooltip title={
            <React.Fragment>
              <p className="name-class">この人の名前<br />{name}</p>
              <p className="age-class">{age}</p>
            </React.Fragment>
            } className="MyComponent" 
              open={true} 
              arrow>
            <p className="tooltips_text">{name}</p>
          </Tooltip>

        </div>
      ))}

    </div>
    </>
  );
}

export default practisComponent;