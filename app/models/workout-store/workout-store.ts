import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { createWorkoutDefaultModel, WorkoutModel, WorkoutSnapshot } from "../workout/workout"
import { withEnvironment } from "../extensions/with-environment"

export const WorkoutStoreModel = types
  .model("WorkoutSnapshot")
  .props({
    workouts: types.array(WorkoutModel),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveWorkouts: (WorkoutSnapshots: WorkoutSnapshot[]) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      self.workouts.replace(WorkoutSnapshots)
    },
  }))
  .actions((self) => ({
    getWorkouts: async () => {
      self.saveWorkouts([createWorkoutDefaultModel()])
    },
  }))

type WorkoutStoreType = Instance<typeof WorkoutStoreModel>
export interface WorkoutStore extends WorkoutStoreType {}
type WorkoutStoreSnapshotType = SnapshotOut<typeof WorkoutStoreModel>
export interface WorkoutStoreSnapshot extends WorkoutStoreSnapshotType {}

export const createWorkoutStoreDefaultModel = () =>
  WorkoutStoreModel.create({
    workouts: [createWorkoutDefaultModel()],
  })
