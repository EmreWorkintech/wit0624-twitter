import { formatDistanceToNow } from "date-fns";
import Analytics from "./Analytics";
import { tr } from "date-fns/locale";

/* eslint-disable react/prop-types */
function Post(props) {
  const { postItem } = props;

  const date = formatDistanceToNow(postItem.createdAt, {
    addSuffix: true,
    locale: tr,
  });

  return (
    <div className="flex gap-4 p-2 my-4 items-start">
      <img
        src={`https://picsum.photos/50?${Math.floor(Math.random() * 1000)}`}
        className="rounded-full"
      />
      <div className="grow">
        <div>
          <span className="font-bold mr-2 text-lg">{postItem.username}</span>
          <span className=" text-slate-500">{postItem.address}</span> -{" "}
          <span className="text-slate-500">{date}</span>
        </div>
        <div>{postItem.message}</div>
        <Analytics analytics={postItem.analytics} />
      </div>
      <div>...</div>
    </div>
  );
}

export default Post;
