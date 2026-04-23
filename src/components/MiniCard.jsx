import React from "react";

const MiniCard = ({ title, icon = "folder_supervised" }) => {
    return (
        <div className="
      w-[158px]
      h-[134px]
      bg-white-custom
      rounded-[11.7px]
      p-[9px]
      flex flex-col items-center justify-center
      gap-[10.91px]
      shadow-sm
      transition-all duration-300
      hover:-translate-y-[6px]
      hover:shadow-md
    ">

            <div className="w-[48.6px] h-[48.6px] bg-icon rounded-[10px] flex items-center justify-center">
                <span
                    className="material-symbols-outlined icon-primary"
                    style={{
                        fontSize: "34px",
                        lineHeight: "34px"
                    }}
                >
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
