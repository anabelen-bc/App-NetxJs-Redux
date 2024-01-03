'use client'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUsuario } from '@/app/components/feature/datosSlice';
import { UserRequest } from '@/app/components/models/UserModels';
import { useAppDispatch } from '../../redux/hooks';

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<UserRequest>({
    nombre: '',
    estado: '',
  });

  const dispatch = useAppDispatch();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Llamamos al dispatch para crear un nuevo usuario

      dispatch(createUsuario(formData));
      window.location.reload();

      // Limpiamos el formulario después de crear el usuario
      setFormData({
        nombre: '',
        estado: '',
      });
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      console.log(formData)
    
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tu Nombre:
        <br />
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          style={{ color: 'black' }}
        />
      </label>
      <br />
      <label>
        Estado:
        <br />
        <input
          type="text"
          name="estado"
          value={formData.estado}
          onChange={handleInputChange}
          style={{ color: 'black' }}
        />
      </label>
      <br />
      <br />
      <button
        type="submit"
        className="bg-green-500 px-3 py-2 rounded-md"
      >
        Enviar
      </button>
    </form>
  );
};

export default UserForm;
