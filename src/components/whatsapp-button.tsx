import { site } from "@/lib/data";

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Sahar, I found your portfolio and would like to discuss a project.")}`;

// Floating chat button, bottom-right on every page.
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_0_0_8px_rgb(37_211_102/0.18),0_10px_30px_rgb(37_211_102/0.35)] transition hover:scale-110"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 1 1 7.99 4.42m8.02-17.45A11.27 11.27 0 0 0 12.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.67L.62 23.25l5.63-1.48a11.3 11.3 0 0 0 5.8 1.48c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.31-8.01" />
      </svg>
    </a>
  );
}
