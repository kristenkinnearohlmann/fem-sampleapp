import AuthForm from "../components/authForm";
import signup from "./api/signup";

const Signin = () => {
  return <AuthForm mode="signin" />;
};

Signin.authPage = true;

export default Signin;
