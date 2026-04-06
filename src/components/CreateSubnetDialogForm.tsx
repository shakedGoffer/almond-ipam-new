import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FormInput from "@/components/FormInput";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Network } from "lucide-react";

type FormSchemaType = {
  subnetName: string;
  password: string;
};

const CreateSubnetDialogForm = ({ title }) => {
  const form = useForm<FormSchemaType>();

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    (async () => {
      // Do something before delay
      console.log("before delay");

      await new Promise((f) => setTimeout(f, 10000000));

      // Do something after
      console.log(data);
    })();
  };

  return (
    <form className="flex flex-col gap-4">
      <DialogContent className="w-md bg-form-bg">
        <DialogHeader>
          <DialogTitle className="text-xl text-center capitalize font-bold">
            {title}
          </DialogTitle>
        </DialogHeader>

        <FormInput
          {...form.register("subnetName", { required: "Input is required" })}
          error={form.formState.errors.subnetName?.message}
          label="Subnet Name"
          icon={<Network className="siz-4" />}
        />
        <FormInput
          {...form.register("password", { required: "Input is required" })}
          error={form.formState.errors.password?.message}
          label="Password"
          type="password"
        />

        <DialogFooter className="flex flex-col sm:flex-col gap-2">
          <Button
            type="submit"
            variant="form"
            disabled={form.formState.isSubmitting}
            onClick={form.handleSubmit(onSubmit)}
            className="flex flex-1 hover:bg-primary-light"
          >
            {form.formState.isSubmitting ? "Loading..." : "Submit"}
          </Button>
          {form.formState.errors.root && (
            <span className="text-sm text-status-error text-center">
              {form.formState.errors.root.message}
            </span>
          )}
        </DialogFooter>
      </DialogContent>
    </form>
  );
};

export default CreateSubnetDialogForm;
