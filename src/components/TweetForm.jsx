import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAddPost } from "../services/mutations";

function TweetForm() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { post: "" },
    mode: "onChange",
  });
  const mutation = useAddPost();

  const submitFn = (formData) => {
    console.log(formData);
    axios
      .post("https://reqres.in/api/users", formData)
      .then(() => {
        mutation.mutate(formData);
        toast.success("Kaydedildi");
        reset();
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      {mutation.isPending ? (
        <p>Adding Post </p>
      ) : mutation.isError ? (
        <p>Hata aldım. Sonra tekrar deneyiniz.</p>
      ) : (
        <div className="flex gap-4 p-2 m y-4 items-start border-b-2 border-solid border-b-slate-100">
          <img src="https://picsum.photos/50" className="rounded-full" />
          <form className="grow text-right" onSubmit={handleSubmit(submitFn)}>
            <textarea
              {...register("message")}
              className="w-full p-2"
              placeholder="What's happening"
            />
            <button className="inline-block bg-blue-500 py-2 px-6 rounded-full text-white mt-2">
              Tweet
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default TweetForm;
