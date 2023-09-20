import React, { useState } from 'react';

const data = [
  {
    "id": 9,
    "owner": "dan",
    "is_owner": false,
    "profile_id": 4,
    "profile_image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/../default_profile_nhnsof",
    "created_at": "17 Sep 2023",
    "updated_at": "17 Sep 2023",
    "title": "Escuela de Nada",
    "image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/images/nada_bpd6k9",
    "resource_url": "https://open.spotify.com/show/4xOM98A8Es30eGevw6tYwe?si=be82f2c190c84725",
    "country_filter": "venezuela",
    "resource_type_filter": "podcast",
    "difficulty_level_filter": "easy_native",
    "favourite_id": null,
    "favourites_count": 1
  },
  {
    "id": 7,
    "owner": "sam",
    "is_owner": false,
    "profile_id": 2,
    "profile_image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/images/ar_ztwpzu",
    "created_at": "16 Sep 2023",
    "updated_at": "17 Sep 2023",
    "title": "Español con Juan",
    "image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/images/ecj_kbfjhu",
    "resource_url": "https://open.spotify.com/show/5xB1YXVnBiurQrTA1nP0ZH?si=8c972bfe5af44cb8",
    "country_filter": "spain",
    "resource_type_filter": "podcast",
    "difficulty_level_filter": "learner",
    "favourite_id": null,
    "favourites_count": 2
  },
  {
    "id": 2,
    "owner": "tim",
    "is_owner": false,
    "profile_id": 3,
    "profile_image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/images/ve_qkybvf",
    "created_at": "16 Sep 2023",
    "updated_at": "17 Sep 2023",
    "title": "How to Spanish",
    "image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/images/how_to_spnaish_tungvg",
    "resource_url": "https://open.spotify.com/show/2KYyAGSPNJKUKCuqURpDuV?si=a2064023f6a74646",
    "country_filter": "mexico",
    "resource_type_filter": "podcast",
    "difficulty_level_filter": "intermediate",
    "favourite_id": null,
    "favourites_count": 1
  }
];

function CountryFilter() {
  const [filter, setFilter] = useState('');
  

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="argentina">Argentina</option>
        <option value="bolivia">Bolivia</option>
        <option value="canary_islands">Canary Islands</option>
        <option value="chile">Chile</option>
        <option value="colombia">Colombia</option>
        <option value="costa_rica">Costa Rica</option>
        <option value="cuba">Cuba</option>
        <option value="dominican_republic">Dominican Republic</option>
        <option value="ecudaor">Ecuador</option>
        <option value="el_salvador">El Salvador</option>
        <option value="equatorial_guinea">Equatorial Guinea</option>
        <option value="guatemala">Guatemala</option>
        <option value="honduras">Honduras</option>
        <option value="mexico">Mexico</option>
        <option value="nicaragua">Nicaragua</option>
        <option value="panama">Panama</option>
        <option value="paraguay">Paraguay</option>
        <option value="puerto_rico">Puerto Rico</option>
        <option value="peru">Peru</option>
        <option value="spain">Spain</option>
        <option value="uruguay">Uruguay</option>
        <option value="venezuela">Venezuela</option>
      </select>
      <br /><br />
      {data
        .filter((item) => !filter || item.country_filter === filter)
        .map((item, index) => (
          <div
            key={index}
            className={item.country_filter === 'Venezuela' ? 'venezuela' : 'all'}
          >
            {item.title}
            {item.country_filter}
          </div>
        ))}
    </div>
  );
}

export default CountryFilter