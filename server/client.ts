import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "./";

// Create and export the TRPC client
export const trpc = createTRPCNext({});
