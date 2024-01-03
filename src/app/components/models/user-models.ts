// UserRequest.ts
export interface userrequest {
    nombre: string;
    estado: string;
  }
  
  // UserResponse.ts
  export interface userresponse {
    id: number,
    nombre: string;
    estado: string;
  }

  //Sera redundante(?
  export interface userdata {
    id: number;
    nombre: string;
    estado: string;

  }
  
  export interface userapiresponse {
    message: string;
    users: userdata[];
  }