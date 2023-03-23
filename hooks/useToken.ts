import { useState, useEffect } from "react";
import { storeToken, removeToken, retrieveToken } from "../utils/tokenStore";

export default function useToken() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [myId, setMyId] = useState<string | number>()

  
  useEffect(() => {
    const token = retrieveToken();
    setAccessToken(token);
  }, []);

  const setToken = (token: string): void => {
    if (token) {
      storeToken(token);
      setAccessToken(token);
    }
  };

  const hasToken = (): boolean => {
    if (retrieveToken()) {
      return true;
    }
    return false;
  };

  const clearToken = (): void => {
    removeToken();
    setAccessToken(null);
  };



  return {
    setToken,
    hasToken,
    clearToken,
    isLoggedIn: retrieveToken() ? true : false,
  };
}
