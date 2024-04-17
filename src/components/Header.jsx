

const Header = ({children}) => {
  return (
   <div className="mb-4">
      <h1 className="text-xl md:text-3xl mb-3 text-center font-semibold leading-loose md:my-2">
         {children}
      </h1>
   </div>
  )
}

export default Header