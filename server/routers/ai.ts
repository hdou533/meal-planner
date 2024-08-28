import { z } from "zod";
import { router, procedure } from "../trpc";
import { Diet, Goal } from "@/lib/enum";
import { CompletionModel } from "@/lib/types";
import { currentUser } from "@clerk/nextjs/server";

export const aiRouter = router({
  getMealPlan: procedure
    .input(
      z.object({
        age: z.coerce.number().min(1).max(100),
        goal: z.nativeEnum(Goal),
        meals: z.coerce.number().min(2).max(12),
        gender: z.enum(["male", "female"]),
        diet: z.nativeEnum(Diet),
        allergies: z.string(),
        mealPlannerType: z.enum(["daily", "weekly"]),
        model: z.nativeEnum(CompletionModel),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await currentUser();

      try {
        const prompt = getPrompt(input, input.mealPlannerType);
      } catch (error) {}
    }),
});

async function generateMealPlansWithAI(
  age: number,
  diet: string,
  allergies?: string,
  preferences?: string
) {
  // Replace this with your AI logic
  return [
    {
      title: "Meal Plan 1",
      calories: 500,
      ingredients: "Chicken, Broccoli, Rice",
    },
    {
      title: "Meal Plan 2",
      calories: 600,
      ingredients: "Beef, Carrots, Potatoes",
    },
  ];
}
