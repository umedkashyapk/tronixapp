import React, { createContext, ReactNode, useState, useEffect } from "react";
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
  setUser: React.Dispatch<React.SetStateAction<TelegramUser | null>>;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    tg.ready();

    console.log("Telegram WebApp initialized", tg.initDataUnsafe);

    const urlParams = new URLSearchParams(window.location.search);
    console.log("urlParams:", urlParams);
    const start = urlParams.get("start");
    console.log("Referral Code:", start);

    const userInfo = tg.initDataUnsafe.user;

    if (userInfo) {
      console.log("User info from Telegram WebApp API:", userInfo);

      // Include referral code in the user data if available

      checkOrInsertUser(userInfo)
        .then((data) => {
          console.log("Response from checkOrInsertUser:", data);
          setUser(data);
        })
        .catch((error) => {
          console.error("Error in checkOrInsertUser:", error);
        });
    } else {
      console.error(
        "User data is not available from Telegram Web App API. Using fallback user data for testing."
      );

      // Fallback user data (you should define the fallback userInfo if needed)
      const fallbackUserInfo = {
        id: 14,
        first_name: "vpk",
        last_name: "kashyap",
      };

      checkOrInsertUser(fallbackUserInfo)
        .then((data) => {
          console.log(
            "Response from checkOrInsertUser with fallback data:",
            data
          );
          setUser(data);
        })
        .catch((error) => {
          console.error(
            "Error in checkOrInsertUser with fallback data:",
            error
          );
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
