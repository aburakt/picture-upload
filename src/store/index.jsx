// src/store/index.js
import { atom } from 'recoil';

export const themeState = atom({
  key: 'themeState',
  default: 'light',
});

export const authState = atom({
  key: 'authState',
  default: false,
});
