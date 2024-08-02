import React from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className=" container mx-auto  md:px-20 px-4 bg-zinc-100">
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
          <div className="flex items-start flex-col border p-10 shadow-lg bg-white rounded-lg">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-3xl font-bold">Sign up</h1>

              <label className="input  w-[100%] input-bordered flex items-center gap-2 mt-5 dark:bg-slate-900 dark:text-white border dark:border-white border-black">
                <FaUserAlt />
                <input
                  type="text"
                  className="grow  dark:bg-slate-900 dark:text-white dark:border-white"
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </label>

              <label className="input  w-[100%] input-bordered flex items-center gap-2 mt-5 dark:bg-slate-900 dark:text-white border dark:border-white border-black">
                <MdEmail />
                <input
                  type="text"
                  className="grow  dark:bg-slate-900 dark:text-white dark:border-white"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </label>

              <label className="input  w-[100%] input-bordered flex items-center gap-2 mt-5 dark:bg-slate-900 dark:text-white border dark:border-white border-black">
                <RiLockPasswordFill />
                <input
                  type="text"
                  className="grow  dark:bg-slate-900 dark:text-white dark:border-white"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </label>

              <div className="mt-3 flex items-center gap-20 justify-around">
                <button className="py-2 px-5 bg-secondary text-white rounded-lg hover:bg-pink-400">
                  Sign Up
                </button>
                <a
                  href="/"
                  className="link link-primary text-sm dark:text-white"
                >
                  Already have an account. LogIn
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
