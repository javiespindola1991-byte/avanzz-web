export const metadata = {
  title: "AVANZZ LOGISTICS",
  description: "Freight forwarding solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
