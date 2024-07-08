import React from 'react';

interface TableProps {
  data: any;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 text-left px-4 border-b">Timestamp</th>
            <th className="py-2 text-left px-4 border-b">Open</th>
            <th className="py-2 text-left px-4 border-b">High</th>
            <th className="py-2 text-left px-4 border-b">Low</th>
            <th className="py-2 text-left px-4 border-b">Close</th>
            <th className="py-2 text-left px-4 border-b">Volume</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data["Time Series (5min)"]).map((timestamp) => (
            <tr key={timestamp}>
              <td className="py-2 px-4 border-b">{timestamp}</td>
              <td className="py-2 px-4 border-b">{data["Time Series (5min)"][timestamp]["1. open"]}</td>
              <td className="py-2 px-4 border-b">{data["Time Series (5min)"][timestamp]["2. high"]}</td>
              <td className="py-2 px-4 border-b">{data["Time Series (5min)"][timestamp]["3. low"]}</td>
              <td className="py-2 px-4 border-b">{data["Time Series (5min)"][timestamp]["4. close"]}</td>
              <td className="py-2 px-4 border-b">{data["Time Series (5min)"][timestamp]["5. volume"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
