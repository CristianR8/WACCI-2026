import { ContactForm } from "./contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="wrapper">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-title-lg font-bold text-gray-800 dark:text-white/90 mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Have a question about WACCI 2026? We&apos;d love to hear from you.
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            <div className="lg:col-span-2 space-y-8">
              <ContactInfo
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                      fill="currentColor"
                    />
                  </svg>
                }
                title="Email"
                content="wacci2026@gmail.com"
                href="mailto:wacci2026@gmail.com"
              />
              {/*<ContactInfo
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                }
                title="Location"
                content="University of Ghana, Legon"
              />
              <ContactInfo
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.94 8.07 13.63 6.63 10.8L8.83 8.6C9.1 8.33 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
                      fill="currentColor"
                    />
                  </svg>
                }
                title="Phone"
                content="+233 XX XXX XXXX"
                href="tel:+233XXXXXXXXX"
              />*/}
            </div>

            {/*<div className="lg:col-span-3">
              <div className="contact-wrapper border p-8 md:p-10 relative z-30 bg-white border-gray-100 dark:bg-dark-primary dark:border-gray-800">
                <ContactForm />
              </div>
            </div>*/}
          </div>
        </div>

        <span className="absolute -bottom-32 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
          <svg
            width="930"
            height="760"
            viewBox="0 0 930 760"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" filter="url(#filter0_f_9248_10254)">
              <circle cx="380.335" cy="380.335" r="179.665" fill="#FF58D5" />
            </g>
            <g opacity="0.7" filter="url(#filter1_f_9248_10254)">
              <circle cx="549.665" cy="380.335" r="179.665" fill="#4E6EFF" />
            </g>
            <defs>
              <filter
                id="filter0_f_9248_10254"
                x="0.669922"
                y="0.6698"
                width="759.33"
                height="759.33"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_9248_10254"
                />
              </filter>
              <filter
                id="filter1_f_9248_10254"
                x="170"
                y="0.6698"
                width="759.33"
                height="759.33"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_9248_10254"
                />
              </filter>
            </defs>
          </svg>
        </span>
      </section>
    </>
  );
}

function ContactInfo({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={`flex items-start gap-4 ${href ? "group" : ""}`}
    >
      <span className="shrink-0 w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-500">
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white/90 mb-1">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </Wrapper>
  );
}
