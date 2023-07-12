"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ColorColumn, columns } from "./columns";
import { ApiList } from "@/components/ui/api-list";

interface ColorClientProps {
  data: ColorColumn[];
}

export const ColorClient = ({ data }: ColorClientProps) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Color (${data.length})`}
          description="Manage Colors for your store."
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/colors/new`)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for Colors." />
      <Separator />
      <ApiList entityIdName="colorId" entityName="colors" />
    </>
  );
};
