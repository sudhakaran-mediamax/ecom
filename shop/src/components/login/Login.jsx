import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container mx-auto my-16">
      <h3 className="text-3xl font-semibold text-center">
        Login / <span className="text-black/50">Register</span>
      </h3>
      <div className="flex flex-col md:justify-around md:flex-row mt-16 ">
        {/* login */}
        <div className="w-full md:w-[40%]">
          <form id="login_form" className="flex flex-col gap-12">
            <div className="">
              <label htmlFor="email">Email</label>
              <Input
                name="email"
                placeholder="Enter Your Email"
                className="px-0 mt-3"
                type="email"
                required
              />
            </div>
            <div className="">
              <label htmlFor="password">Password</label>
              <Input
                name="password"
                placeholder="Enter Your Password"
                className="px-0 mt-3"
                type="password"
                required
              />
            </div>
          </form>
          <Button className="px-6 py-4 mt-10 uppercase font-semibold tracking-wider text-sm">
            Login
          </Button>
          <Link
            to={"passwordReset"}
            className="text-sm ms-6 underline hover:text-black/70 duration-300 transition-all"
          >
            Lost your password?
          </Link>
        </div>

        {/* logout */}
        <div className="w-full md:w-[40%]">
          <form id="register_form" className="flex flex-col gap-12">
            <div className="">
              <label htmlFor="username">Username</label>
              <Input
                name="username"
                placeholder="Enter Username"
                className="px-0 mt-3"
                type="email"
                required
              />
            </div>
            <div className="">
              <label htmlFor="email">Email</label>
              <Input
                name="email"
                placeholder="Enter Your Email"
                className="px-0 mt-3"
                type="email"
                required
              />
            </div>
            <div className="">
              <label htmlFor="password">Password</label>
              <Input
                name="password"
                placeholder="Enter Your Password"
                className="px-0 mt-3"
                type="password"
                required
              />
            </div>
          </form>
          <Button className="px-6 py-4 mt-10 uppercase font-semibold tracking-wider text-sm">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
