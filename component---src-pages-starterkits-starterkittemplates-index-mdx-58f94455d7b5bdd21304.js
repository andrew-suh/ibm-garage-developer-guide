(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{444:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var i=a(108),n=a(449);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var r={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=s("AnchorLinks"),b=s("AnchorLink"),l=s("Row"),p=s("Column"),g=s("ResourceCard"),m={_frontmatter:r},d=n.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(d,o({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"overview"},"Overview"),Object(i.b)("p",null,"In the ",Object(i.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/starterkits/overview"}),"Overview")," section we describe why ",Object(i.b)("em",{parentName:"p"},"Starter Kit Templates")," provide a perfect on ramp to help projects get started. The Developer Tools project is providing a set of seed templates that can be used to get projects moving quickly and focusing on use case business logic."),Object(i.b)("p",null,"Read up on Why Start Kit Templates and if you have not already tried to deploy your first app get started"),Object(i.b)(c,{mdxType:"AnchorLinks"},Object(i.b)(b,{to:"../../starterkits/overview",mdxType:"AnchorLink"},"Starter Kit Templates Overview"),Object(i.b)(b,{to:"../../getting-started/deploy-app",mdxType:"AnchorLink"},"Deploying your first app")),Object(i.b)("p",null,"Here are links to the base set of ",Object(i.b)("strong",{parentName:"p"},"Starter Kit Templates")," provided for the ",Object(i.b)("em",{parentName:"p"},"IBM Garage for Cloud Developer Tools"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To use the Starter Kit templates, click on the link and then the ",Object(i.b)("strong",{parentName:"p"},"Template")," button to create a version in your own git organization.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Then clone it onto your local machine and then use ",Object(i.b)("inlineCode",{parentName:"p"},"igc pipeline")," to register it with your Jenkins server."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",o({parentName:"pre"},{className:"language-bash"}),"ibmcloud login | oc login\nkubectl get pods | oc get pods\nnpm i -g @garage-catalyst/ibm-garage-cloud-cli\ngit clone <generated startkit template>\ncd <generated startkit template>\ncode package.json ! rename your project and push changes\nigc pipeline -n dev\n")))),Object(i.b)("h3",{id:"start-kit-templates-links"},"Start Kit Templates Links"),Object(i.b)(l,{mdxType:"Row"},Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"React UI Patterns",subTitle:"Carbon based UI to help with common patterns using React framework",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/template-node-react",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Angular UI Patterns",subTitle:"Carbon based UI to help with common patterns using Angular framework",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/template-node-angular",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Typescript Microservice",subTitle:"Node.js TypeScript GraphQL Backend for Frontend",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/template-node-typescript",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    ")))),Object(i.b)("br",null),Object(i.b)(l,{mdxType:"Row"},Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Typescript GraphQL",subTitle:"Node.js TypeScript GraphQL Backend for Frontend",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/template-graphql-typescript",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Spring Boot Microservice",subTitle:"Spring Boot Java Microservice",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/template-java-spring",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"ArgoCD GitOps",subTitle:"Template configuration to help to setup GitOps with ArgoCD",actionIcon:"launch",color:"light",href:"https://github.com/ibm-garage-cloud/template-argocd-test",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png",srcSet:["/ibm-garage-developer-guide/static/6c742b0dc481582b162691c2235e1672/7d71f/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",loading:"lazy"})),"\n    ")))))}u.isMDXComponent=!0},447:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},448:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},449:function(e,t,a){"use strict";a(32),a(28);var i=a(1),n=a(447),o=a(0),r=a.n(o),s=a(107),c=a.n(s),b=a(194),l=a(128),p=a(3),g=a.n(p),m=a(388),d=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(i.b)("div",{className:g()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12"},Object(i.b)("h1",{id:"page-title",className:m.text},a)))))},u=a(448),A=a(389),h=function(e){var t=e.relativePagePath,a=e.repository,n=u.data.site.siteMetadata.repository,o=a||n,r=o.baseUrl,s=o.subDirectory,c=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?Object(i.b)("div",{className:"bx--row "+A.row},Object(i.b)("div",{className:"bx--col"},Object(i.b)("a",{className:A.link,href:c},"Edit this page on GitHub"))):null},O=a(193),y=(a(59),a(26)),v=a(390);var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0}),r=o===n,s=new RegExp(n+"(?!-)"),b=a.replace(s,o);return Object(i.b)("li",{key:e,className:g()((t={},t[v.selectedItem]=r,t),v.listItem)},Object(i.b)(y.Link,{className:v.link,to:""+b},e))}));return Object(i.b)("div",{className:v.tabsContainer},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(i.b)("nav",null,Object(i.b)("ul",{className:v.list},o))))))},n}(r.a.Component),f=a(195);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,s=t.frontmatter,p=void 0===s?{}:s,g=t.relativePagePath,m=t.titleType,u=p.tabs,A=p.title,y=p.theme,v=p.description,B=p.keywords,j=n.data.site.pathPrefix,T=j?o.pathname.replace(j,""):o.pathname,C=u?T.split("/").slice(-1)[0]||c()(u[0],{lower:!0}):"";return Object(i.b)(l.a,{homepage:!1,theme:y,pageTitle:A,pageDescription:v,pageKeywords:B,titleType:m},Object(i.b)(d,{title:r?Object(i.b)(r,null):A,label:"label",tabs:u}),u&&Object(i.b)(N,{slug:T,tabs:u,currentTab:C}),Object(i.b)(f.a,{padded:!0},a,Object(i.b)(h,{relativePagePath:g})),Object(i.b)(O.a,{pageContext:t,location:o,slug:T,tabs:u,currentTab:C}),Object(i.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-starterkits-starterkittemplates-index-mdx-58f94455d7b5bdd21304.js.map