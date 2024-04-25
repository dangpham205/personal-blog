import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"

export default function Model() {
    const mesh = useRef<any>(null)
    const {nodes} = useGLTF('/torrus.glb')
    const {viewport} = useThree()
    useFrame(() => {
        mesh.current.rotation.x += 0.02
    })
    return (
        <group scale={ viewport.width/2 }>
            <Text fontSize={0.1} position={[0, 0.3, -0.3]}> &quot;Preoccupied with a single leaf... </Text>
            <Text fontSize={0.1} position={[0, 0.1, -0.3]}> you won&apos;t see the tree. </Text>
            <Text fontSize={0.1} position={[0, -0.1, -0.3]}> Preoccupied with a single tree... </Text>
            <Text fontSize={0.1} position={[0, -0.3, -0.3]}> you&apos;ll miss the entire forest.&quot; </Text>
            <mesh ref={mesh} {...nodes.Torus002}>
                <MeshTransmissionMaterial
                    transmission={1}
                    thickness={0.2}
                    roughness={0}
                    ior={1.2}
                    chromaticAberration={0.02}
                    backside={true}
                />
            </mesh>
        </group>
    )
}
