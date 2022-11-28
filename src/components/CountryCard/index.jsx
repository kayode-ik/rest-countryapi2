import React, { useEffect, useState } from "react";
import CountryData from "../../data";
import { Link } from "react-router-dom";

import "./countrycard.css";
import Error from "../Error";
import Loading from "../Loading";

function CountryCard({ query, filterQuery }) {
  const [countryData, setCountryData] = useState([]);
  //   const [filterData, setFilterData] = useState([]);
  //   const [filterError, setFilterError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [f] = useState(["capital", "name"]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://restcountries.com/v2/all", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(true);
        setCountryData(result);
      })
      .catch((error) => {
        setLoading(true);
        setErrorData(error);
      });
  }, []);

  //   if (errorData) {
  //     return <>{Error.message}</>;
  //   } else if (!loading) {
  //     return <div style={{textAlign:"center"}}><Loading /></div>;
  //   } else {
  console.log(countryData , 'countryData')
  function search(countryData) {
    return countryData.filter((row) => {
      // console.log(row, 'row')
      console.log(row.region , 'row.region ')
      console.log(filterQuery , 'filterQuery ')

      if (row.region.toLowerCase() === filterQuery) {
        return f.some((column) => {
          console.log(row[column] , 'row[column]')
          return (
            row[column]?.toString()?.toLowerCase()?.indexOf(filterQuery)
          );
        });
      } else if (filterQuery == "All") {
        return f.some((column) => {
          console.log(column, 'column 56')
          return (
            row[column]?.toString()?.toLowerCase()?.indexOf(query) > -1
            // column
          );
        });
      }

      
    });
  }

  if (errorData) {
    return (
      <>
        <Error text="Countries" msg={errorData.message} />
      </>
    );
  } else if (!loading) {
    return (
      <>
        <Loading text="Countries" />
      </>
    );
  } else {
    return (
      <>
        <div className="customCard">
          {search(countryData)?.map((val) => {
            return (
              <div className="carditem" key={val.id}>
                  <div className="card">
                <Link to={`/details/${val.alpha2Code}`}>
                    {/* image */}
                    <div className="img">
                      <img src={val.flag ? val.flag : "---"} alt="" />
                    </div>
                </Link>

                    <div className="content">
                      <div className="title">
                        <h4>
                          <b>{val.name}</b>
                        </h4>
                      </div>
                      <p style={{fontSize:'15px'}}>Population : &nbsp; {val.population} </p>
                      <p style={{fontSize:'15px'}}>Region : &nbsp;&nbsp; {val.region}</p>
                      <p style={{fontSize:'15px'}}>Capital : &nbsp;&nbsp; {val.capital}</p>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default CountryCard;

//   const fetchData = () => {
//     console.log(filterQuery, "filterQuery 19");
//     setLoading(true);
//     var requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };
//     fetch(`https://restcountries.com/v2/region/${filterQuery}`, requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setLoading(false);
//         setFilterData(result);
//       })
//       .catch((error) => setFilterError(error));
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(filterData, "filterData");
// {filterQuery !== "" && filterQuery.length > 0 ? (
//     <div className="customCard">
//       {loading ? (
//         "Loading ..."
//       ) : (
//         <>
//           {filterData?.map((val) => {
//             return (
//               <div className="carditem" key={val.id}>
//                 <Link to={`/details/${val.name}`}>
//                   <div className="card">
//                     {/* // {/* image  */}
//                     <div className="img">
//                       <img src={val.flag ? val.flag : "FLAG"} alt="" />
//                     </div>
//                     <div className="content">
//                       <div className="title">
//                         <h4>
//                           <b>{val.name}</b>
//                         </h4>
//                       </div>
//                       <p>Population : &nbsp; {val.population} </p>
//                       <p>Region : &nbsp;&nbsp; {val.region}</p>
//                       <p>Capital : &nbsp;&nbsp; {val.capital}</p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </>
//       )}
//     </div>
//   ) : (
// history.push(
//     `/core/products/savings-products/details/${r.key}`
//   ),

// {/* <Card sx={{ maxWidth: 345 }}>
//             <Link to={`SinglePage/${val.id}`}>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={val.img}
//                   alt={val.title}
//                 />
//                 <CardContent className="cardContent" >
//                   <Typography gutterBottom variant="h5" component="div" >
//                     {val.title}
//                   </Typography>
//                   <Typography variant="body2">
//                    Population : &nbsp;&nbsp; {val.population}
//                   </Typography>
//                   <Typography variant="body2">
//                    Region : &nbsp;&nbsp;&nbsp; {val.region}
//                   </Typography>
//                   <Typography variant="body2" color="none">
//                    Capital : &nbsp;&nbsp;&nbsp; {val.Capital}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//               </Link>
//             </Card> */}

// {/* <div className="customCard">
// {countryData
//   .filter((el) => {
//     // if no input
//     if (query === "" && query === null) {
//       return el;
//     } else if (query) {
//       return (
//         el.name.toLowerCase().includes(query) ||
//         el.alpha2Code.toLowerCase().includes(query)
//       );
//     }
//     return "Result Not found";
//   })
//   .map((val) => {
//     return (
//       <div className="carditem" key={val.id}>
//         <Link to={`/details/${val.id}`}>
//           <div className="card">
//              image
//             <div className="img">
//               <img src={val.flag ? val.flag : "FLAG"} alt="" />
//             </div>
//             <div className="content">
//               <div className="title">
//                 <h4>
//                   <b>{val.name}</b>
//                 </h4>
//               </div>
//               <p>Population : &nbsp; {val.population} </p>
//               <p>Region : &nbsp;&nbsp; {val.region}</p>
//               <p>Capital : &nbsp;&nbsp; {val.capital}</p>
//             </div>
//           </div>
//         </Link>
//       </div>
//     );
//   })}
// </div> */}
