$(main);

function cycleImages(){
      var active = $('#background_cycler .active');
      var proxTam = active.next().length
      var next;
      if (proxTam > 0) 
          next = active.next();
      else 
         next = $('#background_cycler img:first');
      next.css("z-index",2);
	  active.fadeOut(1500,function(){
	    active.css("z-index",1).show().removeClass('active');
        next.css("z-index",3).addClass('active');
      });
}

function main(){
	$('#background_cycler').fadeIn(1500);
    setInterval('cycleImages()', 3000);
}
