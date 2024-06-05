import Link from "next/link";

const Recommendations = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-bold mb-4">Recomendaciones</h3>
      <Link href="/home/comunity/healthy" passHref>
        <div className="mb-2 block cursor-pointer hover:bg-green-400 h-20 flex items-center justify-center rounded-lg bg-green-300">
          <span className="text-2xl mr-4">🥗</span>
          Healthy
        </div>
      </Link>
      <Link href="/home/comunity/breakfast" passHref>
        <div className="mb-2 block cursor-pointer hover:bg-yellow-400 h-20 flex items-center justify-center rounded-lg bg-yellow-300">
          <span className="text-2xl mr-4">🍳</span>
          Breakfast
        </div>
      </Link>
      <Link href="/home/comunity/sea" passHref>
        <div className="mb-2 block cursor-pointer hover:bg-blue-400 h-20 flex items-center justify-center rounded-lg bg-blue-300">
          <span className="text-2xl mr-4">🐟</span>
          Sea
        </div>
      </Link>
      <Link href="/home/comunity/fast" passHref>
        <div className="mb-2 block cursor-pointer hover:bg-red-400 h-20 flex items-center justify-center rounded-lg bg-red-300">
          <span className="text-2xl mr-4">🍔</span>
          Fast
        </div>
      </Link>
    </div>
  );
};

export default Recommendations;
