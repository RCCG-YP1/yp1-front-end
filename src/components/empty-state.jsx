import { cloneElement, createElement, useMemo } from "react";
import Button from "./button";
export default function EmptyState({
	icon,
	iconSize = 40,
	title,
	subTitle,
	btnLink,
	btnAction = () => {},
	btnText,
}) {
	// Memoize icon rendering to avoid recalculations on re-render if icon doesn't change
	const IconElement = useMemo(() => {
		if (!icon) return null;

		const iconProps = {
			width: iconSize,
			height: iconSize,
			style: { width: iconSize, height: iconSize },
		};

		return typeof icon === "function"
			? createElement(icon, iconProps)
			: cloneElement(icon, iconProps);
	}, [icon, iconSize]);

	return (
		<div className="flex flex-col gap-6 my-10 items-center text-center justify-center mx-auto">
			<div className="bg-[#e8eaea] size-[80px] flex justify-center items-center rounded-full">
				{IconElement}
			</div>
			<div>
				{title && <p className="text-2xl mb-3 font-semibold">{title}</p>}
				{subTitle && <p className="text-sm">{subTitle}</p>}
			</div>
			{btnLink ? (
				<Button asChild>
					<a href={btnLink}>{btnText}</a>
				</Button>
			) : (
				btnText && (
					<Button className="min-w-[168px]" onClick={btnAction}>
						{btnText}
					</Button>
				)
			)}
		</div>
	);
}
