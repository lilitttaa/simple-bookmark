import {
  AnyAction,
  Draft,
  PayloadAction,
  createSelector,
  createSlice
} from '@reduxjs/toolkit'

import { castDraft, castImmutable } from 'immer'
import { BookmarkModel } from '../model/bookmark'
import { RootState } from './store'

export type ManagerState = {
  bookmarks: BookmarkModel[]
}
const initState: ManagerState = {
  bookmarks: []
}

const managerSlice = createSlice({
  name: 'bookmarks',
  initialState: initState,
  reducers: {
    addBookmark: {
      prepare (bookmark: BookmarkModel) {
        return {
          payload: bookmark
        }
      },
      reducer (state, action: PayloadAction<BookmarkModel>) {
        state.bookmarks.push(action.payload)
      }
    },
    deleteBookmark: {
      prepare (id: string) {
        return {
          payload: id
        }
      },
      reducer (state, action: PayloadAction<string>) {
        state.bookmarks = state.bookmarks.filter(
          bookmark => bookmark.id !== action.payload
        )
      }
    }
  }
})

export const { addBookmark, deleteBookmark } = managerSlice.actions

export const selectBookmarks = (state: RootState) => {
  return state.manager.bookmarks
}
export default managerSlice.reducer

// export const selectEditorStack = createSelector([selectEditors, selectCurrentEditorIdStack], (editors, currentEditorIdStack) => {
// 	const stack = [];
// 	for (const editorId of currentEditorIdStack) {
// 		stack.push(editors[editorId]);
// 	}
// 	return stack;
// });

// 定义Thunk Action Creator可以用于处理异步逻辑,延迟dispatch action
// export const thunkTest =
//   (amount: number) =>
//   (dispatch: AppDispatch, getState: typeof store.getState) => {
//     const state = getState()
//     dispatch(deleteSelectedNodes())
//   }
