import Heading from "../components/Heading.jsx";
import SubHeading from "../components/SubHeading.jsx";
import {InputBox} from "../components/InputBox.jsx";
import {Button} from "../components/Button.jsx";
import {BottomWarning }from "../components/BottomWarning.jsx";


function Signup(){
  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2  px-4">
        <Heading label={"Sign up"}/>
        <SubHeading label={"Enter your information to create an account"}/>
        <InputBox placeholder={"John"} label={"First name"}/>
        <InputBox placeholder={"Doe"} label={"Last name"}/>
        <InputBox placeholder={"johndoe@gmail.com"} label={"Email"}/>
        <InputBox placeholder={""} label={"Password"}/>
        <div className="pt-4">
          <Button label="Sign up"/>
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
      </div>
    </div>
  </div>

}

export default Signup