type Comment = {
    id: number;
    user: string;
    text: string;
  };
  
  type LikesCommentsProps = {
    comments?: Comment[];  // comments ahora es opcional
    likes: number;
  };
  
  const LikesComments: React.FC<LikesCommentsProps> = ({ comments = [], likes }) => {
    return (
      <div className="bg-white p-4 rounded-lg flex justify-between items-center shadow-md mt-4 w-full">
        <p>Likes: {likes}</p>
        <p>Comments: {comments.length}</p>
      </div>
    );
  };
  
  export default LikesComments;
  