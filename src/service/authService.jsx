import axios from 'axios';

const authEndpoint = 'https://your-oauth2-provider/auth';
const tokenEndpoint = 'https://your-oauth2-provider/token';
const clientId = 'your-client-id';
const clientSecret = 'your-client-secret';
const redirectUri = window.location.origin + '/callback';

export const getAuthUrl = () => {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'openid profile email',
  });
  return `${authEndpoint}?${params.toString()}`;
};

export const getToken = async (code) => {
  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret,
  });
  const response = await axios.post(tokenEndpoint, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data;
};

export const getUserInfo = async (accessToken) => {
  const response = await axios.get('https://your-oauth2-provider/userinfo', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
