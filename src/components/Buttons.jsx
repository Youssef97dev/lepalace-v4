import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Buttons = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-between gap-3 items-center px-5">
      <Link
        href="/menu"
        className="w-full rounded-lg bg-white hover:bg-primary hover:text-white py-2 text-center shadow-md text-[12px]"
      >
        {t("navbar.menu")}
      </Link>
      <Link
        target="_blank"
        href="#"
        className="w-full rounded-lg bg-primary hover:bg-secondary text-white py-2 text-center shadow-md text-[12px]"
      >
        {t("navbar.book")}
      </Link>
    </div>
  );
};

export default Buttons;
