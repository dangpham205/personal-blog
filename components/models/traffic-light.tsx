// @ts-nocheck
import { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

export default function TrafficLight({props}: any) {
  const { nodes, materials } = useGLTF('/traffic_light.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-245.597, -149.746, -236.978]}>
          <group position={[3.051, 136.637, 19.264]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Merged_Geometry.geometry}
              material={nodes.Merged_Geometry.material}
              position={[-0.598, 0.713, 3.844]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse.geometry}
              material={nodes.Ellipse.material}
              position={[0.366, 0.552, 3.149]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_4.geometry}
              material={nodes.Cylinder_4.material}
              position={[0, 0, -1]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 1, 0.996]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_5.geometry}
              material={nodes.Sphere_5.material}
              position={[-0.399, -29.482, 2.717]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_5_1.geometry}
              material={nodes.Sphere_5_1.material}
              position={[-0.399, 29.426, 2.717]}
            />
          </group>
          <group position={[-33.308, 262.42, 0.308]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_21.geometry}
              material={nodes.Cylinder_21.material}
              position={[34.851, 0.864, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_17.geometry}
              material={nodes.Cylinder_17.material}
              position={[-37.576, 0, -0.634]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_16.geometry}
              material={nodes.Cylinder_16.material}
              position={[18.702, 0, -0.634]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_18.geometry}
              material={nodes.Cylinder_18.material}
              position={[-43.471, 0, -0.634]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_15.geometry}
              material={nodes.Cylinder_15.material}
              position={[-6.346, 0, -0.634]}
              rotation={[0, 0, -Math.PI / 2]}
            />
          </group>
          <group position={[-33.308, 162.14, 0.308]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_20.geometry}
              material={nodes.Cylinder_20.material}
              position={[34.851, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_17_1.geometry}
              material={nodes.Cylinder_17_1.material}
              position={[-37.576, 0, -0.634]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_16_1.geometry}
              material={nodes.Cylinder_16_1.material}
              position={[18.702, 0, -0.634]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_18_1.geometry}
              material={nodes.Cylinder_18_1.material}
              position={[-43.471, 0, -0.634]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_15_1.geometry}
              material={nodes.Cylinder_15_1.material}
              position={[-6.346, 0, -0.634]}
              rotation={[0, 0, -Math.PI / 2]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_4.geometry}
            material={nodes.Rectangle_4.material}
            position={[-43.373, 212.564, -5.164]}
          />
          <group position={[133.235, 231.541, 11.667]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_4_1.geometry}
              material={nodes.Rectangle_4_1.material}
              position={[28.657, -0.704, -3.116]}
              scale={[0.683, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_17_2.geometry}
              material={nodes.Cylinder_17_2.material}
              position={[-28.133, -2.049, -10.566]}
              rotation={[Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_16_2.geometry}
              material={nodes.Cylinder_16_2.material}
              position={[-28.133, 5.368, -10.566]}
              rotation={[Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_15_2.geometry}
              material={nodes.Cylinder_15_2.material}
              position={[2.813, 0, 1.704]}
              rotation={[1.833, 0.698, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.green.geometry}
              material={nodes.green.material}
              position={[2.505, -3.048, 9.181]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_4_2.geometry}
              material={nodes.Rectangle_4_2.material}
              position={[2.813, 0.307, -5.581]}
              scale={0.888}
            />
          </group>
          <group position={[133.235, 276.941, 11.667]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_4_3.geometry}
              material={nodes.Rectangle_4_3.material}
              position={[28.657, -0.704, -3.116]}
              scale={[0.683, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_17_3.geometry}
              material={nodes.Cylinder_17_3.material}
              position={[-28.133, -2.049, -10.566]}
              rotation={[Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_16_3.geometry}
              material={nodes.Cylinder_16_3.material}
              position={[-28.133, 5.368, -10.566]}
              rotation={[Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_15_3.geometry}
              material={nodes.Cylinder_15_3.material}
              position={[2.813, 0, 1.704]}
              rotation={[1.833, 0.698, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.green_1.geometry}
              material={nodes.green_1.material}
              position={[2.505, -3.048, 9.181]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_4_4.geometry}
              material={nodes.Rectangle_4_4.material}
              position={[2.813, 0.307, -5.581]}
              scale={0.888}
            />
          </group>
          <group position={[133.235, 324.449, 11.667]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_4_5.geometry}
              material={nodes.Rectangle_4_5.material}
              position={[28.657, -0.704, -3.116]}
              scale={[0.683, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_17_4.geometry}
              material={nodes.Cylinder_17_4.material}
              position={[-28.133, -2.049, -10.566]}
              rotation={[Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_16_4.geometry}
              material={nodes.Cylinder_16_4.material}
              position={[-28.133, 5.368, -10.566]}
              rotation={[Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_15_4.geometry}
              material={nodes.Cylinder_15_4.material}
              position={[2.813, 0, 1.704]}
              rotation={[1.833, 0.698, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.green_2.geometry}
              material={nodes.green_2.material}
              position={[2.505, -3.048, 9.181]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_4_6.geometry}
              material={nodes.Rectangle_4_6.material}
              position={[2.813, 0.307, -5.581]}
              scale={0.888}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_3.geometry}
            material={nodes.Rectangle_3.material}
            position={[136.048, 276.939, -11.326]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_14.geometry}
            material={nodes.Cylinder_14.material}
            position={[136.048, 355.076, -0.326]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_13.geometry}
            material={nodes.Cylinder_13.material}
            position={[136.048, 369.936, -0.326]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_19.geometry}
            material={nodes.Cylinder_19.material}
            position={[-43.271, 212.975, -0.326]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_12.geometry}
            material={nodes.Cylinder_12.material}
            position={[136.048, 384.504, -0.326]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[1.458, 34.746, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={nodes.Rectangle_2.material}
            position={[1.458, -16.254, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <directionalLight intensity={0.7} decay={2} rotation={[-0.506, 0.629, 0.756]} />
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-594.062, 387.235, 705.081]}
          rotation={[-0.502, -0.636, -0.315]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/traffic_light.glb')
