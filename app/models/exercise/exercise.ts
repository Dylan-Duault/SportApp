import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ExerciseModel = types.model("Exercise").props({
  id: types.identifierNumber,
  name: types.string,
})

type ExerciseType = Instance<typeof ExerciseModel>
export interface Exercise extends ExerciseType {}
type ExerciseSnapshotType = SnapshotOut<typeof ExerciseModel>
export interface ExerciseSnapshot extends ExerciseSnapshotType {}
export const createExerciseDefaultModel = () =>
  ExerciseModel.create({
    id: 1,
    name: "Burpees",
  })
