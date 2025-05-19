import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import BackBtn from "@/components/back-btn";
import Button from "@/components/button/index";
// import GoogleIcon from "@/assets/icons/google-icon";
import { useLoginMutation } from "@/services/auth.api";
import ControlledInput from "@/components/forms/controlled-input";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUserData, setUserToken } from "@/store/slices/authSlice";
import classNames from "classnames";
import { useLazyGetLoggedInUserDetailQuery } from "@/services/api";

export default function SignIn({ type = "user" }) {
	const methods = useForm({
		mode: "onChange",
	});
	const { handleSubmit } = methods;
	const [showPassword, setShowPassword] = useState(false);
	const [getUser, { isLoading: isGetUserLoading }] =
		useLazyGetLoggedInUserDetailQuery();

	const [login, { isLoading }] = useLoginMutation();
	const togglePasswordVisibility = () => {
		setShowPassword(prev => !prev);
	};
	const dispatch = useDispatch();

	const onSubmit = async data => {
		try {
			const result = await login(data).unwrap();
			if (result.success) {
				dispatch(setUserToken(result.token));
				const user = await getUser();
				console.log(user);
				dispatch(setUserData(user?.data?.user));
				toast.success(result.message);
				window.location.href = "/accounts";
			} else {
				toast.error(result.message);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	const theme = type === "user" ? "dark" : "light";
	return (
		<div className="min-h-screen text-left">
			<div
				className={classNames(
					"container mx-auto py-8 rounded-lg shadow-md",
					type === "user" ? "mt-[20%] max-w-sm" : "mt-[10%] max-w-md"
				)}
			>
				{/* Logo Section */}
				<div className="mb-6 flex items-center gap-1">
					<BackBtn className={theme === "light" && "!bg-[#F6F6F6]"} />
					<img
						src="/images/logo.png"
						alt="Believer's Bridge Logo"
						className="h-20"
					/>
				</div>

				{/* Title */}
				<h2
					className={classNames(
						"text-lg font-semibold mb-2",
						theme === "dark" ? "text-gray-300" : ""
					)}
				>
					{theme === "dark"
						? "Log in to your Believer's Bridge account."
						: "Login to access the admin dashboard"}
				</h2>
				<Link
					to="/create-account"
					className="text-sm text-secondary cursor-pointer"
				>
					Create an account instead
				</Link>
				<FormProvider {...methods}>
					<form className="space-y-4 mt-8" onSubmit={handleSubmit(onSubmit)}>
						<ControlledInput
							id="username"
							theme={theme}
							name="email"
							type="email"
							placeholder="Email"
							className="text-[13px]"
						/>
						<ControlledInput
							id="password"
							name="password"
							type="password"
							theme={theme}
							// type={showPassword ? "text" : "password"}
							placeholder="Password"
							className="text-[13px]"
							suffix={
								<button
									type="button"
									onClick={togglePasswordVisibility}
									className={classNames(
										"text-[10px]",
										theme === "dark" && "text-gray-300"
									)}
								>
									{showPassword ? "HIDE" : "SHOW"}
								</button>
							}
						/>
						<p className="text-sm text-secondary mb-10 cursor-pointer">
							Forgot password?
						</p>
						<Button
							type="submit"
							className="w-full"
							disabled={isLoading || isGetUserLoading}
						>
							{isLoading ? "Logging in..." : "Log in to my account"}
						</Button>
					</form>
				</FormProvider>
				{/* Login Form */}

				{/* Or Divider */}
				{/* <div className="flex items-center my-4">
					<div className="flex-grow h-px bg-gray-300"></div>
					<span className="px-2 text-sm text-gray-600">or</span>
					<div className="flex-grow h-px bg-gray-300"></div>
				</div> */}

				{/* Google Login
				<Button color="white" variant="contained" className="w-full">
					<GoogleIcon />
					Continue with Google
				</Button> */}
			</div>
		</div>
	);
}
