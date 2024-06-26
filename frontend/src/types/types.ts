export type Comment = {
  Post_id: number;
  Comentario_id: number;
  Fecha: string;
  Usuario_id: number;
  Hora: string;
  Likes: number;
  Contenido: string;
};

export interface Post {
  Post_id: number;
  Usuario_id: number;
  Contenido: string;
  Imagen?: string; // Campo opcional para la URL de la imagen
  Likes: number;
  Fecha: string;
  Hora: string;
  Comments?: Comment[];
}
