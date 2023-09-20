// import React, { useState, useEffect } from 'react';
// import { axiosReq } from "./../api/axiosDefaults";
// import { useLocation } from "react-router";


// // const data = [
// //   {
// //     "id": 9,
// //     "owner": "dan",
// //     "is_owner": false,
// //     "profile_id": 4,
// //     "profile_image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/../default_profile_nhnsof",
// //     "created_at": "17 Sep 2023",
// //     "updated_at": "17 Sep 2023",
// //     "title": "Escuela de Nada",
// //     "image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/images/nada_bpd6k9",
// //     "resource_url": "https://open.spotify.com/show/4xOM98A8Es30eGevw6tYwe?si=be82f2c190c84725",
// //     "country_filter": "venezuela",
// //     "resource_type_filter": "podcast",
// //     "difficulty_level_filter": "easy_native",
// //     "favourite_id": null,
// //     "favourites_count": 1
// //   },
// //   {
// //     "id": 7,
// //     "owner": "sam",
// //     "is_owner": false,
// //     "profile_id": 2,
// //     "profile_image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/images/ar_ztwpzu",
// //     "created_at": "16 Sep 2023",
// //     "updated_at": "17 Sep 2023",
// //     "title": "Español con Juan",
// //     "image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/images/ecj_kbfjhu",
// //     "resource_url": "https://open.spotify.com/show/5xB1YXVnBiurQrTA1nP0ZH?si=8c972bfe5af44cb8",
// //     "country_filter": "spain",
// //     "resource_type_filter": "podcast",
// //     "difficulty_level_filter": "learner",
// //     "favourite_id": null,
// //     "favourites_count": 2
// //   },
// //   {
// //     "id": 2,
// //     "owner": "tim",
// //     "is_owner": false,
// //     "profile_id": 3,
// //     "profile_image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/images/ve_qkybvf",
// //     "created_at": "16 Sep 2023",
// //     "updated_at": "17 Sep 2023",
// //     "title": "How to Spanish",
// //     "image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/images/how_to_spnaish_tungvg",
// //     "resource_url": "https://open.spotify.com/show/2KYyAGSPNJKUKCuqURpDuV?si=a2064023f6a74646",
// //     "country_filter": "mexico",
// //     "resource_type_filter": "podcast",
// //     "difficulty_level_filter": "intermediate",
// //     "favourite_id": null,
// //     "favourites_count": 1
// //   }
// // ];



// function CountryFilter(filter="", currentUser) {
//   const [query, setQuery] = useState('');
//   const [resources, setResources] = useState({ results: [] });
//   const [hasLoaded, setHasLoaded] = useState(false);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const fetchResources = async () => {
//       try {
//         const { data } = await axiosReq.get(`/resources/?${filter}search=${query}`);
//         setResources(data);
//         setHasLoaded(true);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     setHasLoaded(false);
//     const timer = setTimeout(() => {
//         fetchResources();
//     }, 1000);

//     return () => {
//         clearTimeout(timer);
//       };

//   }, [filter, query, pathname, currentUser]);
  

//   return (
//     <div>
//       <select onChange={(e) => setQuery(e.target.value)}>
//         <option value="">All</option>
//         <option value="argentina">Argentina</option>
//         <option value="bolivia">Bolivia</option>
//         <option value="canary_islands">Canary Islands</option>
//         <option value="chile">Chile</option>
//         <option value="colombia">Colombia</option>
//         <option value="costa_rica">Costa Rica</option>
//         <option value="cuba">Cuba</option>
//         <option value="dominican_republic">Dominican Republic</option>
//         <option value="ecudaor">Ecuador</option>
//         <option value="el_salvador">El Salvador</option>
//         <option value="equatorial_guinea">Equatorial Guinea</option>
//         <option value="guatemala">Guatemala</option>
//         <option value="honduras">Honduras</option>
//         <option value="mexico">Mexico</option>
//         <option value="nicaragua">Nicaragua</option>
//         <option value="panama">Panama</option>
//         <option value="paraguay">Paraguay</option>
//         <option value="puerto_rico">Puerto Rico</option>
//         <option value="peru">Peru</option>
//         <option value="spain">Spain</option>
//         <option value="uruguay">Uruguay</option>
//         <option value="venezuela">Venezuela</option>
//       </select>
//       <br /><br />
//       {resources
//         .filter((item) => !query || item.country_filter === query)
//         .map((item, index) => (
//           <div
//             key={index}
//             className={item.country_filter === 'Venezuela' ? 'venezuela' : 'all'}
//           >
//             {item.title}
//             {item.country_filter}
//           </div>
//         ))}
//     </div>
//   );
// }

// export default CountryFilter