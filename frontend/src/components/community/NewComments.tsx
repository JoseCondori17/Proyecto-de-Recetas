import { Comment } from '@/types/types'; // Asegúrate de que la ruta sea correcta

type NewCommentsProps = {
  comments: Comment[];
};

const NewComments: React.FC<NewCommentsProps> = ({ comments }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4 w-full">
      <p>Comentarios</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.Comentario_id} className="border-t pt-2 mt-2">
            <p className="font-semibold">{`Usuario ${comment.Usuario_id}`}</p>
            <p>{comment.Contenido}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewComments;
