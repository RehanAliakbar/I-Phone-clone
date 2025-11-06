import { Html } from "@react-three/drei"

const Loader = () => {
 return (
  <Html>
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-full h-full rounded-full">
    <h1 >Loading...</h1>
    </div>
    </div>
  </Html>
)

}
export default Loader