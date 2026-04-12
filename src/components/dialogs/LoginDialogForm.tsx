import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormInput from "@/components/FormInput";
import { useForm, type SubmitHandler } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { User } from "lucide-react";

interface LoginDialogFormProps {
  title: string;
  description?: string;
  dialogTrigger?: React.ReactNode;
}

/* Dialog Form for creating a new subnet and editing existing subnets */
const LoginDialogForm = ({
  title,
  description,
  dialogTrigger,
}: LoginDialogFormProps) => {
  // Zod schema for form validation
  const LoginFormSchema = z.object({
    username: z.string().min(1,"Input is required"),
    password: z.string().min(1,"Input is required"),
  });

  const form = useForm({ resolver: zodResolver(LoginFormSchema) });

  const onSubmit: SubmitHandler<z.infer<typeof LoginFormSchema>> = async (data,) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form Data:", data);
    toast.success("Login successfully!");
    form.reset();
  };

  return (
    <Dialog open={true}>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-primary">
            {description}
          </DialogDescription>
        </DialogHeader>
        <form
          className="flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4">
            <FormInput
              {...form.register("username")}
              error={form.formState.errors.username?.message}
              label="User Name"
              icon={<User className="size-5" />}
            />
            <FormInput
              {...form.register("password")}
              error={form.formState.errors.password?.message}
              label="password"
              type="Password"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row flex-1 gap-4">
              <Button type="submit" variant="form" className="flex flex-1"  onSubmit={form.handleSubmit(onSubmit)}>
                {form.formState.isSubmitting ? "Loading..." : "Submit"}
              </Button>
            </div>
            {form.formState.errors.root && (
              <span className="text-sm text-status-error text-center">
                {form.formState.errors.root.message}
              </span>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialogForm;
