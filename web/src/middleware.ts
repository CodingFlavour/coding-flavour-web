import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import { i18n } from "../../i18n.config";

// import { i18n } from "../../i18n.config";

// // import { match as matchLocale } from '@formatjs/intl-localematcher'
// // import Negotiator from 'negotiator'

// // function getLocale(request: NextRequest): string | undefined {
// //   // Negotiator expects plain object so we need to transform headers
// //   const negotiatorHeaders: Record<string, string> = {}
// //   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

// //   // @ts-ignore locales are readonly
// //   const locales: string[] = i18n.locales

// //   // Use negotiator and intl-localematcher to get best locale
// //   let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
// //     locales
// //   )

// //   const locale = matchLocale(languages, locales, i18n.defaultLocale)

// //   return locale
// // }

/**
 * Lo primero es comprobar si ya tiene idioma el path
 * Si no tiene idioma mirar si tiene alguna Cookie seteada de idioma y redirigir
 * Si no lo tiene, miramos de donde venia para saber si tenia idioma
 * Si no lo tiene en el request, es porque entra por primera vez, lo cogemos del browser
 * Update: no puedo acceder a cookies asi que paso
 */

const middleware = async (request: NextRequest) => {
  console.log("Middleware");
  console.log("Middleware -  request.nextUrl",  request.nextUrl);
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = i18n.locales.find((locale) => RegExp(`/${locale}/`).exec(pathname))
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const href =  request.nextUrl.href;
  const defaultLocale = i18n.defaultLocale;
  const path = pathname !== '/' ? pathname : '';
  const redirect = `${href}${defaultLocale}${path}`;
  return NextResponse.redirect(redirect);
  // console.log("Middleware - request", request);
  //   const defaultLocale = i18n.defaultLocale;
  //   // console.log("Middleware - defaultLocale", defaultLocale);

  //   // console.log("Middleware");
  //   // console.log("request.nextUrl", request.nextUrl);
  //   const { pathname, origin } = request.nextUrl;
  //   console.log("Middleware - pathname", pathname);
  //   const pathnameHasLocale = i18n.locales.find(
  //     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  //   );
  //   console.log("Middleware - pathnameHasLocale", pathnameHasLocale);
  //   if (!pathnameHasLocale) {
  //     // Redirect if there is no locale
  //     request.nextUrl.pathname = `/${defaultLocale}/${pathname}`;
  //     // e.g. incoming request is /products
  //     // The new URL is now /en-US/products
  //     return Response.redirect(request.nextUrl);
  //   }
  //   // const headerLanguage = request.headers.get('language');
  //   // console.log("headerLanguage", headerLanguage);

  //   const { cookies } = request;
  //   const lang = cookies.get("lang")?.value;
  //   if (pathnameHasLocale !== lang) {
  //     const referer = request.headers.get("referer");
  //     if (referer) {
  //       const refererPaths = referer.split("/");
  //       const pathnames = refererPaths.filter((_path, index) => index > 4);
  //       console.log("Middleware - referer", referer);
  //       console.log("Middleware - refererPaths", refererPaths);
  //       console.log("Middleware - pathnames", pathnames);
  //       if (pathnames.length > 0) {
  //         return Response.redirect(
  //           `${origin}/${lang}/${pathnames.flatMap((path) => path)}`
  //         );
  //       }
  //     }

  //     return Response.redirect(`${origin}/${defaultLocale}`);
  //   }
  //   return NextResponse.next();

  //   // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  //   // // If you have one
  //   // if (
  //   //   [
  //   //     '/manifest.json',
  //   //     '/favicon.ico',
  //   //     // Your other files in `public`
  //   //   ].includes(pathname)
  //   // )
  //   //   return

  //   // Check if there is any supported locale in the pathname
  //   //   const pathnameIsMissingLocale = i18n.locales.every(
  //   //     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  //   //   )

  //   //   // Redirect if there is no locale
  //   //   if (pathnameIsMissingLocale) {
  //   //     const locale = getLocale(request)

  //   //     // e.g. incoming request is /products
  //   //     // The new URL is now /en-US/products
  //   //     return NextResponse.redirect(
  //   //       new URL(
  //   //         `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
  //   //         request.url
  //   //       )
  //   //     )
  //   //   }
};

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!_next|favicon).*)"],
};

export default middleware;
