export const FOOD_UPDATE = "foodCount";

export function updateFood(newValue, newCount) {
  return {
    type: FOOD_UPDATE,
    payload: {
      value: newValue,
      total: newCount
    }
  };
}
