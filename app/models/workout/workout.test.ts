import { workoutDefaultModel, WorkoutModel } from "./workout"

test("can be created", () => {
  const instance = WorkoutModel.create(workoutDefaultModel())

  expect(instance).toBeTruthy()
})
