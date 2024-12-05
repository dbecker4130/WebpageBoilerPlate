import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const FadeInComponent = ({ text, textColor }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      });
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);
  
    return (
      <div
        ref={elementRef}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 2s ease-in-out',
        }}
      >
        <h1 style={{ 
            textAlign: 'center',
            color: textColor,
            letterSpacing: '.01em',
            fontFamily: 'Anton SC, sans-serif',
            fontSize: '6.25vw',
            fontWeight: 400,
            lineHeight: '95%'
        }}>
        { text }
        </h1>
      </div>
    );
  }

  FadeInComponent.propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.string
  };
  
  export default FadeInComponent;