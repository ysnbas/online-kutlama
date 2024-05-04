import { Inter } from "next/font/google";
import "@Styles/global.css";
import "@Styles/reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Kutlama",
  description: "Generated by Online Kutlama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container">
        <main className="content">{children}</main>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
