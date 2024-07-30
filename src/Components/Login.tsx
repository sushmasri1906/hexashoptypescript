import { SetStateAction, useState } from "react";
import { useSetRecoilState } from "recoil";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedInState, userInfoState } from "../Store/atoms";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setUserInfo = useSetRecoilState(userInfoState);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleChangeEmail = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Replace with actual login logic (e.g., API call)
    console.log("Logging in with email:", email, "and password:", password);

    // Simulate login by setting Recoil state
    setIsLoggedIn(true);
    setUserInfo({
      email,
      name: ""
    });

    // Reset form fields after submission
    setEmail("");
    setPassword("");

    // Redirect to the previous page
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={email}
            onChange={handleChangeEmail}
            required
          />
        </div>
        <div className="mb-6 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            value={password}
            onChange={handleChangePassword}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-4 text-orange-500 focus:outline-none"
          >
            {showPassword ? (
              <RiEyeOffLine className="h-5 w-5" />
            ) : (
              <RiEyeLine className="h-5 w-5" />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg w-full"
        >
          Login
        </button>
      </form>
      <div className="text-center p-4">
        <p className="text-gray-700">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-orange-500 hover:text-orange-600"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
