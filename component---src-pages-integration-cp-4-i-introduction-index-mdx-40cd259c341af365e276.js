(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),o=a("q1tI"),i=a.n(o),r=a("NmYn"),s=a.n(r),A=a("OKom"),l=a("k4MR"),c=a("TSYQ"),b=a.n(c),p=a("QH2O"),d=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(d.b)("div",{className:b()(p.pageHeader,(t={},t[p.withTabs]=o.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.text},a)))))},h=a("pEPl"),g=a("BAC9"),m=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,s=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),j=(a("Oyvg"),a("Wbzz")),O=a("I8xM");var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0}),i=o===n,r=new RegExp(n+"(?!-)"),A=a.replace(r,o);return Object(d.b)("li",{key:e,className:b()((t={},t[O.selectedItem]=i,t),O.listItem)},Object(d.b)(j.Link,{className:O.link,to:""+A},e))}));return Object(d.b)("div",{className:O.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:O.list},o))))))},n}(i.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,r=t.frontmatter,c=void 0===r?{}:r,b=t.relativePagePath,p=t.titleType,h=c.tabs,g=c.title,j=c.theme,O=c.description,y=c.keywords,N=n.data.site.pathPrefix,E=N?o.pathname.replace(N,""):o.pathname,B=h?E.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(d.b)(l.a,{tabs:h,homepage:!1,theme:j,pageTitle:g,pageDescription:O,pageKeywords:y,titleType:p},Object(d.b)(u,{title:i?Object(d.b)(i,null):g,label:"label",tabs:h}),h&&Object(d.b)(w,{slug:E,tabs:h,currentTab:B}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(m,{relativePagePath:b})),Object(d.b)(f.a,{pageContext:t,location:o,slug:E,tabs:h,currentTab:B}),Object(d.b)(A.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')},ygyi:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r,s={},A=(r="InlineNotification",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),l={_frontmatter:s},c=o.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(c,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(A,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Version 2020.2 is out for Cloud Pak for Ingegration.  This version is the first to feature Operators and has significant changes to the deployment and operations.  Please refer to the ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSGT7J_20.2/overview.html"}),"Knowledge Center")," while we update this playbook.  Thanks!")),Object(n.b)("h2",null,"Solution Overview"),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"IBM Cloud Pak for Integration")," is the industry’s most\ncomplete hybrid integration platform (HIP). Access all of the\nintegration capabilities that your team needs to balance\ntraditional and modern styles of integration. Enact the\nappropriate governance to provide the right level of access\nto each team member. Use any of the the capabilities\nindependently delivered via a modern DevOps process and\ntooling or together, through a single interface with a\nsingle login and dashboard."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAQAF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAByUQqP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEAAQUCX//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABkQAQACAwAAAAAAAAAAAAAAAAEAEBFRYf/aAAgBAQABPyGKavPCv//aAAwDAQACAAMAAAAQ0x//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAdEAEAAgEFAQAAAAAAAAAAAAABABEhEDFRcZFh/9oACAEBAAE/EDDmvSLowvqBZePYVew9kQnB80//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Under the Hood",title:"Under the Hood",src:"/static/22ab9531bb69dabdf4ee72e22337355d/2e753/hood.jpg",srcSet:["/static/22ab9531bb69dabdf4ee72e22337355d/69549/hood.jpg 288w","/static/22ab9531bb69dabdf4ee72e22337355d/473e3/hood.jpg 576w","/static/22ab9531bb69dabdf4ee72e22337355d/2e753/hood.jpg 1152w","/static/22ab9531bb69dabdf4ee72e22337355d/74f4b/hood.jpg 1728w","/static/22ab9531bb69dabdf4ee72e22337355d/56e15/hood.jpg 2160w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"The Cloud Pak delivers several core integration capabilities."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/cloud-pak-for-integration/api-lifecycle-management"}),"API Lifecycle Management")," (API Connect) allows you to expose, manage, share and monetize APIs across clouds"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/cloud-pak-for-integration/application-and-data-integration"}),"Application and Data Integration")," (App Connect) allows you to connect applications, data, legacy systems and modern technologies across on-premises, hybrid and multicloud environments"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/cloud-pak-for-integration/enterprise-messaging"}),"Enterprise Messaging")," (MQ) connects business applications through a security-rich, robust and scalable messaging hub"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/cloud-pak-for-integration/event-streaming"}),"Event Streaming")," (Event Streams) built on open-source Apache Kafka it promotes Event Driven Architectures (EDA) that allows you to analyze data associated with an event and respond to it in real time"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/cloud-pak-for-integration/high-speed-data-transfer"}),"High-Speed Data Transfer")," (Aspera) enables you to overcome the challenges of legacy file transfer tools and physical shipping methods to move large amounts of data across global distances at maximum speed"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/cloud-pak-for-integration/secure-gateway"}),"Secure Gateway")," (DataPower) connects cloud and on-premises resources without the need for complex security configurations")),Object(n.b)("p",null,"In addition the Cloud Pak for Integration provides further\ncapabilities to help manage your integrations."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Operations Dashboard"),Object(n.b)("li",{parentName:"ul"},"Asset Repository")),Object(n.b)("p",null,"The installation steps for each of these capabilities are\nprovided below in the pages of this section. In addition,\nthere is the option of installing these capabilties\n",Object(n.b)("a",i({parentName:"p"},{href:"https://ocp42.cloudpak8s.io/integration/scripts/"}),"from the command line"),"\nusing scripts and using an automated Tekton DevOps pipeline."),Object(n.b)("h2",null,"About This Guide"),Object(n.b)("p",null,"The goal of this guide is to provide a jump-start to\ninstalling and using the ",Object(n.b)("strong",{parentName:"p"},"IBM Cloud Pak for Integration"),".",Object(n.b)("br",{parentName:"p"}),"\n","Additional guidance is provided for deployment\nof ",Object(n.b)("a",i({parentName:"p"},{href:"https://ocp42.cloudpak8s.io/integration/cp4i-scenario/"}),"basic use cases"),"\nfor the\ncapabilities provided by the Cloud Pak.\nIt is not required that you are an IBM integration portfolio\nexpert. Some knowledge of the underlying solution\ntechnologies is advantageous. In addition, a basic\nunderstanding of the underlying OpenShift Cloud Platform\n(OCP) usage and operations is expected."),Object(n.b)("h2",null,"Other Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{href:"http://www.redbooks.ibm.com/abstracts/sg248452.html?Open"},"Accelerating Modernization with Agile Integration")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{href:"https://www.ibm.com/downloads/cas/W5GG13RN"},"IBM Agile Integration eBook")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{href:"https://www.ibm.com/cloud/architecture/architectures/modern-integration/"},"IBM Garage Modern Integration Reference Architecture and PoV"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-introduction-index-mdx-40cd259c341af365e276.js.map