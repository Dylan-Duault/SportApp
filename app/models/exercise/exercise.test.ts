import { createExerciseDefaultModel } from "./exercise"

test("can be created", () => {
  const instance = createExerciseDefaultModel()

  expect(instance).toBeTruthy()
})
