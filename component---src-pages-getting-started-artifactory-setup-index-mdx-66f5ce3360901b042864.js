(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{393:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),i=a(430);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=c("PageDescription"),p=c("AnchorLinks"),b=c("AnchorLink"),l=c("ArtDirection"),g=c("Row"),d=c("Column"),m={_frontmatter:o},A=i.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(r.b)(A,n({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"Complete the steps for setting up the Artifactory tool")),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Artifactory is a general purpose artifact storage service. The\n",Object(r.b)("a",n({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Registry"}),"IBM Cloud Container Registry"),"\nstores Docker images, but has no support for storing other types of binary artifacts such as Maven project files,\nGradle jar files, NPM modules, and Helm charts.\nIn the Developer Tools environment, Jenkins and ArgoCD use Artifactory as a\n",Object(r.b)("a",n({parentName:"p"},{href:"https://helm.sh/docs/chart_repository/"}),"Helm chart repository"),",\nand the Starter Kit Templates have also been configured to store their Helm charts in Artificatory."),Object(r.b)("p",null,"Artifactory is part of the Developer Tools environment’s complete CI/CD solution:"),Object(r.b)(p,{small:!0,mdxType:"AnchorLinks"},Object(r.b)(b,{to:"../../guides/continuous-integration",mdxType:"AnchorLink"},"Continuous Integration"),Object(r.b)(b,{to:"../../guides/continuous-delivery",mdxType:"AnchorLink"},"Continuous Delivery")),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Set up Artifactory in the Developer Tools environment with a Helm repository.\nAlso, set up the Developer Tools environment to access Artifactory."),Object(r.b)("h3",{id:"set-up-artifactory"},"Set up Artifactory"),Object(r.b)("p",null,"Create a repository in Artifactory for storing Helm charts."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open the Artifactory dashboard from the ",Object(r.b)("a",n({parentName:"li"},{href:"/ibm-garage-developer-guide/getting-started/dashboard"}),"Developer Tools Dashboard")," and login")),Object(r.b)("p",null,"The first time you log into Artifactory, it is unconfigured and displays its Onboarding Wizard, starting with the Welcome page."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press ",Object(r.b)("strong",{parentName:"p"},"Next")),Object(r.b)(l,{mdxType:"ArtDirection"},Object(r.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"998px"}}),"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.51503006012024%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABI0lEQVQoz6VT2U7EMAzM/38d4o3y2Bva3On2nmUitYIt3V2EpZEjx5567FT0fY9hGDCO4+632DRNWNcV92y7X5YF8zxDpGmKqqpQ13X0RVEgy7KIpmn2omchrLWQUkJrHWGMiWDce48QwtNkNMECgsXOOVwul+gpmzKI79Juz7fyBQ8kOzPO9DeCU8kcfJ7ncQEEO+LFNE+RjHNlt9uCGOM49k7Xnx0LEjChbVpII+G8Q/AByimE7strFe+3WTK/67pT+SJ+0VkkSQLtNMqqjJs21qCVLaqyQpqlUFLhpX7Fh/6ENx5v8h21rw+kgu+NHWijMQ5j7IRkjHFBBCUzrqyKC+PMfe/Rj/1hngL/tIPkvzzae9iWKR491O2XepTHXTDvCp2srUwSFWwIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/fe462/initialjfrog.png",srcSet:["/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/d6747/initialjfrog.png 288w","/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/09548/initialjfrog.png 576w","/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/fe462/initialjfrog.png 998w"],sizes:"(max-width: 998px) 100vw, 998px",loading:"lazy"})),"\n    ")))),Object(r.b)("p",null,"The next page in the wizard is the Configure a Proxy Server page. This is to setup a proxy for external resources. You can skip this\nstep."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press ",Object(r.b)("strong",{parentName:"p"},"Skip")),Object(r.b)(l,{mdxType:"ArtDirection"},Object(r.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"996px"}}),"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.730923694779115%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAAxElEQVQoz5VT0Q6DIAzs/3+jDwajybLHqaAotxxLF50IrMkFQq9H27SCAOz7jnVdI7z3XyzLEn20EMItaORt2wZ5vJ4YxxFt26JpGgzDgL7vYYxB13WY5/kimDL1ifMuKjPQWhvhnMM0TafsUsGpTMXZj+DdrxQltA3k5soX9o2kHLTH7ClFcyZKyJWhwqWSY4YalCNp2TnOqWRmWRtQFKxp9F+CteNw936ZQ1RYaZiPfjmu3O9dTw76cS31rotAcKT4/gaUV7Uo2beEEwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/4b957/setupproxy.png",srcSet:["/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/d6747/setupproxy.png 288w","/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/09548/setupproxy.png 576w","/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/4b957/setupproxy.png 996w"],sizes:"(max-width: 996px) 100vw, 996px",loading:"lazy"})),"\n    ")))),Object(r.b)("p",null,"The next page in the wizard is the Create Repositories page. Since Artifactory doesn’t have a specific package type for Helm charts,\ncreate a repository for storing generic artifacts."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Generic"),", then press ",Object(r.b)("strong",{parentName:"p"},"Create")),Object(r.b)(l,{mdxType:"ArtDirection"},Object(r.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"997px"}}),"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.37211634904714%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABeElEQVQoz21S227DMAjN/3/aXqe9bVLbSZW65h7Hd4edQ5Iq64qEMDaGw4HKey+t6WQYBzmfz3I6nR56u90kpSQhBNUYIzRJzlkoywKVTeFQKwYxwDknbddK267a973qva6laRrVGmdrrSbWNFuS/UypiGCvdpRnf5e8oSoIyGVRm3J52Irovn++0FoQY3tcBpmN0c9v7x/yeblID8TX61U8uqjbXmkYxkliymLmWQIs/YQCVYYz+1EvZzeK8VYCeHUhSjeM0o1GDAo0SBSRyIHLUooEtE1EIazWwxKxcug9NGaxs0PSgAcEoEDCW8AQiILJnfNyb1qlw+KcyL3HsNKaMLLllCIenSJKioBTLIqYvofPj4oA94wrQMJCyl3JOhSi1qGQwwktMZCTtrDTNIFPp5zNQJK3hAlFLBCxgAUtbFG2ldmtTlmzL8s/u6/EvmNHLdsuPku17pT8CX72WYC8vorhf4La9/mwh6+RHN9eFWYxLYhktL9vV151Yz4bawAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/7456b/createrepository.png",srcSet:["/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/d6747/createrepository.png 288w","/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/09548/createrepository.png 576w","/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/7456b/createrepository.png 997w"],sizes:"(max-width: 997px) 100vw, 997px",loading:"lazy"})),"\n    ")))),Object(r.b)("p",null,"The next page in the wizard is the Onboarding Complete page. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press ",Object(r.b)("strong",{parentName:"p"},"Finish")),Object(r.b)(l,{mdxType:"ArtDirection"},Object(r.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"997px"}}),"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.47241725175526%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAArElEQVQoz6VS2QrEIBDz/7/SYgXpg9TjxXOWCErZ7halA9FRYzIeLMZIyhxkjKFt20gIQUopklKOMXLOOTnn6DtqraMHWCmFcsmNjI37vg9gDEHkWmuy1jZj733LfxmwnqBSEEEC+gYA813kPE9yF8Fe2agwhNDcU0pNdDVugmhyzreFWfw98pPrCtjV6Y3QEFy5pxkOW7mnGc6UYPurDw+HwC8B5/WR+zxMgQ8BC2KOmeZoeQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/7456b/completejfrog.png",srcSet:["/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/d6747/completejfrog.png 288w","/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/09548/completejfrog.png 576w","/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/7456b/completejfrog.png 997w"],sizes:"(max-width: 997px) 100vw, 997px",loading:"lazy"})),"\n    ")))),Object(r.b)("h3",{id:"allow-anonymous-access-to-artifactory"},"Allow Anonymous Access to Artifactory"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open the Artifactory dashboard from the ",Object(r.b)("a",n({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/dashboard"}),"Developer Tools Dashboard")," and login")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on the ‘Admin’ icon at the bottom of the left nav then select ‘Security Configuration’ from the top\nof the middle column of the menu"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{}),"![Security Configuration](/images/artifactory-admin-pane.png)\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Check the ",Object(r.b)("inlineCode",{parentName:"p"},"Allow Anonymous Access")," check box and press ",Object(r.b)("inlineCode",{parentName:"p"},"Save")))),Object(r.b)("h3",{id:"obtain-encrypted-password"},"Obtain encrypted password"),Object(r.b)("p",null,"To enable the Jenkins pipelines to store the Helm artifacts in the Artifactory repository, we need to obtain\nArtifactory’s encrypted password and store this where Jenkins can access it—in the ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory-access")," Kubernetes secret in the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," namespace in the Development Tools environment."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Artifactory console, press the ",Object(r.b)("strong",{parentName:"p"},"Welcome, admin")," menu button in the top right corner of the console and select ",Object(r.b)("strong",{parentName:"p"},"Edit profile"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the User Profile: admin page, enter you Artifactory password and press ",Object(r.b)("strong",{parentName:"p"},"Unlock")),Object(r.b)(l,{mdxType:"ArtDirection"},Object(r.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"784px"}}),"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.81632653061224%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0klEQVQ4y5WSTWvUQBjH59u4r+xNRT2JN8GLiBQsLHgXofgVxFubraelUPalJ196k3qwIBW/gEJFsC10C3a3u9lmkkkymeTvzLNJSNeu1IEfzzzz8s//eSbs4ZvHePRuCUtvn2D5fRPL203c33qAmxt3cKN9G9fbt/4LdvfZPax0XqD9dQPW7jrWPrWwumvh5c4rrH620PryGtbeOqwsatb2WoSZ034BVrtWw2Z7E8IRGBwNcHx4jNPBKU4OT6CEAmIAkUalmDwbydyehtXqNfT6Pdr3fIFQhohURLmJMpKQSlL0gxA84Ngf/cC3398xdIezc3EEFSuCVSoVdDod2gjDEHEcI0kSIjeSzu2pwK/RAZ5/XEFz+yk+/NyhdZWo/CyrVqvo9bqUONyDyzm4xnEcilxHN81NNAjXI1QUIZqD1et1bOmSpRacnHOcT6ewbRv2ZILJeExMdT4+O5utpetjTRAEkLqqIqzRaKDf789K0hddT7t0XTp8lZG1J+OC4HA0otI8LSqE+KscQ9bjYq8vCJbL5fxRjJBxZvB9n0TnUUr90zErlUq5oLlgXlpKeenXrwIJdrvdvIc8feXL3BUdFn+rhQ6NO3NhEaaHmdAiwT+vC5f86lNYPAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/b3092/jfrogapikey.png",srcSet:["/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/d6747/jfrogapikey.png 288w","/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/09548/jfrogapikey.png 576w","/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/b3092/jfrogapikey.png 784w"],sizes:"(max-width: 784px) 100vw, 784px",loading:"lazy"})),"\n    ")))),Object(r.b)("p",null,"Below, in the ",Object(r.b)("strong",{parentName:"p"},"Authentication Settings")," section, is the ",Object(r.b)("strong",{parentName:"p"},"Encrypted Password")," field."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press the ",Object(r.b)("strong",{parentName:"p"},"Eye")," icon to view the encrypted password and press the ",Object(r.b)("strong",{parentName:"p"},"Cut & Paste")," icon to copy it"),Object(r.b)(l,{mdxType:"ArtDirection"},Object(r.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"550px"}}),"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.454545454545446%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuElEQVQoz5WRiQqEMAxE+/+fKYi3iPc9yyukqMiyG3iQtE0607p93zWOo6Zp0jzPIs7z1HEct/wNC84YjoFFUSjLMuV5rjRNfQ1JkqiqKg3DoL7vA13Xib44jhVFURhKOBKUofAKqhlEvq6rlmXxWI7Ctm3VNM1NpWNj27Ybdtu/ESzXde0tYq8sS1+bujdQj0p6EcBasIxCe5crrNH4Bpdh3WoEMDy84TcL/+x5y89vv/LLmz3PfwCY9XOdnlac2wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/a9126a60fc81ab00711dd5e2212845b5/eb858/viewapikey.png",srcSet:["/ibm-garage-developer-guide/static/a9126a60fc81ab00711dd5e2212845b5/d6747/viewapikey.png 288w","/ibm-garage-developer-guide/static/a9126a60fc81ab00711dd5e2212845b5/eb858/viewapikey.png 550w"],sizes:"(max-width: 550px) 100vw, 550px",loading:"lazy"})),"\n    ")))),Object(r.b)("p",null,Object(r.b)("a",n({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/configuration/secret/#creating-a-secret-manually"}),"Kubernetes secrets"),"\nstore data in base64 format. So to store Artifactory’s encrypted password in a secret, it needs to be encoded into base64."),Object(r.b)("p",null,"Any base64 encoding tool will work. For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to the ",Object(r.b)("a",n({parentName:"p"},{href:"https://www.base64encode.org/"}),"Base64 Encode")," website")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Paste the encrypted password into the online tool and press the ",Object(r.b)("strong",{parentName:"p"},"Encode")," button")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the field below, copy the encoded value into you clipboard or store it somewhere safe"))),Object(r.b)("h3",{id:"update-the-kubernetes-secret"},"Update the Kubernetes secret"),Object(r.b)("p",null,"Store the base64 encrypted password for Artifactory in the Kubernetes secret for accessing Artifactory."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open your Development Tools environment’s Kubernetes Console or OpenShift Console")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Navigate to the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," namespace and ",Object(r.b)("inlineCode",{parentName:"p"},"secrets")," view")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Find the secret named ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory-access")," and open it in the Edit view"))),Object(r.b)(g,{mdxType:"Row"},Object(r.b)(d,{colMd:4,colLg:5,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)("h2",{id:"openshift"},"OpenShift"),Object(r.b)(l,{mdxType:"ArtDirection"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"593px"}},"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"130.86003372681284%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsSAAALEgHS3X78AAADRElEQVRIx6VVWZKbSBTU8XzDOcL8zAl8gYnwx4zD0rglgST2HQESi1hz8pWabmx3d9htIjJeAUVWvpWVGST46iTYuwlOQQrPdbHdbmFZFvI8x/l8RpZlCkmSKKRp+ipWLgkOhwNM04JJEtu2cTqdYBiGWjuOw3emWr9F9EQoH+i6DoMkx+NREckB8kwga03TlI3jWGFW+hJW86aACM8pEnGRqKoK5bUkrmpdlSUulwuuvJdQvIZVEAQqbjviJKfzo4wo2xY10XQdytsNNe2NVkjfulZBGEJIi/IKI01gUPYxifHge7QJTKrW+F5nfLW9hvVmoxLW8QC5pmn6BorQ9zzElPvZsfGFMV27Dv4xDaw1HV/WaxgksJgYcVdUlnR/GIYF4TOxSopk1UkKbFk2/zkhNm6EfZjhaAb4vNnB5P2Jzw+mD4Prg+Vjf7SxIww3RkmxRTPi0kz3GNpUsKfKreuxdByqmN0BxhHo+oEuDuhph2GkHdX61nZou17tGcZJ4U7IGivojpWdEVxzFHWJduDmsUM/degmWbfK3oZWoe27RSqm56T4vq+CfLs1zHCFr/oFGz3HwymD5dbQjw12eo2tVkE71NBOtMcaNt8l0Yg4BM7phEtOFFToU6HEsWCgHbZXWlTIK5ZH3aCpgDxhfM5AWdxB8ZjGO8TVvqerzM/4CEUoCpumUSXjhLz3XKpzULUkHW50ny62LPSq4L5q4eb0gsuPMexYxBGLVo8iaCS12ZcWYcYJgjBiS5oKZVl9V3/L0lExvBNe2V4mCWzPh77f3/v5oLENE0UgdScfvlTMy+cqKVI250d1Bgv9yANCqiqygb084WeumVQRukxKWTNzHAoOceK9zd7ebwNsH2y2pg/ZN0PGlEwWmZVipYN+UBgwwzZVrdlqFmejZN7zHSbsPhcF84xsGW9pwRnLvlYxlCF7YQz7vld9+p7ryWXplIixk1OXL0cW2dJ+v34NT4S3R8L5pPcovLtMwpCEUtizil/FNwM2iUKkUYCYVjImakOWjrJvIFrY5Z9x9cffBj78ucPHjQmPGXW957J4D1afdA9//WvhwXBZjzYkBDPhz/w2f/iNXrMUDcdJzlko0n+HTPA/qv27kQhTQ3YAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/02456/addkeytosecret.png",srcSet:["/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/d6747/addkeytosecret.png 288w","/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/09548/addkeytosecret.png 576w","/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/02456/addkeytosecret.png 593w"],sizes:"(max-width: 593px) 100vw, 593px",loading:"lazy"})),"\n    "))),Object(r.b)(d,{colMd:4,colLg:6,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(r.b)(l,{mdxType:"ArtDirection"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"692px"}},"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.71098265895954%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACy0lEQVQ4y6VVaXfaQAzk//+yJm36mqY5iAHbgG/jY9f3NZVkCKGhzYfC01ux3h0dMzIL3/ex3W7hOA7Yn6bpg332OR0ZxwmLoihQlqVYXdVXL4zT+GanIO/9c2ACrOsaWmu5WHUVQhUiKzMUTYG0TJFXOYZxEPs8UwJUSsF1XYzDiEhHePGW2EQmkiKBEa5gxhZ2yZ5sh+1hCzfz4KQO9umezJFznATf7YYOC85ut9sJYKACLAnQCFa4s7/j0XnEJjRxa37FzeYWq2ANjwC3R3A/9zEMA/qhF7CmbbDI8xy2bWOihiZU4iY24aYuwjxCrGM0XYOsyihYSC3IoGolphtNJIwXJYdhOAOapimAVVvhfncvYPvEkdLczIWqNNq+lUy4lxyk7mo0tHdSAa8XgByNDz+5z1Lyg/MLS/8VNpX27L3AiiwEeSD9NAJDVlWp64CsQ+5F27WSEbPLLHu5h7g4SN/4N1+a+9WzQv6g+F3J6/VaSIlVjHW4oXL3wlyiEilNGk5lctlNf175WU37Xd9JIM/3sMiyDJZlYehntphpzooJCfIQB/LzOpeV91keSZmIcQt4X9da+r/39jOguTGhtEKqU/zPJwqjIyCR0vc9Cdkg7T1h5a/hUC9Z5CJoMhYyk2PHNiIV4ZWI4eenSXojhQFZh9zUeVJeiN0lVjQlP0hCfNEhXXJ5EbWBy2OGWVIWgfNaNtVZhwxoGIZsWAdbpuKbdSey+bK5wc/9A9zEJbLWAsSMswquzfEbIMuGXxKcPpPBmXDTDzSnzCiTwRly46+9aT4Asmx0oUUqzHSsD8L2v9590xFEvtPsB0GARVVVSFKSgB9IhJMFYSAmPh1kYz+KyI5n2J/PB1B5hq6jtw2z+74Pc8RzGRdZkRPlA5Ewl5xqGlcaiDDOYdgHFGWFBaNeXp7++jfAa93y+M17XT+vddNCFY1k+Bv0zv6bfnQNJgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/a4ea4/kubeaddkeytosecret.png",srcSet:["/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/d6747/kubeaddkeytosecret.png 288w","/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/09548/kubeaddkeytosecret.png 576w","/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/a4ea4/kubeaddkeytosecret.png 692w"],sizes:"(max-width: 692px) 100vw, 692px",loading:"lazy"})),"\n    ")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Find the ",Object(r.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRPT")," value (under ",Object(r.b)("inlineCode",{parentName:"p"},"data"),") and paste in the Artifactory base64 key into the field")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press ",Object(r.b)("strong",{parentName:"p"},"Save")," in OpenShift Console or ",Object(r.b)("strong",{parentName:"p"},"Update")," in Kubernetes Dashboard")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"View the secret in the console and confirm that the visible value of ",Object(r.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRPT")," matches the encrypted password shown in the Artifactory console"))),Object(r.b)("h2",{id:"rerun-the-pipeline"},"Rerun the Pipeline"),Object(r.b)("p",null,"Previously, when you deployed you first app, the pipeline’s Package Helm Chart stage didn’t store the chart because\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRPT")," property was not set. Now that it is set, rerun your pipeline and check that the Helm chart for you app is stored correctly in Artifactory with matching semantic version information."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Artifactory console, select the Artifacts page and expand the ",Object(r.b)("inlineCode",{parentName:"p"},"generic-local")," repository"),Object(r.b)(l,{mdxType:"ArtDirection"},Object(r.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"461px"}}),"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.67895878524945%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACcUlEQVQ4y42SS08TURTH59tAQ0LaBQtrdKfBSJCAaDTo0hBXKvKQhxu/Q1vABYnEJrIykZf4ASQmtbVEZ8ZUwIpQ2pm203lPp3/uue00wEI8yS//c++ZOfecc69wO3kXN9/0497KCPqXBzCUvIP7Kw8wmBzGwNsh9C3fwrWlXlxfusHovRBhdP0xBt8NY2x9HNNbs3iy9gzPNybwdG2M+4/ejyK6cAXRxSaXAr+ll19fPYPQ96ofI4sPMfNpDrNbL/FicwZTG9OY+TjHDpjjSvukp33S6c1ZjH+YxMTqFMZXJxlTECLhCBYSCygVStj+vI10Kg35h4zM1wz3d77tIJvOQvouQmSkvqS4ZlIZ5H7m4DkeHMuBa7kcoaurC4lEApVKBbIkQ5Ik7O7tYv/3PrLZLERJhCRLnFwuB1mWOaIoIp/Pw3ZsGKYBw2giRCIRxGNxkKmWCs/3YOjNoN/wcZFRIbquo1QqoVwuQwiHw4jFYs2gXoFpmajVahzbtuF5Xhvf98/QaDTgOA6PkaqqCqGjo4O3TGZbNq9M0zSU2cnVapVXQB+SUoLzBFZnB/AKaYbz8/N802Sz0FllGktksDYIh83of6wRJAyFQki0Eio1A8WKhvzRMQ5LKvKFIg6KCo7ZXqHMqjUtaLbLcM7homraUKjlnp4exONx0PiLmsH5U1Tx6+CIs/v3CHuHBa7Hmg6V/agaFsM+g6KbzYSdnZ3tluv1ensulmXBNFojYDP1/fo/W/aDlqPRaPtSgpskpSBdiqIo/EIoKa0Damy+tdZh9GzaCbu7u9sJgwopSM/AdV1eKT0fWpOeXlOcfCJIeAJmGrbOjnlWHwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Artifact Repository Browser",title:"Artifact Repository Browser",src:"/ibm-garage-developer-guide/static/7cd9f3dbab5aeaaca46ee596e9e80f02/504c6/artifact-repo-browser.png",srcSet:["/ibm-garage-developer-guide/static/7cd9f3dbab5aeaaca46ee596e9e80f02/d6747/artifact-repo-browser.png 288w","/ibm-garage-developer-guide/static/7cd9f3dbab5aeaaca46ee596e9e80f02/504c6/artifact-repo-browser.png 461w"],sizes:"(max-width: 461px) 100vw, 461px",loading:"lazy"})),"\n    ")))),Object(r.b)("p",null,"You should see a folder named after your resource group containing the tar file for a Helm chart."),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"Artifactory is now set up in your Developer Tools environment and Jenkins pipelines can store Helm charts in Artifactory repository. "))}u.isMDXComponent=!0},428:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},429:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},430:function(e,t,a){"use strict";a(32),a(28);var r=a(1),i=a(428),n=a(0),o=a.n(n),c=a(105),s=a.n(c),p=a(195),b=a(127),l=a(3),g=a.n(l),d=a(384),m=function(e){var t,a=e.title,i=e.tabs,n=void 0===i?[]:i;return Object(r.b)("div",{className:g()(d.pageHeader,(t={},t[d.withTabs]=n.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},a)))))},A=a(429),u=a(385),h=function(e){var t=e.relativePagePath,a=e.repository,i=A.data.site.siteMetadata.repository,n=a||i,o=n.baseUrl,c=n.subDirectory,s=o+"/edit/"+n.branch+c+"/src/pages"+t;return o?Object(r.b)("div",{className:"bx--row "+u.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:u.link,href:s},"Edit this page on GitHub"))):null},f=a(193),y=(a(59),a(26)),j=a(386);var O=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=s()(e,{lower:!0}),o=n===i,c=new RegExp(i+"(?!-)"),p=a.replace(c,n);return Object(r.b)("li",{key:e,className:g()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(r.b)(y.Link,{className:j.link,to:""+p},e))}));return Object(r.b)("div",{className:j.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:j.list},n))))))},i}(o.a.Component),N=a(194);t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,c=t.frontmatter,l=void 0===c?{}:c,g=t.relativePagePath,d=t.titleType,A=l.tabs,u=l.title,y=l.theme,j=l.description,v=l.keywords,w=i.data.site.pathPrefix,k=w?n.pathname.replace(w,""):n.pathname,x=A?k.split("/").slice(-1)[0]||s()(A[0],{lower:!0}):"";return Object(r.b)(b.a,{homepage:!1,theme:y,pageTitle:u,pageDescription:j,pageKeywords:v,titleType:d},Object(r.b)(m,{title:o?Object(r.b)(o,null):u,label:"label",tabs:A}),A&&Object(r.b)(O,{slug:k,tabs:A,currentTab:x}),Object(r.b)(N.a,{padded:!0},a,Object(r.b)(h,{relativePagePath:g})),Object(r.b)(f.a,{pageContext:t,location:n,slug:k,tabs:A,currentTab:x}),Object(r.b)(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-artifactory-setup-index-mdx-66f5ce3360901b042864.js.map