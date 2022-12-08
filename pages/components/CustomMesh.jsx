import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function CustomMesh(props) {
    const gltf = useLoader(GLTFLoader, "/models/AnaruPosed.gltf");

    return (
        <mesh {...props} >
            <primitive object={gltf.scene} scale={2.15} />
        </mesh>
    );
}

export default CustomMesh;