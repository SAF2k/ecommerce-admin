"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { SizeColumn, columns } from "./columns";
import { ApiList } from "@/components/ui/api-list";

interface SizeClientProps {
  data: SizeColumn[];
}

export const SizeClient = ({ data }: SizeClientProps) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Size (${data.length})`}
          description="Manage Sizes for your store."
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/sizes/new`)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="API calls for Sizes." />
      <Separator />
      <ApiList entityIdName="billboardId" entityName="billboards" />
    </>
  );
};
