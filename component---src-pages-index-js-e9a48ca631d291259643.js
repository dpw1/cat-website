"use strict";(self.webpackChunkgatsby_ecommerce_theme=self.webpackChunkgatsby_ecommerce_theme||[]).push([[678],{9895:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),n=a(3686),r=function(e){var t=e.icon,a=e.title,r=e.subtitle;return l.createElement("div",{className:"Attribute-module--root--0RpHG"},l.createElement("div",{className:"Attribute-module--iconContainer--ge+C5"},l.createElement(n.Z,{symbol:t})),l.createElement("span",{className:"Attribute-module--title--r+GKc"},a),l.createElement("span",{className:"Attribute-module--subtitle--boFU2"},r))},o=function(e){return l.createElement("div",{className:"AttributeGrid-module--root--PUsE2"},l.createElement(r,{icon:"delivery",title:"Worldwide Shipping",subtitle:"Delivering wherever you need!"}),l.createElement(r,{icon:"cycle",title:"returns",subtitle:"Hassle-free returns."}),l.createElement(r,{icon:"creditcard",title:"secured payment",subtitle:"Checkout from Amazon's website."}))}},2259:function(e,t,a){a.d(t,{Z:function(){return l.Z}});var l=a(9895)},8739:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),n=a(1597),r=function(e){var t=e.image,a=e.altImage,r=e.title,o=e.link,i=e.category,m=e.showExcerpt,c=e.excerpt;return l.createElement("div",{className:"BlogPreview-module--root--5wIz7",onClick:function(){(0,n.navigate)(o)}},l.createElement("img",{className:"BlogPreview-module--blogPreviewImage--PdURJ",alt:a,src:t,role:"figure"}),l.createElement("span",{className:"BlogPreview-module--category--rZUTQ"},i),l.createElement("h4",{className:"BlogPreview-module--title--Z1IiF"},l.createElement(n.Link,{to:o},r)),m&&l.createElement("p",{className:"BlogPreview-module--excerpt--vjxRD"},c))},o=function(e){var t=e.data,a=e.hideReadMoreOnWeb,n=e.showExcerpt;return l.createElement("div",{className:"BlogPreviewGrid-module--root--hHQy4"},t&&t.map((function(e,t){return l.createElement(r,{key:t,image:e.image,altImage:e.alt,title:e.title,link:e.link,category:e.category,excerpt:e.excerpt,hideReadMoreOnWeb:a,showExcerpt:n})})))}},9071:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(1405),r=a(1597),o=a(9493),i=function(e){var t=e.title,a=e.subtitle,i=e.ctaText,m=e.ctaAction,c=e.image,s=e.maxWidth,u=e.ctaStyle,d=e.ctaLink,g=e.ctaTo,E=e.header;return l.createElement("div",{className:"Hero Hero-module--root--OVgDu",style:{backgroundImage:"url("+c+")"}},l.createElement("div",{className:"Hero-content Hero-module--content--ltIuC",style:{maxWidth:s}},E&&l.createElement("span",{className:"Hero-module--header--cLGmK"},E),t&&l.createElement("h2",{className:"Hero-module--title--t9lfD"},t),a&&l.createElement("span",{className:"Hero-module--subtitle--skq4L"},(0,o.ZP)(a)),i&&l.createElement(n.Z,{className:"Hero-module--ctaButton--BihTJ "+u,level:"primary",onClick:m},i),d&&l.createElement(r.Link,{className:"Hero-module--ctaLink--dt5rX",to:g},d)))}},8655:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(7294),n=a(2259),r=a(4954),o=a(9071),i=(a(8739),a(1597)),m=a(7069),c=a(3716),s=function(e){var t=e.bgColor,a=e.title,n=e.quote;return l.createElement("div",{className:"Quote-module--root--qaZJR",style:{backgroundColor:t}},l.createElement("span",null,a),l.createElement("p",null,n))},u=function(e){var t=e.name,a=e.subtitle,n=e.link,r=e.textLink,o=e.maxWidth,m=e.color,c=void 0===m?"var(--standard-black)":m,s=e.hideSubtitleOnMobile,u=void 0!==s&&s,d=e.marginBottom,g=void 0===d?"32px":d;return l.createElement("div",{className:"Title-module--root--7dkc6 "+(!0===u?"Title-module--hideSubtitleOnMobile--EW+ar":""),style:{maxWidth:o,marginBottom:g}},l.createElement("h2",{className:"Title-module--title--PYqF+",style:{color:c}},t),a&&l.createElement("span",{className:"Title-module--subtitle--uXO9r"},a),n&&r&&l.createElement(i.Link,{className:"Title-module--link--5xDY3",to:n},r))},d=a(9465),g=(a(4429),function(e){return l.createElement("div",{className:"Message"},l.createElement(u,{name:"Wait, how does it work?"}),l.createElement("div",null,l.createElement("p",null,"Hi there! Welcome to Memeowcats' shop. ❤️"),l.createElement("br",null),l.createElement("p",null,"My name is Rachel, I run the Memeowcats Instagram page with my daughter, Sammy. Recently we had the opportunity to partner up with some amazing Amazon merchants who sell cat related products and we wanted to use this chance to help forward."),l.createElement("br",null),l.createElement("p",null,"For every Amazon product bought via our links, we will make a donation to"," ",l.createElement("a",{href:"https://www.torontocatrescue.ca/donate",target:"_blank"},"Cat Rescue Toronto"),"."),l.createElement("br",null),l.createElement("p",null,"You will be ",l.createElement("b",null,"helping kitties simply by shopping.")," Yes, it's that easy!"),l.createElement("br",null),l.createElement("p",null,"Our goal is to bring joy and make helping others as simple as possible. Thank you for joining us in this mission! 🥰")))}),E=a(6933),h=function(e){var t=e.data,a=((0,d.g)(3,"shirt"),l.useState([])),h=a[0],p=a[1];return l.useEffect((function(){if(h.length<=0){var e=(0,E.Xp)();console.log("mmm",e),p(e||t.allWcProducts.edges),e||(0,E.Gj)(t.allWcProducts.edges)}}),[]),l.createElement(m.Z,{disablePaddingBottom:!0},l.createElement(o.Z,{image:"/woman-cat-1.jpg",title:"Help cats while Amazon shopping.",subtitle:"Every sale via our links equals a donation to <b>Cat Rescue Toronto</b>.<br/>All transactions made safely on Amazon's website.",ctaText:"shop now",ctaAction:function(){(0,i.navigate)("/shop")}}),l.createElement(g,null),l.createElement("div",{className:"index-module--newArrivalsContainer---3Its",style:{marginBottom:60}},l.createElement(r.Z,null,l.createElement(u,{name:"New Arrivals",link:"/shop",textLink:"view all"}),l.createElement(c.Z,{spacing:!0,showSlider:!0,columns:4,limit:8,products:h}))),l.createElement(s,{bgColor:"var(--standard-light-grey)",title:"– Brian Tracy",quote:"“Always give without remembering and always receive without forgetting.”"}),l.createElement("div",{className:"index-module--socialContainer--z2h01"},l.createElement(u,{name:"With you, for you",subtitle:"Follow us on Instagram @memeowcats to join our Memeowers family. ♡"}),l.createElement("div",{className:"index-module--socialContentGrid--OXwxv"},l.createElement("img",{src:"/instagram-4.jpg",alt:"Memeowcats' meme image"}),l.createElement("img",{src:"/instagram-2.jpg",alt:"Memeowcats' meme image"}),l.createElement("img",{src:"/instagram-1.jpg",alt:"Memeowcats' meme image"}),l.createElement("img",{src:"/instagram-3.jpg",alt:"Memeowcats' meme image"}),l.createElement("a",{href:"https://instagram.com/memeowcats",target:"_blank"}))),l.createElement(n.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e9a48ca631d291259643.js.map