


function App() {
  return (
    <>
    <div className='w-full h-screen bg-space 
      text-9xl text-white
      flex justify-center items-center'>
      <div className='animate-jump-in animate-duration-[2000ms]'>
        <img className="h-96" alt="Logo image" src="img/LOGO.png" />
      </div>
      <div className='z-10 absolute w-3/4 h-3/4
      bg-gradient-to-r from-spaceP via-amber-300 via-white via-cyan-100 to-spaceB
      animate-fade-right animate-once animate-delay-[2000ms]'>
        Login
      </div>
    </div>
    </>
  );
}

export default App;
