import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "@/server";

// export API handler
// @link https://trpc.io/docs/v11/server/adapters
export default createNextApiHandler({
  router: appRouter,
});
