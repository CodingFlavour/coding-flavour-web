const buildDomain = () => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN
    const domainSeparator = process.env.NEXT_PUBLIC_DOMAIN_SEPARATOR
    const port = process.env.NEXT_PUBLIC_PORT
    const subdomain = process.env.NEXT_PUBLIC_SUBDOMAIN
    return `${domain}${domainSeparator}${port}${subdomain}`
}

export { buildDomain }