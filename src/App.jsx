import Sidebar from './components/Sidebar';
import Content from './components/Content';
import NewProject from './components/NewProject';

function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;
