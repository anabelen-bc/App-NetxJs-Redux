// UserRequest.ts
export interface UserRequest {
    nombre: string;
    estado: string;
  }
  
  // UserResponse.ts
  export interface UserResponse {
    id: number,
    nombre: string;
    estado: string;
  }

  //Sera redundante(?
  export interface UserData {
    id: number;
    nombre: string;
    estado: string;

  }
  
  export interface UserApiResponse {
    message: string;
    users: UserData[];
  }