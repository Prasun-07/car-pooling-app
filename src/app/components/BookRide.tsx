'use client';

import { useState } from 'react';
import InputSection from './InputSection';
import Date from './Date';
import Time from './Time';
import RideCard from './RideCard';
import { supabase } from '../../../lib/supabaseClient';

export default function BookRide() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!start || !end || !date || !time) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("Car Pooling Driver's Data")
      .select('*')
      .ilike('start', `%${start}%`)
      .ilike('end', `%${end}%`)
      .eq('date', date)
      .eq('time', time);

    if (error) {
      console.error('Supabase fetch error:', error.message);
      alert('Failed to fetch rides.');
    } else {
      setResults(data);
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <InputSection type="start" input={start} setInput={setStart} />
      <InputSection type="end" input={end} setInput={setEnd} />
      <Time value={time} setValue={setTime} />
      <Date value={date} setValue={setDate} />

      <button
        onClick={handleSearch}
        className="w-full mt-5 bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700 transition"
      >
        {loading ? 'Searching...' : 'Search Rides'}
      </button>

      <div className="mt-6 space-y-4">
        {results.length > 0 ? (
          results.map((ride) => <RideCard key={ride.id} ride={ride} />)
        ) : (
          !loading && <p className="text-gray-500 text-center">No rides found.</p>
        )}
      </div>
    </div>
  );
}
