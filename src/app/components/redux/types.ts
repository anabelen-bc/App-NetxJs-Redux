//Interface 
 export interface Persona {
    nombre: string;
    estado: string;
  }
  

  //A OBSERVAR 

  // Estado Redux
  export interface PersonasState {
    data: Persona[];
    loading: boolean;
    error: string | null;
  }
  
  // Payload para las acciones de Redux
  export interface UsuarioPayload {
    nombre?: string;
    estado?: string;
  }
  
  // Payload para errores de Redux
  export interface ErrorPayload {
    message: string;
  }
  