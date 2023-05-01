import './App.css';
import data from './data'
import {useState} from 'react';
import SingleContent from './component/SingleContent';

function App() {
  // eslint-disable-next-line
  const [content, setContent] = useState(data)
  
  return (
    <main>
      <div className="container">
        <h3>Web Develop Tools 2023</h3>
        <section>
          {content.map((data) =>{
            return <SingleContent
            key={data.id} {...data}
            />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
