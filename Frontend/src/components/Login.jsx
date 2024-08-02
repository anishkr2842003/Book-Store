import React from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
// All form data receive in data variable here :
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-lg">Login</h3>
              <label className="input input-bordered flex items-center gap-2 mt-5 dark:bg-slate-900 dark:text-white border dark:border-white border-black">
                <MdEmail />
                <input
                  type="email"
                  className="grow dark:bg-slate-900 dark:text-white dark:border-white"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </label>

              <label className="input input-bordered flex items-center gap-2 mt-5 dark:bg-slate-900 dark:text-white border dark:border-white border-black">
                <RiLockPasswordFill />
                <input
                  type="password"
                  className="grow dark:bg-slate-900 dark:text-white dark:border-white"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </label>
              <div className="mt-3 flex items-center justify-around">
                <button className="py-2 px-5 bg-secondary text-white rounded-lg hover:bg-pink-400">
                  Login
                </button>
                <a
                  href="/signup"
                  className="link link-primary text-sm dark:text-white"
                >
                  If you have no account. Sign UP
                </a>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
