import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber';

const Sky = ({isRotating}) => {

  const Ref = useRef();
    const sky = useGLTF(skyScene)

    useFrame((_,delta)=>{
      if(isRotating){
        Ref.current.rotation.y += 0.25 * delta;
      }
    })
  return (
    <mesh ref={Ref}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky
