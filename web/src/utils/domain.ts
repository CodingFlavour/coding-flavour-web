const buildDomain = () => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN
    const domainSeparator = process.env.NEXT_PUBLIC_DOMAIN_SEPARATOR
    const port = process.env.NEXT_PUBLIC_PORT

    if (!domain || !domainSeparator || !port) {
        throw new Error("Missing environment variables")
    }

    return `${domain}${domainSeparator}${port}`
}

export { buildDomain }