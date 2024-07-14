import Heading from "../components/Heading.jsx";
import SubHeading from "../components/SubHeading.jsx";
import { InputBox } from "../components/InputBox.jsx";
import { Button } from "../components/Button.jsx";
import { BottomWarning } from "../components/BottomWarning.jsx";
function Signin(){
  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 px-4">
        <Heading label={"Sign in"}/>
        <SubHeading label={"Enter your credentials to access your account"}/>
        <InputBox placeholder={"johndoe@gmail.com"} label={"Email"}/>
        <InputBox placeholder={""} label={"Password"}/>
        <div className="pt-4">
          <Button label="Sign up"/>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}
export default Signin