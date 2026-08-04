import { getAppConfig } from "@factory/themes";
import { ThemeProvider } from "@factory/ui";
import "./globals.css";

const SITE_URL = "https://helpiq.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "HelpIQ",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description":
        "AI-powered IT support for small businesses. Fix printer issues, Wi-Fi problems, and software errors in under 10 seconds, 24/7. No ticket, no technician, no wait.",
      "url": SITE_URL,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free during early access",
      },
    },
    {
      "@type": "Organization",
      "name": "HelpIQ",
      "url": SITE_URL,
      "email": "hello@helpiq.dev",
      "sameAs": [
        "https://www.facebook.com/helpiq1",
        "https://www.instagram.com/helpiq1",
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need any technical knowledge to use HelpIQ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "None at all. Just describe your problem the way you'd explain it to a friend. HelpIQ handles the technical interpretation.",
          },
        },
        {
          "@type": "Question",
          "name": "What kinds of problems can HelpIQ solve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Printer issues, Wi-Fi and network problems, software errors, email setup, file recovery, slow computer. If it's something you'd normally call a tech guy for, HelpIQ can handle it.",
          },
        },
        {
          "@type": "Question",
          "name": "What happens if HelpIQ can't solve my problem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It gives you a clear summary of what's been tried so far, so you can hand it off to a technician without wasting time re-explaining.",
          },
        },
        {
          "@type": "Question",
          "name": "Is my data private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Your queries are used only to generate your answer and are never sold or shared. We're SOC 2 compliant (in progress).",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = getAppConfig(process.env.APP_ID);

  return (
    <html lang="en">
      <head>
        {/* Core */}
        <title>HelpIQ - AI IT Support for Small Business | 24/7, No Ticket Required</title>
        <meta
          name="description"
          content="HelpIQ gives small businesses instant IT support powered by AI. Fix printer issues, Wi-Fi problems, and software errors in under 10 seconds. No wait, no ticket, no technician bill."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HelpIQ" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="HelpIQ - AI IT Support for Small Business" />
        <meta
          property="og:description"
          content="Instant IT support for small businesses, powered by AI. Fix any tech problem in under 10 seconds, 24/7. No ticket required."
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="HelpIQ - AI IT Support for Small Business" />
        <meta
          name="twitter:description"
          content="Instant IT support for small businesses, powered by AI. Fix any tech problem in under 10 seconds, 24/7."
        />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider config={config}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
