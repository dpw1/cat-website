(self.webpackChunkgatsby_ecommerce_theme=self.webpackChunkgatsby_ecommerce_theme||[]).push([[750],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!a(e[u],i[u]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!a(u.value[1],i.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!a(e[l[u]],i[l[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},7069:function(e,t,n){"use strict";n.d(t,{Z:function(){return Me}});var r,o,a,i,c=n(7294),u=n(5697),l=n.n(u),s=n(4839),f=n.n(s),m=n(2993),d=n.n(m),p=n(6494),y=n.n(p),h="bodyAttributes",v="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",w="href",C="http-equiv",k="innerHTML",S="itemprop",A="name",L="property",O="rel",N="src",M="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",x="defer",I="encodeSpecialCharacters",H="onChangeClientState",R="titleTemplate",_=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),B=[g.NOSCRIPT,g.SCRIPT,g.STYLE],F="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=$(e,g.TITLE),n=$(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,P);return t||r||void 0},K=function(e){return $(e,H)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===O&&"canonical"===e[n].toLowerCase()||u===O&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==k&&c!==T&&c!==S||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=y()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,m=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,o),ce(f,m);var d={baseTag:le(g.BASE,n),linkTags:le(g.LINK,a),metaTags:le(g.META,i),noscriptTags:le(g.NOSCRIPT,c),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,s)},p={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,p,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(F):n.getAttribute(F)!==i.join(",")&&n.setAttribute(F,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,o=fe(n,r),[c.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===k||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===k||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,m=e.titleAttributes;return{base:me(g.BASE,t,r),bodyAttributes:me(h,n,r),htmlAttributes:me(v,o,r),link:me(g.LINK,a,r),meta:me(g.META,i,r),noscript:me(g.NOSCRIPT,c,r),script:me(g.SCRIPT,u,r),style:me(g.STYLE,l,r),title:me(g.TITLE,{title:f,titleAttributes:m},r)}},pe=f()((function(e){return{baseTag:Q([w,M],e),bodyAttributes:W(h,e),defer:$(e,x),encode:$(e,I),htmlAttributes:W(v,e),linkTags:X(g.LINK,[O,w],e),metaTags:X(g.META,[A,E,C,L,S],e),noscriptTags:X(g.NOSCRIPT,[k],e),onChangeClientState:K(e),scriptTags:X(g.SCRIPT,[N,k],e),styleTags:X(g.STYLE,[T],e),title:G(e),titleAttributes:W(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),ye=(o=pe,i=a=function(e){function t(){return z(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return D({},r,((t={})[n.type]=[].concat(r[n.type]||[],[D({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return D({},o,((t={})[r.type]=i,t.titleAttributes=D({},a),t));case g.BODY:return D({},o,{bodyAttributes:D({},a)});case g.HTML:return D({},o,{htmlAttributes:D({},a)})}return D({},o,((n={})[r.type]=D({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=D({},t);return Object.keys(e).forEach((function(t){var r;n=D({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=D({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},Z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind;var he=ye,ve=n(1597),be=(n(1896),n(6269),n(1405),n(3686)),ge=n(3826),Ee=n(4954),Te=n(9455),we=n(1690),Ce=function(e){var t=e.menu;return null==t?c.createElement(c.Fragment,null):c.createElement("div",{className:"ExpandedMenu-module--root--IG2Li"},c.createElement("div",{className:"ExpandedMenu-module--linkContainers--NSgtl"},null==t?void 0:t.map((function(e,t){return c.createElement("div",{key:t,className:"ExpandedMenu-module--categoryContainer--Pc+Af"},c.createElement("span",{className:"ExpandedMenu-module--categoryName--9SWT+"},e.categoryLabel),c.createElement("ul",null,e.submenu.map((function(e,t){return c.createElement("li",{key:t},c.createElement(ve.Link,{className:"ExpandedMenu-module--menuLink--LAvSc",to:e.menuLink},e.menuLabel))}))))}))),c.createElement("div",{className:"ExpandedMenu-module--imageContainer--0XPJ7"},c.createElement("img",{src:"/headerPic1.png",alt:"header 1"}),c.createElement("img",{src:"/headerPic2.png",alt:"header 2"})))},ke=(n(3136),n(4733),n(2751),n(6965),"MobileNavigation-module--mobileLink--BHyeM"),Se="MobileNavigation-module--previousIcon--VqaFM",Ae="MobileNavigation-module--previousLinkContainer---ITNs",Le=function(e){var t=e.close,n=(0,c.useState)(),r=n[0],o=n[1],a=(0,c.useState)(),i=a[0],u=a[1],l=(0,c.useState)(0),s=l[0],f=l[1];return c.createElement("div",{className:"MobileNavigation-module--root--v2k-y"},c.createElement("nav",null,c.createElement("div",{className:"MobileNavigation-module--headerAuth--GEt6O"},0===s&&c.createElement("div",{className:Ae,role:"presentation"},c.createElement("span",null,"Menu")),1===s&&c.createElement("div",{className:Ae,onClick:function(){return f(0)},role:"presentation"},c.createElement("div",{className:Se},c.createElement(be.Z,{symbol:"caret"})),c.createElement("span",null,i.menuLabel)),2===s&&c.createElement("div",{className:Ae,onClick:function(){return f(1)},role:"presentation"},c.createElement("div",{className:Se},c.createElement(be.Z,{symbol:"caret"})),c.createElement("span",null,r.categoryLabel))),c.createElement("div",{className:"MobileNavigation-module--mobileNavContainer--Geg4B"},0===s&&c.createElement("div",null,Te.Gb.map((function(e){var t,n=void 0!==(null===(t=e.category)||void 0===t?void 0:t.length);return c.createElement(ve.Link,{key:e.menuLink,className:""+ke,to:!0===n?"":e.menuLink,onClick:function(){n&&(f(1),u(e))}},e.menuLabel,n&&c.createElement(be.Z,{symbol:"caret"}))}))),1===s&&i.category.map((function(e){return c.createElement(ve.Link,{key:e.categoryLabel,to:"",onClick:function(){f(2),o(e)},className:""+ke},e.categoryLabel,c.createElement(be.Z,{symbol:"caret"}))})),2===s&&r.submenu.map((function(e){return c.createElement(ve.Link,{key:e.menuLabel,to:e.menuLink,className:"MobileNavigation-module--edgeLink--g4zG5"},e.menuLabel)})),-1===s&&c.createElement(c.Fragment,null,c.createElement("div",null,c.createElement(ve.Link,{to:"/account/orders/",className:ke},"Orders"),c.createElement(ve.Link,{to:"/account/address/",className:ke},"Addresses"),c.createElement(ve.Link,{to:"/account/settings/",className:ke},"Settings"),c.createElement(ve.Link,{to:"/account/viewed/",className:ke},"Recently Viewed")),c.createElement("div",{className:"MobileNavigation-module--navFooter--igQVd"},c.createElement("div",{className:"MobileNavigation-module--logoutContainer--mZ8N5",role:"presentation",onClick:function(){window.localStorage.removeItem("key"),(0,ve.navigate)("/"),t()}},c.createElement(be.Z,{symbol:"logout"}),c.createElement("span",null,"Sign out ")))))))},Oe=function(e){var t=(0,c.useState)(!1),n=(t[0],t[1],(0,c.useState)(!1)),r=n[0],o=n[1],a=(0,c.useState)(!0),i=a[0],u=a[1],l=(0,c.useState)(),s=l[0],f=l[1],m=(0,c.useState)(),d=m[0],p=m[1],y=(0,c.useState)(!1),h=y[0],v=y[1],b=(0,c.useState)(""),g=(b[0],b[1],(0,c.createRef)());return(0,c.useEffect)((function(){!1===i&&p(!1)}),[i]),(0,c.useEffect)((function(){var e=function(){u(!1),v(!1),p(void 0)};return window.removeEventListener("scroll",e),window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[]),(0,c.useEffect)((function(){!0===h&&setTimeout((function(){g.current.focus()}),250)}),[h]),c.createElement("div",{className:"Header Header-module--root--6VRgG"},c.createElement("div",{className:"Header-module--headerMessageContainer--Z5tnC"},c.createElement("span",null,"For every sale made we make a donation to cats.com")),c.createElement(Ee.Z,{size:"large",spacing:"min"},c.createElement("div",{className:"Header-module--header--qgajU"},c.createElement("div",{className:"Header- Header-module--linkContainer--tmUiV"},c.createElement("nav",{role:"presentation",onMouseLeave:function(){u(!1)}},Te.Gb.map((function(e){return c.createElement(ve.Link,{key:e.menuLink,onMouseEnter:function(){return function(e){e.category?(u(!0),f(e.category),v(!1)):f(void 0),p(e.menuLabel)}(e)},className:"Header-module--navLink--KluNo "+(d===e.menuLabel?"Header-module--activeLink--0LwiX":""),to:e.menuLink},e.menuLabel)})))),c.createElement("div",{role:"presentation",onClick:function(){o(!r)},className:"Header-burger Header-module--burgerIcon--gTqLd"},c.createElement(be.Z,{symbol:!0===r?"cross":"burger"})),c.createElement(ge.Z,null),c.createElement("div",{className:"Header-right Header-module--actionContainers--+khue"},c.createElement("a",{href:"https://instagram.com/memeowcats"},c.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"presentation",className:"icon icon-instagram",viewBox:"0 0 32 32"},c.createElement("path",{fill:"#444",d:"M16 3.094c4.206 0 4.7.019 6.363.094 1.538.069 2.369.325 2.925.544.738.287 1.262.625 1.813 1.175s.894 1.075 1.175 1.813c.212.556.475 1.387.544 2.925.075 1.662.094 2.156.094 6.363s-.019 4.7-.094 6.363c-.069 1.538-.325 2.369-.544 2.925-.288.738-.625 1.262-1.175 1.813s-1.075.894-1.813 1.175c-.556.212-1.387.475-2.925.544-1.663.075-2.156.094-6.363.094s-4.7-.019-6.363-.094c-1.537-.069-2.369-.325-2.925-.544-.737-.288-1.263-.625-1.813-1.175s-.894-1.075-1.175-1.813c-.212-.556-.475-1.387-.544-2.925-.075-1.663-.094-2.156-.094-6.363s.019-4.7.094-6.363c.069-1.537.325-2.369.544-2.925.287-.737.625-1.263 1.175-1.813s1.075-.894 1.813-1.175c.556-.212 1.388-.475 2.925-.544 1.662-.081 2.156-.094 6.363-.094zm0-2.838c-4.275 0-4.813.019-6.494.094-1.675.075-2.819.344-3.819.731-1.037.4-1.913.944-2.788 1.819S1.486 4.656 1.08 5.688c-.387 1-.656 2.144-.731 3.825-.075 1.675-.094 2.213-.094 6.488s.019 4.813.094 6.494c.075 1.675.344 2.819.731 3.825.4 1.038.944 1.913 1.819 2.788s1.756 1.413 2.788 1.819c1 .387 2.144.656 3.825.731s2.213.094 6.494.094 4.813-.019 6.494-.094c1.675-.075 2.819-.344 3.825-.731 1.038-.4 1.913-.944 2.788-1.819s1.413-1.756 1.819-2.788c.387-1 .656-2.144.731-3.825s.094-2.212.094-6.494-.019-4.813-.094-6.494c-.075-1.675-.344-2.819-.731-3.825-.4-1.038-.944-1.913-1.819-2.788s-1.756-1.413-2.788-1.819c-1-.387-2.144-.656-3.825-.731C20.812.275 20.275.256 16 .256z"}),c.createElement("path",{fill:"#444",d:"M16 7.912a8.088 8.088 0 0 0 0 16.175c4.463 0 8.087-3.625 8.087-8.088s-3.625-8.088-8.088-8.088zm0 13.338a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 1 1 0 10.5zM26.294 7.594a1.887 1.887 0 1 1-3.774.002 1.887 1.887 0 0 1 3.774-.003z"})))))),c.createElement("div",{role:"presentation",onMouseLeave:function(){return u(!1)},onMouseEnter:function(){return u(!0)},className:"Header-module--menuContainer--Qr4g2 "+(!0===i?"Header-module--show--HvoNL":"")},c.createElement(Ee.Z,{size:"large",spacing:"min"},c.createElement(Ce,{menu:s}))),c.createElement("div",{className:"Header-module--mobileMenuContainer--2B0tL"},c.createElement(we.Z,{hideCross:!0,top:"98px",isReverse:!0,visible:r,close:function(){return o(!1)}},c.createElement(Le,{close:function(){return o(!1)}}))))},Ne=n(4547),Me=function(e){e.props;var t=e.children,n=e.disablePaddingBottom,r=void 0!==n&&n;return c.createElement(c.Fragment,null,c.createElement(he,null,c.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}),c.createElement("link",{rel:"stylesheet",type:"text/css",charset:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"})),c.createElement(Oe,null),c.createElement("main",{className:"Layout-module--main--kVbdT "+(!0===r?"Layout-module--disablePaddingBottom--+4Rly":"")},t),c.createElement(Ne.Z,null))}}}]);
//# sourceMappingURL=6586c14c6458525dad9ce88ad08da9917486e9ec-534465e7baeead060249.js.map