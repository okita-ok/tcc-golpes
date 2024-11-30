import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import BootstrapClient from "./components/BootstrapClient";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./State/AuthProvider";

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
        <AuthProvider>
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
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
