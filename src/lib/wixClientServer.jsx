import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
  try {
    const cookieStore = cookies();
    const refreshTokenCookie = cookieStore.get("refreshToken")?.value;

    if (!refreshTokenCookie) {
      console.warn("Refresh token not found in cookies.");
      return null;
    }

    const refreshToken = JSON.parse(refreshTokenCookie);

    const wixClient = createClient({
      modules: {
        products,
        collections,
      },
      auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
        tokens: {
          refreshToken,
          accessToken: { value: "", expiresAt: 0 },
        },
      }),
    });

    return wixClient;
  } catch (error) {
    console.error("Error initializing Wix client:", error);
    throw new Error("Failed to initialize Wix client.");
  }
};
