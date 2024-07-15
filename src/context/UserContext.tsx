import React, { createContext, useState, useEffect } from "react";
import { checkOrInsertUser } from "../api/user";

interface TelegramUser {
  telegram_id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

interface UserContextProps {
  user: TelegramUser | null;
  setUser: React.Dispatch<React.SetStateAction<TelegramUser | null>>;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    window.Telegram.WebApp.ready();

    // Get user info from Telegram Web App API
    const tg = window.Telegram.WebApp;
    // if (tg.initDataUnsafe.user) {
    if (true) {
      let userInfo: TelegramUser = tg.initDataUnsafe.user;
      console.log("userinfooo", userInfo);

      if (!userInfo) {
        userInfo = {
          telegram_id: '43431',
          first_name: "vicky",
          last_name: "kashyap",
          username: "vicky_kashyap",
        };
      }

      checkOrInsertUser(userInfo).then((data) => {
        console.log("response", data);
        setUser(data);
      });
    } else {
      console.error("User data is not available from Telegram Web App API.");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
