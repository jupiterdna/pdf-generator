import { Roboto } from "next/font/google";
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata = {
  title: "Go Rental PDF Generator",
  description: "This is a PDF generator for Go Rentals",
};
import "../globals.css";
import { AppProvider } from "@/component/context/context";
const roboto = Roboto({ subsets:['latin'], weight: ['400', '700']});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
       rel="stylesheet" />
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
