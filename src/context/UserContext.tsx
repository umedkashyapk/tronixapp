import React, { createContext, ReactNode, useState } from "react";
import { checkOrInsertUser } from "../api/user";

interface TelegramUser {
  telegram_id: string;
  first_name: string;
  last_name?: string;
  username?: string;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  user: TelegramUser | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  fetchUserData: () => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>([]);

  const fetchUserData = () => {
    const tg = window.Telegram.WebApp;

    tg.ready();
    const userInfo = tg.initDataUnsafe.user;
    // const userInfo = {
    //   id: "32423521",
    //   first_name: "pk",
    //   last_name: "User",
    // };

    if (userInfo) {
      checkOrInsertUser(userInfo)
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error in checkOrInsertUser:", error);
        });
    } else {
      console.error("User data is not available from Telegram Web App API.");
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
