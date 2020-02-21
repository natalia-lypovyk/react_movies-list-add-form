(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(7),r=a.n(l),m=(a(16),a(10)),s=a(1),c=a(2),o=a(4),d=a(3),h=a(5),p=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:l},"IMDB"))))});p.defaultProps={description:""};var u=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(p,Object.assign({key:e.imdbId},e))})))};u.defaultProps={movies:[]};var g=a(8),b=(a(20),function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",invalidImgUrl:!1,invalidImdbUrl:!1},a.handleChange=function(e){var t=e.target,i=t.name,n=t.value;a.setState(Object(g.a)({},i,n))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,i=t.title,n=t.description,l=t.imgUrl,r=t.imdbUrl,m=t.imdbId,s=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,c=!1;s.test(l)||(c=!0,a.setState({invalidImgUrl:!0})),s.test(r)||(c=!0,a.setState({invalidImdbUrl:!0})),c||(a.props.addMovie({title:i,description:n,imgUrl:l,imdbUrl:r,imdbId:m}),a.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl,r=e.imdbId,m=e.invalidImdbUrl,s=e.invalidImgUrl;return n.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},n.a.createElement("label",null,"Title:",n.a.createElement("input",{type:"text",name:"title",className:"movie__title element",onChange:this.handleChange,value:t,placeholder:"Enter title",required:!0})),n.a.createElement("label",null,"Description:",n.a.createElement("textarea",{className:"movie__description element",name:"description",onChange:this.handleChange,value:a,placeholder:"Enter description"})),n.a.createElement("label",null,"Image URL:",n.a.createElement("input",{type:"text",name:"imgUrl",className:s?"invalid-field element":"element",onChange:this.handleChange,value:i,placeholder:"Enter poster link",required:!0}),s&&n.a.createElement("span",{className:"invalid-message"},"Enter correct URL")),n.a.createElement("br",null),n.a.createElement("label",null,"IMDb URL:",n.a.createElement("input",{type:"text",name:"imdbUrl",className:m?"invalid-field element":"element",onChange:this.handleChange,value:l,placeholder:"Enter movie link on IMDBb",required:!0}),m&&n.a.createElement("span",{className:"invalid-message"},"Enter correct URL")),n.a.createElement("br",null),n.a.createElement("label",null,"IMDb Id:",n.a.createElement("input",{type:"text",name:"imdbId",className:"movie__imdbId element",onChange:this.handleChange,value:r,placeholder:"Enter movie IMDbId",required:!0})),n.a.createElement("button",{type:"submit",className:"movie__button"},"Add Movie"))}}]),t}(i.Component)),v=a(9),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={movies:v},a.addMovie=function(e){a.setState((function(t){return{movies:[].concat(Object(m.a)(t.movies),[e])}}))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(u,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(b,{addMovie:this.addMovie})))}}]),t}(i.Component);r.a.render(n.a.createElement(E,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.c853aa20.chunk.js.map