import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Error from "../Error";
import Loading from "../Loading";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../Themes";
import { GlobalStyles } from "../globalStyles";
import DarkModeIcon from "@mui/icons-material/DarkMode";


function BorderPage({match}) {
  const [error, setError] = useState(null);
  const [borderItems, setBorderItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  const navigate = useNavigate();


  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
    const [paramName] = useState([match.params.name]);
//   const { paramName } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(true);
          setBorderItem(result);
        },
        (error) => {
          setIsLoading(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <>
        <div className="backButton">
          <div className="btnBackk" onClick={() => navigate(-1)}>
            <span>
              <ArrowBackIcon color="dark" fontSize="small" />
            </span>
            <span style={{ fontSize: "16px" }}>Back</span>
          </div>
        </div>
        <Error text={match.params.name} msg={error.message} />
      </>
    );
  } else if (!isLoading) {
    return (
      <>
        <div className="backButton">
          <div className="btnBackk" onClick={() => navigate(-1)}>
            <span>
              <ArrowBackIcon color="dark" fontSize="small" />
            </span>
            <span style={{ fontSize: "16px" }}>Back</span>
          </div>
        </div>
        <Loading text={match.params.name} />
      </>
    );
  } else {
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />

          <div className="navbar__container">
            <div className="navbar__content">
              <h2>Where in the world?</h2>

              {/* DarkMode */}
              <div className="darkmode" onClick={themeToggler}>
                <span>
                  <DarkModeIcon fontSize="small" />
                </span>
                <span className="darkText">Dark Mode</span>
              </div>
            </div>
          </div>

          {borderItems.map((item) => {
            if (item.alpha3Code == paramName) {
              return (
                <div className="cardContainer" key={item.numericCode}>
                  <div className="carditem2">
                    <div className="card2">
                      {/* image */}
                      <div className="img2">
                        <img src={item.flag} alt="" />
                      </div>
                    </div>

                    <div className="content2">
                      <div className="title2">
                        <h2>
                          <b>{item.name}</b>{" "}
                        </h2>
                      </div>
                      <div className="sides">
                        <div className="side1">
                          <p>
                            <b>Native Name </b>: &nbsp; {item.nativeName}{" "}
                          </p>
                          <p>
                            <b>Population</b> : &nbsp; {item.population}{" "}
                          </p>
                          <p>
                            <b>Region</b> : &nbsp;&nbsp; {item.region}
                          </p>
                          <p>
                            <b>Sub Region</b> : &nbsp;&nbsp; {item.subregion}
                          </p>
                          <p>
                            <b>Capital</b> : &nbsp;&nbsp; {item.capital}
                          </p>
                        </div>
                        <div className="side2">
                          <p>
                            <b>Top Level Domain</b>: &nbsp;{" "}
                            {item.topLevelDomain}{" "}
                          </p>
                          <p>
                            <b>Currencies</b> : &nbsp;{" "}
                            {item?.currencies?.map((el) => el.name)}{" "}
                          </p>
                          <p>
                            <b>Languages</b> : &nbsp;&nbsp;{" "}
                            {item.languages?.map((el) => el.name)}
                          </p>
                        </div>
                      </div>

                      <div className="borderCountries">
                        <div>
                          <p>
                            <b>Borders Countries</b>
                          </p>
                        </div>
                        <div className="borderButton">
                          {item.borders?.map((el, index) => {
                            return (
                                <div className="btnCard" key={index}>
                                  {el}
                                </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </>
      </ThemeProvider>
    );
  }
}

export default BorderPage;
