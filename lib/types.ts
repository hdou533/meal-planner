export const CompletionModel = {
  GPT_3_5_TURBO: "gpt-3.5-turbo",
  GPT_4: "gpt-4",
};
export type CompletionModel =
  (typeof CompletionModel)[keyof typeof CompletionModel];
