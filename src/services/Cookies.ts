import { cookies } from "next/headers";

const Cookies = {
  setCookie: () => {
    cookies().set("lang", "es");
  },
};

export const { setCookie } = Cookies;
