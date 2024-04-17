import Navbar from "./components/Navbar"


const Layout = ({children}) => {
  return (
   <div className="min-h-screen w-full">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-3 ">
         {children}
      </main>
   </div>
  )
}

export default Layout