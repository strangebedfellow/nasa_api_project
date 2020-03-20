import React from 'react';

const ApodTitle = (props) => {
  return <>
    <section className='apod-title'>
      <div className='title'><h1>{props.title}</h1></div>
      <div className='explanation-title'><h1>description</h1></div>
    </section>
  </>
};

export default ApodTitle;