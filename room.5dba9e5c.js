var animElements=document.querySelectorAll("._anim-elements");if(animElements.length>0){function animOnScroll(){for(var e=0;e<animElements.length;e++){var n=animElements[e],t=n.offsetHeight,o=offset(n).top,i=(window.innerHeight-t)/1;t>window.innerHeight&&(i=(window.innerHeight-window.innerHeight)/1),scrollY>o-i&&scrollY<o+t?n.classList.add("_appeared"):n.classList.contains("._anim-nohide")||n.classList.remove("_appeared")}}function offset(e){var n=e.getBoundingClientRect(),t=window.scrollX||document.documentElement.scrollLeft,o=window.scrollY||document.documentElement.scrollTop;return{top:n.top+o,left:n.left+t}}window.addEventListener("scroll",animOnScroll),setTimeout((function(){animOnScroll()}),300)}
//# sourceMappingURL=room.5dba9e5c.js.map