// Components
import { PageIcon } from "../../shared";
import { FormField } from "@/components";
import { MainButton } from "@/components";

const HomePage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-[#4D488C] py-16 px-28 grid grid-cols-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[1520px] rounded-lg">
        <div>
          <div>
            <PageIcon classNames="cursor-pointer" color="green" />
          </div>
          <p className="text-white text-sm mt-16">START FOR FREE</p>
          <h1 className="text-white text-6xl">Create notes and save.</h1>
          <form action="" className="flex flex-col gap-5 mt-8">
            <div>
              <FormField
                labelValue="Email"
                formFieldType="email"
                required={true}
                placeholder="Enter Email..."
                inputId="user_email"
              />
            </div>
            <div>
              <FormField
                labelValue="Password"
                formFieldType="password"
                required={true}
                placeholder="Enter Password..."
                inputId="user_password"
              />
            </div>
            <div>
              <MainButton backgroundColor="blue" text="Login" borderRounded="4px" />
              <MainButton text="Create Account" borderRounded="4px" />
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
