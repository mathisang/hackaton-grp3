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
    const res = await api?.axios?.post(ENDPOINT, {
      password,
      identifier: email
    });
    const { data } = res;
    log.warn(`${METHOD} -`, data);

    saveToken(data?.jwt);
    log.warn(METHOD, '- token expires in', +data?.expires / 1000 / 60, 'minutes');

    return data;
  } catch (error) {
    log.error(`${METHOD} -`, error);
  }
  return undefined;
}

export default loginByAxios;
