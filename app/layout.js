import "./globals.css";
import Navbar from "@/Components/Navbar";
import Sessionwrapper from "@/Components/Sessionwrapper";

export const metadata = {
  title: "Buy Me Biryani",
  description: "Fund-raising platform for content creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Sessionwrapper>
      <body className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" >
        <Navbar />
        {children}
        
      </body>
      </Sessionwrapper>
    </html>
  );
}
