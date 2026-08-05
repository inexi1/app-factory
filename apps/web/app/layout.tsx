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
      "alternateName": "HelpIQ IT Support",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "IT Support Software",
      "operatingSystem": "Web",
      "description":
        "HelpIQ is an AI-powered IT troubleshooting tool for small business owners. It fixes technical problems like printer errors, Wi-Fi drops, and Windows software issues in under 10 seconds - without a helpdesk ticket, chatbot widget, or technician. Not a customer support chatbot.",
      "url": SITE_URL,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free during early access",
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small business owners without dedicated IT staff",
      },
    },
    {
      "@type": "Organization",
      "name": "HelpIQ",
      "description": "HelpIQ provides AI-powered IT troubleshooting for small businesses. Fix printer issues, Wi-Fi problems, and software errors instantly - no IT department needed.",
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
        {
          "@type": "Question",
          "name": "Is HelpIQ a customer support chatbot for websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. HelpIQ is an IT troubleshooting tool for small business owners - not a chatbot you embed on a website to handle customer questions. It helps you personally fix technical problems like printer errors, Wi-Fi drops, and Windows software issues, step by step.",
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
        <meta name="google-site-verification" content="JiemEvArx3UNpyHGu7HJUuXviSgUK18of_sqybUWXTA" />
        <title>HelpIQ - AI IT Troubleshooting for Small Business | Fix Tech Problems in Seconds</title>
        <meta
          name="description"
          content="HelpIQ is an AI IT troubleshooting tool built for small business owners. Describe your tech problem - printer offline, Wi-Fi down, software error - and get a step-by-step fix in under 10 seconds. No ticket, no technician, no wait."
        />
        <meta
          name="keywords"
          content="AI IT support, IT troubleshooting, small business IT help, fix printer offline, Wi-Fi not working, software error fix, no IT department, instant tech support"
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
        <meta property="og:image" content={`${SITE_URL}/opengraph-image`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HelpIQ - AI IT Support for Small Business" />
        <meta
          name="twitter:description"
          content="Instant IT support for small businesses, powered by AI. Fix any tech problem in under 10 seconds, 24/7."
        />
        <meta name="twitter:image" content={`${SITE_URL}/opengraph-image`} />

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
