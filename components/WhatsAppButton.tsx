const phone = "5491132870623";
const message = "Hola Listone, quiero consultar por los revestimientos alistonados.";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#1ebe5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-7 fill-current">
        <path d="M16.004 3C8.832 3 3 8.83 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.95 12.95 0 0 0 16 29c7.17 0 13-5.83 13-13S23.176 3 16.004 3Zm0 23.8c-1.98 0-3.92-.53-5.61-1.54l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.76 10.76 0 0 1 5.2 16c0-5.96 4.85-10.8 10.8-10.8 5.96 0 10.8 4.84 10.8 10.8 0 5.95-4.84 10.8-10.8 10.8Zm5.92-8.09c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.17-.21.32-.83 1.04-1.02 1.26-.19.21-.37.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.29.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.11 1.31 3.32.16.21 2.26 3.45 5.47 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.62-.38Z" />
      </svg>
    </a>
  );
}
