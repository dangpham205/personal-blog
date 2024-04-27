
import React, { useRef, useState } from 'react'
import { PositionalAudio, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function StoneSculpture({...props}: any) {

    const mesh = useRef<any>(null)
    const { nodes, materials } = useGLTF('/stone-sculpture.gltf/marble_bust_01_4k.gltf')
    const [playAudio, setPlayAudio] = useState(false)

    useFrame(() => {
        mesh.current.rotation.y += 0.01
    })
    return (
        <group {...props} dispose={null}>

        <mesh
            onClick={(e) => setPlayAudio(true)}
            ref={mesh}
            castShadow
            receiveShadow
            //@ts-ignore
            geometry={nodes.marble_bust_01.geometry}
            material={materials.marble_bust_01}
            position={[0, 0.028, 0]}
        />
        {
            playAudio &&
            <PositionalAudio
                position={[0, 0, 3]}
                url="/audio/beat.mp3"
                distance={1}
                autoplay
                loop
            />
        }
        </group>
    )
}

useGLTF.preload('/stone-sculpture.gltf/marble_bust_01_4k.gltf')
