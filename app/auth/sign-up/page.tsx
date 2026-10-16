"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signUpSchema } from "@/app/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Card className="my-12 xl:my-24">
      <CardHeader>
        <CardTitle className="text-2xl xl:text-4xl m-4 underline">
          Sign Up
        </CardTitle>

        <CardDescription className="text-lg xl:text-xl mx-6">
          Create an account to get started!
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="max-w-5xl mx-auto my-4">
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel className="text-xl font-light">
                    Full Name
                  </FieldLabel>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="p-5 my-2 italic font-bold"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
