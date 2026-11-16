import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geleta Shelema | IT & ERP Professional",
  description:
    "Portfolio of Geleta Shelema — IT Support Specialist, D365FO ERP Support, Odoo Developer and MERN Stack Developer.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Geleta Shelema | IT & ERP Professional",
    description: "IT support, ERP solutions and full-stack development.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try { var theme = localStorage.getItem("theme"); if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme; } catch {}'
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
