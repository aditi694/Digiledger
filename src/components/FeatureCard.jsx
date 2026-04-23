import React from "react";

const FeatureCard = ({ title, description, icon = "folder_supervised" }) => {
    return (
        <div className="
      w-[247px]
      h-[183px]
      bg-white-custom
      rounded-[18px]
      p-[16px]
      flex flex-col items-center text-center
      gap-[16px]
      shadow-md
      transition-all duration-300
      hover:-translate-y-[8px]
      hover:shadow-lg
    ">

            <div className="w-[42px] h-[42px] bg-icon rounded-[10px] flex items-center justify-center">
                <span
                    className="material-symbols-outlined icon-primary"
                    style={{
                        fontSize: "30px",
                        lineHeight: "30px",
                    }}
                >
                    {icon}
                </span>
            </div>

            <h3 className="text-[20px] font-semibold text-primary leading-[32px]">
                {title}
            </h3>

            <p className="text-[14px] text-muted leading-[20px] max-w-[215px]">
                {description}
            </p>

        </div>
    );
};

export default FeatureCard;
