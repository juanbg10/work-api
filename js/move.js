$(main);

function slider(){
      var active = $('#backSlider .active');
      var proxTam = active.next().length
      var next;
      if (proxTam > 0) 
          next = active.next();
      else 
         next = $('#backSlider img:first');
      next.css("z-index",2);
	  active.fadeOut(1500,function(){
	    active.css("z-index",1).show().removeClass('active');
        next.css("z-index",3).addClass('active');
      });
}

function main(){
	$('#backSlider').fadeIn(1500);
    setInterval('slider()', 3000);
}
