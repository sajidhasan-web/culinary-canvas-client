import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/FirebaseProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import InputBox from "./InputBox";
import PageHeaderBanner from "../../Components/PageHeaderBanner/PageHeaderBanner";
import { Helmet } from "react-helmet-async";

const Signin = () => {


      
    const {loginUser, logInWithGoogle, logInWithGithub} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      

        loginUser(email, password)
        .then(result => {
            console.log(result.user)
            toast.success('User successfully logged in!')
            navigate(from)
        })
        .catch(error => {
            console.log(error)
            toast.error(error.message)
        })
    }

    const handleGoogleLogin = () =>{
        logInWithGoogle()
        .then(result =>{
            console.log(result.user)
            toast.success('User successfully logged in!')
            navigate(from)

        })
        .catch(error => {
            console.log(error)
            toast.error(error.message)
        })
    }
    const handleGithubLogin = () =>{
      logInWithGithub()
        .then(result =>{
            console.log(result.user)
            toast.success('User successfully logged in!')
            navigate(from)

        })
        .catch(error => {
            console.log(error)
            toast.error(error.message)
        })
    }



  return (
    <>
       <PageHeaderBanner pageName={'Sign In'}></PageHeaderBanner>
    
      <section className="overflow-hidden pt-10 pb-12  lg:pb-[90px] bg-white dark:bg-dark">
      <Helmet>
                 <title>CulinaryCanvas | Sign in</title>
            </Helmet>
        <div className="container mx-auto">
          <div className="flex justify-between flex-col-reverse md:flex-row flex-wrap items-center  -mx-4">
            <div className="px-4 w-full lg:w-[40%]">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/bbZtX7H/Vegetable-Curry.jpg"
                      alt=""
                      className="w-full rounded-md"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/ftmnFhT/Spaghetti-Carbonara.jpg"
                      alt=""
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/DKBSkqY/Quinoa-Salad.jpg"
                      alt=""
                      className="w-full rounded-md"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="16.3333"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="45.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="60.3334"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="88.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="117.667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="74.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={31}
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={103}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={132}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={31}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={31}
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={103}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={103}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={132}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={132}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={31}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={31}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={103}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={103}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={132}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={132}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={31}
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={31}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={103}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={103}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={132}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#8B755A"
                        />
                        <circle
                          cx={132}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
                {/* signin form */}
               <div className="bg-gray-1 border rounded-md dark:bg-dark py-10 w-full lg:w-[40%]">
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                            <div className="mb-10 text-center md:mb-16">
                                <a
                                href="/#"
                                className="mx-auto inline-block max-w-[160px]"
                                >
                                <img
                                    src="logo.png"
                                    alt="logo"
                                />
                                </a>
                            </div>
                            <form onSubmit={handleLogin}>
                                <InputBox type="email" name="email" placeholder="Email" />
                                <InputBox
                                type="password"
                                name="password"
                                placeholder="Password"
                                />
                                <div className="mb-10">
                                <input
                                    type="submit"
                                    value="Sign In"
                                    className="w-full cursor-pointer rounded-md border  bg-[#8B755A] px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                                />
                                </div>
                            </form>
                            <p className="mb-6 text-base text-secondary-color dark:text-dark-7">
                                sign in with
                            </p>
                            <ul className="-mx-2 mb-12 flex justify-between">
                                <li onClick={handleGithubLogin} className="w-full px-2">
                                <a
                            
                                    className="flex h-11 items-center text-white justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90"
                                >
                                    <FaGithub size={20}/>
                                </a>
                                </li>
                            
                                <li onClick={handleGoogleLogin} className="w-full px-2">
                                <a
                                    
                                    className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                                >
                                    <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                                        fill="white"
                                    />
                                    </svg>
                                </a>
                                </li>
                            </ul>
                            <a
                                href="/#"
                                className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
                            >
                                Forget Password?
                            </a>
                            <p className="text-base text-body-color dark:text-dark-6">
                                <span className="pr-0.5">Not a member yet?</span>
                                <Link
                                to={"/sign-up"}
                                className="text-primary hover:underline"
                                >
                                Sign Up
                                </Link>
                            </p>

                            <div>
                                <span className="absolute right-1 top-1">
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                    cx="1.39737"
                                    cy="38.6026"
                                    r="1.39737"
                                    transform="rotate(-90 1.39737 38.6026)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="1.39737"
                                    cy="1.99122"
                                    r="1.39737"
                                    transform="rotate(-90 1.39737 1.99122)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="13.6943"
                                    cy="38.6026"
                                    r="1.39737"
                                    transform="rotate(-90 13.6943 38.6026)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="13.6943"
                                    cy="1.99122"
                                    r="1.39737"
                                    transform="rotate(-90 13.6943 1.99122)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="25.9911"
                                    cy="38.6026"
                                    r="1.39737"
                                    transform="rotate(-90 25.9911 38.6026)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="25.9911"
                                    cy="1.99122"
                                    r="1.39737"
                                    transform="rotate(-90 25.9911 1.99122)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="38.288"
                                    cy="38.6026"
                                    r="1.39737"
                                    transform="rotate(-90 38.288 38.6026)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="38.288"
                                    cy="1.99122"
                                    r="1.39737"
                                    transform="rotate(-90 38.288 1.99122)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="1.39737"
                                    cy="26.3057"
                                    r="1.39737"
                                    transform="rotate(-90 1.39737 26.3057)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="13.6943"
                                    cy="26.3057"
                                    r="1.39737"
                                    transform="rotate(-90 13.6943 26.3057)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="25.9911"
                                    cy="26.3057"
                                    r="1.39737"
                                    transform="rotate(-90 25.9911 26.3057)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="38.288"
                                    cy="26.3057"
                                    r="1.39737"
                                    transform="rotate(-90 38.288 26.3057)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="1.39737"
                                    cy="14.0086"
                                    r="1.39737"
                                    transform="rotate(-90 1.39737 14.0086)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="13.6943"
                                    cy="14.0086"
                                    r="1.39737"
                                    transform="rotate(-90 13.6943 14.0086)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="25.9911"
                                    cy="14.0086"
                                    r="1.39737"
                                    transform="rotate(-90 25.9911 14.0086)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="38.288"
                                    cy="14.0086"
                                    r="1.39737"
                                    transform="rotate(-90 38.288 14.0086)"
                                    fill="#8B755A"
                                    />
                                </svg>
                                </span>
                                <span className="absolute bottom-1 left-1">
                                <svg
                                    width="29"
                                    height="40"
                                    viewBox="0 0 29 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                    cx="2.288"
                                    cy="25.9912"
                                    r="1.39737"
                                    transform="rotate(-90 2.288 25.9912)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="14.5849"
                                    cy="25.9911"
                                    r="1.39737"
                                    transform="rotate(-90 14.5849 25.9911)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="26.7216"
                                    cy="25.9911"
                                    r="1.39737"
                                    transform="rotate(-90 26.7216 25.9911)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="2.288"
                                    cy="13.6944"
                                    r="1.39737"
                                    transform="rotate(-90 2.288 13.6944)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="14.5849"
                                    cy="13.6943"
                                    r="1.39737"
                                    transform="rotate(-90 14.5849 13.6943)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="26.7216"
                                    cy="13.6943"
                                    r="1.39737"
                                    transform="rotate(-90 26.7216 13.6943)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="2.288"
                                    cy="38.0087"
                                    r="1.39737"
                                    transform="rotate(-90 2.288 38.0087)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="2.288"
                                    cy="1.39739"
                                    r="1.39737"
                                    transform="rotate(-90 2.288 1.39739)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="14.5849"
                                    cy="38.0089"
                                    r="1.39737"
                                    transform="rotate(-90 14.5849 38.0089)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="26.7216"
                                    cy="38.0089"
                                    r="1.39737"
                                    transform="rotate(-90 26.7216 38.0089)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="14.5849"
                                    cy="1.39761"
                                    r="1.39737"
                                    transform="rotate(-90 14.5849 1.39761)"
                                    fill="#8B755A"
                                    />
                                    <circle
                                    cx="26.7216"
                                    cy="1.39761"
                                    r="1.39737"
                                    transform="rotate(-90 26.7216 1.39761)"
                                    fill="#8B755A"
                                    />
                                </svg>
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </section>
    </>


  );
};

export default Signin;


