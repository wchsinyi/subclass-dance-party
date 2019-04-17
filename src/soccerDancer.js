var soccerDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', 'soccer');
};

soccerDancer.prototype = Object.create(makeDancer.prototype);
soccerDancer.prototype.constructor = soccerDancer;


soccerDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // let colors = ['#ff0000', '#00ff00', '#0000ff'];
  // let randomColor = colors[Math.floor(Math.random() * colors.length)];
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  var styleSettings = {    
    border: '0px solid #' + randomColor
  };
  this.$node.css(styleSettings);
};
  
  
