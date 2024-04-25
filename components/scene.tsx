'use client'
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import { Environment } from "@react-three/drei";

export default function Scene() {
    return (
        // <Canvas style={{backgroundColor: 'white'}}>
        <Canvas>
            <directionalLight intensity={3} position={[0,3,2]}/>
            <Environment preset="city"/>
            <Model/>
        </Canvas>
    )
}
