!function(a){a.fn.appear=function(b,c){var d=a.extend({one:!0},c);return this.each(function(){var c=a(this);if(c.appeared=!1,!b)return void c.trigger("appear",d.data);var e=a(window),f=function(){if(!c.is(":visible"))return void(c.appeared=!1);var a=e.scrollLeft(),b=e.scrollTop(),f=c.offset(),g=f.left,h=f.top;h+c.height()>=b&&h<=b+e.height()&&g+c.width()>=a&&g<=a+e.width()?c.appeared||c.trigger("appear",d.data):c.appeared=!1},g=function(){if(c.appeared=!0,d.one){e.unbind("scroll",f);var g=a.inArray(f,a.fn.appear.checks);g>=0&&a.fn.appear.checks.splice(g,1)}b.apply(this,arguments)};d.one?c.one("appear",d.data,g):c.bind("appear",d.data,g),e.scroll(f),a.fn.appear.checks.push(f),f()})},a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var b=a.fn.appear.checks.length;if(b>0)for(;b--;)a.fn.appear.checks[b]()},run:function(){a.fn.appear.timeout&&clearTimeout(a.fn.appear.timeout),a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}}),a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(b,c){var d=a.fn[c];d&&(a.fn[c]=function(){var b=d.apply(this,arguments);return a.fn.appear.run(),b})})}(jQuery);