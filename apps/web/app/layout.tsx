import { getAppConfig } from "@factory/themes";
import { ThemeProvider } from "@factory/ui";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = getAppConfig(process.env.APP_ID);

  return (
    <html lang="en">
      <head>
        <title>{config.name} — {config.tagline}</title>
        <meta name="description" content={config.copy.heroSubhead} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
