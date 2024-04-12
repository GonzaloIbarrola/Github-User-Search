// DarkMode*******************
function darkMode(dark) {
  if (dark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function darkModeToggle(dark,setDark) {
  setDark(!dark);
}
// ************************



// Search *****************************
function handleInputChange(event, setSearch) {
  setSearch(event.target.value);
}

function fetchMyGithubProfile(setData) {
  fetch('https://api.github.com/users/gonzaloibarrola')
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }
// *************************************



// Fetch data******************************
function handleSearch(setData,setError,search,error) {
  if (search.trim() === '') {
    return;
  }

  fetch(`https://api.github.com/users/${search}`)
    .then(response => {
      if (!response.ok) {
        setError(true)
        fetch('https://api.github.com/users/gonzaloibarrola')
          .then(response => response.json())
          .then(data => {
            setData(data)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }
      console.log(error);
      return response.json();
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }
// *******************



// Date ***************
function formatDate(data) {
  let joinedDate = new Date(data.created_at);

  let day = joinedDate.getDate();
  let month = joinedDate.getMonth();
  let year = joinedDate.getFullYear();
  let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let monthName = monthNames[month];
  return day + ' ' + monthName + ' ' + year;
}

// ********************
  export default {
    handleInputChange,
    fetchMyGithubProfile,
    darkMode,
    darkModeToggle,
    handleSearch,
    formatDate
  }
