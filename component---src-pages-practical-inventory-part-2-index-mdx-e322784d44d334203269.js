(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{420:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),i=a(434);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=c("PageDescription"),p=c("AnchorLinks"),b=c("AnchorLink"),s={_frontmatter:o},d=i.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(d,r({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"An example three tier application architecture you can build and have deployed in IBM Kubernetes service or IBM Red Hat OpenShift in less than an hour using the IBM Garage for Cloud Developer Tools and Starter Kit Templates.")),Object(n.b)(p,{mdxType:"AnchorLinks"},Object(n.b)(b,{to:"#inventory-service",mdxType:"AnchorLink"},"Using CD to deliver to Test"),Object(n.b)(b,{to:"#inventory-bff",mdxType:"AnchorLink"},"Securing the User Interface"),Object(n.b)(b,{to:"#Inventory UI",mdxType:"AnchorLink"},"Integrating with NoSQL Database")),Object(n.b)("h2",{id:"guide"},"Guide"),Object(n.b)("p",null,"This Micro App guidance continues to build upon the microserivces that were built in the ",Object(n.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/practical/inventory-part1"}),"Inventory Micro App Part 1")," guide. Make sure you have complete ",Object(n.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/practical/inventory-part1"}),"Part 1")," or deployed the working ",Object(n.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/practical/inventory-part1#solution-links"}),"Inventory Solution")),Object(n.b)("p",null,"Part 2 of the guide is a follow on from Part 2 and will concentrate on building out the following areas:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Delivering the solution images into the ",Object(n.b)("inlineCode",{parentName:"li"},"test")," namespace/project using CD techniques and ArgoCD"),Object(n.b)("li",{parentName:"ul"},"Enabling application security with ",Object(n.b)("strong",{parentName:"li"},"App ID")),Object(n.b)("li",{parentName:"ul"},"Adding ",Object(n.b)("strong",{parentName:"li"},"Cloudant")," database and populating it with data")),Object(n.b)("h3",{id:"using-cd-to-deliver-to-test"},"Using CD to deliver to Test"),Object(n.b)("h3",{id:"securing-the-solution-with-app-id"},"Securing the solution with ",Object(n.b)("strong",{parentName:"h3"},"App ID")),Object(n.b)("h4",{id:"user-interface"},"User Interface"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Update the ",Object(n.b)("inlineCode",{parentName:"li"},"values.yaml")," file in the chart to set ",Object(n.b)("inlineCode",{parentName:"li"},"ingress.appId.enabled=true")," and to set the value for the AppId binding secret")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml",metastring:"path=/chart/template-java-spring/values.yaml",path:"/chart/template-java-spring/values.yaml"}),'...\nappidBinding: "binding-sms-test-oc-appid"\n\ningress:\n  enabled: true\n  appid:\n    enabled: true\n    # web or app - https://cloud.ibm.com/docs/services/appid?topic=appid-kube-auth\n    requestType: web\n    ...\n')),Object(n.b)("h4",{id:"appid-redirect-url-config"},"AppId redirect url config"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"When the UI application is available, navigate to the https url. An error page should be displayed that looks like the\nfollowing:\n",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.914780292942744%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABeklEQVQ4y41S266CMBD0/7/NBxN9M6KAotyRSxEozNmpVjnxeGKTyW53YbI708UEOU0DnedQXQ+lWoP2dkPfD5im6WvwLEyIQujjEUlZIctyxGmGLC+g2hbfHku64KXTGllZIoljIcyQJAnqusL1ekWapjifz4ilx5y9KIpMTrDOmj2GsKlrOLsdXM9DEATwfB++TByGIY4SPamT1Jf66XQy9cvlYr5lnZGkfd8/CEXDw+HwbHoPYv7IGnu8u65rYtd1uInGc7QizziOd0JeOMl+v39OYkFyfvjtMYTDMBjt5jpZreKHrsxZY5859Z2b8csUEs6JSGB/LMUsrqSUMpHr2twSvk1YFAVWqxU2m43BdrvFer3Gcrk0UlA7rs6ccBzHyPSRkO6QNJfHzUjU4rzN6SxdJazL83XfCLW8QzpNVFVlyDgB71yPa1MzkjNn/19C6mF1owkWvHMqxqyQR94MKNTwIvvkMpuccg4adY+vXOsRg8BO9deEP2Sf6VNBzZtrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId redirect error",title:"AppId redirect error",src:"/ibm-garage-developer-guide/static/df93eb5b82f316d7292a507cfd105cb9/fb070/appid-redirect-error.png",srcSet:["/ibm-garage-developer-guide/static/df93eb5b82f316d7292a507cfd105cb9/d6747/appid-redirect-error.png 288w","/ibm-garage-developer-guide/static/df93eb5b82f316d7292a507cfd105cb9/09548/appid-redirect-error.png 576w","/ibm-garage-developer-guide/static/df93eb5b82f316d7292a507cfd105cb9/fb070/appid-redirect-error.png 1152w","/ibm-garage-developer-guide/static/df93eb5b82f316d7292a507cfd105cb9/96fa6/appid-redirect-error.png 1502w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The url for the error page will look like the following:"),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"https://us-south.appid.cloud.ibm.com/oauth/v4/25d16cda-8899-46fa-a5ae-9818f93dd1d3/authorization?client_id=0351c750-a3f0-4b8c-818b-d14558f9dfb9&response_type=code&redirect_uri=https://inventory-manangement-ui-dev.sms-test-oc-cluster.us-east.containers.appdomain.cloud/appid_callback&scope=appid_default")),Object(n.b)("p",{parentName:"li"},"Get the value of the ",Object(n.b)("inlineCode",{parentName:"p"},"redirect_url")," parameter.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Open the IBM Cloud resource list - ",Object(n.b)("inlineCode",{parentName:"p"},"https://cloud.ibm.com/resources"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Open the AppId instance to the ",Object(n.b)("inlineCode",{parentName:"p"},"Manage Authentication")," -> ",Object(n.b)("inlineCode",{parentName:"p"},"Authentication Settings")),Object(n.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.48697916666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAx0lEQVQY042RWYpEIQxF3f/qagEN/VdFvcE5xud02wjdXwX9hENEw4mJyriIyAW9d5yBoa0HEcGHiForWusYY9xGHcYhUEIfQEwZISYkzqDEK0oxkbaZ0Nr/KG0tmBmlduynx2s3eB9uYqEdIeU6C5XbqFMb5Otawm0KDxOw6YTvp1tRhMT3CCIMMaKUMoVjzi/g+d5hXICPvJC2E18fyOB8/d3Lfsx/UDJIWfJC6wnboXHOuYpUWpa5/go+yWme5VxW7uNrxw8Mn9KA5JHBqgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId authentication settings",title:"AppId authentication settings",src:"/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/fb070/appid-authentication-settings.png",srcSet:["/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/d6747/appid-authentication-settings.png 288w","/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/09548/appid-authentication-settings.png 576w","/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/fb070/appid-authentication-settings.png 1152w","/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/fb104/appid-authentication-settings.png 1728w","/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/902fb/appid-authentication-settings.png 2304w","/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/5ef74/appid-authentication-settings.png 3072w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add the ",Object(n.b)("inlineCode",{parentName:"p"},"redirect_url")," to the web redirect URLs"))),Object(n.b)("h4",{id:"add-users-to-appid"},"Add users to AppId"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Open the AppId instance to ",Object(n.b)("inlineCode",{parentName:"p"},"Cloud Directory")," -> ",Object(n.b)("inlineCode",{parentName:"p"},"Users")),Object(n.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.853264382676144%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABLUlEQVQoz41RWU7DUAzM/W/CJeAGnACEEIUWlTRv35Nh7AjUDyrxMfFzxh5v02IsQkzYtg2zz1isR0wJPkSMMTDWDSTBz78wOe+RS8HKpJAKXEiIubBIVj/kjj5Wim9/QrhrTCFGCFpf8XXxOJ4XnM4GZ75DauQqHOFvQGNSRyqdjXVMi3Eq2Fnt/XPG8+sHXt6OOJxmWK7AuLRD37tvdTVR8SN6sQVnkzFZn6hckWsnUSF+pK1tReK42h0TfNwhybtftcBCuJBx/3jA3cOTdGiZmHVkIRyPMS9W9yc7MS6g1AbnoyKXxtUYCmZ05hQ2YnjI2oY2Nc2L0aOIoI9FA0XE8zgS1PpQTt7qq+W+WES4lKseUP4JP1lH9VrVkXEix4x5qN0Xfgv9117HfgPDfmzKObgiOQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId cloud directory users",title:"AppId cloud directory users",src:"/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/fb070/appid-cloud-directory-users.png",srcSet:["/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/d6747/appid-cloud-directory-users.png 288w","/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/09548/appid-cloud-directory-users.png 576w","/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/fb070/appid-cloud-directory-users.png 1152w","/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/fb104/appid-cloud-directory-users.png 1728w","/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/902fb/appid-cloud-directory-users.png 2304w","/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/68585/appid-cloud-directory-users.png 3094w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add users"))),Object(n.b)("h3",{id:"integrating-with-nosql-database"},"Integrating with NoSQL Database"),Object(n.b)("p",null,"The initial setup"),Object(n.b)("p",null,"This exercise will Create a Cloud Native NoSQL Database and populate it with data. You will then access the data through a Spring Boot micro service REST API."),Object(n.b)("p",null," \t- Create the Database instance\n- Populate it with sample data"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"While logged into the IBM Cloud account use the resource list to find your pre installed Cloudant datbase instance.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the database instance dashboard.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"After the create is successful, you will see the Database instance Manage view.  From here you can click on the Launch button to access the database management views. We now need to configure the command line so you can upload data.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the Service Credentials on the left-hand menu.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If there are no credentials created, click ",Object(n.b)("em",{parentName:"p"},"New Credentials")," button and in the dialog click ",Object(n.b)("em",{parentName:"p"},"Add"),". These control the access to the database. Are the credentials have been created you should see a screen similar to the one below."))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open a command prompt and create a folder/directory called ",Object(n.b)("inlineCode",{parentName:"li"},"data"))),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"mkdir data\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To help create test JSON data we are going to supply a template to the JSON Generator tool, this helps when creating dummy data for testing. Navigate to the following link.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"https://next.json-generator.com"}),"https://next.json-generator.com"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Replace the default template with the following template (using cut and paste). This will enable a 100 records of test data to be created to represent a products database. Click on the ",Object(n.b)("em",{parentName:"p"},"Generate")," button."))),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"[\n  {\n    'repeat(1, 100)': {\n      name: '{{lorem(2, \"words\")}}',\n      guid: '{{guid()}}',\n      delivered: '{{bool()}}'\n    }\n  }\n]\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Copy the generated contents on the right hand side into a file called ",Object(n.b)("inlineCode",{parentName:"li"},"inventory.json")," and save it into the same folder. Wrap the array with a docs statement.")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "docs": {Add Generated array []}\n}\n')),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Save the documents that will be loaded into Cloudant")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Using a code editor create a shell script called ",Object(n.b)("inlineCode",{parentName:"p"},"load.sh")," that will load data into the database using a ",Object(n.b)("inlineCode",{parentName:"p"},"curl")," command. Use the contents from below for the script."))),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),'#!/bin/sh\n# Cloudant Database Data Load Utility\n\n# Credentials from IBM Cloud\nCLOUDANT_USERNAME=\nCLOUDANT_PASSWORD=\n\n# name of database\nDATABASE=inventor-{initials}\n\n# input validation\nif [ -z "${CLOUDANT_USERNAME}" ]; then\n    echo "Please provide your CLOUDANT_USERNAME."\n    exit\nfi\nif [ -z "${CLOUDANT_PASSWORD}" ]; then\n    echo "Please provide your CLOUDANT_PASSWORD."\n    exit\nfi\n\n# credentials to post data to cloudant\nAUTH=$(echo "${CLOUDANT_USERNAME}:${CLOUDANT_PASSWORD}" | base64)\nACURL="curl -s --proto \'=https\' -iv -g -H \'Authorization: Basic ${AUTH}\'"\nHOST="https://${CLOUDANT_USERNAME}.cloudant.com"\n\n# Inventory\neval ${ACURL} -X DELETE \'${HOST}/${DATABASE}\'\neval ${ACURL} -X PUT \'${HOST}/${DATABASE}\'\neval ${ACURL} -H "Content-Type:application/json" -d @inventory.json -vX POST \'${HOST}/${DATABASE}/_bulk_docs\'\n')),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Replace the {CLOUDANT_USERNAME} and {CLOUDANT_PASSWORD} fields with values from the Credentials section of the Cloudant instance in the dashboard."),Object(n.b)("li",{parentName:"ul"},"Add database name ",Object(n.b)("inlineCode",{parentName:"li"},"inventor-{initials}")," using the initials that you have used before."),Object(n.b)("li",{parentName:"ul"},"Save the script, make it executable, and then run it.")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"chmod +x ./load.sh\n./load.sh\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The data from the ",Object(n.b)("inlineCode",{parentName:"p"},"inventory.json")," file will then be used to populate the database, to confirm this on the Dashboard click on Manage menu on the left and then Launch  button to see the Cloudant dashboard.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the Left icon that looks like a Database and you will see the products database created.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the products database itself.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can see the rows of data")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If you click on a row of data, you will see the raw NoSQL form of the data record.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"This completes the setup of the database and populating it with data. We will be now moving onto creating a Spring Micro service that then uses this database to display Product details."))),Object(n.b)("p",null,"This completes the data load activities."),Object(n.b)("h3",{id:"add-a-cloudant-integration-to-your-backend-service"},"Add a Cloudant integration to your backend service"),Object(n.b)("h4",{id:"update-the-gradle-config-to-include-cloudant-dependencies"},"Update the gradle config to include cloudant dependencies"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add ",Object(n.b)("inlineCode",{parentName:"p"},"build-services.gradle")," to the gradle folder"),Object(n.b)("p",{parentName:"li"},"gradle/build-services.gradle"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"dependencies {\n    compile group: 'com.cloudant', name: 'cloudant-client', version: '2.17.0'\n    compile group: 'com.jayway.jsonpath', name: 'json-path', version: '2.4.0'\n    compile group: 'javax.xml.bind', name: 'jaxb-api', version: '2.1'\n    compile group: 'joda-time', name: 'joda-time', version: '2.10.3'\n}\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Apply build-services.gradle to build.gradle"),Object(n.b)("p",{parentName:"li"},"build.gradle"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"...\napply from:   'gradle/build-services.gradle'\n...\n")))),Object(n.b)("h4",{id:"add-configuration-values"},"Add configuration values"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add CloudantConfig to hold the url, username, password, and databaseName values"),Object(n.b)("p",{parentName:"li"},"com.ibm.inventory_management.config.CloudantConfig"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),'package com.ibm.inventory_management.config;\n\nimport com.fasterxml.jackson.annotation.JsonIgnoreProperties;\n\n@JsonIgnoreProperties(ignoreUnknown = true)\npublic class CloudantConfig {\n    private String url;\n    private String username;\n    private String password;\n    private String databaseName;\n\n    public String getUrl() {\n        return url;\n    }\n\n    public void setUrl(String url) {\n        this.url = url;\n    }\n\n    public CloudantConfig withUrl(String url) {\n        this.setUrl(url);\n\n        return this;\n    }\n\n    public String getUsername() {\n        return username;\n    }\n\n    public void setUsername(String username) {\n        this.username = username;\n    }\n\n    public CloudantConfig withUsername(String username) {\n        this.setUsername(username);\n\n        return this;\n    }\n\n    public String getPassword() {\n        return password;\n    }\n\n    public void setPassword(String password) {\n        this.password = password;\n    }\n\n    public CloudantConfig withPassword(String password) {\n        this.setPassword(password);\n\n        return this;\n    }\n\n    public String getDatabaseName() {\n        return databaseName;\n    }\n\n    public void setDatabaseName(String databaseName) {\n        this.databaseName = databaseName;\n    }\n\n    public CloudantConfig withDatabaseName(String databaseName) {\n        this.setDatabaseName(databaseName);\n\n        return this;\n    }\n\n    public String toString() {\n        return "[CloudantConfig: url=" + this.url + ", username=" + this.username + ", name=" + this.databaseName + "]";\n    }\n}\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Implement logic to load the configuration from the secret binding or local file"),Object(n.b)("p",{parentName:"li"},"com.ibm.inventory_management.config.CloudantMapping"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),'package com.ibm.inventory_management.config;\n\nimport java.io.Serializable;\n\nimport com.fasterxml.jackson.annotation.JsonProperty;\n\npublic class CloudantMapping implements Serializable {\n    @JsonProperty(value = "CLOUDANT_CONFIG")\n    private String cloudantConfig;\n\n    public String getCloudantConfig() {\n        return cloudantConfig;\n    }\n\n    public void setCloudantConfig(String cloudantConfig) {\n        this.cloudantConfig = cloudantConfig;\n    }\n}\n')),Object(n.b)("p",{parentName:"li"},"com.ibm.inventory_management.config.CloudantConfigFactory"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),'package com.ibm.inventory_management.config;\n\nimport java.io.IOException;\n\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class CloudantConfigFactory {\n    @Bean\n    public CloudantConfig buildCloudantConfig() throws IOException {\n        return buildConfigFromBinding(\n                loadCloudantConfig(),\n                loadDatabaseName()\n        );\n    }\n\n    protected String loadCloudantConfig() throws IOException {\n        return System.getProperty("CLOUDANT_CONFIG") != null\n                ? System.getProperty("CLOUDANT_CONFIG")\n                : loadCloudantConfigFromLocalDev();\n    }\n\n    protected String loadCloudantConfigFromLocalDev() throws IOException {\n        final ObjectMapper mapper = new ObjectMapper();\n\n        final CloudantMapping mappings = mapper.readValue(\n                this.getClass().getClassLoader().getResourceAsStream("mappings.json"),\n                CloudantMapping.class\n        );\n\n        return mappings.getCloudantConfig();\n    }\n\n    protected String loadDatabaseName() {\n        return System.getProperty("DATABASE_NAME") != null\n                ? System.getProperty("DATABASE_NAME")\n                : "stock-items";\n    }\n\n    protected CloudantConfig buildConfigFromBinding(String binding, String databaseName) throws IOException {\n        final ObjectMapper mapper = new ObjectMapper();\n\n        return mapper.readValue(binding, CloudantConfig.class)\n                .withDatabaseName(databaseName);\n    }\n}\n')))),Object(n.b)("h4",{id:"set-up-local-development"},"Set up local development"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log into cloud.ibm.com and open the Cloudant service from the resource list")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click on service credentials and expand the listed credentials")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Copy the json contents from the credentials into ",Object(n.b)("inlineCode",{parentName:"p"},"mappings.json")," under CLOUDANT_CONFIG"),Object(n.b)("p",{parentName:"li"},"src/main/resources/mappings.json"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),'{\n  "CLOUDANT_CONFIG": "{paste json here}"\n}\n')))),Object(n.b)("h4",{id:"implement-the-service"},"Implement the service"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add a CloudantApi component to create the CloudantClient instance from the configuration"),Object(n.b)("p",{parentName:"li"},"com.ibm.inventory_management.service.CloudServicesException"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),"package com.ibm.inventory_management.service;\n\npublic class CloudServicesException extends Exception {\n    public CloudServicesException() {\n    }\n\n    public CloudServicesException(String message) {\n        super(message);\n    }\n\n    public CloudServicesException(String message, Throwable cause) {\n        super(message, cause);\n    }\n\n    public CloudServicesException(Throwable cause) {\n        super(cause);\n    }\n\n    public CloudServicesException(\n            String message,\n            Throwable cause,\n            boolean enableSuppression,\n            boolean writableStackTrace\n    ) {\n        super(message, cause, enableSuppression, writableStackTrace);\n    }\n}\n")),Object(n.b)("p",{parentName:"li"},"com.ibm.inventory_management.service.CloudantApi"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),'package com.ibm.inventory_management.service;\n\nimport java.net.MalformedURLException;\nimport java.net.URL;\n\nimport com.cloudant.client.api.ClientBuilder;\nimport com.cloudant.client.api.CloudantClient;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.stereotype.Component;\n\nimport com.ibm.inventory_management.config.CloudantConfig;\n\n@Component\npublic class CloudantApi {\n    @Bean\n    public CloudantClient buildCloudant(CloudantConfig config) throws CloudServicesException {\n        System.out.println("Config: " + config);\n        URL url = null;\n        try {\n            url = new URL(config.getUrl());\n        } catch (MalformedURLException e) {\n            throw new CloudServicesException("Invalid service URL specified", e);\n        }\n\n        return ClientBuilder\n                .url(url)\n                .username(config.getUsername())\n                .password(config.getPassword())\n                .build();\n    }\n}\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add the service implementation"),Object(n.b)("p",{parentName:"li"},"com.ibm.inventory_management.service.StockItemService"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),'package com.ibm.inventory_management.service;\n\nimport java.io.IOException;\nimport java.util.List;\nimport javax.annotation.PostConstruct;\n\nimport com.cloudant.client.api.CloudantClient;\nimport com.cloudant.client.api.Database;\nimport org.springframework.context.annotation.Primary;\nimport org.springframework.stereotype.Service;\n\nimport com.ibm.inventory_management.config.CloudantConfig;\nimport com.ibm.inventory_management.model.StockItem;\n\n@Service\n@Primary\npublic class StockItemService implements StockItemApi {\n    private CloudantConfig config;\n    private CloudantClient client;\n    private Database db = null;\n\n    public StockItemService(CloudantConfig config, CloudantClient client) {\n        this.config = config;\n        this.client = client;\n    }\n\n    @PostConstruct\n    public void init() {\n        db = client.database(config.getDatabaseName(), true);\n    }\n\n    @Override\n    public List<StockItem> listStockItems() throws Exception {\n\n        try {\n            return db.getAllDocsRequestBuilder()\n                    .includeDocs(true)\n                    .build()\n                    .getResponse()\n                    .getDocsAs(StockItem.class);\n\n        } catch (IOException e) {\n            throw new Exception("", e);\n        }\n    }\n}\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Remove the ",Object(n.b)("inlineCode",{parentName:"p"},"@Primary")," annotation from the mock service"))),Object(n.b)("h4",{id:"add-the-values-to-the-helm-chart"},"Add the values to the helm chart"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Update the ",Object(n.b)("inlineCode",{parentName:"p"},"cloudantBinding")," and ",Object(n.b)("inlineCode",{parentName:"p"},"databaseName")," values in values.yaml"),Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Note:")," The cloudantBinding value should match the name of the cloudant binding secret"))),Object(n.b)("h2",{id:"summary"},"Summary"),Object(n.b)("p",null,"You have now completed the Micro App Guide demonstrating the ",Object(n.b)("em",{parentName:"p"},"Inventory")," solution."),Object(n.b)("h2",{id:"solution-links"},"Solution Links"),Object(n.b)("p",null,"If you want to skip the guide and just get the components running, here are the solution Git Repositories. You can clone these and ",Object(n.b)("inlineCode",{parentName:"p"},"igc pipeline")," them to register them in the CI pipeline. The ",Object(n.b)("strong",{parentName:"p"},"README.md")," may include additional setup for populating test data etc."),Object(n.b)(p,{mdxType:"AnchorLinks"},Object(n.b)(b,{to:"https://github.com/ibm-garage-cloud/inventory-management-ui",mdxType:"AnchorLink"},"Inventory Management User Interface"),Object(n.b)(b,{to:"https://github.com/ibm-garage-cloud/inventory-management-bff",mdxType:"AnchorLink"},"Inventory Management Backend for Frontend"),Object(n.b)(b,{to:"https://github.com/ibm-garage-cloud/inventory-management-service",mdxType:"AnchorLink"},"Inventory Management Microservice")))}m.isMDXComponent=!0},432:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},433:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},434:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(432),r=a(0),o=a.n(r),c=a(105),l=a.n(c),p=a(195),b=a(127),s=a(3),d=a.n(s),m=a(384),u=function(e){var t,a=e.title,i=e.tabs,r=void 0===i?[]:i;return Object(n.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},g=a(433),h=a(385),O=function(e){var t=e.relativePagePath,a=e.repository,i=g.data.site.siteMetadata.repository,r=a||i,o=r.baseUrl,c=r.subDirectory,l=o+"/edit/"+r.branch+c+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},j=a(193),N=(a(59),a(26)),f=a(386);var v=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),o=r===i,c=new RegExp(i+"(?!-)"),p=a.replace(c,r);return Object(n.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(n.b)(N.Link,{className:f.link,to:""+p},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},r))))))},i}(o.a.Component),A=a(194);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,c=t.frontmatter,s=void 0===c?{}:c,d=t.relativePagePath,m=t.titleType,g=s.tabs,h=s.title,N=s.theme,f=s.description,C=s.keywords,y=i.data.site.pathPrefix,w=y?r.pathname.replace(y,""):r.pathname,S=g?w.split("/").slice(-1)[0]||l()(g[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:N,pageTitle:h,pageDescription:f,pageKeywords:C,titleType:m},Object(n.b)(u,{title:o?Object(n.b)(o,null):h,label:"label",tabs:g}),g&&Object(n.b)(v,{slug:w,tabs:g,currentTab:S}),Object(n.b)(A.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:d})),Object(n.b)(j.a,{pageContext:t,location:r,slug:w,tabs:g,currentTab:S}),Object(n.b)(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-practical-inventory-part-2-index-mdx-e322784d44d334203269.js.map