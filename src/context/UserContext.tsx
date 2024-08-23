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
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<TelegramUser | null>>;
  fetchUserData: () => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUserData = () => {
    const tg = window.Telegram.WebApp;

    tg.ready();
    const userInfo = tg.initDataUnsafe.user;
    // const userInfo = {
    //   id: "6012655311",
    //   first_name: "pk",
    //   last_name: "User",
    // };

    if (userInfo) {
      checkOrInsertUser(userInfo)
        .then((data) => {
          setUser(data);
          setLoading(false); // Stop loading after data is fetched
        })
        .catch((error) => {
          console.error("Error in checkOrInsertUser:", error);
          setLoading(false); // Stop loading even if there's an error
        });
    } else {
      console.error("User data is not available from Telegram Web App API.");
      setLoading(false); // Stop loading if no user data is available
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when the component mounts
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, setUser, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
