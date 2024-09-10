import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addPost } from "../store/actions/mainActions";

function TweetForm() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { post: "" },
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const submitFn = (formData) => {
    console.log(formData);
    axios
      .post("https://reqres.in/api/users", formData)
      .then(() => {
        dispatch(addPost(formData.post));
        toast.success("Kaydedildi");
        reset();
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex gap-4 p-2 my-4 items-start border-b-2 border-solid border-b-slate-100">
      <img src="https://picsum.photos/50" className="rounded-full" />
      <form className="grow text-right" onSubmit={handleSubmit(submitFn)}>
        <textarea
          {...register("post")}
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
