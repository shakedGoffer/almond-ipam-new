import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


import { AlertTriangle } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

interface ConfirmDialogProps {
  title: string;
  description?: string;
  dialogTrigger: React.ReactNode;
}

const ConfirmDialog = ({
  title,
  description,
  dialogTrigger,
}: ConfirmDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader className="">
          <DialogTitle className="flex flex-row gap-2 items-center justify-center text-status-error">
            <div className="flex size-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
              <AlertTriangle />
            </div>
            <span>{title}</span>
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 rounded-md border p-4">
          <Checkbox id="confirm" />
          <label className="text-sm font-normal" htmlFor="confirm">
            I understand this action is permanent and irreversible
          </label>
        </div>
        <div className="flex flex-row flex-1 gap-4">
          <Button type="submit" variant="form" className="flex flex-1">
            confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
