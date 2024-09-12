/* eslint-disable react/prop-types */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

function Login({ setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const history = useHistory();

  const submitFormData = (formData) => {
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        toast.success(response.data.email + " başarı ile kaydedildi!..");
        setUser(response.data);
        history.push("/feed");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <form
      className="w-1/4 m-auto flex flex-col gap-6 mt-8"
      onSubmit={handleSubmit(submitFormData)}
    >
      <i className="fa-brands fa-twitter text-blue-500 text-3xl"></i>
      <h1 className="text-2xl font-bold">Log in to Twitter</h1>
      <input
        className="border-2 border-slate-600 p-2"
        {...register("email", {
          required: true,
          pattern: {
            value:
              // eslint-disable-next-line no-useless-escape
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            message: "Geçerli bir email adresi giriniz",
          },
        })}
        placeholder="Email adresinizi giriniz"
        data-testid="login-form-email"
      />
      {errors.email && (
        <div className="text-red-600">{errors.email.message}</div>
      )}
      <input
        className="border-2 border-slate-600 p-2"
        type="password"
        {...register("password", {
          required: true,
          minLength: {
            value: 8,
            message: "Şifreniz en az 8 karakter olmalı",
          },
        })}
        placeholder="Password'unuzu adresinizi giriniz"
      />
      {errors.password && (
        <div className="text-red-600">{errors.password.message}</div>
      )}
      <button
        disabled={!isValid}
        className="text-white bg-blue-500 py-4 text-center w-full rounded-full"
      >
        Log In
      </button>
    </form>
  );
}

export default Login;
20;
