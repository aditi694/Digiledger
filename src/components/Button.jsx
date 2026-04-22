import React from "react";

const Button = ({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    ...props
}) => {

    let base = "rounded-[8px] font-medium transition-all duration-300 flex items-center justify-center";

    let variants = {
        primary: "bg-primary text-white hover:opacity-90",
        secondary: "bg-white-custom text-primary border border-primary",
    };

    let sizes = {
        sm: "h-[35px] px-[16px] text-[14px]",
        md: "h-[48px] px-[20px] text-[15px]",
        lg: "h-[54px] px-[28px] text-[16px]",
    };

    return (
        <button
            className={`
    ${base}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : "inline-flex"}
    ${className}
  `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
