(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{425:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var o=a(106),n=a(437);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=l("AnchorLinks"),s=l("AnchorLink"),b={_frontmatter:i},p=n.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(o.b)(p,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"developer-tools"},"Developer Tools"),Object(o.b)("h3",{id:"overview"},"Overview"),Object(o.b)("p",null,"The Developer Tools have been designed to help a team configure a set of popular open source tools that can enable\ncloud native development. Typically a squad lead or lead developer install and setup these tools after the\ninitial inception workshop. The objective of this is to reduce the amount of time a team needs to configure and prepare their Kubernetes or OpenShift development environments.\nSome key benefits of this is that it makes the whole development lifecycle for Kubernetes and OpenShift\nconsistent and simpler thank the out of the box experience."),Object(o.b)("p",null,"The installation is managed with Terraform and it enables it to be modular in configuration\nso tools can be easily disabled or new tools added. This combination of tools are proven in the\nindustry to deliver real value for modern cloud native development."),Object(o.b)("p",null,"The Red Hat Innovation Lab has a very similar approach to how they deliver success with OpenShift, view their approach ",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/rht-labs/labs-ci-cd"}),"here"),"."),Object(o.b)("p",null,"After installation your environment will consist of the following development tools which have been installed into your IBM Kubernetes Service or Red Hat OpenShift cluster managed cluster."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"IBM Container Service Cluster (3 nodes) for Kubernetes or OpenShift")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create ",Object(o.b)("em",{parentName:"p"},"dev"),",",Object(o.b)("em",{parentName:"p"},"test"),",",Object(o.b)("em",{parentName:"p"},"staging")," and ",Object(o.b)("em",{parentName:"p"},"tools")," namespaces")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Install the following tools:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://jenkins.io/"}),"Jenkins CI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/"}),"Argo CD")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://www.sonarqube.org/"}),"SonarQube")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://docs.pact.io/"}),"Pack Broker")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://jfrog.com/open-source/"}),"Artifactory")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://www.eclipse.org/che/"}),"Eclipse CHE")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The following IBM CLoud services will be created and bound to you your development cluster:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/appid?topic=appid-service-access-management"}),"AppID Application Authentication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Cloudant?topic=cloudant-getting-started"}),"Cloudant NoSQL Database")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/cloud-object-storage?topic=cloud-object-storage-getting-started"}),"Cloud Object Storage Storage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA?topic=LogDNA-getting-started"}),"LogDNA Logging")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started"}),"SysDig Monitoring")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/databases-for-postgresql?topic=databases-for-postgresql-about"}),"PostgreSQL")," (used by SonarQube)")))),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("p",null,"To continue getting started work through the following links and guides"),Object(o.b)(c,{mdxType:"AnchorLinks"},Object(o.b)(s,{to:"getting-started/installation",mdxType:"AnchorLink"},"Installation"),Object(o.b)(s,{to:"getting-started/deploy-app",mdxType:"AnchorLink"},"Deploy First App"),Object(o.b)(s,{to:"guides/overview",mdxType:"AnchorLink"},"Guides")))}d.isMDXComponent=!0},435:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/garage-developer-guide"}}}')},436:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":""}}}}}')},437:function(e,t,a){"use strict";a(32),a(28);var o=a(1),n=a(435),r=a(0),i=a.n(r),l=a(105),c=a.n(l),s=a(195),b=a(127),p=a(3),d=a.n(p),u=a(383),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(o.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12"},Object(o.b)("h1",{id:"page-title",className:u.text},a)))))},h=a(436),O=a(384),g=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=i+"/tree/master"+r.subDirectory+"/src/pages"+t;return i?Object(o.b)("div",{className:"bx--row "+O.row},Object(o.b)("div",{className:"bx--col"},Object(o.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},j=a(193),f=(a(59),a(26)),v=a(385);var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0}),i=r===n,l=new RegExp(n+"(?!-)"),s=a.replace(l,r);return Object(o.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(o.b)(f.Link,{className:v.link,to:""+s},e))}));return Object(o.b)("div",{className:v.tabsContainer},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(o.b)("nav",null,Object(o.b)("ul",{className:v.list},r))))))},n}(i.a.Component),y=a(194);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,l=t.frontmatter,p=void 0===l?{}:l,d=t.relativePagePath,u=t.titleType,h=p.tabs,O=p.title,f=p.theme,v=p.description,w=p.keywords,x=n.data.site.pathPrefix,k=x?r.pathname.replace(x,""):r.pathname,T=h?k.split("/").slice(-1)[0]||c()(h[0],{lower:!0}):"";return Object(o.b)(b.a,{homepage:!1,theme:f,pageTitle:O,pageDescription:v,pageKeywords:w,titleType:u},Object(o.b)(m,{title:i?Object(o.b)(i,null):O,label:"label",tabs:h}),h&&Object(o.b)(N,{slug:k,tabs:h,currentTab:T}),Object(o.b)(y.a,{padded:!0},a,Object(o.b)(g,{relativePagePath:d})),Object(o.b)(j.a,{pageContext:t,location:r,slug:k,tabs:h,currentTab:T}),Object(o.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-overview-index-mdx-2da458a46ba5f5a5ed82.js.map