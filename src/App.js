


function App() {
  return (
    <>
    <div className='w-full h-screen bg-black
      text-9xl text-white
      flex justify-center items-center'>
      <div className='animate-jump-in animate-duration-[2000ms] z-10'>
        <img className="" alt="Logo" src="img/logo.png" />
      </div>
      <img className="animate-fade animate-delay-[2000ms]  absolute" 
        alt="Background" src="img/LogoImg.png"/>
      {/* <div className='z-10 absolute w-3/4 h-3/4
      bg-gradient-to-r from-spaceP via-amber-300 via-white via-cyan-100 to-spaceB
      animate-fade-right animate-once animate-delay-[2000ms]'>
        Login
      </div> */}
    </div>
    </>
  );
}

export default App;
