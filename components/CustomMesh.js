import { useGLTF } from '@react-three/drei';
import { getBaseUrl } from "nextjs-url";

function CustomMesh({...props}) {
  const gltf = useGLTF(`${getBaseUrl().href}/Anaru.glb`);

  return (
    <mesh {...props} >
      <primitive object={gltf.scene} scale={2.15} />
    </mesh>
  );
}

export default CustomMesh;