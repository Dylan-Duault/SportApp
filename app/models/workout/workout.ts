import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const WorkoutModel = types.model("Workout").props({
  id: types.identifierNumber,
  name: types.string,
  difficulty: types.enumeration(["Beginner", "Medium", "Advanced"]),
  duration: types.integer, // In minutes
  image: types.maybe(types.string),
})

type WorkoutType = Instance<typeof WorkoutModel>
export interface Workout extends WorkoutType {}
type WorkoutSnapshotType = SnapshotOut<typeof WorkoutModel>
export interface WorkoutSnapshot extends WorkoutSnapshotType {}
export const workoutDefaultModel = () => {
  return { id: 1, name: "Aphrodite", difficulty: "Medium", duration: 10 }
}
