const Footer = () => {
  return (
    <footer className="h-20 bg-slate-400 p-5 flex justify-center items-center">
      <p className="text-2xl capitalize font-semibold text-red-200"><span className="text-red-500 font-semibold">@{new Date().getFullYear()}</span>, &copy;All right reserved by developer usuf</p>
    </footer>
  )
}

export default Footer