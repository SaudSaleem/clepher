import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './components/Table';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=RIBXT3XYLI69PC0Q')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl">Clepher</h1>
      </header>
      <main className="p-4">
        {data ? <Table data={data} /> : <p>Loading data...</p>}
      </main>
    </div>
  );
}

export default App;
