const getCountries = () =>{

    console.log("Getting Countries...");

    const xmr = new XMLHttpRequest();

    xmr.open("GET","https://restcountries.com/v3.1/all");
    xmr.send();
    xmr.responseType ="json";

    xmr.onload = () => {
        const countries = xmr.response;

        const asian = countries.filter((country) => country.region && country.region === "Asia")
          .map((country) => country.name.common);

        const twolakCountries = countries
        .filter((country)=>country.population < 2_00_000)
        .map((country)=> ({name : country.name.common, population :country.population}));


        const usCurrency = countries
        .filter((country) => country.currencies && country.currencies.USD)
        .map((country) => country.name.common);

        const totPop = countries.map((country) => country.population)
        .reduce((sum , curr) => sum + curr, 0);


        

        console.log("1.The Countries in Asian Continents",asian);
        console.log("2.Less Then 2'lakh Peoples Lived Country list",twolakCountries);
        console.log("4.Total Population of countries",totPop);
        console.log("5.USDoller currency used countries",usCurrency);
        countries.forEach((country) => console.log(country.name.common,country.flags.png, country.capital));
        
    }
};
getCountries();




// const asian = countries.filter((country) => country.region[asia])
    // .map((country) => country.name.common);
    // console.log("Asia",asian);