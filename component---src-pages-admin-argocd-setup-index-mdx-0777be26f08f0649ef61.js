(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{389:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),o=a(434);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var n,l={},c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),p={_frontmatter:l},b=o.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(r.b)(b,i({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"Complete the steps for setting up the ArgoCD tool")),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"ArgoCD is the ",Object(r.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-delivery"}),"Developer Tools environment’s continuous delivery tool"),".\nBefore you can use it as part of the environment, it must first be configured."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"Before setting up ArgoCD, ",Object(r.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/artifactory-setup"}),"set up Artifactory")," so that ArgoCD can use it."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Configure ArgoCD to use Artifactory."),Object(r.b)("h3",{id:"clone-the-argocd-repository"},"Clone the ArgoCD repository"),Object(r.b)("p",null,"The ArgoCD repository contains files and samples for configuring ArgoCD."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Clone the repository to your development machine"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ibm-garage-cloud/template-argocd-test\ncd template-argocd-test\n")))),Object(r.b)("h3",{id:"get-the-helm-repository-location"},"Get the Helm repository location"),Object(r.b)("p",null,"The Helm repository is in Artifactory. ArgoCD will need the URL to that repository."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Artifactory console, select the Home page")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Set Me Up section, click on the ",Object(r.b)("inlineCode",{parentName:"p"},"generic-local")," repository"),Object(r.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"460px"}}),"\n      ",Object(r.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.08695652173913%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABEklEQVQoz52RfU+DMBDG+f4fzBg3M2OWbOqI/oGIG1Ao9IW3Pt5Vtmy6gPGSH3cp7dPnroHWGkop1HUNrq21v2iaZpLjHj4f8CeOY0RRhCRJ4JzDf4OFvWDf92jb9oKu604MwzALGzk55IVje8YYaBqBpexr+s+b5+DwgqWsUEiJXAgc0hRZnnvSLENeFHRJc3Wu16iqigRfX1A8LpGvV0jub7F/WOBzdYd4SfXiBroQMDRwMzqewgvW2zXy+B2ilJCyREGuFL24j8MHnMjADblxTlMts2igwy3MbgOxe4IMnz3qLQSyPVy4AaryW3zi9S8ErSI3mlFjJlQFR0KOMzsYD/3JoaX5+Ft+cL425+5c8AsiNAuFHwQXEAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Set Me Up - Repositories",title:"Set Me Up: Repositories",src:"/ibm-garage-developer-guide/static/47a18ca9bf4f3a6f6626bd91afc5df8b/0ac1e/setupartifactory.png",srcSet:["/ibm-garage-developer-guide/static/47a18ca9bf4f3a6f6626bd91afc5df8b/d6747/setupartifactory.png 288w","/ibm-garage-developer-guide/static/47a18ca9bf4f3a6f6626bd91afc5df8b/0ac1e/setupartifactory.png 460w"],sizes:"(max-width: 460px) 100vw, 460px",loading:"lazy"})),"\n    ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Set Me Up dialog for the generic-local repository, copy the Deploy URL"),Object(r.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"874px"}}),"\n      ",Object(r.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.27688787185355%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABk0lEQVQ4y6VT2VLbQBDU//8ZD7yAcQwYymULg7QW0mov7dmZXcXGIU6FIlPVNXtoe65W1TQN6rpG9lLK/wLnHNUwDFBKQWsNa+2X4Jw74fx8miZUmeyzpZTwNwshlIdHYu89AiHGWO4LYTmkDzPRv2CMgRCilOh9ztKDC1mqzKQzobtMeMz2fH0sM/tEBM4HvA8jFAUohEIJTH4qmw+yeDnD+Ps+xvRHe6qB9+gVh8lNpagZxjroyZYzS+34iuUKS4bGTEj0UDMGzvYQhzcM7Qt0xyBYA9G3UJsN+PUN+sUKw8O6gN8/Q643GMnbXX1qRZWzCNQDtnhEsyTcrfG6eMBh9Yx2+QS2ekJ7+4jXqx9oaH2gwB1plrMepldQnYAd1anHFRcc0it8FkrC96waxYhRchq7gDYCSs/QepZCloeSirRGPQqJPAq8T/Mg4xz6OPlqIl0FumyZwq7p8dJybN/e0XYSu9piu3PYbGe/3Ytyv2+pRZ3BLy2fhpJRdJgnb20kpDPEAuc+4Cm1EF1BSpd/hJ8YlfQJQGMMogAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Set Me Up - Generic Local Repository",title:"Set Me Up: generic-local Repository",src:"/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/d278b/artifactoryurlsetup.png",srcSet:["/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/d6747/artifactoryurlsetup.png 288w","/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/09548/artifactoryurlsetup.png 576w","/ibm-garage-developer-guide/static/51505acc18d12f318b340646f7d037e7/d278b/artifactoryurlsetup.png 874w"],sizes:"(max-width: 874px) 100vw, 874px",loading:"lazy"})),"\n    "))),Object(r.b)("h3",{id:"update-the-argocd-configuration-file"},"Update the ArgoCD configuration file"),Object(r.b)("p",null,"The repo you cloned contains an ArgoCD configuration file. Put the Helm repository location in that file\nand deploy it to your Developer Tools environment."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In your local copy of the ",Object(r.b)("inlineCode",{parentName:"p"},"template-argocd-test")," repo, open the ",Object(r.b)("inlineCode",{parentName:"p"},"config/argocd-helm-repo.yaml")," file in an editor")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Edit the ",Object(r.b)("inlineCode",{parentName:"p"},"data.helm.url")," property to replace the value ",Object(r.b)("inlineCode",{parentName:"p"},"<artifactory helm repository location>"),"\nwith the URL of the Helm repository location in Artifactory"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: argocd-cm\n  namespace: tools\ndata:\n  helm.repositories: |\n    - url: <artifactory helm repository location>\n      name: helm-repository-location\n")))),Object(r.b)("p",null,"Use the kubectl CLI to deploy the edited configuration file."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Test to confirm that your shell is logged into your cluster"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",i({parentName:"pre"},{className:"language-bash"}),"kubectl version --short\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Apply the configuration file to the cluster in the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," namespace"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",i({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f argocd-helm-repo.yaml -n tools\n")),Object(r.b)("p",{parentName:"li"},"You can also apply the file using the ",Object(r.b)("inlineCode",{parentName:"p"},"config/addconfigmap.sh")," script in the ",Object(r.b)("inlineCode",{parentName:"p"},"template-argocd-test")," repo."))),Object(r.b)("p",null,"Verify that the new configuration has deployed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Kubernetes dashboard or OpenShift console, navigate to the Config Maps in the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," namespace")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select the ",Object(r.b)("inlineCode",{parentName:"p"},"argocd-cm")," config map and confirm that its ",Object(r.b)("inlineCode",{parentName:"p"},"helm.repositories")," property specifies the\nArtifactory URL"))),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"ArgoCD now has the configuration file in the Developer Tools environment that it needs to access the Helm chart repository in Artifactory."))}s.isMDXComponent=!0},432:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},433:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},434:function(e,t,a){"use strict";a(32),a(28);var r=a(1),o=a(432),i=a(0),n=a.n(i),l=a(105),c=a.n(l),p=a(195),b=a(127),s=a(3),g=a.n(s),m=a(384),d=function(e){var t,a=e.title,o=e.tabs,i=void 0===o?[]:o;return Object(r.b)("div",{className:g()(m.pageHeader,(t={},t[m.withTabs]=i.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:m.text},a)))))},u=a(433),f=a(385),h=function(e){var t=e.relativePagePath,a=e.repository,o=u.data.site.siteMetadata.repository,i=a||o,n=i.baseUrl,l=i.subDirectory,c=n+"/edit/"+i.branch+l+"/src/pages"+t;return n?Object(r.b)("div",{className:"bx--row "+f.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},O=a(193),y=(a(59),a(26)),j=a(386);var A=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=c()(e,{lower:!0}),n=i===o,l=new RegExp(o+"(?!-)"),p=a.replace(l,i);return Object(r.b)("li",{key:e,className:g()((t={},t[j.selectedItem]=n,t),j.listItem)},Object(r.b)(y.Link,{className:j.link,to:""+p},e))}));return Object(r.b)("div",{className:j.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:j.list},i))))))},o}(n.a.Component),N=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,l=t.frontmatter,s=void 0===l?{}:l,g=t.relativePagePath,m=t.titleType,u=s.tabs,f=s.title,y=s.theme,j=s.description,v=s.keywords,w=o.data.site.pathPrefix,C=w?i.pathname.replace(w,""):i.pathname,D=u?C.split("/").slice(-1)[0]||c()(u[0],{lower:!0}):"";return Object(r.b)(b.a,{homepage:!1,theme:y,pageTitle:f,pageDescription:j,pageKeywords:v,titleType:m},Object(r.b)(d,{title:n?Object(r.b)(n,null):f,label:"label",tabs:u}),u&&Object(r.b)(A,{slug:C,tabs:u,currentTab:D}),Object(r.b)(N.a,{padded:!0},a,Object(r.b)(h,{relativePagePath:g})),Object(r.b)(O.a,{pageContext:t,location:i,slug:C,tabs:u,currentTab:D}),Object(r.b)(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-admin-argocd-setup-index-mdx-0777be26f08f0649ef61.js.map