import NavBar from '../components/NavBar';
import './globals.css'
import { Inter } from 'next/font/google'
import { CrispProvider } from "../components/CrispProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "FC Bäni",
  description:
    "FC Bäni- najnovšie správy, výsledky a štatistiky zápasov, hráčske profily, fotogalérie a videozáznamy tréningov a zápasov. Sledujte nás a podporte náš tím!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
      </body>
      <CrispProvider />
    </html>
  );
}
