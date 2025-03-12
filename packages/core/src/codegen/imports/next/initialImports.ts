export const nextInitialImports = `"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "{{importAliasComponents}}/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "{{importAliasComponents}}/form"
import { cn } from "{{importAliasUtils}}"
import { Input } from "{{importAliasComponents}}/input"
`;
