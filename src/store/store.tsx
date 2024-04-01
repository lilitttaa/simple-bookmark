import {
  AnyAction,
  ListenerEffectAPI,
  combineReducers,
  configureStore,
  createListenerMiddleware
} from '@reduxjs/toolkit'
import managerReducer, { ManagerState } from './managerSlice'
export const listenerMiddleware = createListenerMiddleware()

const rootReducer = combineReducers({
  manager: managerReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})
console.log(managerReducer)
export type SettingsState = {
  theme: string
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>
export default store
