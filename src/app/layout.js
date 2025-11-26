import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import { AuthProvider } from "@/AuthContext/AuthContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="min-h-screen w-full mx-auto flex flex-col justify-between">
          <div className="flex flex-col flex-1">
            <div className="sticky top-0 z-40">
              <Navbar />
            </div>
            {/* main section */}
            <main className="pb-15 px-4 sm:px-6 lg:px-8 flex-1">
              <ToastContainer position="bottom-right"></ToastContainer>
              {children}
            </main>
          </div>
          <footer className="px-4 sm:px-6 lg:px-8">
            <Footer></Footer>
          </footer>
        </body>
      </AuthProvider>
    </html>
  );
}
