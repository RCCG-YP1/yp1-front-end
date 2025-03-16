import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "@/components/forms/input";
import BackBtn from "@/components/back-btn";
import Button from "@/components/button/index";
import GoogleIcon from "@/assets/icons/google-icon";
import { registerApi } from "@/api/registerApi";

export default function Account() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const [showPassword, setShowPassword] = useState(false);
	const [inputType, setInputType] = useState("text");

	const togglePasswordVisibility = () => {
		setShowPassword(prev => !prev);
	};

	const onSubmit = async data => {
		const formDataObject = new FormData();
		Object.keys(data).forEach(key => {
			formDataObject.append(key, data[key]);
		});

		try {
			const response = await registerApi(formDataObject);
			alert("Registration successful!");
			console.log(response);
		} catch (error) {
			alert("Registration failed");
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
				<form className="mt-11" onSubmit={handleSubmit(onSubmit)}>
					{/* Email */}
					<div className="mb-4">
						<Input
							{...register("email", { required: "Email is required" })}
							placeholder="Email address"
							className="text-[13px]"
						/>
						{errors.email && (
							<p className="text-red-500 text-xs">{errors.email.message}</p>
						)}
					</div>

					{/* Password */}
					<div className="mb-4 relative">
						<Input
							{...register("password", {
								required: "Password is required",
								minLength: 8,
							})}
							type={showPassword ? "text" : "password"}
							placeholder="Create password"
							className="text-[13px]"
						/>
						<button
							type="button"
							onClick={togglePasswordVisibility}
							className="absolute inset-y-0 right-2 text-[10px] text-gray-300"
						>
							{showPassword ? "HIDE" : "SHOW"}
						</button>
						{errors.password && (
							<p className="text-red-500 text-xs">{errors.password.message}</p>
						)}
					</div>

					{/* Confirm Password */}
					<div className="mb-4">
						<Input
							{...register("confirmPassword", {
								validate: value =>
									value === watch("password") || "Passwords do not match",
							})}
							type="password"
							placeholder="Confirm password"
							className="text-[13px]"
						/>
						{errors.confirmPassword && (
							<p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
						)}
					</div>

					{/* First Name */}
					<div className="mb-4">
						<Input
							{...register("firstName", { required: "First name is required" })}
							placeholder="First name"
							className="text-[13px]"
						/>
						{errors.firstName && (
							<p className="text-red-500 text-xs">{errors.firstName.message}</p>
						)}
					</div>

					{/* Last Name */}
					<div className="mb-4">
						<Input
							{...register("lastName", { required: "Last name is required" })}
							placeholder="Last name"
							className="text-[13px]"
						/>
						{errors.lastName && (
							<p className="text-red-500 text-xs">{errors.lastName.message}</p>
						)}
					</div>

					{/* Username */}
					<div className="mb-4">
						<Input
							{...register("userName", { required: "Username is required" })}
							placeholder="Username"
							className="text-[13px]"
						/>
						{errors.userName && (
							<p className="text-red-500 text-xs">{errors.userName.message}</p>
						)}
					</div>

					{/* Birthday */}
					<div className="mb-4">
						<Input
							{...register("dateOfBirth", {
								required: "Date of birth is required",
							})}
							type={inputType}
							placeholder="Birthday"
							onFocus={() => setInputType("date")}
							className="text-[13px]"
						/>
						{errors.dateOfBirth && (
							<p className="text-red-500 text-xs">{errors.dateOfBirth.message}</p>
						)}
					</div>

					{/* Phone Number */}
					<div className="mb-4">
						<Input
							{...register("phoneNumber", {
								required: "Phone number is required",
							})}
							placeholder="Phone number"
							type="number"
							className="text-[13px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
						/>
						{errors.phoneNumber && (
							<p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>
						)}
					</div>

					{/* Submit Button */}
					<Button type="submit" className="w-full mt-10">
						Create my account
					</Button>
				</form>

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
