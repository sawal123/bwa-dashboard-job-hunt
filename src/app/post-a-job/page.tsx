"use client";
import FieldInput from "@/components/organisms/FieldInput";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { jobFormSchema } from "@/lib/form-shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function PostJobPage() {
  const router = useRouter();
  const home = () => {
    router.push("/");
  };

  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });
  const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
    console.log(val);
  };
  return (
    <div>
      <div
        onClick={home}
        className="inline-flex items-center gap-2 cursor-pointer hover:text-primary"
      >
        <ArrowLeftIcon />
        <span className="text-2xl font-semibold">Post a Job</span>
      </div>
      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-gray-400">
          List out your top perks and benefits
        </div>
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-6 pt-2">
          <FieldInput
            title="Job Title"
            subtitle="Job titles must be describe one potition"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="w-[450px]" placeholder="e.g ..Software Enginer" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
        </form>
      </Form>
    </div>
  );
}

export default PostJobPage;
