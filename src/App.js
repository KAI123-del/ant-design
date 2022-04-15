
import './index.css';
import Demo from './Components/Demo';
import Header from './Components/Header';
import ImgOne from './Images/imgOne.jpg';

function App() {
  return (
    <div className="App">
      {/* =======HEADER====== */}

      <Header />


      <div className='flex justify-center items-center'>

        {/* =========FORM ALONG WITH THE WELCOME TEXT======== */}

        <div className='lg:w-2/5 mt-32 lg:mt-0 w-full  lg:flex lg:flex-col'>
          <div className='text-center lg:mb-10 mb-6 lg:text-4xl  font-Inter font-bold'><p className='text-3xl lg:text-4xl'>Welcome Back</p><p className='lg:text-lg text-sm lg:mt-2 text-gray-500 font-semibold'>Good To See You Again .</p></div>
          <Demo />
        </div> 

        {/* ========RIGHT IMAGE GOES HERE========= */}

        <img src={ImgOne} className="w-3/5 hidden lg:inline" />

      </div>

    </div>
  );
}

export default App;
