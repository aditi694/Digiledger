import React from "react";

const MiniCard = ({ title, icon = "folder_supervised" }) => {
    return (<div className="w-[158px] h-[134px] bg-white-custom rounded-[12px] p-[10px] flex flex-col items-center justify-center gap-[10px] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">

        <div className="w-[48px] h-[48px] bg-icon rounded-[10px] flex items-center justify-center">
            <span className="material-symbols-outlined icon-primary text-[28px]">
                {icon}
            </span>
        </div>

        <p className="text-[13px] text-muted text-center leading-[18px]">
            {title}
        </p>

    </div>

    );
};

export default MiniCard;
