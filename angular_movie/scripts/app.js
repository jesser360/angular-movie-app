angular.module('movieApp',[])
  .controller('MovieCtrl', MovieCtrl);


  function MovieCtrl() {
    console.log("Movie Controller active!");
    var vm = this;

    vm.moviesToWatch = [
      {
        title: 'Inside Out',
        actor:'jim bob',
        image: 'http://blogs-images.forbes.com/markhughes/files/2015/06/INSIDE-OUT-18.jpg'
      },
      {
        title: 'Star Wars: Episode VII',
        actor:'jim bill',
        image: 'http://cdn.wegotthiscovered.com/wp-content/uploads/star-wars-episode-72.jpg'
      },
      {
        title: 'Shaun the Sheep',
        actor:'jim hanky',
        image: 'https://silentlondon.files.wordpress.com/2015/01/shaun_chase_quad_uk-release-date.jpg'
      },
      {
        title: 'The Big Short',
        actor:'bob bob',
        image: 'http://static.standard.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2015/09/22/17/rysangos.jpg'
      },

    ];

    // vm.movie = {};
vm.addMovie = function(){
  var newMovie = vm.movie;
  vm.movie = {};
  vm.moviesToWatch.push(newMovie);
}
vm.movieLimit = 2;
var movieLimit =  2;
vm.addLimit = function(){
  vm.movieLimit++;
  console.log(movieLimit,"limit");
}
vm.delete = function(movie){
  var index=vm.moviesToWatch.indexOf(movie);
  vm.moviesToWatch.splice(index,1);
  console.log("deleted", index);

}

console.log("app.js loaded!");
};
