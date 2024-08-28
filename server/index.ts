import { aiRouter } from "./routers/ai";
import { mealPlansRouter } from "./routers/mealPlans";
import { router } from "./trpc";

export const appRouter = router({
  ai: aiRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
