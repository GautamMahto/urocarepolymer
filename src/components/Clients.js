

// import React, { useState, useEffect } from 'react';
// import './Clients.css';

// const Clients = ({ clients, interval = 1000, transition = 500, visibleCount = 4 }) => {
//   const [queue, setQueue] = useState(clients);
//   const [sliding, setSliding] = useState(false);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setSliding(true);
//       setTimeout(() => {
//         setQueue((q) => [...q.slice(1), q[0]]);
//         setSliding(true);
//       }, transition);
//     }, interval + transition);
//     return () => clearInterval(id);
//   }, [interval, transition]);

//   // First 4 items plus first item again for smooth wrap
//   const display = [...queue.slice(0, visibleCount), queue[0]];

//   const slideStyle = {
//     transform: sliding
//       ? `translateX(-${100 / visibleCount}%)`
//       : 'translateX(0)',
//     transition: sliding
//       ? `transform ${transition}ms ease-in-out`
//       : 'none',
//   };

//   return (
//     <section id="clients" className="clients">
//       <div className="container">
//         <h2>Our Clients</h2>
//         <div className="client-window">
//           <div className="client-track" style={slideStyle}>
//             {display.map((client, idx) => (
//               <div
//                 key={idx}
//                 className="client-logo"
//                 style={{ flex: `0 0 ${100 / visibleCount}%` }}
//               >
//                 <img src={client.logo} alt={client.name} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;


import React, { useState, useEffect } from 'react';
import './Clients.css';

const Clients = ({ clients, interval = 1000, transition = 500, visibleCount = 4 }) => {
  const [queue, setQueue] = useState(clients);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setSliding(true);
      setTimeout(() => {
        setQueue((q) => [...q.slice(1), q[0]]);
        setSliding(false);
      }, transition);
    }, interval + transition);
    return () => clearInterval(id);
  }, [interval, transition]);

  // First 4 items plus first item again for smooth wrap
  const display = [...queue.slice(0, visibleCount), queue[0]];

  const slideStyle = {
    transform: sliding
      ? `translateX(-${100 / visibleCount}%)`
      : 'translateX(0)',
    transition: sliding
      ? `transform ${transition}ms ease-in-out`
      : 'none',
  };

  return (
    <section id="clients" className="clients">
      <div className="container">
        <h2>Our Clients</h2>
        <div className="client-window">
          <div className="client-track" style={slideStyle}>
            {display.map((client, idx) => (
              <div
                key={idx}
                className="client-logo"
                style={{ flex: `0 0 ${100 / visibleCount}%` }}
              >
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;