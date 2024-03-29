var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', 'blinky');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// var amy = makeBlinkyDancer(1,2,3000);
makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};


// #### alternatively (more confusing) #####
// makeDancer.call(this, top, left, timeBetweenSteps);
// this.oldstep = this.step 
// this.step = this.newstep
// makeBlinkyDancer.prototype.newstep = function() {
