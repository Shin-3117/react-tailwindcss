


function App() {
  return (
    <>
    <div className='w-full h-screen bg-slate-900 
      text-9xl text-white
      flex justify-center items-center'>
      <div className='animate-jump-in animate-duration-[2000ms]'>
        Logo
      </div>
      <div className='z-10 absolute bg-slate-950 w-3/4 h-3/4
      animate-fade-right animate-once animate-delay-[2000ms]'>
        Login
      </div>
    </div>
    </>
  );
}

export default App;
