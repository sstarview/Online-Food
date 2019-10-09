export const FOOD_UPDATE = "foodCount";

export function updateFood() {
  return {
    type: FOOD_UPDATE,
    payload: {
      total: 1
    }
  };
}
