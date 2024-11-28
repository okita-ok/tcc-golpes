import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";
import Navbar from "./components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Identificando Golpes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div
          style={{
            marginLeft: "250px",
            paddingLeft: "20px",
            paddingTop: "10px",
          }}
        >
          {children}
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}
