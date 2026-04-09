import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

type logInFormSchemaType = {
  userName: string;
  password: string;
};

const LoginPage = () => {
  const form = useForm<logInFormSchemaType>();

  const onSubmit: SubmitHandler<logInFormSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center flex-1 justify-center ">
      <Card className="flex flex-col items-center justify-center w-fit h-fit bg-form-bg">
        <CardTitle className="flex flex-col items-center gap-2">
            <h1 className="text-3xl text-sid-bar-primary-text ">Log In</h1>
            <p className="text-primary font-medium text-sm">
              Welcome back! Please enter your details
            </p>
        </CardTitle>
        <CardContent>
          <form className="flex flex-col w-96 gap-4">
            <FormInput
              {...form.register("userName", { required: "Input is required" })}
              error={form.formState.errors.userName?.message}
              label="Username"
            />
            <FormInput
              {...form.register("password", { required: "Input is required" })}
              error={form.formState.errors.password?.message}
              label="Password"
              type="password"
            />
       

            <Button
              type="submit"
              variant="form"
              onClick={form.handleSubmit(onSubmit)}
              className="w-full hover:bg-primary-light"
            >
              {form.formState.isSubmitting ? "Loading..." : "Log In"}
            </Button>
            {form.formState.errors.root && (
              <span className="text-sm text-status-error text-center">
                {form.formState.errors.root.message}
              </span>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
