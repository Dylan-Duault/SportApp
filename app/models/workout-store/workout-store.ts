import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { WorkoutModel, WorkoutSnapshot } from "../workout/workout"
import { withEnvironment } from "../extensions/with-environment"
import { createExerciseDefaultModel } from "../exercise/exercise"
import _ from "lodash"

export const WorkoutStoreModel = types
  .model("WorkoutSnapshot")
  .props({
    workouts: types.optional(types.array(WorkoutModel), []),
    currentWorkout: types.maybeNull(WorkoutModel),
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
      self.saveWorkouts(getWorkoutList())
    },
  }))
  .actions((self) => ({
    setCurrentWorkout: async (workout: WorkoutSnapshot) => {
      self.currentWorkout = WorkoutModel.create(_.cloneDeep(workout))
    },
  }))

type WorkoutStoreType = Instance<typeof WorkoutStoreModel>
export interface WorkoutStore extends WorkoutStoreType {}
type WorkoutStoreSnapshotType = SnapshotOut<typeof WorkoutStoreModel>
export interface WorkoutStoreSnapshot extends WorkoutStoreSnapshotType {}

export const getWorkoutList = (): WorkoutSnapshot[] => {
  return [
    WorkoutModel.create({
      id: 1,
      name: "Aphrodite",
      difficulty: "Medium",
      duration: 10,
      exercises: [createExerciseDefaultModel()],
    }),
    WorkoutModel.create({
      id: 2,
      name: "Autre",
      difficulty: "Medium",
      duration: 10,
      exercises: [createExerciseDefaultModel()],
    }),
  ]
}
export const createWorkoutStoreDefaultModel = () =>
  WorkoutStoreModel.create({
    workouts: getWorkoutList(),
  })
