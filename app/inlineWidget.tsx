'use client'
import React from 'react';
import { InlineWidget } from 'react-calendly';

const InlineComponent = () => {
  return (
    <div id="calendly" className="inline-widget flex justify-center items-center w-full ">
      <InlineWidget url="https://calendly.com/shayan-roy31" styles={{height: "800px", borderRadius: "5px"}}/>
    </div>
  );
};

export default InlineComponent;