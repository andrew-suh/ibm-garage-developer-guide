(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{417:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),i=a(430);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=c("PageDescription"),b=c("AnchorLinks"),l=c("AnchorLink"),p={_frontmatter:o},u=i.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(u,r({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"An example three tier application architecture you can build and have deployed in IBM Kubernetes service or IBM Red Hat OpenShift in less than an hour using the IBM Garage for Cloud Developer Tools and Starter Kit Templates.")),Object(n.b)("h2",{id:"business-need"},"Business Need"),Object(n.b)("p",null,"In this guide imagine you have completed a ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/think/enterprise-design-thinking/"}),"Enterprise Design Thinking Workshop")," and the out come is a single ",Object(n.b)("strong",{parentName:"p"},"Hill")," defining the desired business outcomes. Use the steps below to help deliver this ",Object(n.b)("strong",{parentName:"p"},"Hill")," quickly and to ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method"}),"Garage Method Best Practices"),"."),Object(n.b)("h2",{id:"hills"},Object(n.b)("a",r({parentName:"h2"},{href:"https://www.ibm.com/garage/method/practices/think/practice_hills/"}),"Hills")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Who")," Provide an internal web application system that can be used by distribution employees securely from each of the regional warehouses. The warehouses are linked using the public internet.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"What")," Enable a secure web application that will allow the warehouse employees to gain easy access to list of product ",Object(n.b)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Stock_keeping_unit"}),"SKU")," inventory levels and inventory locations.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Wow")," Make the system appealing and easy to use. Deliver it to the IBM Cloud platform in a short focused ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/think/practice_minimum_viable_product/"}),"Minimal Viable Product"),". Use the latest managed container runtimes and DevOps best practices to enable post MVP feature improvements. Simulate a release to a  ",Object(n.b)("em",{parentName:"p"},"Test")," environment."))),Object(n.b)("h2",{id:"architecture"},Object(n.b)("a",r({parentName:"h2"},{href:""}),"Architecture")),Object(n.b)("p",null,"The Micro App should be built using a three tier microservices architecture. Each tier will follow a clean separation of concerns. Each app component will be modelled using ",Object(n.b)("em",{parentName:"p"},"Microservices")," and use a number of ",Object(n.b)("a",r({parentName:"p"},{href:"https://searchsoftwarequality.techtarget.com/definition/polyglot-programming"}),"polyglot")," programming languages and frameworks. Data will be stored in IBM Cloudant and the Micro App will be secured using IBM App ID."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.02665520206363%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADfElEQVQ4y2NwLNul4Vi2WxGIZZ3Kdus5lO2RDKzYyCdRdV+Koeq/oHXNCUmGzP+8zjUHpRga//Ob1p2XYCj9K8hQ+lrYv2KLsF3ZHh6gXgEgZgbiFAYYcCrfxcmABA4Whfl9LzEMea7JwPGt1asMJPa9SDfrgyMD/48aa98XNe6ecL1lO2BmxDA8W63LyMD/n8GnYR1fYNN61kXbW5hAkld3bmp4uGvlogeXLxk+3TJ/9+OHd3TvrZ+77/bRgy7P967ovL1rfQtI3f9XpgyulbuZQWygC+OQ3PSfBYghLAYGxpRFH50jl/23K51/2bp4x38n5/b/uqXb/3iVLblt6zHvv2nB2h+WwYWzeUDqnSsgBjqV745lWD091hVkRMMuD6O2jdZCsrvW6DDMuSi6aVmc05V9rvkMLJPYp/X7S9887FHbXGcj6Z9fJ3T3sEvJvLnRBgzq/9nALivdgTDw5Mq4KUADmZecK1+x8FiBi9WB3c0GW/d7HV2TanP5aHRxasdczm1b8pVuHQ+tXrmuSqF/VpX4reMhZYtXVZgyKEMM9KnZwQLx8q5YuIfP3voQdv/pL4X7Dz4K/fr5n5dBt0eBQbbOSNYinp/ZqFmIQbTWSNSmWpondAsXg+xyFQb7nXwR7ds5kCMS7MIjM83qGNCB7n8GPcdAUWkGBpgGVhEGBiEQAxifTM7MDFIuKbMkPeqPC4PE7DL67V0yW+PtSveGMlw7tQIcWykTT/IXTj8MdrpP7UZWr9Yb/BUX/zM7V+3i8Gh7z1624T87w+P/LPPUzGTn2sa5Jk55Vx3TtBds4LzNJxMXbz0216poVyhD1cH/wuZ5W5idy3fxOJXvAQeua8UpFruSzVp2pes1HUsPyjhVrBO3Kdgp7lyxWsKmYq+Ya8BECZeSXXJuNfvAsbxw6XqRl0fmCjuCvGyUslPZpWqbEDBRAlP8Lub/kJTDMPFIYsTc8wGFM28ycM844zEdJDb3gn/XpPu6Sn984queOXpZQ5MYcuaIY7BrPCzrm7qG2alsFzcwUJlhkikz+s0Ll9ba+jQvEM1eUB/hUb2dP39JpUf1xnWaRycsLtgye5MbQxcklgNqtkASNsiFgnXPOSHZB+JCEDt24iwm2eBn3AxS/9nsig7z8bv853cs28MLdA+ra8Edboa6Ffym3cf4Isp3s0JjlwkWywCySmS7cp40fAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Architecture",title:"Architecture",src:"/ibm-garage-developer-guide/static/2675281b440592522097f42899d65053/fb070/architecture.png",srcSet:["/ibm-garage-developer-guide/static/2675281b440592522097f42899d65053/d6747/architecture.png 288w","/ibm-garage-developer-guide/static/2675281b440592522097f42899d65053/09548/architecture.png 576w","/ibm-garage-developer-guide/static/2675281b440592522097f42899d65053/fb070/architecture.png 1152w","/ibm-garage-developer-guide/static/2675281b440592522097f42899d65053/34616/architecture.png 1163w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "),Object(n.b)("h2",{id:"design"},Object(n.b)("a",r({parentName:"h2"},{href:""}),"Design")),Object(n.b)("p",null,"The Micro App should adhere to the following User Interface Design and API and Model Design."),Object(n.b)("p",null,"Add Design here."),Object(n.b)("h2",{id:"technical-requirements"},"Technical Requirements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The Mico App should adhere to the following technical requirements:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Polyglot Microservices"),Object(n.b)("li",{parentName:"ul"},"Stateless"),Object(n.b)("li",{parentName:"ul"},"REST APIs"),Object(n.b)("li",{parentName:"ul"},"DevOps with Continous Integration and Delivery"),Object(n.b)("li",{parentName:"ul"},"Monitoring and Logging"),Object(n.b)("li",{parentName:"ul"},"Code Analysis"),Object(n.b)("li",{parentName:"ul"},"App Security"),Object(n.b)("li",{parentName:"ul"},"Deployed to Red Hat OpenShift or IBM Kubernetes Managed Service"),Object(n.b)("li",{parentName:"ul"},"Follow ",Object(n.b)("a",r({parentName:"li"},{href:"https://www.carbondesignsystem.com/"}),"Carbon Design System")," User Experience")))),Object(n.b)("h2",{id:"guide"},"Guide"),Object(n.b)("p",null,"Steps to Go here"),Object(n.b)("h2",{id:"summary"},"Summary"),Object(n.b)("p",null,"You have now completed the Micro App Guide demonstrating the ",Object(n.b)("em",{parentName:"p"},"Inventory")," solution."),Object(n.b)("h2",{id:"solution-links"},"Solution Links"),Object(n.b)("p",null,"If you want to skip the guide and just get the components running, here are the solution Git Repositories. You can clone these and ",Object(n.b)("inlineCode",{parentName:"p"},"igc pipeline")," them to register them in the CI pipeline. The ",Object(n.b)("strong",{parentName:"p"},"README.md")," may include additional setup for populating test data etc."),Object(n.b)(b,{mdxType:"AnchorLinks"},Object(n.b)(l,{to:"https://github.com/ibm-garage-cloud/inventory-ui",mdxType:"AnchorLink"},"Inventory User Interface"),Object(n.b)(l,{to:"https://github.com/ibm-garage-cloud/inventory-bff",mdxType:"AnchorLink"},"Inventory Backend for Frontend"),Object(n.b)(l,{to:"https://github.com/ibm-garage-cloud/inventory-service",mdxType:"AnchorLink"},"Inventory Microservice")))}d.isMDXComponent=!0},428:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},429:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},430:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(428),r=a(0),o=a.n(r),c=a(105),s=a.n(c),b=a(195),l=a(127),p=a(3),u=a.n(p),d=a(384),m=function(e){var t,a=e.title,i=e.tabs,r=void 0===i?[]:i;return Object(n.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},g=a(429),h=a(385),O=function(e){var t=e.relativePagePath,a=e.repository,i=g.data.site.siteMetadata.repository,r=a||i,o=r.baseUrl,c=r.subDirectory,s=o+"/edit/"+r.branch+c+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},j=a(193),f=(a(59),a(26)),v=a(386);var y=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=s()(e,{lower:!0}),o=r===i,c=new RegExp(i+"(?!-)"),b=a.replace(c,r);return Object(n.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(n.b)(f.Link,{className:v.link,to:""+b},e))}));return Object(n.b)("div",{className:v.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:v.list},r))))))},i}(o.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,c=t.frontmatter,p=void 0===c?{}:c,u=t.relativePagePath,d=t.titleType,g=p.tabs,h=p.title,f=p.theme,v=p.description,N=p.keywords,A=i.data.site.pathPrefix,M=A?r.pathname.replace(A,""):r.pathname,k=g?M.split("/").slice(-1)[0]||s()(g[0],{lower:!0}):"";return Object(n.b)(l.a,{homepage:!1,theme:f,pageTitle:h,pageDescription:v,pageKeywords:N,titleType:d},Object(n.b)(m,{title:o?Object(n.b)(o,null):h,label:"label",tabs:g}),g&&Object(n.b)(y,{slug:M,tabs:g,currentTab:k}),Object(n.b)(w.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:u})),Object(n.b)(j.a,{pageContext:t,location:r,slug:M,tabs:g,currentTab:k}),Object(n.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-practical-inventory-index-mdx-16b22345ac6e03edef7c.js.map