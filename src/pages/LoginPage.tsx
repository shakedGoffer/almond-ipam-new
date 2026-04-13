
import LoginDialogForm from "@/components/dialogs/LoginDialogForm";


const LoginPage = () => {


  return (
    <div className="flex items-center flex-1 justify-center ">
        <LoginDialogForm
        title="Log In"
        description="Welcome back! Please enter your details"
        />
    </div>
  );
};

export default LoginPage;
