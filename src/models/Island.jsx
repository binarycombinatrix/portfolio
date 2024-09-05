import React, { useRef, useEffect, useState } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import islandScene from "../assets/3d/island.glb"

export function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) {
  const group = useRef()

  const [counter, setCounter] = useState(0)

  const { nodes, materials, animations } = useGLTF(islandScene)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // console.log("animations are:  ", actions?.Animation)
    actions?.Animation.play()
    setInterval(() => {
      setCounter((count) => count + 1)
    }, 3000)
  }, [])

  useEffect(() => {
    setCurrentStage((counter % 3) + 1)
  }, [counter])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-1.54, -0.064, 2.5]}
          position={[0, 3, 0]}
          scale={35}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Clouds}
                />
              </group>
              <group name="Planet_2">
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Planet}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(islandScene)
