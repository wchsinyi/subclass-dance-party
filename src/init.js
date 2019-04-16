$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //makeBlinkyDancer or makeDancer

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; // window['makeBlinkyDancer'] = makeBlinkyDancer

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() * 0.9,
      $("body").width() * Math.random() * 0.9,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });


  $('.LineupButton').on('click', function(event) {
    // loop through each 
    let l = window.dancers.length;
    for (let i = 0; i < l; i++) {
      window.dancers[i].lineup(0);
    }
  });

  // $('body').on('mouseover', '.dancer', function(event){
  //   event.preventDefault();
  //   // debugger;
  //   $(this).toggle(200);
  // });

  $('body').on('click', '.dancer', function(event){
    event.preventDefault();
    var dist = [];
    // console.log(window.dancers);
    var baseLeft = Number($(this).css('left').replace("px", ""));
    var baseTop = Number($(this).css('top').replace("px", ""));
    // console.log(baseLeft, baseTop);

    let l = window.dancers.length;
    for (let i = 0; i < l; i++) {
      let d = ((window.dancers[i].top - baseTop)**2 + (window.dancers[i].left - baseLeft)**2)**0.5;
      dist.push([d,i]);
    }

    dist = dist.sort( (a,b) => {
      return a[0] - b[0]; 
    });

    for (let i = 1; i < 4; i++){
      let index = dist[i][1];
      window.dancers[index].lineup(baseLeft);
    }
    // console.log(dist);


  });
});


// Why this is not a good idea? 
// $(document).on({
//   mouseover: function () {
//     console.log('hiiiiiiiiii');
//   },
//   mouseout: function () {
//     console.log('bye');
//   }
// }, ".dancer"); 
