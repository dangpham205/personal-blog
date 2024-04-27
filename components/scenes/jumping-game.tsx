'use client'
import { Box, Environment, OrbitControls, Sphere, useEnvironment } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import StoneSculpture from '../models/stone-sculpture'
import { Physics, RigidBody } from '@react-three/rapier'
import { Suspense, useRef, useState } from 'react'
import Swat from '../models/swat'

export default function JumpingGame() {
    return  <Canvas camera={{position: [10, 10, 10], fov: 60}}>
        <color attach="background" args={["#ececec"]}/>
        <Suspense>
            <Physics debug>
                <JumpingGameScene/>
            </Physics>
        </Suspense>
        <axesHelper/>
    </Canvas>
}

function JumpingGameScene() {
    const envMap = useEnvironment({ files: "/hdr/metro.hdr"})
    const {viewport} = useThree()
    const character = useRef<any>()
    const [hover, setHover] = useState(false)

    const jump = () => {
        // character.current.applyImpulse
    }

    return <>
        <ambientLight/>
        <directionalLight position={[-10, 10, 0]} intensity={0.4}/>
        <OrbitControls/>
        <Environment map={envMap} background/>

        <RigidBody position={[0,5,0]} colliders="ball">
            <Swat
                scale={viewport.width*2}
                onPointerEnter={() => setHover(true)}
                onPointerLeave={() => setHover(false)}
                onClick={jump}
            />



            {/* <Sphere>
                <meshStandardMaterial color="black"/>
            </Sphere> */}
        </RigidBody>

        <RigidBody position={[3,5,0]}>
            <Box>
                <meshStandardMaterial color="blue"/>
            </Box>
        </RigidBody>

        <RigidBody name='floor' type='fixed'>
            <Box position={[0,0,0]} args={[10,1,10]}>
                <meshStandardMaterial color="red"/>
            </Box>
        </RigidBody>
    </>
}
