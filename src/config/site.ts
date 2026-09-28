export const PORTALS = {
  PUBLIC: "https://creamwriters.com",
  AUTH: "https://auth.creamwriters.com",
  WRITER: "https://writer.creamwriters.com",
  CLIENT: "https://client.creamwriters.com",
  ADMIN: "https://admin.creamwriters.com",
} as const;

export const SITE = {
  name: "Cream Writers",
  domain: "https://creamwriters.com",
  email: "support@creamwriters.com",
  address: "575 5th Ave Fl 14, New York City, New York",
} as const;

export const registerUrl = (role?: "client" | "writer") =>
  role ? `${PORTALS.AUTH}/register?role=${role}` : `${PORTALS.AUTH}/register`;

export const loginUrl = () => PORTALS.AUTH;
