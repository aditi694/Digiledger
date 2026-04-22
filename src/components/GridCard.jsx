import React from "react";

const GridCard = ({ title, icon = "folder_supervised" }) => {
    return (<div className="w-[176px] h-[149px] bg-white-custom rounded-[13px] flex flex-col items-center justify-center gap-[12px] p-[12px] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

        <div className="w-[54px] h-[54px] bg-icon rounded-[12px] flex items-center justify-center">
            <span
                className="material-symbols-outlined icon-primary"
                style={{
                    fontSize: "29px",
                    lineHeight: "29px",
                }}
            >
                {icon}
            </span>
        </div>

        <p className="w-[151px] text-[13px] text-muted text-center leading-[18px]">
            {title}
        </p>

    </div>

    );
};

export default GridCard;
