import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PlayerCount = () => {
  const times = [
    {
      "id": "1", "month": "January", "year": "2018"
    },
    {
      "id": "2", "month": "February", "year": "2018"
    },
    {
      "id": "3", "month": "March", "year": "2018"
    },
    {
      "id": "4", "month": "April", "year": "2018"
    },
    {
      "id": "5", "month": "May", "year": "2018"
    },
    {
      "id": "6", "month": "June", "year": "2018"
    },
    {
      "id": "7", "month": "August", "year": "2018"
    },
    {
      "id": "7", "month": "August", "year": "2018"
    },
  ]
  const data = [
    {
      date: '2000-01',
      count: '15'
    },
    {
      date: '2000-02',
      count: '100'
    },
    {
      date: '2000-03',
      count: '82'
    },
    {
      date: '2000-04',
      count: '55'
    },
    {
      date: '2000-05',
      count: '75'
    },
    {
      date: '2000-06',
      count: '65'
    },
    {
      date: '2000-07',
      count: '30'
    },
    {
      date: '2000-08',
      count: '42'
    },
    {
      date: '2000-09',
      count: '52'
    },
    {
      date: '2000-10',
      count: '40'
    },
    {
      date: '2000-11',
      count: '92'
    },
    {
      date: '2000-12',
      count: '20'
    },
    {
      date: '2001-01',
      count: '83'
    },
    {
      date: '2000-14',
      count: '52'
    },
    {
      date: '2000-15',
      count: '53'
    },
    {
      date: '2000-16',
      count: '25'
    },
    {
      date: '2000-17',
      count: '200'
    },
    {
      date: '2000-18',
      count: '40'
    },
    {
      date: '2000-19',
      count: '92'
    },
    {
      date: '2000-20',
      count: '20'
    },
    {
      date: '2000-21',
      count: '83'
    },
    {
      date: '2000-22',
      count: '52'
    },
    {
      date: '2000-23',
      count: '53'
    },
    {
      date: '2000-24',
      count: '29'
    }
  ];

  return (
    <div className='bg-gray-900 text-white my-8 py-20'>
      <div className='lg:w-[1000px] mx-auto'>
        <div className='flex justify-between lg:justify-between  items-center px-2 md:px-0'>
          <div className=' inline-flex gap-4 items-center'>
            <img src="https://img.icons8.com/external-flat-icons-inmotus-design/35/external-Eagle-ui-flat-icons-inmotus-design.png" alt="" srcset="" />
            <p className='text-[25px]'>
              <sub className=' text-sm'>$ </sub><span className='font-semibold'>289</span><sub className=' text-sm'> .95</sub>
            </p>
          </div>
          <p className='text-green-700 text-lg font-semibold'>+8.64%</p>
        </div>
        <p className='border-b-2 my-7 border-gray-600'></p>
        <div className='flex gap-20 justify-between items-center my-8 overflow-x-auto custom-scrollbar-hide' >
          {
            times.map(time => (
              <div className='text-center'>
                <p className='inline-flex gap-3 items-center text-gray-300 text-lg'><span className='text-3xl'>-</span> <span>{time?.month}</span></p>
                <p className='text-gray-500'>{time?.year}</p>
              </div>
            ))
          }
        </div>
        <div className='my-16'>
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" className='' fill="" />
              <Bar dataKey="" className='' fill="" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PlayerCount;