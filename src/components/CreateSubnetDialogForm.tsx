import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FormInput from "@/components/FormInput";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Network } from "lucide-react";

type FormSchemaType = {
  subnetName: string;
  subnetDescription: string;
  subnetAddress: string;
  subnetCIDR: string;
};

const CreateSubnetDialogForm = ({ title }: { title: string }) => {
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
      {/* Dialog Form, dissable dialog close on outside interaction */}
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        className="w-md bg-form-bg"
      >
        <DialogHeader>
          <DialogTitle className="text-xl text-center capitalize font-bold">
            {title}
          </DialogTitle>
        </DialogHeader>

        <FormInput
          {...form.register("subnetName", { required: "Input is required" })}
          error={form.formState.errors.subnetName?.message}
          label="Subnet Name"
          icon={<Network className="size-5" />}
        />
        <FormInput
          {...form.register("subnetDescription")}
          error={form.formState.errors.subnetDescription?.message}
          label="Subnet Description"
        />
        <div className="flex flex-row items-center">
          <FormInput
            {...form.register("subnetAddress")}
            error={form.formState.errors.subnetAddress?.message}
            label="Subnet Address"
          />
          <span className="mx-3 text-secondary-text text-3xl ">/</span>
          <FormInput
            {...form.register("subnetCIDR")}
            error={form.formState.errors.subnetCIDR?.message}
            label="CIDR"
          />
        </div>

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
