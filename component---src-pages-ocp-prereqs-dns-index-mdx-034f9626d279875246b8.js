(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),l=a.n(r),b=a("NmYn"),i=a.n(b),o=a("OKom"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},a)))))},O=a("pEPl"),j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,l=r.baseUrl,b=r.subDirectory,i=l+"/edit/"+r.branch+b+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},N=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0}),l=r===n,b=new RegExp(n+"(?!-)"),o=a.replace(b,r);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(u.b)(g.Link,{className:f.link,to:""+o},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},r))))))},n}(l.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,l=e.Title,b=t.frontmatter,s=void 0===b?{}:b,p=t.relativePagePath,d=t.titleType,O=s.tabs,j=s.title,g=s.theme,f=s.description,v=s.keywords,x=n.data.site.pathPrefix,k=x?r.pathname.replace(x,""):r.pathname,C=O?k.split("/").filter(Boolean).slice(-1)[0]||i()(O[0],{lower:!0}):"";return Object(u.b)(c.a,{tabs:O,homepage:!1,theme:g,pageTitle:j,pageDescription:f,pageKeywords:v,titleType:d},Object(u.b)(m,{title:l?Object(u.b)(l,null):j,label:"label",tabs:O}),O&&Object(u.b)(y,{slug:k,tabs:O,currentTab:C}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(N.a,{pageContext:t,location:r,slug:k,tabs:O,currentTab:C}),Object(u.b)(o.a,null))}},ULkk:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={},i={_frontmatter:b},o=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(o,l({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"DNS requirements"),Object(n.b)("p",null,"Openshift internally expects that all hostnames of cluster nodes are internally resolvable from each other.  "),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Internal DNS names")),Object(n.b)("p",null,"For example, the following DNS setup may be used, where ",Object(n.b)("inlineCode",{parentName:"p"},"cluster.jkwong.xyz")," is the subdomain:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"node"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"names"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"comment"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"master1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"master01.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"master2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"master02.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"master3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"master03.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"infra1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"infra01.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"infra2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"infra02.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"infra3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"infra03.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"worker1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"worker01.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"worker2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"worker02.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"worker3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"worker03.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"internal API"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"api-int.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"internal endpoint for API, used by cluster nodes to register")))),Object(n.b)("p",null,"The internal API endpoint should be an A or CNAME record that points at a load balancer that forwards requests to the master nodes running the control plane using a round-robin algorithm.  All cluster nodes will register themselves to the server to this endpoint using the domain name.  During installation, this may be provided as ",Object(n.b)("inlineCode",{parentName:"p"},"openshift_master_cluster_hostname")," in the ansible inventory file."),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"External DNS names")),Object(n.b)("p",null,"It is optional whether the cluster administrator wishes to expose the internal cluster domain to an external DNS server, but in many cases the cluster domain is used here so worker nodes are fully resolvable outside of the cluster as well."),Object(n.b)("p",null,"For external clients, Openshift expects that clients can resolve the hostname of the API server in order to manage Openshift, and application clients can resolve the hostname of the wildcard subdomain."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"node"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"name"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"comment"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"external API"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"api.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"external endpoint for API, used by clients to manage Openshift")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"app"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"*.apps.cluster.jkwong.xyz")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"external wildcard domain for apps, used by clients to connect to workloads running in the platform such as Cloud Paks")))),Object(n.b)("p",null,"The Openshift application console is available on ",Object(n.b)("inlineCode",{parentName:"p"},"api.cluster.jkwong.xyz")," and is specified by ",Object(n.b)("inlineCode",{parentName:"p"},"openshift_master_cluster_public_hostname"),". It is very important to get this right as the web console uses the URL here as a redirect for OAuth clients and the address cannot be changed easily.  The DNS record points at an externally routable address to a load balancer that forwards traffic to the master nodes."),Object(n.b)("p",null,"The wildcard app subdomain is a default domain name for routes that do not have an explicit hostname defined.  In our example, the Openshift cluster console is served at ",Object(n.b)("inlineCode",{parentName:"p"},"console.apps.cluster.jkwong.xyz"),".  The DNS record points at an externally routable address to a load balancer that forwards traffic to where the Openshift router is running, typically the ",Object(n.b)("inlineCode",{parentName:"p"},"infra")," nodes."))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-ocp-prereqs-dns-index-mdx-034f9626d279875246b8.js.map