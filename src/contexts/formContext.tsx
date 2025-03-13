import React from "react";
import { useForm, FormProvider as RHFFormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const addressSchema = z.object({
  cep: z.string().length(8, "CEP deve ter 8 caracteres"),
  rua: z.string().min(1, "Rua deve ter pelo menos 1 caractere"),
  bairro: z.string().min(1, "Bairro deve ter pelo menos 1 caractere"),
  cidade: z.string().min(1, "Cidade deve ter pelo menos 1 caractere"),
  estado: z.string().min(1, "Estado deve ter pelo menos 1 caractere"),
  complemento: z.string().optional(),
  numero: z.string().min(1, "Número deve ter pelo menos 1 caractere"),
});

export type AddressFormData = z.infer<typeof addressSchema>;

export const formContext = React.createContext<ReturnType<
  typeof useForm
> | null>(null);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const methods = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    mode: "onChange",
  });

  return <RHFFormProvider {...methods}>{children}</RHFFormProvider>;
}
