import "./globals.css";

export const metadata = {
  title: "Admin",
  description: "Example admin application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
