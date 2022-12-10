// import { GLTFLoader } from 'three/examples/jsm/loaders/gltfloader';
// import { useLoader } from '@react-three/fiber';
// import { getBaseUrl } from "nextjs-url";
// import { useEffect, useState } from "react";

// function CustomMesh({...props}) {
//   const [url, setUrl] = useState(".")

//   useEffect(() => {
//     const baseUrl = getBaseUrl().href; // http://localhost:<PORT>//
//     setUrl(baseUrl)
//   }, []);

//   const gltf = useLoader(GLTFLoader, `${url}/Anaru.glb`)

//   return (
//     <mesh {...props} >
//       <primitive object={gltf.scene} scale={2.15} />
//     </mesh>
//   );
// }

// export default CustomMesh;

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