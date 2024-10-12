// import React from 'react';

// const BlogPage = ({ articles }) => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8 text-center">CivicAffairs Blogs</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {articles.map((articles,index) => (
//           <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img
//               src={articles.image}
//               alt={articles.title}
//               className="h-48 w-full object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{articles.title}</h2>
//               <p className="text-gray-700 mb-4">{articles.description}</p>
//               <a href={articles.link} className="text-indigo-500 font-semibold">
//                 Read more
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;