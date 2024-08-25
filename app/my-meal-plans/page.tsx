import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const MyMealPlansPage = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-5 p-4">
      <h2 className="text-2xl">My Meal Plans</h2>
      <Link href="/meal-planner">
        <Button>Create a Plan</Button>
      </Link>
    </main>
  );
};

export default MyMealPlansPage;
