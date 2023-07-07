"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Store } from "@prisma/client";
import { TrashIcon } from "lucide-react";

interface SettingsFormProps {
  initialData: Store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage Store Preferences" />
        <Button variant="destructive" size="sm" onClick={() => {}}>
          <TrashIcon className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};
