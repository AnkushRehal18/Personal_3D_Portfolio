import { React, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Island } from '../models/Island';
// import { Sky } from '@react-three/drei';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPostion = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPostion = [0, -6.5, -43];
        } else {
            screenScale = [1, 1, 1];
            screenPostion = [0, -6.5, -43];
        }
        return [screenScale, screenPostion, rotation]
    }


    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPostion;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPostion = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPostion = [0, -4, -4];
        }
        return [screenScale, screenPostion]
    }

    const [islandScale, islandPostion, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();
    return (
        <section className='w-full h-screen relative'>
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <HomeInfo currentStage = {currentStage}/>}
        </div>

            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                    <Bird />
                    <Sky isRotating = {isRotating} />
                    <Island
                        position={islandPostion}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage} />
                    <Plane 
                    isRotating={isRotating}
                    planeScale={planeScale} 
                    planePosition={planePosition}
                    rotation={[0,20,0]}/>
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home
