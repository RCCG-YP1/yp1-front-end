import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import BackBtn from "@/components/back-btn";
import Button from "@/components/button/index";
import GoogleIcon from "@/assets/icons/google-icon";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUserData, setUserToken } from "@/store/slices/authSlice";
import ControlledInput from "@/components/forms/controlled-input";
import classNames from "classnames";
import { useRegisterMutation } from "@/services/auth.api";
import { handleApiError } from "@/utils/error-handler";

export default function Account() {
	const methods = useForm();
	const { handleSubmit, watch } = methods;

	const [showPassword, setShowPassword] = useState(false);
	const [inputType, setInputType] = useState("text");

	const togglePasswordVisibility = () => {
		setShowPassword(prev => !prev);
	};

	const dispatch = useDispatch();

	const [registerApi, { isLoading }] = useRegisterMutation();

	const onSubmit = async data => {
		try {
			const result = await registerApi(data).unwrap();
			if (result.success) {
				dispatch(setUserToken(result?.auth_token));
				dispatch(setUserData(result?.user));
				toast.success(result?.message);
				window.location.href = "/accounts";
			} else {
				toast.error(result.message);
			}
		} catch (error) {
			handleApiError(error);
		}
	};

	return (
		<div className="min-h-screen text-left">
			<div className="container mx-auto max-w-sm py-8 rounded-lg shadow-md">
				{/* Logo Section */}
				<div className="mb-6 flex items-center gap-1">
					<BackBtn />
					<img
						src="/images/logo.png"
						alt="Believer's Bridge Logo"
						className="h-16"
					/>
				</div>

				{/* Title */}
				<h2 className="text-lg font-semibold text-gray-300 mb-4">
					Create your Believer&apos;s Bridge account.
				</h2>
				<Link to="/sign-in" className="text-sm text-secondary cursor-pointer">
					Already have an account?
				</Link>

				{/* Form */}
				<FormProvider {...methods}>
					<form className="mt-11 space-y-4" onSubmit={handleSubmit(onSubmit)}>
						{/* Email */}
						<ControlledInput
							placeholder="Email address"
							className="text-[13px]"
							name="email"
						/>
						<ControlledInput
							placeholder="Create password"
							className="text-[13px]"
							name="password"
							rules={{
								minLength: 8,
							}}
							suffix={
								<button
									type="button"
									onClick={togglePasswordVisibility}
									className={classNames("!text-[10px] !p-0")}
								>
									{showPassword ? "HIDE" : "SHOW"}
								</button>
							}
						/>
						<ControlledInput
							placeholder="Confirm password"
							className="text-[13px]"
							name="confirmPassword"
							rules={{
								minLength: 8,
								validate: value =>
									value === watch("password") || "Passwords do not match",
							}}
							suffix={
								<button
									type="button"
									onClick={togglePasswordVisibility}
									className={classNames("!text-[10px] !p-0")}
								>
									{showPassword ? "HIDE" : "SHOW"}
								</button>
							}
						/>

						<ControlledInput
							placeholder="First name"
							className="text-[13px]"
							name="firstName"
						/>
						<ControlledInput
							placeholder="Last name"
							className="text-[13px]"
							name="lastName"
						/>
						<ControlledInput
							placeholder="Username"
							className="text-[13px]"
							name="userName"
						/>
						<ControlledInput
							placeholder="Birthday"
							className="text-[13px]"
							name="dateOfBirth"
							type={inputType}
							onFocus={() => setInputType("date")}
						/>

						<ControlledInput
							placeholder="Phone number"
							type="tel"
							className="text-[13px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
							name="phoneNumber"
						/>

						{/* Submit Button */}
						<Button type="submit" className="w-full mt-10">
							{isLoading ? "Creating account..." : "Create my account"}
						</Button>
					</form>
				</FormProvider>

				{/* Or Divider */}
				<div className="flex items-center my-4">
					<div className="flex-grow h-px bg-gray-300"></div>
					<span className="px-2 text-sm text-gray-600">or</span>
					<div className="flex-grow h-px bg-gray-300"></div>
				</div>

				{/* Google Login */}
				<Button color="white" variant="contained" className="w-full">
					<GoogleIcon />
					Continue with Google
				</Button>
			</div>
		</div>
	);
}
