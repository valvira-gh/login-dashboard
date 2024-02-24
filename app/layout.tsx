import Header from "@/app/components/Header/Header";
import "@/app/globals.css";
import { Ubuntu, Roboto } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next-App 14",
  description:
    `This is a demo project for learning and testing new features of Next.js 14 and React 19, like Server Component and Actions. ` +
    `Another learning target was PostgreSQL database, which is deployed in Vercel along with the rest of the app.`,
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
  });

  const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
  });

  return (
    <div className="main-layout">
      <div className={ubuntu.className}>
        <Header />
      </div>
      <main className={roboto.className}>{children}</main>
    </div>
  );
}
