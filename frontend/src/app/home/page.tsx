// pages/community.tsx
import Feed from '@/components/community/Feed';
import Top from '@/components/community/Top';
import Suggestions from '@/components/community/Suggestions';
import Recommendations from '@/components/community/Recommendations';

const Community = () => {
  return (
    <div>
      <aside className="w-16 bg-gray-200 flex-shrink-0"></aside>
      <div className="flex-1 flex flex-col mx-4 my-4 overflow-auto w-full mr-80">
        <Top />
        <Feed /><Feed /><Feed />
      </div>
      <aside className="w-80 bg-white flex-shrink-0 fixed top-0 right-0 h-screen flex flex-col justify-between px-4 py-4 overflow-hidden">
        <Suggestions />
        <Recommendations />
      </aside>
    </div>
  );
};

export default Community;
