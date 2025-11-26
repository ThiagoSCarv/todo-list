import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textVariant = cva("font-sans text-gray-400", {
	variants: {
		variant: {
			"body-md-regular": "text-base leading-6 font-normal",
			"body-md-semibold": "text-base leading-6 font-semibold",
			"body-sm": "text-sm leading-5 font-semibold",
		},
	},
	defaultVariants: {
		variant: "body-md-regular",
	},
});

interface TextProps extends VariantProps<typeof textVariant> {
	as?: keyof React.JSX.IntrinsicElements;
	className: string;
	children: React.ReactNode;
}

export function Text({
	as = "span",
	variant,
	className,
	children,
	...props
}: TextProps) {
	return React.createElement(
		as,
		{
			className: textVariant({ variant, className }),
			props,
		},
		children,
	);
}
