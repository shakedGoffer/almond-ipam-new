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
import { toast } from "sonner";
import { useState } from "react";

interface AddressDialogFormProps {
  title: string;
  variant: "create" | "edit";
  addressType: "dynamic" | "reserved";
  description?: string;
  dialogTrigger: React.ReactNode;
}

/* Dialog Form for creating a new subnet and editing existing subnets */
const AddressDialogForm = ({title, description, variant, addressType, dialogTrigger,}: AddressDialogFormProps) => {
  
  const [dialogOpen, setDialogOpen] = useState(false); // Dialog Open state var

  // Zod schema for form validation
  const AddressFormSchema = z.object({
    addressDescription: z.string(),
    addressMAC: z.mac(),
    addressIP: z.refine((value) => {
      if (variant === "edit" || addressType === "dynamic") return true;
      return z.ipv4().safeParse(value).success;
    }),
  });

  const form = useForm({ resolver: zodResolver(AddressFormSchema) });

  const onSubmit: SubmitHandler<z.infer<typeof AddressFormSchema>> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setDialogOpen(false)
    console.log("Form Data:", data);
    toast.success("Subnet created successfully!");
    form.reset();
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription
            className={
              addressType === "reserved"
                ? "text-address-reserved"
                : "text-address-dynamic"
            }
          >
            {description}
          </DialogDescription>
        </DialogHeader>
        <form
          className="flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
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

            {addressType == "reserved" && variant != "edit" && (
              <FormInput
                {...form.register("addressIP")}
                error={form.formState.errors.addressIP?.message}
                label="Address IP"
                icon={<MapPinHouse className="size-5" />}
                placeholder="1.1.1.15..."
              />
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row flex-1 gap-4">
              <Button type="submit" variant="form" className="flex flex-1 ">
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
