import middleware from "@src/middleware"
import { i18n } from "i18n.config"
import { NextRequest } from "next/server"

const PROTOCOL = "http:"
const HOST = "testing"
const NEXT_URL_WITH_LOCALE = "/es/segment"
const PREFERRED_LOCALES = 'es-ES,es;q=0.8'

const mockRequestHeadersGet = jest.fn(() => PREFERRED_LOCALES)
const mockCookiesGetValue = jest.fn()
const mockCookiesGet = jest.fn(() => ({ value: mockCookiesGetValue() }))
const mockSet = jest.fn()
const mockNext = jest.fn()
const mockRedirect = jest.fn()

const mockRequest = {
  nextUrl: {
    pathname: NEXT_URL_WITH_LOCALE,
    protocol: PROTOCOL,
    host: HOST
  },
  headers: {
    get: () => mockRequestHeadersGet()
  }
} as unknown as NextRequest;

jest.mock("next/headers", () => ({
  cookies: () => ({
    get: () => mockCookiesGet(),
    set: (key: string, value: string) => mockSet(key, value),
  })
}))

jest.mock("next/server", () => ({
  NextResponse: {
    next: () => mockNext(),
    redirect: (url: string) => mockRedirect(url)
  }
}))

describe("Middleware Test Suite", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should navigate when locale is set in the path", async () => {
    await middleware(mockRequest)

    expect(mockNext).toHaveBeenCalled()
  })

  it("should replace wrong cookie when navigating to locale setted in pathname", async () => {
    await middleware(mockRequest)

    expect(mockNext).toHaveBeenCalled()
    expect(mockSet).toHaveBeenCalledWith('lang', 'es')
  })

  it("should not replace correct cookie when navigating to locale setted in pathname", async () => {
    mockCookiesGetValue.mockReturnValueOnce('es')

    await middleware(mockRequest)

    expect(mockNext).toHaveBeenCalled()
    expect(mockSet).not.toHaveBeenCalled()
  })

  it("should redirect to the correct locale based on cookies", async () => {
    const NEW_REQUEST = {
      ...mockRequest,
      nextUrl: {
        ...mockRequest.nextUrl,
        pathname: "/segment",
      }
    } as NextRequest
    mockCookiesGetValue.mockReturnValueOnce('en')

    await middleware(NEW_REQUEST)

    expect(mockRedirect).toHaveBeenCalledWith(`${PROTOCOL}//${HOST}/en/segment`)
  })

  it("should redirect to the preferred locale available, filling the cookie", async () => {
    const NEW_REQUEST = {
      ...mockRequest,
      nextUrl: {
        ...mockRequest.nextUrl,
        pathname: "/segment",
      }
    } as NextRequest

    await middleware(NEW_REQUEST)

    expect(mockSet).toHaveBeenCalledWith('lang', 'es')
    expect(mockRedirect).toHaveBeenCalledWith(`${PROTOCOL}//${HOST}/es/segment`)
  })

  it("should redirect to the default locale if nothing is available", async () => {
    const NEW_REQUEST = {
      ...mockRequest,
      nextUrl: {
        ...mockRequest.nextUrl,
        pathname: "/segment",
      }
    } as NextRequest

    mockRequestHeadersGet.mockReturnValueOnce('fr-FR,fr;q=0.8')
    mockCookiesGetValue.mockReturnValueOnce(null)

    await middleware(NEW_REQUEST)

    expect(mockSet).toHaveBeenCalledWith('lang', i18n.defaultLocale)
    expect(mockRedirect).toHaveBeenCalledWith(`${PROTOCOL}//${HOST}/${i18n.defaultLocale}/segment`)
  })
})