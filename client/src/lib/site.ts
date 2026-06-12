export const OPERA_CONTACT_EMAIL = "info@cqopera.com";
export const OPERA_WHATSAPP_E164 = "593980163009";

export function whatsappHref(message: string): string {
  const q = encodeURIComponent(message);
  return `https://wa.me/${OPERA_WHATSAPP_E164}?text=${q}`;
}
