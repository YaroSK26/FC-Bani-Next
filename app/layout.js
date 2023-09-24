import NavBar from '../components/NavBar';
import './globals.css'
import { Inter } from 'next/font/google'
import { CrispProvider } from "../components/CrispProvider";
import GoogleAnalytics from '../components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "FC Bäni",
  description:
    "FC Bäni- najnovšie správy, výsledky a štatistiky zápasov, hráčske profily, fotogalérie a videozáznamy tréningov a zápasov. Sledujte nás a podporte náš tím!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
      </body>
      <CrispProvider />
    </html>
  );
}

