import github from "@/public/images/github.svg";
import google from "@/public/images/google.svg";
import CustomIconBtn from "@/components/atoms/CustomIconBtn";

const SignInMethods = () => (
  <>
    <CustomIconBtn src={github} />
    <CustomIconBtn src={google} />
  </>
);

export default SignInMethods;
