import React from "react";
export const metadata = {
  title: "login Page",
};
export default function login() {
  return (
    <div className="text-center container mt-5 w-50">
      <h1> Sign IN page </h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <label htmlFor="inputPassword5" className="form-label">
        Password
      </label>
      <input
        type="password"
        id="inputPassword5"
        className="form-control"
        aria-describedby="passwordHelpBlock"
      />
      <div id="passwordHelpBlock" className="form-text">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </div>
      <button type="button" className="btn btn-outline-primary w-50">
        SignIn
      </button>
    </div>
  );
}

// "use client";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// // export const metadata = {
// //   title: "login Page",
// // };
// const schema = yup.object().shape({
//   username: yup.string().required("username is required"),
//   email: yup
//     .string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .min(8, "Password must be at least 8 characters")
//     .required("Password is required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "passwords must match")
//     .required("Confirm Password is required"),
// });

// const SignupForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="container w-50 d-flex justify-content-center flex-column align-items-center "
//     >
//       <div className="form-group ">
//         <label>UserName </label>
//         <input {...register("username")} />
//         {errors.username && <p className="error">{errors.username.message}</p>}
//       </div>

//       <div className="form-group">
//         <label> Email</label>
//         <input type="email" {...register("email")} />
//         {errors.email && <p className="error">{errors.email.message}</p>}
//       </div>

//       <div className="form-group">
//         <label> Password</label>
//         <input type="password" {...register("password")} />
//         {errors.password && <p className="error">{errors.password.message}</p>}
//       </div>

//       <div className="form-group">
//         <label> Confirm Password</label>
//         <input type="password" {...register("confirmPassword")} />
//         {errors.confirmPassword && (
//           <p className="error">{errors.confirmPassword.message}</p>
//         )}
//       </div>

//       <button type="submit">sign up</button>
//     </form>
//   );
// };

// export default SignupForm;
