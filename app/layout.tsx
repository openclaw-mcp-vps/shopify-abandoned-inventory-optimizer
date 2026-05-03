import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inventory Optimizer – Stop Guessing, Start Restocking Smarter",
  description: "Analyze Shopify abandoned cart data to predict which products to restock or discontinue and find optimal inventory levels."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9b25cdad-49a6-44fb-b450-082077b4661d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
