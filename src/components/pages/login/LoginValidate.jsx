import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/Firebase";
import { toast } from "react-toastify";
const initialValues = {
  email: "",
  password: "",
};
const validate = (values) => {
  const errors = {};
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Not A valid email address or phone number";
  } else if (!values.password) {
    errors.password = "Please enter a password between 8-20 characters";
  }
  return errors;
};
const LoginValidate = () => {
  const navigate = useNavigate();

  const account = () => {
    navigate("/AccountDropDown");
  };
  const onSubmit = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success("User logged in successfully!!", {
        position: "top-center",
      });
      account();
    } catch (error) {
      toast.error(String(error), { position: "bottom-right" });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="py-20">
      <div className="flex flex-col gap-y-6 md:px-6 lg:p-0 lg:flex-row sm:gap-x-28">
        <div>
          <img src="/images/signup/dl.beatsnoop 1.png" alt="" />
        </div>
        <div className="px-4 sm:p-0 flex flex-col items-start justify-center gap-y-10 lg:w-[26%] md:w-full">
          <h1 className="font-semibold lg:text-3xl font-Inter">
            Log in to Exclusive
          </h1>
          <p>Enter your details below</p>
          <form
            action="authentication"
            className="flex flex-col gap-y-10 w-full"
            onSubmit={formik.handleSubmit}
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email or Phone Number"
              className={
                formik.errors.email
                  ? "border-primary"
                  : "border-0 border-b-2 text-start p-0"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <input
              type="password"
              name="password"
              id="password"
              className={
                formik.errors.password
                  ? "border-primary"
                  : "outline-none border-0 border-b-2 text-start p-0"
              }
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <div className="flex items-center justify-between gap-y-5">
              <button className="bg-primary py-4 px-12 text-secondaryWhite text-xs rounded-sm">
                Log In
              </button>
              <p>
                <a href="" onClick={account} className="text-primary ">
                  Forget Password?
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginValidate;
