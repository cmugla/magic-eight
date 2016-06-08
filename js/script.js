$(document).ready(function(){
  console.log("loaded");

  var $btn = $('button');

  function testAnim() {
    $('img')
      .removeClass()
      .addClass('animated wobble')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend', function() {
        $('img').removeClass();
      });
  }

  $btn.click(testAnim);
});
