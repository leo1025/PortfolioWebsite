import { lazy, Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import dynamic from 'next/dynamic'

const ModelComponent = dynamic(() => import('./CustomMesh'), {
    ssr: false
})

function CoolThing() {
    return(
        <div className="coolthing">
            <Suspense fallback={"loading"}>
                <Canvas dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 5] }} shadows={true}>
                    <ambientLight color={"white"} intensity={0.3} />
                    <spotLight intensity={0.35} angle={0.2} penumbra={1} position={[-10, 15, 10]} castShadow />
                    <ModelComponent position={[-.3, -2.2, -1.3]} shadows={true}/>
                    <OrbitControls autoRotate />
                </Canvas>
            </Suspense>
        </div>
    )
}

function SmallCoolThing() {
    return(
        <div className="">
            <p>Cool thing to be put here soon...</p>
        </div>
    )
}

export default CoolThing
export {CoolThing, SmallCoolThing}