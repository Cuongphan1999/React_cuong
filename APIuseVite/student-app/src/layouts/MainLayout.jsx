import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";

export default function MainLayout({ children }) {
  return (
      <>
          <Header />
          <div className="container d-flex">
              <Sidebar />
              <main className="flex-grow-1">
                  {children}
              </main>
          </div>
          <Footer />
      </>
  )
}
