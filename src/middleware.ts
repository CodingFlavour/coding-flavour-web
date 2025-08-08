import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { i18n } from "../i18n.config";

/**
 * Lo primero es comprobar si ya tiene idioma el path
 * Si no tiene idioma mirar si tiene alguna Cookie seteada de idioma y redirigir
 * Si no lo tiene, miramos de donde venia para saber si tenia idioma
 * Si no lo tiene en el request, es porque entra por primera vez, lo cogemos del browser
 * Update: no puedo acceder a cookies asi que paso
 */

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const localePathname = pathname.split("/").filter((path) => path !== "")[0];
  const currentLocale = i18n.locales.find((locale) =>
    RegExp(`^${locale}$`).exec(localePathname)
  );

  if (currentLocale) {
    return NextResponse.next();
  }

  const protocol = request.nextUrl.protocol;
  const host = request.nextUrl.host;
  const cookieLang = request.cookies.get("lang");
  const path = pathname !== "/" ? pathname : "";

  if (cookieLang) {
    return NextResponse.redirect(
      `${protocol}//${host}/${cookieLang.value}/${path}`
    );
  }

  const defaultLocale = i18n.defaultLocale;
  const redirect = `${protocol}//${host}/${defaultLocale}${path}`;

  return NextResponse.redirect(redirect);
};

export const config = {
  matcher: ["/((?!_next|favicon|images|icons).*)"],
};

export default middleware;
