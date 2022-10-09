import { createAuthProvider } from "react-token-auth";

export const { useAuth, authFetch, login, logout, getSession } =
  createAuthProvider({
    getAccessToken: (session) => session.accessToken,
    storage: localStorage,
    onUpdateToken: (token) => {
      fetch("/api/refresh", {
        method: "POST",
        body: token.refreshToken,
      }).then((r) => r.json());
    },
  });
