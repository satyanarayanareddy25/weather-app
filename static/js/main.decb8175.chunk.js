(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(25)},17:function(e,a,t){},18:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(9),r=t.n(l),o=(t(17),t(27));t(18);var s=e=>{let{onCitySelect:a}=e;const[t,l]=Object(n.useState)(""),[r,s]=Object(n.useState)([]);Object(n.useEffect)(()=>{t?(async()=>{try{const a=await o.a.get("http://api.weatherapi.com/v1/search.json",{params:{key:"28af5ec20b63410ca4261836241712",q:t}});s(a.data)}catch(e){console.error("Error fetching city data:",e)}})():s([])},[t]);return c.a.createElement("div",{className:"searchbar-container"},c.a.createElement("input",{type:"text",value:t,onChange:e=>l(e.target.value),placeholder:"Enter city name"}),r.length>0&&c.a.createElement("div",{className:"city-list"},r.map(e=>c.a.createElement("div",{key:e.id,className:"city",onClick:()=>(e=>{a(e),l("")})(e.name)},c.a.createElement("p",null,e.name,", ",e.country)))))};t(23);var i=e=>{var a;let{cityKey:t}=e;const[l,r]=Object(n.useState)(null),[o,s]=Object(n.useState)(null);if(Object(n.useEffect)(()=>{localStorage.removeItem("weatherData");const e=localStorage.getItem("weatherData");e?r(JSON.parse(e)):(async()=>{try{const e=await fetch("https://api.weatherapi.com/v1/forecast.json?key=".concat("28af5ec20b63410ca4261836241712","&q=").concat(t,"&days=1")),a=await e.json();console.log("Fetched Data:",a),localStorage.setItem("weatherData",JSON.stringify(a)),r(a)}catch(o){console.error("Error fetching weather data:",o),s("Failed to fetch weather data.")}})()},[t]),o)return c.a.createElement("div",{className:"class1"},o);if(!l)return c.a.createElement("div",{className:"class1"},"Loading...");const{location:i,current:m,forecast:u}=l;return(null===u||void 0===u?void 0:null===(a=u.forecastday)||void 0===a?void 0:a[0])?c.a.createElement("div",{className:"weather-container"},c.a.createElement("h1",{className:"city-name"},i.name," , ",i.country),c.a.createElement("ul",{className:"weather-row"},c.a.createElement("li",{className:"current-card card"},c.a.createElement("h2",null,"Current Weather"),c.a.createElement("p",null,c.a.createElement("b",null,"Temperature"),": ",m.temp_c,"\xb0C"),c.a.createElement("p",null,c.a.createElement("b",null,"Condition"),": ",m.condition.text),c.a.createElement("p",null,c.a.createElement("b",null,"Wind Speed"),": ",m.wind_kph," km/h"),c.a.createElement("p",null,c.a.createElement("b",null,"UV Index"),": ",m.uv)),c.a.createElement("li",{className:"weather-card card"},c.a.createElement("h2",null,"Today report "),c.a.createElement("p",null,c.a.createElement("b",null,"Max Temperature"),": ",u.forecastday[0].day.maxtemp_c,"\xb0C"),c.a.createElement("p",null,c.a.createElement("b",null,"Min Temperature"),": ",u.forecastday[0].day.mintemp_c,"\xb0C"),c.a.createElement("p",null,c.a.createElement("b",null,"Condition"),": ",u.forecastday[0].day.condition.text),c.a.createElement("p",null,c.a.createElement("b",null,"Precipitation "),": ",u.forecastday[0].day.daily_chance_of_rain,"%")),c.a.createElement("li",{className:"astro-card card"},c.a.createElement("p",null,c.a.createElement("b",null,"Sunrise"),": ",u.forecastday[0].astro.sunrise),c.a.createElement("p",null,c.a.createElement("b",null,"Sunset "),": ",u.forecastday[0].astro.sunset),c.a.createElement("img",{src:m.condition.icon,alt:"weather"})))):c.a.createElement("div",{className:"class1"},"No forecast data available.")};t(24);var m=()=>{const[e,a]=Object(n.useState)("Razam");return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"app-container"},c.a.createElement("div",{className:"searchbar-container"},c.a.createElement(s,{onCitySelect:e=>{a(e)}})),c.a.createElement("div",{className:"weather-container"},e&&c.a.createElement(i,{cityKey:e}))))};var u=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then(a=>{let{getCLS:t,getFID:n,getFCP:c,getLCP:l,getTTFB:r}=a;t(e),n(e),c(e),l(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null))),u()}},[[10,1,2]]]);
//# sourceMappingURL=main.decb8175.chunk.js.map