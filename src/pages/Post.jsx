import React from "react";

const PostList = ({posts}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-[90%] max-w-[1420px] m-auto py-10">

      {/* ---posts data--- */}

      {posts.map((data) => (
        <div className="flex flex-col p-2 shadow-2xl gap-2 rounded-2xl bg-amber-50 justify-center">
          <p className="text-purple-800">{data.title}</p>
          <p>{data.body}</p>
          <div className="flex gap-6 mt-4 justify-center items-center bg-purple-100">
            <p>{data.tags[0]}</p>
            <p>{data.tags[1]}</p>
            <p>{data.tags[2]}</p>
          </div>
          <p>❤️{data.reactions.likes}</p>
          <div className="flex gap-3 items-center text-white mt-5">
            <img
              src={data.author.profilePicture}
              alt=""
              className="h-10 w-10 rounded-full"
            />
            <a href="#" className="text-black underline">
              {data.author.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
