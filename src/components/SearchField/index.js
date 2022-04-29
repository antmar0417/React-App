import React from "react";
import searchIcon from "../../assets/images/search.svg";
import "./searchField.css";

const SearchField = ({ handleChange }) => {
  return (
    <div className="search-field">
      <input onChange={handleChange} placeholder="Search for artist" />
      <button>
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
};

export default SearchField;
// import React, { useState, useEffect } from "react";
// import searchIcon from "../../assets/images/search.svg";
// import "./searchField.css";

// const SearchField = () => {
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   function onSubmit(e) {
//     e.preventDefault();
//     // console.log(search);
//     setQuery(search);
//   }

//   useEffect(() => {
//     console.log({ query });

//     async function fetchData() {
//       try {
//         const response = await fetch(`https:`);
//         const json = await response.json();
//         console.log({ json });
//         setResults(
//           json.data.map((item) => {
//             return item.images.preview.mp4;
//           })
//         );
//       } catch (error) {}
//     }
//     if (query !== "") {
//       fetchData();
//     }
//   }, [query]);

//   return (
//     <div className="search-field">
//       <form onSubmit={onSubmit}>
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search for artist"
//         />
//         <button type="submit">
//           <img src={searchIcon} alt="search" />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchField;
