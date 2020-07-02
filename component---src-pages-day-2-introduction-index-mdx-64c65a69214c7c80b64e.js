(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),i=a("q1tI"),r=a.n(i),s=a("NmYn"),o=a.n(s),c=a("OKom"),b=a("k4MR"),l=a("TSYQ"),p=a.n(l),d=a("QH2O"),g=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(g.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:d.text},a)))))},h=a("pEPl"),f=a("BAC9"),u=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,i=a||n,r=i.baseUrl,s=i.subDirectory,o=r+"/edit/"+i.branch+s+"/src/pages"+t;return r?Object(g.b)("div",{className:"bx--row "+f.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:f.link,href:o},"Edit this page on GitHub"))):null},O=a("FCXl"),A=(a("Oyvg"),a("Wbzz")),y=a("I8xM");var j=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0}),r=i===n,s=new RegExp(n+"(?!-)"),c=a.replace(s,i);return Object(g.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(g.b)(A.Link,{className:y.link,to:""+c},e))}));return Object(g.b)("div",{className:y.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:y.list},i))))))},n}(r.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=e.Title,s=t.frontmatter,l=void 0===s?{}:s,p=t.relativePagePath,d=t.titleType,h=l.tabs,f=l.title,A=l.theme,y=l.description,N=l.keywords,v=n.data.site.pathPrefix,D=v?i.pathname.replace(v,""):i.pathname,S=h?D.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"";return Object(g.b)(b.a,{tabs:h,homepage:!1,theme:A,pageTitle:f,pageDescription:y,pageKeywords:N,titleType:d},Object(g.b)(m,{title:r?Object(g.b)(r,null):f,label:"label",tabs:h}),h&&Object(g.b)(j,{slug:D,tabs:h,currentTab:S}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(u,{relativePagePath:p})),Object(g.b)(O.a,{pageContext:t,location:i,slug:D,tabs:h,currentTab:S}),Object(g.b)(c.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')},uwWQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},o={_frontmatter:s},c=i.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(c,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"OpenShift Day-2 Operation Guide"),Object(n.b)("p",null,"A guide for post deployment operations of Red Hat OpenShift Container Platform"),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"The purpose of this guide is to assist an organization with the operational aspects of Red Hat OpenShift Container Platform on Day-2. The premise of this document is to describe core principles/processes that should be taken on “day 2” where the journey is defined as:"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"OpenShift Platform")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Day-0: Requirements and design of the platform."),Object(n.b)("li",{parentName:"ul"},"Day-1: Platform installation and initial configuration to a working state."),Object(n.b)("li",{parentName:"ul"},"Day-2: Platform is installed and ready to begin providing services.")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"OpenShift-based Application")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Day-0: Requirements and design of the application and potentially changes to the supporting environment."),Object(n.b)("li",{parentName:"ul"},"Day-1: Deployment and Release of the application, the time where (a new version of) the application is introduced to the production environment. This includes initial configuration of the application itself and of any supporting functionality."),Object(n.b)("li",{parentName:"ul"},"Day-2: Steady state operations of the application, the time where the application is doing its job for the business.")),Object(n.b)("p",null,"The definition of Day-1 and Day-2 is not exact. We will find many times, cases where a task can be considered Day-1 or Day-2. We don’t want to spend a lot of time arguing whether a task is Day-1 or Day-2. It is more important to identify and describe the tasks that need to be performed. For a given project, feel free to move such tasks to either option, and assign it to the right persona."),Object(n.b)("p",null,"The notion of ",Object(n.b)("em",{parentName:"p"},"immutable systems"),", DevSecOps and GitOps is not changing the definition of Day-2 tasks. They simply lead to a different approach of ",Object(n.b)("em",{parentName:"p"},"performing")," these Day-2 activities. Instead of patching, configuring, tuning a live system, the master source - the configuration repo, the infrastructure as a code repo, the operator code - will be updated and then deployed again."),Object(n.b)("h3",null,"Personas"),Object(n.b)("p",null,"Admittedly there may be different personas responsible at these stages of implementation. For example Platform Day-0 would entail personas such as Architects and SREs. Platform Day-1 would be one of the few stages where typically only the traditional sysadmin or the modern role SRE are involved. Platform Day-2 encapsulates all of the application based stages. However you may see some application design discerned at Platform Day-0. The role involved at Platform Day-2 stage is SREs.   "),Object(n.b)("p",null,"As each new applications is added to the environment the OpenShift-based applications Day-0 through Day-2 is executed again. The personas involved in Application Day-0 would be Product Owners, DevOpsEngineer, SREs and Architects. Day-1 and Day-2 personas would include DevOps and SREs."),Object(n.b)("p",null,"As this document is focused on the Day-2 activities, we will primarily focus on the tasks performed by DevOps Engineers and SREs. See the ",Object(n.b)("a",r({parentName:"p"},{href:"../Personas"}),"Personas")," topic in this document for more details. "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"})),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Application"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Platform"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Day-0"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Architect, Product Owner, DevOpsEngineer, SRE"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"Architect, SRE")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Day-1"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"DevOpsEngineer, SRE"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"SRE")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Day-2"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"DevOpsEngineer, SRE"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"SRE")))),Object(n.b)("h3",null,"Reference Architecture"),Object(n.b)("p",null,"The Garage and Solution Engineering team has developed a Reference Architecture for OpenShift, discussing topics like Network, Storage, and Cluster Nodes. This architecture provides good background and context for the operational aspects of the OpenShift solution:\n",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/ncolon/ocp4-refarch"}),"OpenShift 4.x Cloud Reference Architecture")),Object(n.b)("p",null,"The following chart depicts the Day-2 Reference Architecture for OpenShift: in the middle of the charts you see a OpenShift cluster with applications running on top of the standard resources compute, storage, and network. Left and right of the OpenShift cluster, you find the domains of Day-2 activities. On top you see the personas responsible for these activities."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.8125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVQoz21Sz2sTURDOTTwIHlQQf6C9Cj148B8RxFNBLbVpmygqKv4PovRQKElraVAQanvQ1tpUSxWttqSggrZiclCSbKJJE7Ob3c1mv895+zbppQOz897Om2++b5iI1wYtBzTFO4bgiCA2bLJukf8k+r7+r6ztg00XtMUVhq4DIwrMqIHVBrhjInjYAfPlY7dUQz8o9n10mymQehOsWfpNF3BsCTwVAwcS4PEhcKuwC+i6Lkslg5XKX5Yl2rbdLdzLAsClL2BsCky+AYcnwcKOBlREW60Wq9UqLcsU0Apdx+kWKlcKHGFXqu2yjEyugL23wWgSPDkCbocMKw3yyjh4fZo8/4C8mSIvjoK5ErszVPb2u7C64HN2PQRMC8O4MEy8BocmwHxVJ37/8dgTa/HsXY/Hom2eu+fxUL/HTNYL8mr25TqYyYH90ngzFwKOL4M9cQETuadlllt5nTCtJhMLBpPiqXSREy8Njj03WCg3gvz7bXB/n89BUXZ0EJzbCAGXv4I3pkElfeSRnodSM/fR4cxqkVOvCnyS/sXH6TyfrhQ5u9YMCnMl8JooS73TdZkOw9FF8MgAgnkdlpg1ZCdt6RoFz9wC9/WRvXcod/LEsKiI6xmv/wQPXPJ5Vbbj4GXw2acQcCMLKtD5TfDhguyjiWCBlSSVW/0mUYo/yH3th3Zlatb3X4CLn3XU60b+B+0qw8ZzB+UYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 1",title:"Figure 1",src:"/static/8a8d1be72d8d43479ddd8f24a38fef35/3cbba/Day2_ReferenceArchitecture.png",srcSet:["/static/8a8d1be72d8d43479ddd8f24a38fef35/7fc1e/Day2_ReferenceArchitecture.png 288w","/static/8a8d1be72d8d43479ddd8f24a38fef35/a5df1/Day2_ReferenceArchitecture.png 576w","/static/8a8d1be72d8d43479ddd8f24a38fef35/3cbba/Day2_ReferenceArchitecture.png 1152w","/static/8a8d1be72d8d43479ddd8f24a38fef35/0b124/Day2_ReferenceArchitecture.png 1728w","/static/8a8d1be72d8d43479ddd8f24a38fef35/e957c/Day2_ReferenceArchitecture.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,"Bylaws"),Object(n.b)("p",null,"When describing Day-2 activities for OpenShift, it is relevant to define some ",Object(n.b)("em",{parentName:"p"},"precepts")," or ",Object(n.b)("em",{parentName:"p"},"bylaws")," that act as guiding principles for the definition and design of these activities:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Immutable / Disposable Infrastructure "),Object(n.b)("li",{parentName:"ul"},"Infrastructure as Code"),Object(n.b)("li",{parentName:"ul"},"Automate as much as possible"),Object(n.b)("li",{parentName:"ul"},"Self-Service")),Object(n.b)("p",null,"We added some design decisions at the end of this documentation."),Object(n.b)("h2",null,"OpenShift Day2 Foundational Operational Aspects"),Object(n.b)("p",null,"In this chapter we describe the foundational operational aspects of a platform and its applications. We start with the personas responsible for Day-1 and Day-2 tasks, and then look into the critical domains of Compute, Storage and Network, as well as Security."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.8125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABnklEQVQoz3VSPUsDQRBN5x+wkWAjdoKFhX/ExspGmyhCQEHxTwgWgqggBgXBIiAokkJsNCK2gp+FqLlIErm73PfuPHd2c6cnurA3uzs7b957twX8MYiIv+DgBoDtAY6KUiI7/28UuDidUlWYtUlKtQhighdK+BHnKWtIlF+n+0IYhnAcB77vw7ZtDZqOKIrQbFpot1v4UDEIgh8gyEB+KiskSaIvxnGsI2mWLAz6rNPpwPO6CrSNSDXPW5JXlmPIYK7bhRCG4WcXmN4glHeBiVVgoQJMrhGem8ZH2QNgQlzPUQP+Zih6kl9bCYbmY4wtJyiWBMZXEvTPJLh5MoVCGmZCCFOnogZkn1zX1YfcKWXoKU83jy1sqVmpNbB9YmH9yILVcnPMjDI3z5BlG4bKI5IIVa56FeLwvIGd03fs116wV3vDwVkD1bqPREJ7zfczZb8Zmr/s8GMBkyjOEkYWCX1TwOgSMFACBucIw2V+RgwoYDvfyjKGjMxd+IDB2fBI5S7uCNdPhPNbFR9J7y/vCfUHArtCSgnf5zquT5/bF87g8rxI0zmyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 2",title:"Figure 2",src:"/static/1b73f2f4bdb5ee5061b51ef4863a782b/3cbba/Day2_FoundationalAspects.png",srcSet:["/static/1b73f2f4bdb5ee5061b51ef4863a782b/7fc1e/Day2_FoundationalAspects.png 288w","/static/1b73f2f4bdb5ee5061b51ef4863a782b/a5df1/Day2_FoundationalAspects.png 576w","/static/1b73f2f4bdb5ee5061b51ef4863a782b/3cbba/Day2_FoundationalAspects.png 1152w","/static/1b73f2f4bdb5ee5061b51ef4863a782b/0b124/Day2_FoundationalAspects.png 1728w","/static/1b73f2f4bdb5ee5061b51ef4863a782b/e957c/Day2_FoundationalAspects.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Personas/"}),"Personas")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Network"}),"Network")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Node"}),"Node")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Security"}),"Security")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Storage"}),"Storage")),Object(n.b)("h2",null,"OpenShift Day2 Important Operational Aspects"),Object(n.b)("p",null,"This chapter includes to key operational aspects of a Day-2 operational guide. This includes catalogs, images and registries and in turn builds and deployments. Next we look into observability aspects, for instance monitoring and logging, feeding into event management and alerting. A third dimension are aspects of security, including user and access management as well as the management of credentials. Backups are another aspect covered in this section."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.8125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABbUlEQVQoz22RS07DMBRFswpGSHwWwKaQiii0AwasAzFAqlo+Yg8IVAosAIkBTACJUdvABJomTpo2yb34Obj5CEvWtRP7+PjZSVIwjEGlu20ww2JebsD/321zBPblgT8BOFFgmsHAZJ9srncLrY/t3Dnpg+stsNEFV5vgq5sDhbtYLOh5Hn3fNxnHccWybitzp/8Mti7A3j24dwa6k8IwSRIqpRhFkUk5oG4lPcuywvDsAdw6BHd74No++P5nKFcXkFiVUzaX7eRQuYGkAd5qw7Y27N6BzVPwc5IvnGub6XRqFpdzPp8vgQJP05Sz2cykAXYG4GZbw/R1N3Qt39wcqMKI4/GYrutWMgiCipnA5NvScPACHlyCcvXWeWGoVMjRaGQgNofD4RIodlIGqWvF8PgGXGmA2x2dO5l+ZbOcfqAYhqF5DJt2LE0A1rBSw8cPUKBXT+DRNfgd5I+SJKnZJAsly90aSj3lv1jax/oFLmLzvCbmgQgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 3",title:"Figure 3",src:"/static/0b8bf4a6101f7b28fafc664474673a35/3cbba/Day2_ImportantAspects.png",srcSet:["/static/0b8bf4a6101f7b28fafc664474673a35/7fc1e/Day2_ImportantAspects.png 288w","/static/0b8bf4a6101f7b28fafc664474673a35/a5df1/Day2_ImportantAspects.png 576w","/static/0b8bf4a6101f7b28fafc664474673a35/3cbba/Day2_ImportantAspects.png 1152w","/static/0b8bf4a6101f7b28fafc664474673a35/0b124/Day2_ImportantAspects.png 1728w","/static/0b8bf4a6101f7b28fafc664474673a35/e957c/Day2_ImportantAspects.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../EventManagement"}),"Alerting and Event Management")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Backups/"}),"Backups")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../BuildDeploy"}),"Builds and Deployment")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../CatalogManagement"}),"Catalog Management")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Registry"}),"Registry and Image Management")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Logging"}),"Logging")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Monitoring"}),"Monitoring and Performance Management")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../User"}),"User Management/Authentication/Authorization")),Object(n.b)("h2",null,"OpenShift Day2 Additional Operational Aspects"),Object(n.b)("p",null,"This section contains further operational aspects of a successful operations guide. A key elements is patching and upgrades of the platform and its applications. A second aspects covers some of the non-functional characteristics of the solution, such as scalability and capacity management. Metering is another topic covered in this section."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.8125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABWUlEQVQoz3WSzUrDQBSFu3Ujbn0xl4Ii2IXgk/gAoiDiWt24cK2gqCi48gfspmmggpBJmv/MPebcdNoptAM3J8md+fJlkh6WDBHRWtXjaKwgKwV5W3Ujs17PLWZZaxdAfm9e2lGIyQRR2kIrD1gUBeI4RpZlMMYo1I2qqhBFkfaZnOtbLrPv1XWNPM91MdMHsjeZTPRhTM6ZmwO2PRSt3TiaW84MCUuSZAbkIoLY97Pblg7GcffRWm1ZXD1PgasMec0t4MP8LIpS+/wYv0bwOhDsHQveBlNgWZZqRhgXOSBtRqMRwjBcyMgk2n/4EqxtW/RPBZt9wfWLZ8jXoRHTAdM0RRAECnE5HA5h4g74MxYcngsu7gUHZ53pgiGNnCH3jx+BUD9ZcZLqb/P4LVjfsdg/EWzsCi6fpsCmadSOpoS7/433WbzvznVu3Sgw+BMc3Qhu37v8DDvgP21W/azdCOR5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 4",title:"Figure 4",src:"/static/5256b18312fc052083da451f2d64b090/3cbba/Day2_AdditionalAspects.png",srcSet:["/static/5256b18312fc052083da451f2d64b090/7fc1e/Day2_AdditionalAspects.png 288w","/static/5256b18312fc052083da451f2d64b090/a5df1/Day2_AdditionalAspects.png 576w","/static/5256b18312fc052083da451f2d64b090/3cbba/Day2_AdditionalAspects.png 1152w","/static/5256b18312fc052083da451f2d64b090/0b124/Day2_AdditionalAspects.png 1728w","/static/5256b18312fc052083da451f2d64b090/e957c/Day2_AdditionalAspects.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Capacity"}),"Capacity Management")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Metering/"}),"Metering")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Misc"}),"Miscellaneous")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"../MiscSupport"}),Object(n.b)("strong",{parentName:"a"},"Support")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"../MiscWeb"}),Object(n.b)("strong",{parentName:"a"},"Web Console Access")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",r({parentName:"p"},{href:"../MiscPrune"}),Object(n.b)("strong",{parentName:"a"},"Pruning"))))),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Upgrade/"}),"Upgrade")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Scalability"}),"Scalability")),Object(n.b)("h2",null,"Looking at Day-2 from a Horizontal perspective"),Object(n.b)("p",null,"In addition to the functional (",Object(n.b)("em",{parentName:"p"},"vertical"),") view shown above, we could also look at Day-2 activities from a horizontal perspective. For instance showing all Day-2 activities for a given application. Another horizontal perspective would be the implementation of the functional capabilities with a common technology such as a Service Mesh."),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../Application"}),"Application Management")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{href:"../ServiceMesh"}),"Service Mesh")),Object(n.b)("h2",null,"Reference"),Object(n.b)("h3",null,"OpenShift Online Document URL"),Object(n.b)("p",null,"Here is the URL for Red Hat OpenShift official online document",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",r({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/welcome/index.html"}),"https://docs.openshift.com/container-platform/4.3/welcome/index.html")),Object(n.b)("h3",null,"Cluster Ready Checklist"),Object(n.b)("p",null,Object(n.b)("a",r({parentName:"p"},{href:"https://www.weave.works/blog/production-ready-checklist-kubernetes"}),"Cluster Ready Checklist for Kubernetes")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-introduction-index-mdx-64c65a69214c7c80b64e.js.map