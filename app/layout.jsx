import "./globals.css";

export const metadata = {
  title: "SENZ | Strategic Communications + Digital Solutions",
  description:
    "SENZ helps businesses upgrade, build, and resell through strategic communications, digital products, managed capability, and white-label technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
