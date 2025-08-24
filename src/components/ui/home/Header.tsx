import { Image } from "@tot/ui/";
import React from "react";
import logo from "../../../assets/logo.svg";

export const Header = () => {
  return (
    <section className="flex justify-between px-6 py-6 items-center rounded-3xl bg-primary border border-secondary text-white">
      <img src={logo} width={150} height={90} />
      <p className="font-medium text-40px">المحفظة العقارية</p>
    </section>
  );
};
