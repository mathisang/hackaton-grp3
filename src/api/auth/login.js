import { api } from '..';
import { clearAuthData, fakeApiResponse, saveRefreshToken, saveToken, setRefreshTimeout } from './utils';

const ENDPOINT = 'auth/local';
const METHOD = 'login()';

export async function loginByAxios({ email, password }) {
  const payload = {
    email,
    password,
  };
  try {
    console.log(api.url)
    const res = await api?.axios?.post(ENDPOINT, {
      password,
      identifier: email
    });
    const { data } = res;
    log.warn(`${METHOD} -`, data);

    console.log(data)
    saveToken(data?.access_token);
    saveRefreshToken(data?.refresh_token);
    setRefreshTimeout(data?.expires);
    log.warn(METHOD, '- token expires in', +data?.expires / 1000 / 60, 'minutes');

    return data;
  } catch (error) {
    log.error(`${METHOD} -`, error);
  }
  return undefined;
}

export default loginByAxios;
