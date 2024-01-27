import "@styles/global.css";

export const metadata = {
  title: "Mold SKill",
  description: "By students for students!",
};

const layout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <div className="main"></div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default layout;
