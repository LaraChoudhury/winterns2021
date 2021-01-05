import React from 'react';
import TajrasComponent from './TajrasComponent.jsx';

const ExampleComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
    <div className='changeClassName'>
        <p className={color}>Random Number: {randomNum}</p>
        <p>{bioToShow}</p>

        {/* { bioToShow === 'Dana' && <DanasComponent /> } */}
         { bioToShow === 'Tajra' && <TajrasComponent /> } 
        {/* { bioToShow === 'Lara' && <LarasComponent /> } */}
        {/* { bioToShow === 'Andrea' && <AndreasComponent /> } */}
        {/* { bioToShow === 'Roma' && <RomasComponent /> } */}
    </ div>
  );
}

export default ExampleComponent;