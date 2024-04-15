import React, { useEffect, useState } from "react";

export const SearchContext = React.createContext({});

// eslint-disable-next-line react/prop-types
function SearchProvider(props) {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [dark, setDark] = useState(localStorage.theme === "dark");

  function switchDarkMode() {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function darkModeToggle() {
    console.log(dark);
    switchDarkMode(!dark);
    setDark(!dark);
  }

  useEffect(() => {
    switchDarkMode(dark);
    fetchMyGithubProfile();
  }, [dark]);

  // Search *****************************
  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  function fetchMyGithubProfile() {
    fetch("https://api.github.com/users/gonzaloibarrola")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // *************************************

  // Fetch data******************************
  function handleSearch(search) {
    if (search.trim() === "") {
      return;
    }

    fetch(`https://api.github.com/users/${search}`)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          fetch("https://api.github.com/users/gonzaloibarrola")
            .then((response) => response.json())
            .then((data) => {
              setData(data);
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        }
        console.log(error);
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const items = [
    {
      title: `${data.location}`,
      icon: LocationIcon,
      alt: "Location icon",
    },
    {
      title: `${data.blog}`,
      icon: WebsiteIcon,
      alt: "Blog icon",
    },
    {
      title: `${data.twitter_username}`,
      icon: TwitterIcon,
      alt: "Twitter icon",
    },
    {
      title: `${data.company}`,
      icon: CompanyIcon,
      alt: "Company icon",
    },
  ];

  // *******************
  const values = {
    items,
    handleSearch,
    darkModeToggle,
    handleInputChange,
    search,
    setSearch,
    error,
    setError,
    data,
    setData,
    dark,
    setDark,
  };

  return (
    <SearchContext.Provider value={values}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </SearchContext.Provider>
  );
}

export { SearchProvider };
