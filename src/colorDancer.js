var colorDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', 'rainbow');
};

colorDancer.prototype = Object.create(makeDancer.prototype);
colorDancer.prototype.constructor = colorDancer;


colorDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var colors = ['#ff0000', '#00ff00', '#0000ff'];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  var styleSettings = {    
    border: '10px solid ' + randomColor
  };
  this.$node.css(styleSettings);
};
  
  
