(this.webpackJsonpmovie_finder=this.webpackJsonpmovie_finder||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},41:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),i=a.n(r),c=(a(24),a(14)),s=a(15),l=a(2),m=a(18),d=a(17),h=a(16),v=a.n(h);a(41);a(42).config();var u=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={Search_keyword:"",DataMovies:[]},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e.handleKeyDown=e.handleKeyDown.bind(Object(l.a)(e)),e}return Object(s.a)(a,[{key:"find_movies",value:function(){var e=this,t=this.state.Search_keyword;console.log(t),v.a.get("https://api.themoviedb.org/3/search/movie?api_key="+Object({NODE_ENV:"production",PUBLIC_URL:"/movie_finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).DB_API_KEY+"&query="+t+"&page=1",{async:!0,crossDomain:!0,method:"GET",headers:{"content-type":"application/json;charset=utf-8",authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGUxM2FlZGU0MWUwZTE3YTQxMDRmZmNhNzMzMjNkYSIsInN1YiI6IjVlYzc0ZmFiZDIxNDdjMDAyM2JlYjA5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JCgsMXm5wbYGA6lcd7_Yq970YK-HZEsyec87wgiF-9c"},processData:!1,data:"{}"}).then((function(t){console.log(t.data),e.setState({DataMovies:t.data.results})})).catch((function(e){console.log(e.response)}))}},{key:"componentDidMount",value:function(){this.find_movies()}},{key:"handleChange",value:function(e){this.setState({Search_keyword:e.target.value})}},{key:"handleKeyDown",value:function(e){13===e.keyCode&&this.find_movies()}},{key:"render",value:function(){var e=this.state.DataMovies.map((function(e,t){var a=e.title,n="";n=void 0===e.release_date||""===e.release_date?"":"("+e.release_date.slice(0,4)+")";var r=e.vote_average,i=e.vote_count,c=e.id,s="";return s=null===e.poster_path?"https://dummyimage.com/500x750/000/fff.jpg&text=No+Poster+Image":"https://image.tmdb.org/t/p/w500/"+e.poster_path,o.a.createElement("div",{className:"row",key:t},o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("div",{id:"film_img"})," ",o.a.createElement("img",{src:s,alt:"film_poster",onClick:function(){return window.open("https://www.themoviedb.org/movie/"+c,"_blank")}})),o.a.createElement("div",{className:"col-sm-8 col-film-info"},o.a.createElement("div",{id:"film"}," ",a," "),o.a.createElement("div",{id:"film_release_date"}," ",n," "),o.a.createElement("div",{id:"film_rating"}," Rating: ",r," (",i," users vote) ")))}));return o.a.createElement("div",null,o.a.createElement("div",{className:"container container-header"},o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},o.a.createElement("span",{id:"deskripsi"})," Simple Movie Finder "),o.a.createElement("p",{className:"lead",id:"deskripsi_header"}," Create by ",o.a.createElement("a",{href:"https://github.com/hestu14",target:"_blank",rel:"noopener noreferrer"},"hestu14"))))),o.a.createElement("div",{className:"container container-search"},o.a.createElement("div",{className:"input-group md-form form-sm form-2 pl-0"},o.a.createElement("input",{className:"form-control my-0 py-1 lime-border",type:"search",placeholder:"Tekan Enter untuk mencari",value:this.state.Search_keyword,onChange:this.handleChange,onKeyDown:this.handleKeyDown}))),o.a.createElement("div",{className:"container"},e),o.a.createElement("footer",{id:"sticky-footer",className:"py-4 bg-light text-white-50"},o.a.createElement("div",{className:"container text-center"},o.a.createElement("small",null,"Sponsored by : ",o.a.createElement("a",{href:"https://www.themoviedb.org",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{alt:"tmdb_logo",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",height:11}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.e3fbd276.chunk.js.map