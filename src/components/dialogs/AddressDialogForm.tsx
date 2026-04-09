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
import { BookOpen, MapPinHouse, MonitorCog } from "lucide-react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for form validation
const CreateSubnetFormSchema = z.object({
  addressDescription: z.string(),
  addressMAC: z.mac(),
  addressIP:z.ipv4(),
});

type CreateSubnetFormSchemaType = z.infer<typeof CreateSubnetFormSchema>;

interface AddressDialogFormProps {
  title: string;
  description?: string;
  dialogTrigger: React.ReactNode;
}

/* Dialog Form for creating a new subnet and editing existing subnets */
const AddressDialogForm = ({ title, description, dialogTrigger }: AddressDialogFormProps) => {
  const form = useForm({
    resolver: zodResolver(CreateSubnetFormSchema),
  });

  const onSubmit: SubmitHandler<CreateSubnetFormSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {dialogTrigger}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {title} 
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}  className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <FormInput
              {...form.register("addressDescription")}
              error={form.formState.errors.addressDescription?.message}
              label="Address Description"
              icon={<BookOpen className="size-5" />}
              placeholder="Description..."
            />

             <FormInput
              {...form.register("addressMAC")}
              error={form.formState.errors.addressMAC?.message}
              label="Address MAC"
              icon={<MonitorCog className="size-5" />}
              placeholder="05:B8:TT..."
            />

            <FormInput
              {...form.register("addressIP")}
              error={form.formState.errors.addressIP?.message}
              label="Address IP"
              icon={<MapPinHouse className="size-5" />}
              placeholder="1.1.1.15..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row flex-1 gap-4">
              <Button
                type="submit"
                variant="form"
                disabled={form.formState.isSubmitting}
                onClick={form.handleSubmit(onSubmit)}
                className="flex flex-1 "
              >
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

export default AddressDialogForm;
