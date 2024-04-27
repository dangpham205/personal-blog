'use client'
import { Environment, OrbitControls, useEnvironment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import StoneSculpture from '../models/stone-sculpture'

export default function ArtistRoom() {
    return  <Canvas camera={{position: [0.5, 0.5, 0.5]}}>
        <ArtistRoomScene/>
    </Canvas>
}

function ArtistRoomScene() {
    const envMap = useEnvironment({ files: "/hdr/artist_room.hdr"})
    return <>
        <ambientLight/>
        <OrbitControls/>
        {/* <axesHelper/> */}
        <Environment map={envMap} background/>
        <StoneSculpture
            // position={[4, -4, 0]}
        />
    </>
}
