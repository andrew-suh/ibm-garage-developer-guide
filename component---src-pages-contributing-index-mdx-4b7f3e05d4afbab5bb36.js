(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{411:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),o=a(438);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},i=c("PageDescription"),l=c("AnchorLinks"),p=c("AnchorLink"),b={_frontmatter:s},m=o.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(m,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(i,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use this guide to contribute to the theme. We’ll show you how to get the development environment set up as quickly as possible so you can start contributing.")),Object(n.b)(l,{mdxType:"AnchorLinks"},Object(n.b)(p,{mdxType:"AnchorLink"},"Project setup"),Object(n.b)(p,{mdxType:"AnchorLink"},"Development"),Object(n.b)(p,{mdxType:"AnchorLink"},"Work in a branch"),Object(n.b)(p,{mdxType:"AnchorLink"},"Sass and CSS Modules"),Object(n.b)(p,{mdxType:"AnchorLink"},"VS Code")),Object(n.b)("h2",{id:"project-setup"},"Project setup"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Go to ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon"}),"gatsby-theme-carbon")," and click the ",Object(n.b)("inlineCode",{parentName:"p"},"Fork")," button in the top-right corner.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"After it’s finished, click on the ",Object(n.b)("inlineCode",{parentName:"p"},"Clone or Download")," button and copy the contents.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"In your terminal, clone the repo into your directory of choice"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-sh"}),"git clone [PASTE_URL_HERE]\ncd gatsby-theme-carbon\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"When you clone your forked repo the ",Object(n.b)("inlineCode",{parentName:"p"},"origin")," is set to your fork by default. You’ll want to add a remote that points to the upstream repo."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-sh"}),"git remote add upstream git@github.com:carbon-design-system/gatsby-theme-carbon.git\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"In your terminal, verify that the remotes have been set"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-sh"}),"git remote -v\n")))),Object(n.b)("h2",{id:"development"},"Development"),Object(n.b)("p",null,"We use ",Object(n.b)("a",r({parentName:"p"},{href:"https://yarnpkg.com/lang/en/docs/install/"}),"yarn")," and yarn workspaces to develop the Carbon Gatsby theme. This allows us to have a development environment that’s closely linked to the theme with minimal setup. Run ",Object(n.b)("inlineCode",{parentName:"p"},"yarn install")," to install all of the projects dependencies."),Object(n.b)("p",null,"This project has two packages: the actual theme package (",Object(n.b)("inlineCode",{parentName:"p"},"gatsby-theme-carbon"),") and the ",Object(n.b)("inlineCode",{parentName:"p"},"example")," package. The example package emulates a project which uses the theme. Its only dependencies are Gatsby, React, and the adjacent theme package. The ",Object(n.b)("inlineCode",{parentName:"p"},"example")," package also serves as the theme’s documentation and ",Object(n.b)("a",r({parentName:"p"},{href:"https://gatsby-theme-carbon.now.sh"}),"website"),"; it’s deployed on every merge to master."),Object(n.b)("p",null,"New theme development will happen in the theme package while documentation and testing of that change will occur through changes in the example directory."),Object(n.b)("h3",{id:"development-scripts"},"Development scripts"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"yarn dev")," – start the development environment"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"yarn dev:clean")," – clear cache and restart dev"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"yarn format")," – format your code with prettier"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"yarn lint")," - check for errors in your javascript")),Object(n.b)("h2",{id:"work-in-a-branch"},"Work in a branch"),Object(n.b)("p",null,"You should always start a new project by pulling upstream changes into master and then creating a new branch. This workflow ensures you don’t accidentally commit anything to your master branch and get stuck when trying to open a pull request."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-sh"}),"git checkout master\ngit pull upstream master\ngit checkout -b my-branch-name\n")),Object(n.b)("p",null,"When you’re ready to open a pull request, push to your origin remote."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-sh"}),"git push origin my-branch-name\n")),Object(n.b)("p",null,"You’ll get a message in your terminal with a URL to open up a pull request in the upstream repository. Navigate to that URL and be sure to give a detailed summary of your pull request in the title and body section of the form."),Object(n.b)("h2",{id:"sass-and-css-modules"},"Sass and CSS Modules"),Object(n.b)("p",null,"For internal theme components we use ",Object(n.b)("a",r({parentName:"p"},{href:"https://sass-lang.com/documentation/syntax"}),"Sass")," and ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/css-modules/css-modules#css-modules"}),"CSS Modules"),". This allows us to take advantage of the Carbon Design System resources while not worrying about className collisions. By default, each ",Object(n.b)("inlineCode",{parentName:"p"},".scss")," file will be supplied with all of the Carbon Sass ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/blob/master/packages/components/src/globals/scss/_vars.scss"}),"variables"),": color, spacing, theme, and motion, as well as type and layout mixins, are imported automatically."),Object(n.b)("p",null,"You should colocate your stylesheet with the component(s) that import it. If the component is ",Object(n.b)("inlineCode",{parentName:"p"},"TreeView")," then the stylesheet should be ",Object(n.b)("inlineCode",{parentName:"p"},"TreeView.module.scss"),". All contained within the ",Object(n.b)("inlineCode",{parentName:"p"},"TreeView")," directory."),Object(n.b)("h3",{id:"css-modules"},"CSS Modules"),Object(n.b)("p",null,"You don’t need to prefix your classes as CSS Modules will generate unique class names for you. Import the class from the ",Object(n.b)("inlineCode",{parentName:"p"},".scss")," file."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-scss",metastring:"path=TreeView.module.scss",path:"TreeView.module.scss"}),".treeView {\n  color: $text-01;\n}\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"}),"import { treeView } from './style.css';\n\nconst TreeView = props => <div className={treeView} />;\n")),Object(n.b)("p",null,"For conditionally applying class names, use the ",Object(n.b)("inlineCode",{parentName:"p"},"classname")," library. Note how we’re using a ",Object(n.b)("a",r({parentName:"p"},{href:"https://tylermcginnis.com/computed-property-names/"}),"computed property name")," for the property being based to ",Object(n.b)("inlineCode",{parentName:"p"},"cx"),". That’s because the className isn’t literally ",Object(n.b)("inlineCode",{parentName:"p"},'"long"')," it’s a value generated by CSS Modules and placed in the ",Object(n.b)("inlineCode",{parentName:"p"},"long")," variable."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"}),"import cx from 'classname';\nimport { treeView, long } from './style.css';\n\nconst TreeView = props => {\n  const className = cx(treeView, {\n    [long]: props.long,\n  });\n  const TreeView = props => <div className={className} />;\n};\n")),Object(n.b)("p",null,"If you need to target a global class not processed by CSS Modules, you can do so with the ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/css-modules/css-modules#exceptions"}),"global selector"),"."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-scss"}),":global(.bx--grid) .codeBlock {\n  @include carbon--type-style('code-01');\n}\n")),Object(n.b)("h2",{id:"vs-code"},"VS Code"),Object(n.b)("p",null,"To get linting error feedback while writing javascript and SCSS in VS Code, install the ",Object(n.b)("a",r({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint"}),"stylelint")," and ",Object(n.b)("a",r({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}),"ESlint")," extensions. We use ESLint’s Prettier rules to format and lint all of our JavaScript in one pass. To get your code to format properly on save, add the following to a ",Object(n.b)("inlineCode",{parentName:"p"},".vscode/settings.json")," in the root of your project"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-json",metastring:"path=.vscode/settings.json",path:".vscode/settings.json"}),'{\n  "editor.formatOnSave": true,\n  "[javascript]": {\n    "editor.formatOnSave": false\n  },\n  "[javascriptreact]": {\n    "editor.formatOnSave": false\n  },\n  "eslint.autoFixOnSave": true,\n  "prettier.disableLanguages": ["javascript", "javascriptreact"]\n}\n')),Object(n.b)("p",null,"To lint the entire project and get errors in your ",Object(n.b)("inlineCode",{parentName:"p"},"Problems")," tray, you can add the following to a ",Object(n.b)("inlineCode",{parentName:"p"},".vscode/tasks.json")," file in the root of your project. You can run these tasks with ",Object(n.b)("inlineCode",{parentName:"p"},"cmd+shift+d")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-json",metastring:"path=.vscode/tasks.json",path:".vscode/tasks.json"}),'{\n  "version": "2.0.0",\n  "tasks": [\n    {\n      "type": "npm",\n      "script": "lint:js",\n      "problemMatcher": "$eslint-stylish"\n    },\n    {\n      "type": "npm",\n      "script": "lint:scss",\n      "problemMatcher": {\n        "owner": "stylelint",\n        "fileLocation": ["relative", "${workspaceFolder}"],\n        "pattern": [\n          {\n            "regexp": "^([^\\\\s].*)$",\n            "file": 1\n          },\n          {\n            "regexp": "^\\\\s+(\\\\d+):(\\\\d+)\\\\s+(✖|warning)\\\\s+(.*)\\\\s\\\\s+(.*)$",\n            "line": 1,\n            "column": 2,\n            "severity": 3,\n            "message": 4,\n            "code": 5,\n            "loop": true\n          }\n        ]\n      }\n    }\n  ]\n}\n')))}d.isMDXComponent=!0},436:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/garage-developer-guide"}}}')},437:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":""}}}}}')},438:function(e,t,a){"use strict";a(32),a(28);var n=a(1),o=a(436),r=a(0),s=a.n(r),c=a(105),i=a.n(c),l=a(194),p=a(127),b=a(3),m=a.n(b),d=a(383),u=function(e){var t,a=e.title,o=e.tabs,r=void 0===o?[]:o;return Object(n.b)("div",{className:m()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},h=a(437),j=a(384),g=function(e){var t=e.relativePagePath,a=e.repository,o=h.data.site.siteMetadata.repository,r=a||o,s=r.baseUrl,c=s+"/tree/master"+r.subDirectory+"/src/pages"+t;return s?Object(n.b)("div",{className:"bx--row "+j.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},O=a(193),y=(a(59),a(26)),N=a(385);var v=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0}),s=r===o,c=new RegExp(o+"(?!-)"),l=a.replace(c,r);return Object(n.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=s,t),N.listItem)},Object(n.b)(y.Link,{className:N.link,to:""+l},e))}));return Object(n.b)("div",{className:N.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:N.list},r))))))},o}(s.a.Component),f=a(195);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,s=e.Title,c=t.frontmatter,b=void 0===c?{}:c,m=t.relativePagePath,d=t.titleType,h=b.tabs,j=b.title,y=b.theme,N=b.description,w=b.keywords,k=o.data.site.pathPrefix,x=k?r.pathname.replace(k,""):r.pathname,C=h?x.split("/").slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(n.b)(p.a,{homepage:!1,theme:y,pageTitle:j,pageDescription:N,pageKeywords:w,titleType:d},Object(n.b)(u,{title:s?Object(n.b)(s,null):j,label:"label",tabs:h}),h&&Object(n.b)(v,{slug:x,tabs:h,currentTab:C}),Object(n.b)(f.a,{padded:!0},a,Object(n.b)(g,{relativePagePath:m})),Object(n.b)(O.a,{pageContext:t,location:r,slug:x,tabs:h,currentTab:C}),Object(n.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-contributing-index-mdx-4b7f3e05d4afbab5bb36.js.map