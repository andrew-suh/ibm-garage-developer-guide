(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{416:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),n=a(430);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var c,o={},b=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),l={_frontmatter:o},s=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(s,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(b,{mdxType:"PageDescription"},Object(r.b)("p",null,"An example three tier architecture application you can build in an hour")),Object(r.b)("h3",{id:"technical-requirements"},"Technical Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Stateless"),Object(r.b)("li",{parentName:"ul"},"Microservices"),Object(r.b)("li",{parentName:"ul"},"REST APIs"),Object(r.b)("li",{parentName:"ul"},"DevOps"),Object(r.b)("li",{parentName:"ul"},"Code Analysis"),Object(r.b)("li",{parentName:"ul"},"Security"),Object(r.b)("li",{parentName:"ul"},"Deploy to OpenShift or Kubernetes"),Object(r.b)("li",{parentName:"ul"},"Follow Carbon Design System User Experience")))}p.isMDXComponent=!0},428:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},429:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},430:function(e,t,a){"use strict";a(32),a(28);var r=a(1),n=a(428),i=a(0),c=a.n(i),o=a(105),b=a.n(o),l=a(195),s=a(127),p=a(3),u=a.n(p),d=a(384),m=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(r.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},a)))))},O=a(429),j=a(385),v=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,i=a||n,c=i.baseUrl,o=i.subDirectory,b=c+"/edit/"+i.branch+o+"/src/pages"+t;return c?Object(r.b)("div",{className:"bx--row "+j.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},g=a(193),h=(a(59),a(26)),f=a(386);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=b()(e,{lower:!0}),c=i===n,o=new RegExp(n+"(?!-)"),l=a.replace(o,i);return Object(r.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=c,t),f.listItem)},Object(r.b)(h.Link,{className:f.link,to:""+l},e))}));return Object(r.b)("div",{className:f.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:f.list},i))))))},n}(c.a.Component),N=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,c=e.Title,o=t.frontmatter,p=void 0===o?{}:o,u=t.relativePagePath,d=t.titleType,O=p.tabs,j=p.title,h=p.theme,f=p.description,x=p.keywords,w=n.data.site.pathPrefix,P=w?i.pathname.replace(w,""):i.pathname,D=O?P.split("/").slice(-1)[0]||b()(O[0],{lower:!0}):"";return Object(r.b)(s.a,{homepage:!1,theme:h,pageTitle:j,pageDescription:f,pageKeywords:x,titleType:d},Object(r.b)(m,{title:c?Object(r.b)(c,null):j,label:"label",tabs:O}),O&&Object(r.b)(y,{slug:P,tabs:O,currentTab:D}),Object(r.b)(N.a,{padded:!0},a,Object(r.b)(v,{relativePagePath:u})),Object(r.b)(g.a,{pageContext:t,location:i,slug:P,tabs:O,currentTab:D}),Object(r.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-practical-inventory-index-mdx-15aa7a210b073dc8b78a.js.map