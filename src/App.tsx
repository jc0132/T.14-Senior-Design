import Header from "./components/Header";
import Youtube from "./components/Youtube";
import bmeslogo from './images/bmes-logo.png'
import bmesgif from './images/demo.gif'

function App() {
  return (
    <div className="flex-col font-[font-teko]">
      <Header/>
      <div className='h-[15%] flex-col justify-center p-1 items-center'>
        <h1 className="text-center text-2xl font-bold text-[#394374] mt-4">Solution Mechanism</h1>
        <img className='object-contain h-[20rem] mx-auto'src={bmesgif}/>
      </div>
      <Youtube link="https://youtube.com/embed/64mMrWLF8CA?si=rAtVcNSszL_Ejphb"/>
      <Youtube link="https://youtube.com/embed/a12kOcNxjG8?si=NbAlLKqCi0a1pl4m"/>
      <div className='h-[15%] flex justify-center my-10 p-1'>
        <img className='object-contain'src={bmeslogo}/>
      </div>
    </div>
  );
}

export default App;
