// @ts-nocheck
import { useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"

export default function Swat({...props}: any) {
    const mesh = useRef<any>(null)
    const {nodes} = useGLTF('/swat.glb')
    const {viewport} = useThree()
    useFrame(() => {
        mesh.current.rotation.z += 0.02
    })
    return (
        <group {...props} scale={ viewport.width*20 }>
            <mesh ref={mesh} {...nodes.swatGroup65355} >{/*   // @ts-ignore */}
            </mesh>
        </group>
    )
}
