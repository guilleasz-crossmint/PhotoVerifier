"use client";
import { PropsWithChildren, useState } from "react";
import classnames from "../../utils/classnames";

const Tab = ({
  children,
  active,
  onClick,
}: PropsWithChildren<{
  active: boolean;
  onClick: () => void;
}>) => {
  return (
    <div
      className={classnames(
        "text-base font-normal text-white/60 cursor-pointer w-1/2 text-center p-3.5 border-b-2 border-b-white/10",
        { "text-white font-semibold border-b-white": active }
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default function Gallery({ photos }) {
  const [activeTab, setActiveTab] = useState<"verified" | "unverified">(
    "verified"
  );
  return (
    <div className="flex justify-center flex-col">
      <div className="w-[361px] bg-white/5 h-[154px] rounded-3xl text-center flex flex-col justify-center gap-2 mt-5">
        <div className="text-5xl font-semibold">{photos.length}</div>
        <div className="text-base opacity-40">verified photos</div>
      </div>
      <div className="flex">
        <Tab
          active={activeTab === "verified"}
          onClick={() => setActiveTab("verified")}
        >
          Verified
        </Tab>
        <Tab
          active={activeTab === "unverified"}
          onClick={() => setActiveTab("unverified")}
        >
          Unverifed
        </Tab>
      </div>
    </div>
  );
}
