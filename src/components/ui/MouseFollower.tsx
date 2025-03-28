
// import React, { useEffect, useRef, useState } from 'react';

// const MouseFollower = () => {
//   const followerRef = useRef<HTMLDivElement>(null);
//   const [active, setActive] = useState(false);
//   const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
//   const rippleIdRef = useRef(0);

//   useEffect(() => {
//     // Add custom cursor class to body
//     document.body.classList.add('custom-cursor-active');
    
//     const handleMouseMove = (e: MouseEvent) => {
//       if (followerRef.current) {
//         // Smooth following with slight lag for natural feel
//         requestAnimationFrame(() => {
//           if (followerRef.current) {
//             followerRef.current.style.left = `${e.clientX}px`;
//             followerRef.current.style.top = `${e.clientY}px`;
//           }
//         });
//       }
//     };
    
//     const handleMouseDown = () => {
//       setActive(true);
//     };
    
//     const handleMouseUp = () => {
//       setActive(false);
//     };
    
//     const handleClick = (e: MouseEvent) => {
//       // Create ripple effect at click position
//       const newRipple = {
//         id: rippleIdRef.current++,
//         x: e.clientX,
//         y: e.clientY
//       };
      
//       setRipples(prev => [...prev, newRipple]);
      
//       // Remove ripple after animation completes
//       setTimeout(() => {
//         setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
//       }, 800); // Match ripple animation duration
//     };
    
//     // Add event listeners
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mousedown', handleMouseDown);
//     document.addEventListener('mouseup', handleMouseUp);
//     document.addEventListener('click', handleClick);
    
//     // Clean up event listeners
//     return () => {
//       document.body.classList.remove('custom-cursor-active');
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mousedown', handleMouseDown);
//       document.removeEventListener('mouseup', handleMouseUp);
//       document.removeEventListener('click', handleClick);
//     };
//   }, []);
  
//   return (
//     <>
//       <div 
//         ref={followerRef} 
//         className={`mouse-follower ${active ? 'active' : ''}`}
//       />
      
//       {/* Render ripples */}
//       {ripples.map(ripple => (
//         <div
//           key={ripple.id}
//           className="ripple animate-ripple"
//           style={{
//             left: `${ripple.x}px`,
//             top: `${ripple.y}px`
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export default MouseFollower;
