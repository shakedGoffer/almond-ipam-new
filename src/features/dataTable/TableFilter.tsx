import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Filter } from "lucide-react";

import FormInput from "@/components/FormInput";
import { useForm, type SubmitHandler } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";


const TableFilter = () => {
  // Zod schema for form validation
  const SubnetFormSchema = z.object({
    subnetName: z.string().optional(),
    subnetCIDR: z.number().int().gte(4).lte(32).optional().or(z.literal("").transform(() => undefined)), // Alow filed to be ""

    // Custom validation for addresses - allow empty (optional field) or a list of IPv4 addresses (separated by commas)
    addressesList: z.string().refine((value) => {
      if (!value) return true;
      const servers = value.split(",").map((s) => s.trim());
      return servers.every((s) => z.ipv4().safeParse(s).success);
    }, "Invalid IPv4 addresses format (Notice: you can usa a comma to include addresses)"),
  });

  const form = useForm({ resolver: zodResolver(SubnetFormSchema) });

  const onSubmit: SubmitHandler<z.infer<typeof SubnetFormSchema>> = async (
    data,
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form Data:", data);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-2.5 h-fit w-fit rounded-2xl">
          <Filter className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-92 p-5 rounded-xl"
      >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-row flex-1 items-start gap-3">
              <div className="flex-1">
                <FormInput
                  {...form.register("subnetName")}
                  error={form.formState.errors.subnetName?.message}
                  label="Name"
                  className="min-w-50"
                />
              </div>
              <FormInput
                {...form.register("subnetCIDR")}
                error={form.formState.errors.subnetCIDR?.message}
                label="CIDR"
                className="w-14"
                placeholder="24..."
              />
            </div>
            <FormInput
              {...form.register("addressesList")}
              error={form.formState.errors.addressesList?.message}
              label="Addresses List"
              placeholder="1.1.1.1, 1.1.1.2..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row flex-1 gap-4">
              <Button
                type="submit"
                variant="form"
                disabled={form.formState.isSubmitting}
                className="flex flex-1 "
              >
                {form.formState.isSubmitting ? "Loading..." : "Apply"}
              </Button>

              <Button type="reset" variant="outline">
                Cancel
              </Button>
            </div>
            {form.formState.errors.root && (
              <span className="text-sm text-status-error text-center">
                {form.formState.errors.root.message}
              </span>
            )}
          </div>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableFilter;
