"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Minus, Plus } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { PhoneInput } from "@/components/ui/phone-input";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
const formSchema = z
  .object({
    new_number_1737789178950: z.coerce.number().gte(1).lte(44).optional(),
    new_number_1737789180613: z.array(z.number()).optional(),
    new_number_1737789182486: z.string().optional(),
    new_number_1737911472436: z.array(z.number()).optional(),
  })
  .strict();

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      new_number_1737789178950: 1,
      new_number_1737789180613: [1],
      new_number_1737789182486: "1",
      new_number_1737911472436: [1, 2],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="new_number_1737789178950"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New number Field</FormLabel>
              <FormControl>
                <Input placeholder="" type="number" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="new_number_1737789180613"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>New number Field</FormLabel>
              <FormControl>
                <Slider
                  className="pt-4"
                  value={field.value}
                  onValueChange={(e: any) => field.onChange(e)}
                  min={22}
                  max={222}
                  step={3}
                />
              </FormControl>
              <FormDescription>zz</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="new_number_1737789182486"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New number Field</FormLabel>
              <FormControl>
                <PhoneInput
                  smartCaret={true}
                  {...field}
                  international
                  placeholder=""
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="new_number_1737911472436"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>New number Field</FormLabel>
              <FormControl>
                <DualRangeSlider
                  className="pt-4"
                  label={(value) => value}
                  value={field.value || [0, 100]}
                  onValueChange={(e: any) => field.onChange(e)}
                  min={2}
                  max={222}
                  step={12}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
