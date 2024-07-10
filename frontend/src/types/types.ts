export interface Post {
  Post_id?: number; 
  Usuario_id: number;
  Username: string;
  Contenido: string;
  Imagen?: string;
  Likes: number;
  Fecha: string;
  Hora: string;
  Comments?: Comment[];
}

export interface Comment {
  Comentario_id: number;
  Usuario_id: number;
  Post_id: number;
  Contenido: string;
  Likes: number;
  Fecha: string;
  Hora: string;
}
