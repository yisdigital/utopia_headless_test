// lib/wixClient.ts
import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';   // ← correct import

const wixClient = createClient({
  modules: { items },                // ← register the items module
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
  }),
});

export { wixClient };