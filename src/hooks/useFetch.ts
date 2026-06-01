import { useRouter } from "next/navigation";
import { buildDomain } from "../utils/domain"

const baseUrl = buildDomain();

const returnValues = (ok: boolean, data?: any) => {
  return {
    ok,
    data,
    ko: !ok
  }
}

const useFetch = () => {
  const router = useRouter();

  const doFetch = async (url: string, method: string, body?: string, needsCredentials: boolean = true, isOptional: boolean = false) => {
    const requestBody = body ? { body } : {};

    const credentials = needsCredentials ? 'include' : 'same-origin';

    try {
      const response = await fetch(`${baseUrl}/${url}`, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        credentials,
        ...requestBody
      })

      if (response.status === 401) {
        if (!isOptional) router.push('/');
        return returnValues(false, { type: 'NO_AUTH' });
      }

      if (response.status >= 400) {
        return returnValues(false, { type: 'HTTP_ERROR', status: response.status });
      }

      const data = await response.json();

      if (!data.status && data.code === 500) {
        return returnValues(false, { type: 'SERVER_ERROR' })
      }

      return returnValues(true, data)
    } catch (error) {
      return returnValues(false, { type: 'NETWORK_ERROR' })
    };
  }

  return doFetch;
}

export default useFetch;