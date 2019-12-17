(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{401:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return g}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(108),r=a(448);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=l("Tabs"),c=l("Tab"),b=l("PageDescription"),p=l("InlineNotification"),u=l("AnchorLinks"),m=l("AnchorLink"),d={_frontmatter:o},h=r.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(h,i({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"Tabs"},Object(n.b)(c,{label:"Prerequisites",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Prepare to run Terraform to create a new cluster and install the Developer Tools")),Object(n.b)("p",null,"The IBM Garage for Cloud Developer Tools facilitate development and deployment of cloud-native applications.\nThey can be hosted in any Kubernetes or OpenShift cluster, including those managed by the IBM Cloud."),Object(n.b)("p",null,"In IBM Cloud, the cluster is hosted by either the ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers"}),"IBM Cloud Kubernetes Service")," or\n",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/openshift"}),"Red Hat OpenShift on IBM Cloud"),".\nThese instructions explain how to configure and run the Terraform infrastructure-as-code (IasC) scripts\nto create the Developer Tools environment."),Object(n.b)("p",null,"The following prerequisites are required before following the setup instructions:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"An IBM Cloud account with:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"the ability to provision resources including support for provisioning ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/kubernetes/clusters"}),"Kubernetes")," and ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/kubernetes/clusters?platformType=openshift"}),"OpenShift")," clusters."),Object(n.b)("li",{parentName:"ul"},"the ability to create a ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/account/resource-groups"}),"Resource Group")," for your development resources and admin rights to this resource group"),Object(n.b)("li",{parentName:"ul"},"a region and zone containing ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/classic/network/vlans"}),"a pair of public and private VLANs"))))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Install the ",Object(n.b)("a",i({parentName:"li"},{href:"/ibm-garage-developer-guide/getting-started/prereqs"}),"Prerequisites")," listed before continuing"))),Object(n.b)(c,{label:"Download",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Obtain the Terraform infrastructure-as-code (IasC) scripts that will create the tools environment")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Clone the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Switch to the cloned directory"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd ibm-garage-iteration-zero\n"))))),Object(n.b)(c,{label:"API keys",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Configure the keys the CLI uses to authenticate")),Object(n.b)("p",null,"A Kubernetes or OpenShift cluster is a PaaS resource hosted on top IaaS resources.\nAPI keys authenticate an ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli",title:"IBM Cloud CLI and Developer Tools"}),"IBM Cloud CLI"),"\nclient—such as a Terraform script—to create these resources programmatically. Two keys will be needed:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The first key authorizes creating Classic Infrastructure (IaaS) resources"),Object(n.b)("li",{parentName:"ul"},"The second key authorizes creating IBM Cloud (PaaS) resources")),Object(n.b)("p",null,"The following steps create the required keys and put them into a file called ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties"),"."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"classic.username=<CLASSIC_USERNAME>\nclassic.api.key=<CLASSIC_API_KEY>\nibmcloud.api.key=<IBMCLOUD_API_KEY>\n")),Object(n.b)("p",null,"The installation scripts will use these keys to authenticate to IBM Cloud."),Object(n.b)("h3",{id:"step-a-create-the-credentialsproperties-file"},"Step A. Create the credentials.properties file"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Inside the ",Object(n.b)("inlineCode",{parentName:"li"},"iteration-zero-ibmcloud")," folder, copy ",Object(n.b)("inlineCode",{parentName:"li"},"credentials.template")," to a file named ",Object(n.b)("inlineCode",{parentName:"li"},"credentials.properties"),".",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd iteration-zero-ibmcloud\ncp credentials.template credentials.properties\n")))),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," file is already listed in the ",Object(n.b)("inlineCode",{parentName:"p"},".gitignore")," file so that the file containing\nyour private API keys will not be pushed to the server repository."),Object(n.b)("h3",{id:"step-b-set-the-classic-infrastructure-api-key"},"Step B. Set the Classic infrastructure API key"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Follow these instructions to ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-classic_keys",title:"Managing classic infrastructure API keys"}),"create a Classic infrastructure API key"),":"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the IBM Cloud console, go to the IBM Cloud API Keys page"),Object(n.b)("p",{parentName:"li"},"To open the IBM Cloud API Keys page, select ",Object(n.b)("strong",{parentName:"p"},"Manage -> Access (IAM)"),", then select the ",Object(n.b)("strong",{parentName:"p"},"IBM Cloud API keys")," tab.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If your account already has a classic infrastructure API key, it will appear in the list of keys as ",Object(n.b)("strong",{parentName:"p"},"Classic infrastructure API key"),". Otherwise, the page will have a ",Object(n.b)("strong",{parentName:"p"},"Create a classic infrastructure API key")," button on the top. To crate the key, press that button and close the dialog."),Object(n.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"968px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.42148760330579%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQY043Mu07DMBSA4TwtEojLwguwsDAgcRtYGZB4DNRWLAixchEoSqvUxnFckjhx2vycpAIWBix95z86g6NUaWzu0CYb5G7Bf1/XdQPZMJmlKEsik39iXUEm+r1v6QNVHaQNvgnUTSt++31rlyuC6LuSf5cyopm2JHPDTFmmKhuapOanb1PNS6x4ek95Tdb7czwnTi3a1ajcr9mKD+eJCt/yl1IsqsDh9QMbx7fsnI/FhK3TEfuXdxxc3bN5MmJX7ttnY/YuJhzdPPIFqJUn7NcaI6oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"API Keys",title:"API Keys",src:"/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/cfe9c/apikeys.png",srcSet:["/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/d6747/apikeys.png 288w","/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/09548/apikeys.png 576w","/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/cfe9c/apikeys.png 968w"],sizes:"(max-width: 968px) 100vw, 968px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Find ",Object(n.b)("strong",{parentName:"p"},"Classic infrastructure API key")," in the list and open its details."),Object(n.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"608px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.77631578947368%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABsElEQVQ4y42Ti26rMAyG+/7Pd6bR9bJ2BRISoNBwTUj+44RTymGatEif4jjC/m2cXSwbpEULVnaB/+0Xs6/fnDskeUs0+BIKV15hB1qT0ej7DnocYCeDYegxkm30CE34e+9rGhV8/jwOQ/jG2QnPZbSeA3bDiCSTuDGB8qGQihwxF8iKO3heBrwt7zWYLCDonLAMt4RBNe0SUGuDnXPOSwQcZfLZvE0KSC4x/NvXkM9ZrFeIEQJ6hRRARX/Ao3dU5wOKwx6GJ0ApgCKDk3wDg0uvIciaENCQQp+1OB/xwSQuXOKQcORNB6WnwFOLW+1OpFTJNNvfApJCc4rQnz/QHiM89m+oSXFFeNvePoHkAkeEPaZz+jUn2CoMJVPf+tMeefQGk1ypTA7kjOAzXk1GLeAxHAF2m32r3j31LyXfP0/YxwyiqkG/A/1kMVi3MLpNyT6BfZU82U3AKb5gqCt0hYQS2YzMFruRAo5mEK2Ca5tZ7aKOBIzmVXK4eFT0VyVQFT9D967MqSUUvJtnb7IWqtM0x2al8FnGL8DGNtSaoqYX1OvXYGMzTz+BDeuS1y/lLzUf8FmtiQsfAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Classic Keys",title:"Classic Keys",src:"/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/0bd43/classickeys.png",srcSet:["/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/d6747/classickeys.png 288w","/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/09548/classickeys.png 576w","/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/0bd43/classickeys.png 608w"],sizes:"(max-width: 608px) 100vw, 608px",loading:"lazy"})),"\n    ")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the values for the ",Object(n.b)("inlineCode",{parentName:"p"},"classic.username")," and ",Object(n.b)("inlineCode",{parentName:"p"},"classic.api.key")," properties."))),Object(n.b)("h3",{id:"step-c-set-the-ibm-cloud-api-key"},"Step C. Set the IBM Cloud API key"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Follow these instructions to create an IBM Cloud API key:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey",title:"Managing user API keys"}),"Managing user API keys")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the value for the ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property.")))),Object(n.b)(c,{label:"Configuration",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Configure the properties describing your environment")),Object(n.b)("h3",{id:"configuring-properties-files"},"Configuring Properties files"),Object(n.b)("p",null,"The settings for creating the Developer Tools environment go in two properties files\nin the ",Object(n.b)("inlineCode",{parentName:"p"},"./terraform/settings")," directory:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"environment.tfvars")," — Properties for installing the Developer Tools"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"vlan.tfvars")," — Properties for creating the cluster")),Object(n.b)("p",null,"The next few steps will find the necessary resources and set them in the ",Object(n.b)("inlineCode",{parentName:"p"},"tfvars")," files.\nAlong the way, if any of these resources don’t already exist, you’ll need to create them.\nThere is a tool for optionally generating the VLAN variables. "),Object(n.b)("h3",{id:"environment-variables"},"Environment variables"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"environment.tfvars")," properties will be used to install the Development Tools."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Typical values look like this:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'# The type of cluster that will be created/used (kubernetes or openshift)\ncluster_type="kubernetes"\n# Flag indicating if we are using an existing cluster or creating a new one\ncluster_exists="false"\n\n# The cluster name can be provided (particularly if using existing cluster) or it will\n# default to \'${resource_group_name}-cluster\'\ncluster_name="catalyst-team-cluster"\n\nresource_group_name="catalyst-team"\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In ",Object(n.b)("inlineCode",{parentName:"p"},"environment.tfvars"),", you must set ",Object(n.b)("inlineCode",{parentName:"p"},"resource_group_name")," and ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_name"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set the ",Object(n.b)("inlineCode",{parentName:"p"},"resource_group_name")," property to specify the resource group for the environment’s resources.\nThis resource group enables all of the resources to work together\nand will help distinguish the Developer Tools resources from the other resources in the same IBM Cloud account.\nThe resource group can be a new one—see the instructions below."))),Object(n.b)("p",null,"The others have reasonable defaults that you can change if desired: "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Set ",Object(n.b)("inlineCode",{parentName:"li"},"cluster_type")," to specify whether the cluster is ",Object(n.b)("strong",{parentName:"li"},"kubernetes")," or ",Object(n.b)("strong",{parentName:"li"},"openshift"),"."),Object(n.b)("li",{parentName:"ul"},"Set ",Object(n.b)("inlineCode",{parentName:"li"},"postgres_server_exists")," to specify that the existing cluster already has a PostgreSQL service instance.")),Object(n.b)(p,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Note: ",Object(n.b)("strong",{parentName:"p"},"PostgreSQL")," can take some time to provision, so in some cases it is worth manually creating an instance. It needs\nto be in the same region and names ",Object(n.b)("inlineCode",{parentName:"p"},"<resource-group>-postgresql"),".")),Object(n.b)("h3",{id:"resource-group"},"Resource group"),Object(n.b)("p",null,"The Developer Tools environment needs to be organized in a resource group.\nThe environment consists of several IBM Cloud resources—a Kubernetes or OpenShift cluster,\nsome cloud service instances, etc.\n",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam",title:"Managing identity and access"}),"IBM Cloud Identity and Access Management"),"\nmanages access to resources by organizing them into resource groups, so that one access policy can easily be applied\nto all of the resources in a group."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Either choose a resource group that already exists in your account or create a new one. To create a resource group:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/resources?topic=resources-rgs#create_rgs",title:"Creating and managing resource groups"}),"Creating a resource group"))))),Object(n.b)("h3",{id:"cluster-name"},"Cluster name"),Object(n.b)("p",null,"The heart of the Developer Tools environment is a cluster, either Kubernetes or OpenShift (as specified in the ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_type")," property).\nIn ",Object(n.b)("inlineCode",{parentName:"p"},"environment.tfvars"),", set the ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_name")," property to any valid cluster name that is not already in use."),Object(n.b)(p,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Note: You can leave the ",Object(n.b)("inlineCode",{parentName:"p"},"customer_name")," property commented out and Terraform will auto generate a name for you")),Object(n.b)("h3",{id:"vlans"},"VLANs"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"vlan.tfvars")," properties will be used to create the cluster that the Developer Tools will be installed into."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Typical values look like this:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'vlan_region="us-south"\nvlan_datacenter="dal10"\npublic_vlan_id="2366011"\nprivate_vlan_id="2366012"\n')))),Object(n.b)("p",null,"You must set all of these specifically for your cluster. The IGC CLI can be used to determine these values (see below)."),Object(n.b)("p",null,"A cluster is ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-zero-downtime#ov_intro_reg",title:"Locations for resource deployment"}),"managed in a particular zone in a particular region"),".\nIf the account you’re using has multiple regions and zones, you need to decide what region and zone you’ll want the cluster created in."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In ",Object(n.b)("inlineCode",{parentName:"p"},"vlan.tfvars"),", set the following properties:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"vlan_region")," — The region that the cluster will be in"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"vlan_datacenter")," — The zone in that region that the cluster will be in"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-plan_clusters#plan_basics",title:"Understanding network basics of classic clusters"}),"networking in a Kubernetes or OpenShift cluster"),"\nconsists of (at a minimum) two VLANs, a public VLAN and a private VLAN.\nSpecify a pair of VLANs in the desired region and zone.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In ",Object(n.b)("inlineCode",{parentName:"p"},"vlan.tfvars"),", set the following properties:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"public_vlan_id")," — The public VLAN that the cluster will use"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"private_vlan_id")," — The private VLAN that the cluster will use")))),Object(n.b)("p",null,"Advanced users who want to specifiy the settings can determine the VLAN info manually:\n",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/infrastructure/vlans",title:"VLANs"}),"Getting started with VLANs")," explains how to open the\nVLAN List page in the console. Choose the public and private VLANs for the region and zone you want to\nhost the Developer Tools environment. If suitable VLANs don’t already exist, you will need to create them here."),Object(n.b)("h3",{id:"optional-generate-the-vlan-properties-for-you-to-make-the-configuration-as-simple-as-possible"},"Optional: Generate the VLAN properties for you to make the configuration as simple as possible."),Object(n.b)("p",null,"The IGC CLI can be used to generate these settings."),Object(n.b)("p",null,"If your account has numerous VLANs and you want your Developer Tools cluster to use specific ones, then skip this step.\nThis tool is for users who don’t know what these required settings should be and want a simple way\nto gather reasonable defaults for their particular account."),Object(n.b)("p",null,"The ",Object(n.b)("a",i({parentName:"p"},{href:"cli"}),"IGC CLI")," has a command to gather this information for you,\nin a format that is easy to cut/paste into the ",Object(n.b)("inlineCode",{parentName:"p"},"vlan.tfvars")," properties file. "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Install the CLI"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"npm i -g @garage-catalyst/ibm-garage-cloud-cli\nibmcloud login -a cloud.ibm.com -r <region> -g <resource-group>\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Run the VLAN command"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"igc vlan\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Copy the output values from the CLI Command into your ",Object(n.b)("inlineCode",{parentName:"p"},"vlan.tfvars")," files and ",Object(n.b)("strong",{parentName:"p"},"Save")," and continue."))),Object(n.b)(p,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Note: that you need to log into your account using the IBM Cloud CLI to use this this approach."))),Object(n.b)(c,{label:"Run",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Run the scripts that create the environment")),Object(n.b)("p",null,"Having configured the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties"),", ",Object(n.b)("inlineCode",{parentName:"p"},"environment.tfvars"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"vlan.tfvars")," properties files,\nwe are now ready to kick off the installation."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Launch a ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"}),"Developer Tools Docker container"),"."),Object(n.b)("p",{parentName:"li"},"  Run the following command to run the Docker container:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./launch.sh\n")),Object(n.b)("p",{parentName:"li"},"  This will install the Cloud Garage Tools Docker image and exec shell into the running container. The container will\nmount the filesystem’s ",Object(n.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(n.b)("inlineCode",{parentName:"p"},"/home/devops/src/"),". Once the Docker container has started and\nthe script has exec shelled into it, you will see an IBM Garage banner. This will help you identify you are running\ninside the Docker image that has just mounted your file system."),Object(n.b)("p",{parentName:"li"},"  For more information on the ",Object(n.b)("strong",{parentName:"p"},"Developer Tools Image")," see the following guide link below.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create the Developer Tools environment"),Object(n.b)("p",{parentName:"li"},"  The supplied Terraform script is ready to run using the settings in the properties files.\nYou optionally can extend or modify the scripts and tailor them for your project’s specific needs."),Object(n.b)("p",{parentName:"li"},"  Run this script in the container:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./runTerraform.sh\n")),Object(n.b)("p",{parentName:"li"},"  This script will create the Developer Tools environment."),Object(n.b)("p",{parentName:"li"},"  The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(n.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(n.b)("p",{parentName:"li"},"  Creating a new cluster takes about 1.5 hours on average (but can also take considerably longer)\nand the rest of the process takes about 30 minutes."),Object(n.b)(p,{kind:"success",mdxType:"InlineNotification"},Object(n.b)("p",{parentName:"li"},"  You should now have your Developer Tools environment\nfully provisioned and configured. Enjoy!")))),Object(n.b)("h3",{id:"developer-tools-environment"},"Developer Tools environment"),Object(n.b)("p",null,"Once the Terraform scripts have finished, you can see the resources that the scripts created in IBM Cloud:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In the IBM Cloud console, open the ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-ui#dashboardview",title:"Managing resources in the resource list"}),"Resource List")),Object(n.b)("li",{parentName:"ul"},"On the Resource List page, filter by your Resource Group (e.g. ",Object(n.b)("inlineCode",{parentName:"li"},"catalyst-team"),")"),Object(n.b)("li",{parentName:"ul"},"You should see these resources listed:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Clusters"),": 1, either Kubernetes or OpenShift"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Services"),": 5 or so, such as PostgreSQL, LogDNA, etc."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Storage"),": 1, an instance of Cloud Object Storage"))),Object(n.b)("li",{parentName:"ul"},"Select the cluster and open the Kubernetes dashboard or OpenShift web console. You should see:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Namespaces: ",Object(n.b)("inlineCode",{parentName:"li"},"tools"),", ",Object(n.b)("inlineCode",{parentName:"li"},"dev"),", ",Object(n.b)("inlineCode",{parentName:"li"},"test"),", and ",Object(n.b)("inlineCode",{parentName:"li"},"staging")),Object(n.b)("li",{parentName:"ul"},"Deployments in the ",Object(n.b)("inlineCode",{parentName:"li"},"tools")," namespace: ",Object(n.b)("inlineCode",{parentName:"li"},"catalyst-dashboard"),", ",Object(n.b)("inlineCode",{parentName:"li"},"jenkins"),", etc.")))),Object(n.b)("p",null,"To get started with code use the following guides:"),Object(n.b)(u,{mdxType:"AnchorLinks"},Object(n.b)(m,{to:"../../getting-started/deploy-app",mdxType:"AnchorLink"},"Deploy First App"),Object(n.b)(m,{to:"../../guides/overview",mdxType:"AnchorLink"},"Guides"),Object(n.b)(m,{to:"../../guides/tools-image",mdxType:"AnchorLink"},"Developer Tools Image")),Object(n.b)("h3",{id:"possible-issues"},"Possible issues"),Object(n.b)("p",null,"If you find that that the Terraform provisioning has failed, try re-running the ",Object(n.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."),Object(n.b)("p",null,"If you find that some of the services have failed to create in the time allocated, you can try this:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Manually delete the service instances in your resource group"),Object(n.b)("li",{parentName:"ul"},"Delete the ",Object(n.b)("inlineCode",{parentName:"li"},"workspace")," directory (which will remove any state that has been created by Terraform)"),Object(n.b)("li",{parentName:"ul"},"Re-run the ",Object(n.b)("inlineCode",{parentName:"li"},"runTerraform.sh")," script",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rm -rf workspace\n./runTerraform.sh\n")))))))}g.isMDXComponent=!0},446:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},447:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},448:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(446),i=a(0),o=a.n(i),l=a(107),s=a.n(l),c=a(194),b=a(128),p=a(3),u=a.n(p),m=a(388),d=function(e){var t,a=e.title,r=e.tabs,i=void 0===r?[]:r;return Object(n.b)("div",{className:u()(m.pageHeader,(t={},t[m.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},h=a(447),g=a(389),O=function(e){var t=e.relativePagePath,a=e.repository,r=h.data.site.siteMetadata.repository,i=a||r,o=i.baseUrl,l=i.subDirectory,s=o+"/edit/"+i.branch+l+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+g.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a(193),N=(a(59),a(26)),f=a(390);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0}),o=i===r,l=new RegExp(r+"(?!-)"),c=a.replace(l,i);return Object(n.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(n.b)(N.Link,{className:f.link,to:""+c},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},i))))))},r}(o.a.Component),v=a(195);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,l=t.frontmatter,p=void 0===l?{}:l,u=t.relativePagePath,m=t.titleType,h=p.tabs,g=p.title,N=p.theme,f=p.description,C=p.keywords,A=r.data.site.pathPrefix,w=A?i.pathname.replace(A,""):i.pathname,T=h?w.split("/").slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:N,pageTitle:g,pageDescription:f,pageKeywords:C,titleType:m},Object(n.b)(d,{title:o?Object(n.b)(o,null):g,label:"label",tabs:h}),h&&Object(n.b)(y,{slug:w,tabs:h,currentTab:T}),Object(n.b)(v.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:u})),Object(n.b)(j.a,{pageContext:t,location:i,slug:w,tabs:h,currentTab:T}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-admin-installation-ibm-cloud-index-mdx-e4c17ee9384f00735c8f.js.map