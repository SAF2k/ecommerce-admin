'use client';

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from 'react';

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const fromSchema = z.object({
    name: z.string().nonempty({ message: 'Please enter a store name' }),
})

export const StoreModal = () => {
    const storeModal = useStoreModal();
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof fromSchema>>({
        resolver: zodResolver(fromSchema),
        defaultValues: {
            name: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof fromSchema>) => {
        console.log(values);
    }

    return (
      <Modal
        title="Create a store"
        description="Add a new store to mange products and categories"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                     control={form.control}
                     name='name'
                     render={({ field }) => (
                        <FormItem>
                            <FormLabel> Name </FormLabel>
                            <FormControl>
                                <Input disabled={loading} placeholder='E-Commerce' {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                     )}
                    />
                    <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                        <Button disabled={loading} variant="outline" onClick={storeModal.onClose}>
                            Cancel
                        </Button>
                        <Button disabled={loading} type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
          </div>
        </div>
      </Modal>
    );
}