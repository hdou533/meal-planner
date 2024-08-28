import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const dailyPlans = pgTable("daily_plans", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  email: text("email").notNull(),
  totalCalories: text("total_calories").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const meals = pgTable("meals", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  calories: text("calories").notNull(),
  ingredients: text("ingredients").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  dailyPlanId: uuid("daily_plan_id"),
});

export const dailyPlansRelations = relations(dailyPlans, ({ many }) => ({
  meals: many(meals),
}));

export const mealsRelations = relations(meals, ({ one }) => ({
  author: one(dailyPlans, {
    fields: [meals.dailyPlanId],
    references: [dailyPlans.id],
  }),
}));
