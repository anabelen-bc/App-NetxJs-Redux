import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/components/redux/store';
import { UserResponse, UserData  } from '@/app/components/models/UserModels';
import { useAppDispatch } from '../../redux/hooks';
import { fetchUsuarios } from '@/app/components/feature/datosSlice';

const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const usuariosState = useSelector((state: RootState) => state.usuarios);

  React.useEffect(() => {
    dispatch(fetchUsuarios())
      .catch((error) => {
        console.error('Error al obtener usuarios desde el componente:', error.message);
      });
  }, [dispatch]);

  return (
    <div >
      {usuariosState.loading && <p>Cargando usuarios...</p>}
      {usuariosState.error && <p>Error: {usuariosState.error}</p>}
      {usuariosState.data && usuariosState.data.length > 0 ? (
        <div className='grid grid-cols-3 mx-auto gap-3'>
          {usuariosState.data.map((user: UserData) => (
            <div key={user.id} className="bg-zinc-800 p-4">
              <p>ID: {user.id}</p>
              <p>Nombre: {user.nombre}</p>
              <p>Estado: {user.estado}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
};

export default UserList;
