import React from "react";

const FeatureCard = ({ title, description, icon = "folder_supervised" }) => {
    return (<div className="w-full max-w-[247px] bg-white-custom rounded-[18px] p-[16px] flex flex-col items-center text-center gap-[16px] shadow-md">

        <div className="w-[42px] h-[42px] bg-icon rounded-[10px] flex items-center justify-center">
            <span className="material-symbols-outlined icon-primary text-[30px]">
                {icon}
            </span>
        </div>

        <h3 className="text-[20px] font-semibold text-primary leading-[28px]">
            {title}
        </h3>

        <p className="text-[14px] text-muted leading-[20px]">
            {description}
        </p>

    </div>


    );
};

export default FeatureCard;
