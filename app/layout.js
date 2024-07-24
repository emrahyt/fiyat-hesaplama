import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fiyat Hesaplama",
  description: "Pazaryeri fiyat ve komisyon görüntülemesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
        }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
