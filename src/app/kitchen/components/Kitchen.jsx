"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Kitchen = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 px-5 lg:px-10 text-primary">
      <h1 className="text-[20px] tracking-wider lg:text-[40px] lg:leading-[48px] leading-[36px] font-azahra">
        <b>{t("kitchen.title")}</b>
      </h1>
      <p className="text-[12px] lg:text-[15px] leading-[24.5px]">
        {t("kitchen.content_1")}
        <br />
        <br />
        {t("kitchen.content_2")}
      </p>
    </div>
  );
};

export default Kitchen;
