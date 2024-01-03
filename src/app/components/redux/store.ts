import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usuariosReducer from '../feature/datosSlice';

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;


const store = configureStore({
  reducer: {
    usuarios: usuariosReducer,

  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;