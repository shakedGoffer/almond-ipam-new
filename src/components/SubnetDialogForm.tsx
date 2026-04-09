import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormInput from "@/components/FormInput";
import { useForm, type SubmitHandler } from "react-hook-form";
import { BookOpen, Globe, Network, Server } from "lucide-react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for form validation
const CreateSubnetFormSchema = z.object({
  subnetName: z.string().min(3, "Subnet name must be at least 3 characters"),
  subnetDescription: z
    .string()
    .max(100, "Subnet description must be less than 100 characters")
    .optional(),
  subnetAddress: z.ipv4(),
  subnetCIDR: z.coerce.number().int().gte(4).lte(32),
  subnetGateway: z.ipv4(),
  // Custom validation for DNS servers - allow empty (optional field) or a list of IPv4 addresses (separated by commas)
  dnsServers: z.string().refine((value) => {
    if (!value) return true;
    const servers = value.split(",").map((s) => s.trim());
    return servers.every((s) => z.ipv4().safeParse(s).success);
  }, "Invalid DNS servers IPv4 addresses format (Notice: you can usa a comma to include addresses)"),
});

type CreateSubnetFormSchemaType = z.infer<typeof CreateSubnetFormSchema>;

interface SubnetDialogFormProps {
  title: string;
  dialogTriger: React.ReactNode;
}

/* Dialog Form for creating a new subnet and editing existing subnets */
const SubnetDialogForm = ({ title, dialogTriger }: SubnetDialogFormProps) => {
  const form = useForm({
    resolver: zodResolver(CreateSubnetFormSchema),
  });

  const onSubmit: SubmitHandler<CreateSubnetFormSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <Dialog>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DialogTrigger asChild className="">
          {dialogTriger}
        </DialogTrigger>

        <DialogContent
          className="bg-form-bg gap-6 my-8 max-w-lg"
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-xl text-center capitalize font-bold ">
              {title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col py-3 gap-4">
            <FormInput
              {...form.register("subnetName", {
                required: "Input is required",
              })}
              error={form.formState.errors.subnetName?.message}
              label="Subnet Name"
              icon={<Network className="size-5" />}
              placeholder="Name..."
            />
            <FormInput
              {...form.register("subnetDescription")}
              error={form.formState.errors.subnetDescription?.message}
              label="Subnet Description"
              icon={<BookOpen className="size-5" />}
              placeholder="Description..."
            />
            <div className="flex flex-row flex-1 items-start gap-3">
              <div className="flex-1">
                <FormInput
                  {...form.register("subnetAddress")}
                  error={form.formState.errors.subnetAddress?.message}
                  label="Subnet Address"
                  placeholder="1.1.1.0..."
                />
              </div>
              <span className="text-primary text-3xl ">/</span>
              <FormInput
                {...form.register("subnetCIDR")}
                error={form.formState.errors.subnetCIDR?.message}
                label="CIDR"
                className="w-14"
                placeholder="24..."
                type="number"
              />
            </div>
            <FormInput
              {...form.register("subnetGateway")}
              error={form.formState.errors.subnetGateway?.message}
              label="Subnet Gateway"
              icon={<Globe className="size-5" />}
              placeholder="1.1.1.254..."
            />
            <FormInput
              {...form.register("dnsServers")}
              error={form.formState.errors.dnsServers?.message}
              label="Subnet DNS Servers"
              icon={<Server className="size-5" />}
              placeholder="1.1.1.1, 1.1.1.2..."
            />
          </div>

          <DialogFooter className="flex flex-col sm:flex-col gap-2">
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
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default SubnetDialogForm;
