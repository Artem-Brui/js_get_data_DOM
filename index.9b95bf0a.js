function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,o=Array(r);e<r;e++)o[e]=t[e];return o}var r,e={countriesList:function(r){if(Array.isArray(r))return t(r)}(r=document.querySelectorAll(".population"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var o=Object.prototype.toString.call(r).slice(8,-1);if("Object"===o&&r.constructor&&(o=r.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),totalPopulation:document.querySelector(".total-population"),averagePopulation:document.querySelector(".average-population")},o=e.countriesList.reduce(function(t,r){return t+parseInt(r.textContent.replace(/,/g,""),10)},0),n=o/e.countriesList.length;e.totalPopulation.textContent=o.toLocaleString(),e.averagePopulation.textContent=n.toLocaleString();
//# sourceMappingURL=index.9b95bf0a.js.map
