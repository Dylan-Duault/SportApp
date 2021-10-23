import { createWorkoutDefaultModel } from "./workout"

test("can be created", () => {
  const instance = createWorkoutDefaultModel()

  expect(instance).toBeTruthy()
})
