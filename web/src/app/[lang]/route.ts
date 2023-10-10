import { cookies } from "next/headers";
import { i18n } from "../../../../i18n.config";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("route - GET");
  const cookie = cookies().get("lang");
  const { pathname } = request.nextUrl;
  console.log("route - GET - pathname", pathname);
  const pathnameHasLocale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  console.log("route - GET - cookie?.value", cookie?.value);
  const locale = pathnameHasLocale ?? i18n.defaultLocale;
  const shouldRestoreCookie = cookie?.value === pathnameHasLocale;
  if (!cookie || shouldRestoreCookie) {
    cookies().set("lang", locale);
  }
  const lang = cookie?.value ?? locale;
  if (!pathnameHasLocale) {
    redirect(`/${lang}/${pathname}`);
  }
  return new Response('', {
    status: 200
  })
}
