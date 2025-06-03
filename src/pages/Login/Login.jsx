import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signIn } from "../../data/data";
import Button from "../../Ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/validation";
import Errormsg from "../../Components/Error/Errormsg";
import { useAuthQuery } from "./../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  //============================HANDEL FIELDS LOOP ===========
  const renderFields = signIn?.map(({ name, icon, label, type }) => (
    <div key={name} className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6c757d] text-xl">
        {icon && React.createElement(icon)}
      </span>
      <input
        type={type}
        placeholder={label}
        name={name}
        {...register(name)}
        className="w-full border-b-2 border-[#6c757d] px-10 py-4 focus:outline-none bg-transparent text-white"
      />
      {errors && <Errormsg msg={errors[name]?.message} />}
    </div>
  ));
  //============================HANDEL SUBMIT DATA ===========
  const { mutate, isPending, error } = useAuthQuery();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        console.log(res?.data?.data, "from login ");
        localStorage.setItem("userData", JSON.stringify(res?.data)); // stringify هنا
        toast.success("Login Success");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      },
      onError: () => {
        toast.error("Login Failed");
      },
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#141414] px-4">
      <div className="bg-[#111] p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-center text-[20px] mb-6 text-white">Login</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-8"
        >
          {renderFields}
          <Button
            loading={isPending}
            style={
              "w-full bg-[rgba(255,0,0,0.8)] text-white py-3 rounded-md hover:bg-[#ff0000] transition flex justify-center items-center gap-2"
            }
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
