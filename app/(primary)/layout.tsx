import Header from "@/app/components/Header/Header";
import "@/app/globals.css";
import { Ubuntu, Roboto } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className={ubuntu.className}>
        <Header />
      </div>
      <main className={roboto.className}>{children}</main>
    </div>
  );
}
