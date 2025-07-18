import axios from 'axios';

import { ENV_CONFIG } from '../config/env';

export const publicApi = axios.create({
  baseURL: ENV_CONFIG.apiUrl,
  withCredentials: true,
});
