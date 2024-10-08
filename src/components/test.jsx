// import React, { useState } from 'react'

// function Test() {
//     const [hoveredSpan, setHoveredSpan] = useState(null);

//     const getSpanClass = (spanName) => {
//         const baseClass = "transition duration-300 ease-in-out text-[150px] text-prim inline-block hover:scale-105";
//         return `${baseClass} ${hoveredSpan && hoveredSpan !== spanName ? 'blur-sm' : ''}`;
//     };

//     const InteractiveWord = ({ word }) => {
//         return (
//             <span className="inline transition-all duration-none ease-in-out hover:text-prim">
//                 {word}
//             </span>
//         )
//     }

//     const InteractiveText = ({ text }) => {
//         const words = text.split(' ');
//         return (
//             <>
//                 {words.map((word, index) => (
//                     <React.Fragment key={index}>
//                         <InteractiveWord word={word} />
//                         {index < words.length - 1 && ' '}
//                     </React.Fragment>
//                 ))}
//             </>
//         )
//     }



//     return (
//         <header className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
//             {/* Video background code remains the same */}
//             <div className="absolute z-10 w-auto min-w-full min-h-full max-w-none [filter:brightness(0.35)_saturate(0.85)_contrast(0.8)]">
//                 <video
//                     className='w-full h-full object-cover'
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                 >
//                     <source src="/assets/videos/bg-video.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </div>

//             <div className='cursor-default drop-shadow-xl absolute z-20 backdrop:top-0.5 left-0 pl-20 w-5/6 text-txt '>
//                 <h1 className="text-[115px] font-bold leading-none tracking-normal">
//                     <div className="leading-[1.15em]">
//                         <span
//                             className={getSpanClass('webdesign')}
//                             onMouseEnter={() => setHoveredSpan('webdesign')}
//                             onMouseLeave={() => setHoveredSpan(null)}
//                         >
//                             Web Design
//                         </span>{' '}&{' '}
//                         <span
//                             className={getSpanClass('seo')}
//                             onMouseEnter={() => setHoveredSpan('seo')}
//                             onMouseLeave={() => setHoveredSpan(null)}
//                         >
//                             SEO
//                         </span> <br />
//                         <span
//                             className={`${hoveredSpan ? 'blur-sm' : ''} transition duration-300 ease-in-out pl-3`}
//                         >
//                             Service Done
//                         </span>{' '}
//                         <span
//                             className={`underline text-[130px] pl-7 decoration-prim ${hoveredSpan ? 'blur-sm' : ''} transition duration-300 ease-in-out`}
//                         >
//                             Right
//                         </span>
//                     </div>
//                 </h1>

//                 <h2 className="text-[40px] pl-4 font-semibold text-txt tracking-wide pt-9">
//                     <InteractiveText text="Boost your online presence and reach more" />
//                     <br />
//                     <InteractiveText text="customers with Digital Upgrade, LLC." />
//                 </h2>
//                 <button className="absolute transition duration-700 ease-in-out  text-txt text-3xl font-bold border-solid border-prim bg-gradient-to-r from-cta-grad-1 from-0%
//                 to-cta-grad-2 to-100% border-4 mt-10 ml-5 px-16 py-6 rounded-xl hover:from-cta-h-grad-1 hover:to-cta-h-grad-2">
//                     Get Started
//                 </button>
//             </div>
//         </header>
//     )
// }

// export default Test;