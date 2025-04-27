// import React, { useState } from 'react';

// const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navbarClass = `navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
//   const sections = ['home', 'about', 'products', 'contact', 'inquiry'];

//   return (
//     <nav className={navbarClass}>
//       <div className="container">
//         <div 
//           className="navbar-content" 
//           style={{ 
//             display: 'flex', 
//             justifyContent: 'space-between', 
//             alignItems: 'center', 
//             height: '80px' 
//           }}
//         >
//           <div className="logo">RAJA FABRICATORS</div>
//           <ul className="nav-links" style={{ display: 'flex', listStyle: 'none' }}>
//             {sections.map((section) => (
//               <li key={section} style={{ marginLeft: '20px' }}>
//                 <a 
//                   href={`#${section}`}
//                   className={activeSection === section ? 'active' : ''}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           {/* Theme Toggle Button as an image icon on the rightmost part */}
//           <button 
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             style={{
//               background: 'none',
//               border: 'none',
//               cursor: 'pointer',
//               marginLeft: 'auto'
//             }}
//           >
//             <img 
//               src={
//                 isDarkMode 
//                   ? "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png" 
//                   : "https://img.icons8.com/ios-filled/50/000000/moon-symbol.png"
//               } 
//               alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//               style={{ width: '24px', height: '24px' }}
//             />
//           </button>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="mobile-menu">
//           <ul className="nav-links">
//             {sections.map((section) => (
//               <li key={section}>
//                 <a 
//                   href={`#${section}`} 
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

//-------------------------------------------------------------------------------
// import React from 'react';

// const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }) => {
//   const sections = ['home', 'about', 'products', 'contact', 'inquiry'];

//   return (
//     <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       <div className="container">
//         <div
//           className="navbar-content"
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             height: '80px'
//           }}
//         >
//           {/* Left: Logo */}
//           <div
//             className="logo"
//             style={{
//               fontSize: '1.8rem',
//               fontWeight: 'bold',
//               fontFamily: 'Georgia, serif',
//               color: '#2563eb'
//             }}
//           >
//             RAJA FABRICATORS
//           </div>
//           {/* Center: Navigation Links */}
//           <ul
//             className="nav-links"
//             style={{
//               display: 'flex',
//               listStyle: 'none',
//               margin: 0,
//               padding: 0
//             }}
//           >
//             {sections.map((section) => (
//               <li key={section} style={{ margin: '0 20px' }}>
//                 <a
//                   href={`#${section}`}
//                   className={activeSection === section ? 'active' : ''}
//                   style={{
//                     textDecoration: 'none',
//                     fontSize: '1rem',
//                     color: isDarkMode ? '#D1D5DB' : '#4B5563'
//                   }}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           {/* Right: Theme Toggle */}
//           <div>
//             <button
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 cursor: 'pointer'
//               }}
//             >
//               <img
//                 src={
//                   isDarkMode
//                     ? "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png"
//                     : "https://img.icons8.com/ios-filled/50/000000/moon-symbol.png"
//                 }
//                 alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//                 style={{ width: '24px', height: '24px' }}
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// -----------------------------------------------------------
// import React from 'react';

// const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }) => {
//   const sections = ['home', 'about', 'products', 'contact', 'inquiry'];

//   return (
//     <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       <div className="container">
//         <div className="navbar-content" style={{ height: '80px' }}>
//           {/* Left Section */}
//           <div className="navbar-left">
//             <h1 className="logo">
//               RAJA FABRICATORS
//             </h1>
//           </div>

//           {/* Center Section */}
//           <div className="navbar-center">
//             <ul className="nav-links" style={{ display: 'inline-flex', listStyle: 'none', margin: 0, padding: 0 }}>
//               {sections.map((section) => (
//                 <li key={section} style={{ margin: '0 20px' }}>
//                   <a
//                     href={`#${section}`}
//                     className={activeSection === section ? 'active' : ''}
//                     style={{
//                       textDecoration: 'none',
//                       fontSize: '1rem',
//                       color: isDarkMode ? '#D1D5DB' : '#4B5563'
//                     }}
//                   >
//                     {section.charAt(0).toUpperCase() + section.slice(1)}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Section */}
//           <div className="navbar-right">
//             <button
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 cursor: 'pointer'
//               }}
//             >
//               <img
//                 src={
//                   isDarkMode
//                     ? "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png"
//                     : "https://img.icons8.com/ios-filled/50/000000/moon-symbol.png"
//                 }
//                 alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//                 style={{ width: '24px', height: '24px' }}
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
//-----------------------------------------------
// import React from 'react';

// const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }) => {
//   const sections = ['home', 'about', 'products', 'contact', 'inquiry'];

//   return (
//     <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       <div className="container navbar-content">
//         {/* Left Section */}
//         <div className="navbar-left">
//           <h1 className="logo">RAJA FABRICATORS</h1>
//         </div>

//         {/* Center Section */}
//         <div className="navbar-center">
//           <ul className="nav-links">
//             {sections.map((section) => (
//               <li key={section}>
//                 <a
//                   href={`#${section}`}
//                   className={activeSection === section ? 'active' : ''}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Section: Theme Toggle */}
//         <div className="navbar-right">
//           <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-toggle">
//             <img
//               src={
//                 isDarkMode
//                   ? "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png"
//                   : "https://img.icons8.com/ios-filled/50/000000/moon-symbol.png"
//               }
//               alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//             />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
//--------------------------------------------------------------

// import React from 'react';

// const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }) => {
//   const sections = ['home', 'about', 'products', 'contact', 'inquiry'];

//   return (
//     <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       {/* Outer container to hold the entire navbar content */}
//       <div
//         className="container navbar-content"
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           height: '80px',
//           padding: '0 20px'
//         }}
//       >
//         {/* Left Section: Logo */}
//         <div style={{ flex: '0 0 auto' }}>
//           <h1
//             className="logo"
//             style={{
//               margin: 0,
//               fontSize: '1.8rem',
//               color: '#2563eb',
//               fontFamily: 'Georgia, serif'
//             }}
//           >
//             RAJA FABRICATORS
//           </h1>
//         </div>

//         {/* Center Section: Navigation Links */}
//         <div
//           style={{
//             flex: 1,
//             display: 'flex',
//             justifyContent: 'center'
//           }}
//         >
//           <ul
//             className="nav-links"
//             style={{
//               listStyle: 'none',
//               display: 'flex',
//               gap: '20px',
//               margin: 0,
//               padding: 0
//             }}
//           >
//             {sections.map((section) => (
//               <li key={section}>
//                 <a
//                   href={`#${section}`}
//                   className={activeSection === section ? 'active' : ''}
//                   style={{
//                     textDecoration: 'none',
//                     fontSize: '1rem',
//                     color: isDarkMode ? '#D1D5DB' : '#4B5563'
//                   }}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Section: Theme Toggle Button */}
//         <div style={{ flex: '0 0 auto' }}>
//           <button
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             style={{
//               backgroundColor: isDarkMode ? '#2563eb' : '#ccc',
//               border: 'none',
//               borderRadius: '50%',
//               width: '40px',
//               height: '40px',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}
//           >
//             <img
//               src={
//                 isDarkMode
//                   ? 'https://img.icons8.com/ios-filled/20/ffffff/sun--v1.png'
//                   : 'https://img.icons8.com/ios-filled/20/000000/moon-symbol.png'
//               }
//               alt={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//             />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// --------------------------------------------------------------------
// import React from 'react';

// const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }) => {
//   const sections = ['home', 'about', 'products', 'contact', 'inquiry'];
//   return (
//     <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'} animate-navbar`}>
//       <div className="container navbar-content">
//         {/* Left Section: Logo */}
//         <div className="navbar-left">
//           <h1 className="logo" style={{ color: isDarkMode ? '#64B5F6' : '#2563eb' }}>
//             RAJA FABRICATORS
//           </h1>
//         </div>
//         {/* Center Section: Navigation Links */}
//         <div className="navbar-center">
//           <ul className="nav-links">
//             {sections.map((section) => (
//               <li key={section}>
//                 <a
//                   href={`#${section}`}
//                   className={activeSection === section ? 'active' : ''}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Right Section: Theme Toggle Button */}
//         <div className="navbar-right">
//           <button
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             className="theme-toggle"
//           >
//             <img
//               src={
//                 isDarkMode
//                   ? 'https://img.icons8.com/ios-filled/20/ffffff/sun--v1.png'
//                   : 'https://img.icons8.com/ios-filled/20/000000/moon-symbol.png'
//               }
//               alt={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//             />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
//---------------------------------------------------------------------------------------------------

import React from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }) => {
  const sections = ['home', 'about', 'products','clients', 'contact', 'inquiry'];

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container navbar-content">
        {/* Left Section: Logo */}
        <div className="navbar-left">
          <h1 className="logo">RAJA FABRICATORS</h1>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="navbar-center">
          <ul className="nav-links">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? 'active' : ''}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Theme Toggle */}
        <div className="navbar-right">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-toggle">
            <img
              src={
                isDarkMode
                  ? 'https://img.icons8.com/ios-filled/20/ffffff/sun--v1.png'
                  : 'https://img.icons8.com/ios-filled/20/000000/moon-symbol.png'
              }
              alt={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
