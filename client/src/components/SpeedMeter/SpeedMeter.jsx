// SpeedMeter.jsx
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const SpeedMeter = ({ value, minValue = 0, maxValue = 10 }) => {
  return (
    <ReactSpeedometer
      width={60} // Adjust width as needed
      height={40} // Adjust height as needed
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      needleColor={"black"}
      currentValueText={""} // Set to "" to hide the text
      ringWidth={10

      } // Adjust ring width as needed
      maxSegmentLabels={0} // Set to 0 to hide labels
      needleHeightRatio={0.7} // Adjust needle height ratio as needed
    />
  );
};

export default SpeedMeter;
