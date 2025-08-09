import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { i18n } from "../i18n.config";

/**
 * NextJS Middleware. Used to handle User Localization. It is based on the following conditions:
 * - If the request contains a Locale:
 *   - Keep navigation as it is
 *   - If no cookie is setted or the cookie is different from the locale, update the cookie
 * - If the request does not contain a Locale, check for a cookie
 *   - If a cookie exists, User has navigated in our page and we should use that locale. Redirect.
 * - If no cookie exists, we need to determine the user's preferred language
 *   - Once determined via `accept-language` from Browser, we should set the cookie and redirect to that locale
 * - If everything fails, we should fallback to the default locale
 * @param request NextJS Request
 * @returns NextJS Response
 */
const middleware = async (request: NextRequest) => {
  const buildFromProtocol = (locale: string) => {
    const protocol = request.nextUrl.protocol;
    const host = request.nextUrl.host;
    const path = pathname !== "/" ? pathname : "";

    return `${protocol}//${host}/${locale}${path}`;
  }

  const pathname = request.nextUrl.pathname;
  const localePathname = pathname.split("/").filter((path) => path !== "")[0];
  const currentLocale = i18n.locales.find((locale) =>
    RegExp(`^${locale}$`).exec(localePathname)
  );

  const headerCookies = await cookies();
  const cookie = headerCookies.get('lang')?.value;

  if (currentLocale) {
    if (cookie !== currentLocale) headerCookies.set('lang', currentLocale);

    return NextResponse.next();
  }

  if (cookie) return NextResponse.redirect(buildFromProtocol(cookie));

  const preferredLocales = request
    .headers
    .get('accept-language')
    ?.split(',')
    .map(lang =>
      lang
        .split(';')
        .find(l => i18n.locales.includes(l.trim()))
    );

  if (preferredLocales) {
    const locale = preferredLocales.find(lang => lang && i18n.locales.includes(lang.trim()));

    if (locale) {
      headerCookies.set('lang', locale.trim());

      return NextResponse.redirect(buildFromProtocol(locale));
    }
  }

  const defaultLocale = i18n.defaultLocale;
  const redirect = buildFromProtocol(defaultLocale);

  headerCookies.set('lang', defaultLocale);

  return NextResponse.redirect(redirect);
};

export const config = {
  matcher: ["/((?!_next|favicon|images|icons).*)"],
};

export default middleware;
