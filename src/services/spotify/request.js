import config from './config';

const { api } = config;

export default async function makeRequest(path) {
  const authResponse = await fetch(api.authUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${api.clientId}:${api.clientSecret}`)}`,
    },
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
  });

  const { access_token: token } = await authResponse.json();

  const requestResponse = await fetch(`${api.baseUrl}/browse/${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return await requestResponse.json();
}
