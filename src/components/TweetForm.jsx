function TweetForm() {
  return (
    <div className="flex gap-4 p-2 my-4 items-start border-b-2 border-solid border-b-slate-100">
      <img src="https://picsum.photos/50" className="rounded-full" />
      <form className="grow text-right">
        <textarea
          name="post"
          className="w-full p-2"
          placeholder="What's happening"
        />
        <button className="inline-block bg-blue-500 py-2 px-6 rounded-full text-white mt-2">
          Tweet
        </button>
      </form>
    </div>
  );
}

export default TweetForm;
