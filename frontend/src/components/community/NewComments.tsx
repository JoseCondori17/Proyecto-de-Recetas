type Comment = {
    id: number;
    user: string;
    text: string;
  };
  
  type NewCommentsProps = {
    comments: Comment[];
  };
  
  const NewComments: React.FC<NewCommentsProps> = ({ comments }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mt-4 w-full"> {/* Añadido w-full para ancho completo */}
        <p>Comentarios</p>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="border-t pt-2 mt-2">
              <p className="font-semibold">{comment.user}</p>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default NewComments;
  