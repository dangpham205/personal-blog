'use client'
import { Canvas } from "@react-three/fiber";
import TransparentDonut from "../models/transparent-donut";
import { Environment, OrbitControls } from "@react-three/drei";
import TrafficLight from "../models/traffic-light";

export default function Scene() {
    return (
        // <Canvas style={{backgroundColor: 'white'}}>
        <Canvas camera={{position: [0.9, 0.4, 0.9]}}>
            {/* <axesHelper/> */}
            <OrbitControls/>
            <directionalLight intensity={3} position={[0,3,2]}/>
            <Environment preset="city"/>
            <TransparentDonut position={[0, 0.1, 0]}/>
            {/* <TrafficLight/> */}
        </Canvas>
    )
}
