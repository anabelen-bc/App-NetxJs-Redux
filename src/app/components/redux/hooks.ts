import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch} from '@/app/components/redux/store';
import { createUsuario, fetchUsuarios } from '@/app/components/feature/datosSlice';
import { UserRequest, UserResponse } from '@/app/components/models/UserModels';


export const useUsuariosDispatch = () => {
  const dispatch = useDispatch();
  
  const createNewUsuario = (usuario: UserRequest) => {
    dispatch(createUsuario(usuario) as any);
  };

  const fetchAllUsuarios = () => {
    dispatch(fetchUsuarios() as any);
  };

  return { createNewUsuario, fetchAllUsuarios };
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useUsuariosSelector = () => useSelector((state: RootState) => state.usuarios);




