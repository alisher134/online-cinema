import { TELEGRAM_SNACKBAR_SS_KEY } from './constants';

export const getTelegramSnackbarKey = sessionStorage.getItem(TELEGRAM_SNACKBAR_SS_KEY) !== 'false';

export const setTelegramSnackBar = (state: boolean) =>
  sessionStorage.setItem(TELEGRAM_SNACKBAR_SS_KEY, String(state));
