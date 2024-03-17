import './StickyButton.scss';
import { useEffect, useState } from 'react';


export function StickyButton(props) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll(target) {
      target = props.target;
      const section = document.getElementById(target);
      if (section) {
        // Calculate the position of the section relative to the viewport
        const sectionPosition = section.getBoundingClientRect().top;
        // You can adjust the offset as needed
        const offset = 500;
        // Show the button when the section is within the viewport
        setShowButton(sectionPosition <= window.innerHeight - offset);
      }
    }

    // Add event listener for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props]);

  return (
   <div className='sticky'>
     {showButton && (
      <a href='#hero'>
        <img src='/imgs/chevron.svg' alt='chevron' className='chevron' />
      </a>
    )}
   </div>
  )
}