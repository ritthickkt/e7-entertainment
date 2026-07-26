import { Montserrat, Open_Sans } from "next/font/google";

// Montserrat for headings, Open Sans for body — both variable, so no weight list needed.
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});
