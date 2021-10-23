import { createWorkoutStoreDefaultModel, WorkoutStoreModel } from "./workout-store"

test("can be created", () => {
  const instance = WorkoutStoreModel.create(createWorkoutStoreDefaultModel())

  expect(instance).toBeTruthy()
})
