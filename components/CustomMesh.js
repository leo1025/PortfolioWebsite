import { GLTFLoader } from 'three/examples/jsm/loaders/gltfloader';
import { useLoader } from '@react-three/fiber';
import { getBaseUrl } from "nextjs-url";

function CustomMesh({...props}) {
  const gltf = useLoader(GLTFLoader, `${getBaseUrl().href}/Anaru.glb`)

  return (
    <mesh {...props} >
      <primitive object={gltf.scene} scale={2.15} />
    </mesh>
  );
}

export default CustomMesh;