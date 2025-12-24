export function mapCreatePatunganToApi(input: {
  title: string;
  targetAmount: number;
}) {
  return {
    title: input.title,
    target_amount: input.targetAmount,
    deadline_at: new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ).toISOString(),
    user_id: "guest"
  };
}
