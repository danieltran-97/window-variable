import React, {useState, useEffect} from 'react';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    //Will be called whenever the useEffect is cleaned up, it will remove the event listener for us
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  return (
    <div>{windowWidth}</div>
  )
};