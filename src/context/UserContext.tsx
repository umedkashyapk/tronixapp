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
    // Extract the referral code from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const startParam = urlParams.get("start");
    if (startParam) {
      console.log("Referral Code:", startParam);
    }

    const tg = window.Telegram.WebApp;

    tg.ready();

    console.log("Telegram WebApp initialized");

    // let userInfo = tg.initDataUnsafe.user;

    let userInfo = {
      id: 13,
      first_name: "pk",
      last_name: "kashyap",
    };

    if (userInfo) {
      console.log("User info from Telegram WebApp API:", userInfo);

      // Include referral code in the user data if available
      const userData = { userInfo, referral_by: startParam };

      checkOrInsertUser(userData)
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

      checkOrInsertUser(userInfo)
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
