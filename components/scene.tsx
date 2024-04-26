'use client'
import { Canvas } from "@react-three/fiber";
import TransparentDonut from "./models/transparent-donut";
import { Environment, OrbitControls } from "@react-three/drei";
import Swat from "./models/swat";

export default function Scene() {
    return (
        // <Canvas style={{backgroundColor: 'white'}}>
        <Canvas camera={{position: [0.2, 0.2, 0.3]}}>
            <OrbitControls/>
            <directionalLight intensity={3} position={[0,3,2]}/>
            <Environment preset="city"/>
            <TransparentDonut/>
            <Swat position={[-0.2,0,0]}/>
        </Canvas>
    )
}
