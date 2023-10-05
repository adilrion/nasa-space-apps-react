import  { Suspense } from 'react';
import { Earth } from '../earth';
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei';



export const Banner = () => {
    return (
        <>
            {/* Add your TopSection component here if needed */}

            {/* Main canvas for 3D rendering */}
            <Canvas className='w-screen min-h-screen'>

                
                <Suspense fallback={null}>
                   
                    <Earth />
                </Suspense>

                {/* 2D overlay for text */}
          {/*       <Html>
                    <div style={{ position: 'absolute', top: 10, left: 15, color: 'white', zIndex: 1 }}>
                        <h1>Your Text Here</h1>
                    </div>
                </Html> */}
            </Canvas>
        </>
    );
}

;
