import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { useStore } from '@/app/hook/useStore';
import Selector from './selector';

/**
 * 
 * @cpt4567
 * morphTargetDictionary:

이것은 형태 애니메이션 (모프 타겟 애니메이션)에 대한 딕셔너리입니다.
모프 타겟 애니메이션은 하나 이상의 기본 모델 형태에서 다른 모델 형태로의 변형을 나타냅니다.
예를 들어, 얼굴 표정이 변하는 것을 모델링할 때 사용할 수 있습니다.
morphTargetDictionary는 모든 가능한 모프 타겟에 대한 정보를 제공합니다.
morphTargetInfluences:

이것은 각 모프 타겟의 영향도를 나타내는 배열입니다.
각 요소는 모프 타겟에 대한 가중치 (영향도)를 나타내며, 값은 0에서 1 사이의 범위여야 합니다.
0은 해당 모프 타겟의 영향이 없음을 의미하고, 1은 최대 영향을 나타냅니다.
*/

export default function Model() {
  const group = useRef<any>();

  const { nodes, materials, animations } = useGLTF('background/WarkingModel.glb') as any;

  const { actions } = useAnimations(animations, group);

  const state = useStore();
  const texture = useLoader(THREE.TextureLoader, 'background/AdobeStock_617979755.jpeg');

  const { gl, scene } = useThree();

  const rt = new THREE.WebGLCubeRenderTarget(1000);

  rt.fromEquirectangularTexture(gl, texture);

  scene.background = rt.texture;

  useEffect(() => {
    if (state.open) {
      actions['Armature.001|mixamo.com|Layer0']?.play();
    } else {
      actions['Armature.001|mixamo.com|Layer0']?.stop();
    }
  }, [state]);

  return (
    <>
      <Selector>
        <group ref={group} position={[1, -2.3, 1]} dispose={null}>
          <group name="Scene">
            <group name="Armature">
              <primitive object={nodes.Hips} />

              <skinnedMesh
                name="Wolf3D_Hair"
                geometry={nodes.Wolf3D_Hair001.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair001.skeleton}
              />
              <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft001.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft001.skeleton}
                morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
              />
              <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight001.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight001.skeleton}
                morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
              />
              <skinnedMesh
                name="Wolf3D_Body"
                geometry={nodes.Wolf3D_Body001.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Body001.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Body001.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Body001.morphTargetInfluences}
              />
              <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head001.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head001.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
              />
              <skinnedMesh
                name="Wolf3D_Outfit_Bottom"
                geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom001.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom001.morphTargetInfluences}
              />
              <skinnedMesh
                name="Wolf3D_Outfit_Footwear"
                geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Outfit_Footwear001.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Outfit_Footwear001.morphTargetInfluences}
              />
              <skinnedMesh
                name="Wolf3D_Outfit_Top"
                geometry={nodes.Wolf3D_Outfit_Top001.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom001.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom001.morphTargetInfluences}
              />
              <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth001.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth001.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
              />
            </group>
          </group>
        </group>
      </Selector>
    </>
  );
}

useGLTF.preload('background/WarkingModel.glb');
