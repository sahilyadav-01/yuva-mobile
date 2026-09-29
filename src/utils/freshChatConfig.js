import Config from 'react-native-config';

export const DOMAIN = 'msdk.in.freshchat.com';
export const APP_ID =
  `${Config.ENVIRONMENT}` === '1'
    ? '9b5f8d14-79a6-4a76-ab5f-0579a01a6751'
    : '943fe2df-56f6-4d6c-84a1-31d2f36d02ba';
export const APP_KEY =
  `${Config.ENVIRONMENT}` === '1'
    ? '67a8d203-09ee-47f6-a2d2-2dcf3e7e7db5'
    : '62944d41-f95f-43df-a4b0-a5c2e8d4f9e7';
