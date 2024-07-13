import Heading from "../components/Heading.jsx";
import SubHeading from "../components/SubHeading.jsx";

function Signin(){
  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 px-4">
        <Heading label={"Sign in"}/>
        <SubHeading label={"Enter your credentials to access your account"}/>
      </div>
    </div>
  </div>
}
export default Signin