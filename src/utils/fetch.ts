import { buildDomain } from "./domain"

const baseUrl = buildDomain();

type Fn = (data: any) => void;

const doFetch = async (url: string, method: string, doThen?: Fn, body?: string, doError?: Fn) => {
    let requestBody = {}

    if (method === 'POST' || method === 'PATCH') {
        requestBody = { body }
    }

    return fetch(`${baseUrl}/${url}`, {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        ...requestBody
    })
        .then((response) => response.ok ? response.json() : Promise.reject(response))
        .then((data) => doThen && doThen(data))
        .catch((error) => doError && doError(error));
}

export default doFetch;