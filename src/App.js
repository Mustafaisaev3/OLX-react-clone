import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className=' h-[1400px]'>
      <Header />
      <main className='flex items-center justify-center relative'>
        <img src="/assets/olx-bg.jpg" alt="" className='fixed top-0 left-0 w-screen h-screen '/>
        <div className="container z-10">
          <div className="main-content bg-slate-200 mt-[300px] rounded-md w-full h-[1000px]">
            <SearchBar />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
