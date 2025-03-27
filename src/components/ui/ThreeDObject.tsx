
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';

// Rotating mesh that will change based on scroll position
const RotatingMesh = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Animate the mesh rotation
  useFrame(() => {
    if (meshRef.current) {
      // Base rotation speed
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.005;
      
      // Adjust rotation based on scroll position
      const scrollFactor = scrollY * 0.0005;
      meshRef.current.rotation.z = scrollFactor;
      
      // Scale based on scroll position
      const scaleFactor = 1 + Math.sin(scrollY * 0.001) * 0.2;
      meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial 
        color="#1E40AF" 
        wireframe={true}
        emissive="#60A5FA"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

// Main 3D scene
const ThreeDObject = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [scrollY, setScrollY] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div ref={ref} className="threejs-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {inView && <RotatingMesh scrollY={scrollY} />}
      </Canvas>
    </div>
  );
};

export default ThreeDObject;
