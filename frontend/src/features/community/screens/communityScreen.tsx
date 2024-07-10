import Feed from "@/components/community/Feed";
import Top from "@/components/community/Top";
import Suggestions from "@/components/community/Suggestions";
import PostBox from "@/components/community/PostBox";
import Recommendations from "@/components/community/Recommendations";

export function CommunityScreen(){
  return (
    <div>
      <div className="w-16 bg-gray-200 flex-shrink-0"></div>
      <div className="flex-1 flex flex-col mx-4 my-4 overflow-auto mr-64">
        <Top/>
        <PostBox/>
        <div className="flex flex-col space-y-4">
          
        </div>
      </div>
      <div
        className="w-64 bg-white flex-shrink-0 fixed top-0 right-0 h-screen flex flex-col justify-between px-4 py-4 overflow-y-auto right-sidebar">
        <Suggestions/>
      </div>
    </div>
  );
}