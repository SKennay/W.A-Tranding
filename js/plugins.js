wow=new WOW({animateClass:"animated",offset:100,mobile:!1}),wow.init(),function(e){var t=location.href.replace(/#.*/,""),o=e.localScroll=function(t){e("body").localScroll(t)};function a(t,o,a){var i=o.hash.slice(1),n=document.getElementById(i)||document.getElementsByName(i)[0];if(n){t&&t.preventDefault();var l=e(a.target);if(!(a.lock&&l.is(":animated")||a.onBefore&&!1===a.onBefore.call(a,t,n,l))){if(a.stop&&l.stop(!0),a.hash){var r=n.id==i?"id":"name",s=e("<a> </a>").attr(r,i).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});n[r]="",e("body").prepend(s),location=o.hash,s.remove(),n[r]=i}l.scrollTo(n,a).trigger("notify.serialScroll",[n])}}}o.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,reset:!0},o.hash=function(t){if(location.hash){if((t=e.extend({},o.defaults,t)).hash=!1,t.reset){var i=t.duration;delete t.duration,e(t.target).scrollTo(0,t),t.duration=i}a(0,location,t)}},e.fn.localScroll=function(i){return(i=e.extend({},o.defaults,i)).lazy?this.bind(i.event,function(t){var o=e([t.target,t.target.parentNode]).filter(n)[0];o&&a(t,o,i)}):this.find("a,area").filter(n).bind(i.event,function(e){a(e,this,i)}).end().end();function n(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==t&&(!i.filter||e(this).is(i.filter))}}}(jQuery);