import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Widget() {
  const { streamerId } = useParams();
  const [donation, setDonation] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/${streamerId}`);
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setDonation(data);
      setTimeout(() => setDonation(null), 7000); // Очистить через 7 сек
    };
    return () => socket.close();
  }, [streamerId]);

  return (
    <div className="w-full h-full bg-transparent text-white text-center p-10">
      {donation && (
        <div className="bg-purple-600 p-6 rounded-xl shadow-xl animate-bounce">
          <h2 className="text-2xl font-bold">💸 Новый донат!</h2>
          <p className="text-lg">${donation.amount.toFixed(2)}</p>
          <p className="italic mt-2">{donation.message}</p>
        </div>
      )}
    </div>
  );
}
