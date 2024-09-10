const apiKey="da8aa198edf1e31fee13bc0c237803db";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const WeatherImg=document.querySelector(".weather-img")
const SearchBox=document.querySelector(".search input");
const SearchButton=document.querySelector(".search button");

async function weatherUpdate(city){
	const response= await fetch(apiURL+city+`&appid=${apiKey}`);
	var data= await response.json();
      console.log(data);

	  if(response.status==404){
       document.querySelector(".error").style.display="block";
	   document.querySelector(".weather").style.display="none";
	  }
	  else {

	  document.querySelector(".city").innerHTML= data.name;
	  document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
	  document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
	  document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
      document.querySelector(".weather_main").innerHTML=data.weather[0].main;

	  if(data.weather[0].main=="Clouds"){
	    WeatherImg.src="images/clouds.png";
	}
      else if (data.weather[0].main=="Mist"){
	    WeatherImg.src="images/mist.png";
	}
	else if (data.weather[0].main=="Haze"){
	    WeatherImg.src="images/haze.png";
	}
	else if(data.weather[0].main=="Rain"){
	    WeatherImg.src="images/rain.png";
	}
	else if(data.weather[0].main=="Drizzle"){
	    WeatherImg.src="images/drizzle.png";
	}
	else if(data.weather[0].main=="Wind"){
	    WeatherImg.src="images/wind.png";
	}
    document.querySelector(".weather").style.display="block";
	document.querySelector(".error").style.display="none";
    }

}
SearchButton.addEventListener("click",()=>{
	weatherUpdate(SearchBox.value);
});
