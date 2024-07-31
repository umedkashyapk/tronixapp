// global.d.ts
interface TelegramUser {
    telegram_id: number;
    first_name: string;
    last_name?: string;
    username?: string;
  }
  
  interface TelegramWebApp {
    ready: () => void;
    initDataUnsafe: {
      user?: TelegramUser;
    };
  }
  
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
  