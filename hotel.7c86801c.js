const e=document.querySelectorAll(".popup-link"),t=document.querySelector("body"),o=document.querySelectorAll(".lock-padding");let n=!0;if(e.length>0)for(let t=0;t<e.length;t++){const o=e[t];o.style.pointerEvents="auto",o.addEventListener("click",(function(e){e.preventDefault();const t=o.getAttribute("data-popup");s(document.getElementById(t))}))}const i=document.querySelectorAll(".close-popup");if(i.length>0)for(let e=0;e<i.length;e++){const t=i[e];t.addEventListener("click",(function(e){l(t.closest(".popup")),e.preventDefault()}))}function s(e){if(e&&n){const i=document.querySelector(".popup.open");i?l(i,!1):function(){const e=window.innerWidth-t.offsetWidth+"px";if(o.length>0)for(let t=0;t<o.length;t++){o[t].style.paddingRight=e}t.style.paddingRight=e,t.classList.add("lock"),n=!1,setTimeout((function(){n=!0}),800)}(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||l(e.target.closest(".popup"))}))}}function l(e,i=!0){n&&(e.classList.remove("open"),i&&(setTimeout((function(){if(o.length>0)for(let e=0;e<o.length;e++)o[e].style.paddingRight="0px";t.style.paddingRight="0px",t.classList.remove("lock")}),800),n=!1,setTimeout((function(){n=!0}),800)))}document.addEventListener("keydown",(function(e){if(27===e.which){l(document.querySelector(".popup.open"))}})),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),document.addEventListener("DOMContentLoaded",(function(e){document.querySelectorAll(".js-select").forEach((function(e){NiceSelect.bind(e)}))}));self,(()=>{var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!1),e.dispatchEvent(t)}function n(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!1),e.dispatchEvent(t)}function i(e){var t=document.createEvent("FocusEvent");t.initEvent("focusin",!0,!1),e.dispatchEvent(t)}function s(e){var t=document.createEvent("FocusEvent");t.initEvent("focusout",!0,!1),e.dispatchEvent(t)}function l(e,t){return e.getAttribute(t)}function d(e,t){return!!e&&e.classList.contains(t)}function r(e,t){if(e)return e.classList.add(t)}function c(e,t){if(e)return e.classList.remove(t)}e.r(t),e.d(t,{default:()=>p,bind:()=>u});var a={data:null,searchable:!1};function p(e,t){this.el=e,this.config=Object.assign({},a,t||{}),this.data=this.config.data,this.selectedOptions=[],this.placeholder=l(this.el,"placeholder")||this.config.placeholder||"Select an option",this.dropdown=null,this.multiple=l(this.el,"multiple"),this.disabled=l(this.el,"disabled"),this.create()}function u(e,t){return new p(e,t)}p.prototype.create=function(){this.el.style.display="none",this.data?this.processData(this.data):this.extractData(),this.renderDropdown(),this.bindEvent()},p.prototype.processData=function(e){var t=[];e.forEach((e=>{t.push({data:e,attributes:{selected:!1,disabled:!1,optgroup:"optgroup"==e.value}})})),this.options=t},p.prototype.extractData=function(){var e=this.el.querySelectorAll("option,optgroup"),t=[],o=[],n=[];e.forEach((e=>{if("OPTGROUP"==e.tagName)var n={text:e.label,value:"optgroup"};else n={text:e.innerText,value:e.value};var i={selected:null!=e.getAttribute("selected"),disabled:null!=e.getAttribute("disabled"),optgroup:"OPTGROUP"==e.tagName};t.push(n),o.push({data:n,attributes:i})})),this.data=t,this.options=o,this.options.forEach((function(e){e.attributes.selected&&n.push(e)})),this.selectedOptions=n},p.prototype.renderDropdown=function(){var e=`<div class="${["nice-select",l(this.el,"class")||"",this.disabled?"disabled":"",this.multiple?"has-multiple":""].join(" ")}" tabindex="${this.disabled?null:0}">\n  <span class="${this.multiple?"multiple-options":"current"}"></span>\n  <div class="nice-select-dropdown">\n  ${this.config.searchable?'<div class="nice-select-search-box">\n<input type="text" class="nice-select-search" placeholder="Search..."/>\n</div>':""}\n  <ul class="list"></ul>\n  </div></div>\n`;this.el.insertAdjacentHTML("afterend",e),this.dropdown=this.el.nextElementSibling,this._renderSelectedItems(),this._renderItems()},p.prototype._renderSelectedItems=function(){if(this.multiple){var e="";"auto"==window.getComputedStyle(this.dropdown).width||this.selectedOptions.length<2?(this.selectedOptions.forEach((function(t){e+=`<span class="current">${t.data.text}</span>`})),e=""==e?this.placeholder:e):e=this.selectedOptions.length+" selected",this.dropdown.querySelector(".multiple-options").innerHTML=e}else{var t=this.selectedOptions.length>0?this.selectedOptions[0].data.text:this.placeholder;this.dropdown.querySelector(".current").innerHTML=t}},p.prototype._renderItems=function(){var e=this.dropdown.querySelector("ul");this.options.forEach((t=>{e.appendChild(this._renderItem(t))}))},p.prototype._renderItem=function(e){var t=document.createElement("li");if(t.innerHTML=e.data.text,e.attributes.optgroup)t.classList.add("optgroup");else{t.setAttribute("data-value",e.data.value);var o=["option",e.attributes.selected?"selected":null,e.attributes.disabled?"disabled":null];t.addEventListener("click",this._onItemClicked.bind(this,e)),t.classList.add(...o)}return e.element=t,t},p.prototype.update=function(){if(this.extractData(),this.dropdown){var e=d(this.dropdown,"open");this.dropdown.parentNode.removeChild(this.dropdown),this.create(),e&&o(this.dropdown)}},p.prototype.disable=function(){this.disabled||(this.disabled=!0,r(this.dropdown,"disabled"))},p.prototype.enable=function(){this.disabled&&(this.disabled=!1,c(this.dropdown,"disabled"))},p.prototype.clear=function(){this.selectedOptions=[],this._renderSelectedItems(),this.updateSelectValue(),n(this.el)},p.prototype.destroy=function(){this.dropdown&&(this.dropdown.parentNode.removeChild(this.dropdown),this.el.style.display="")},p.prototype.bindEvent=function(){this.dropdown.addEventListener("click",this._onClicked.bind(this)),this.dropdown.addEventListener("keydown",this._onKeyPressed.bind(this)),this.dropdown.addEventListener("focusin",i.bind(this,this.el)),this.dropdown.addEventListener("focusout",s.bind(this,this.el)),window.addEventListener("click",this._onClickedOutside.bind(this)),this.config.searchable&&this._bindSearchEvent()},p.prototype._bindSearchEvent=function(){var e=this.dropdown.querySelector(".nice-select-search");e&&e.addEventListener("click",(function(e){return e.stopPropagation(),!1})),e.addEventListener("input",this._onSearchChanged.bind(this))},p.prototype._onClicked=function(e){if(this.multiple?this.dropdown.classList.add("open"):this.dropdown.classList.toggle("open"),this.dropdown.classList.contains("open")){var t=this.dropdown.querySelector(".nice-select-search");t&&(t.value="",t.focus());var o=this.dropdown.querySelector(".focus");c(o,"focus"),r(o=this.dropdown.querySelector(".selected"),"focus"),this.dropdown.querySelectorAll("ul li").forEach((function(e){e.style.display=""}))}else this.dropdown.focus()},p.prototype._onItemClicked=function(e,t){var o=t.target;d(o,"disabled")||(this.multiple?d(o,"selected")?(c(o,"selected"),this.selectedOptions.splice(this.selectedOptions.indexOf(e),1),this.el.querySelector('option[value="'+o.dataset.value+'"]').selected=!1):(r(o,"selected"),this.selectedOptions.push(e)):(this.selectedOptions.forEach((function(e){c(e.element,"selected")})),r(o,"selected"),this.selectedOptions=[e]),this._renderSelectedItems(),this.updateSelectValue())},p.prototype.updateSelectValue=function(){if(this.multiple){var e=this.el;this.selectedOptions.forEach((function(t){var o=e.querySelector('option[value="'+t.data.value+'"]');o&&o.setAttribute("selected",!0)}))}else this.selectedOptions.length>0&&(this.el.value=this.selectedOptions[0].data.value);n(this.el)},p.prototype._onClickedOutside=function(e){this.dropdown.contains(e.target)||this.dropdown.classList.remove("open")},p.prototype._onKeyPressed=function(e){var t=this.dropdown.querySelector(".focus"),n=this.dropdown.classList.contains("open");if(32==e.keyCode||13==e.keyCode)o(n?t:this.dropdown);else if(40==e.keyCode){if(n){var i=this._findNext(t);i&&(c(this.dropdown.querySelector(".focus"),"focus"),r(i,"focus"))}else o(this.dropdown);e.preventDefault()}else if(38==e.keyCode){if(n){var s=this._findPrev(t);s&&(c(this.dropdown.querySelector(".focus"),"focus"),r(s,"focus"))}else o(this.dropdown);e.preventDefault()}else 27==e.keyCode&&n&&o(this.dropdown);return!1},p.prototype._findNext=function(e){for(e=e?e.nextElementSibling:this.dropdown.querySelector(".list .option");e;){if(!d(e,"disabled")&&"none"!=e.style.display)return e;e=e.nextElementSibling}return null},p.prototype._findPrev=function(e){for(e=e?e.previousElementSibling:this.dropdown.querySelector(".list .option:last-child");e;){if(!d(e,"disabled")&&"none"!=e.style.display)return e;e=e.previousElementSibling}return null},p.prototype._onSearchChanged=function(e){var t=this.dropdown.classList.contains("open"),o=e.target.value;if(""==(o=o.toLowerCase()))this.options.forEach((function(e){e.element.style.display=""}));else if(t){var n=new RegExp(o);this.options.forEach((function(e){var t=e.data.text.toLowerCase(),o=n.test(t);e.element.style.display=o?"":"none"}))}this.dropdown.querySelectorAll(".focus").forEach((function(e){c(e,"focus")})),r(this._findNext(null),"focus")}})();
//# sourceMappingURL=hotel.7c86801c.js.map