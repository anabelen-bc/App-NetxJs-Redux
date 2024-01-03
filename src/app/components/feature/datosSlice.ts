import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import intance from '../data/axios'; //Cual utilizar Instance o Axios ?????
import {UsuarioPayload, PersonasState} from '@/app/components/redux/types'
import { UserRequest, UserResponse, UserApiResponse, UserData  } from '../models/UserModels';
import instance from '../data/axios';


// Acción asíncrona para crear un usuario en la API
export const createUsuario = createAsyncThunk<UserResponse, UserRequest>(
  'usuarios/createUsuario',
  async (usuario: UserRequest) => {
    const response = await intance.post('/user/guardar', usuario);
    return response.data;
  }
);

// Acción asíncrona para obtener la lista de usuarios desde la API
export const fetchUsuarios = createAsyncThunk<UserData[], void>(
  'usuarios/fetchUsuarios',
  async () => {
    try {
      const response = await instance.get<UserApiResponse>('/user/listar');
      console.log('Usuarios obtenidos:', response.data.users);
      return response.data.users;
    } catch (error) {
      console.error('Error al obtener usuarios');
      throw error;
    }
  }
);

// Slice de Redux Toolkit
const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState: {data: [], loading: false, error: null as string | null } as { data: UserData[], loading: boolean, error: string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsuarios.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsuarios.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsuarios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(createUsuario.fulfilled, (state, action) => {

        state.data = [action.payload]; // Envolver el usuario en un array
      })
      
      .addCase(createUsuario.rejected, (state, action) => {
        state.error = action.error.message as string;
      })
  },
});

export default usuariosSlice.reducer;
