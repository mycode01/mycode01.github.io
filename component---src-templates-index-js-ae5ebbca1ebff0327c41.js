(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+rFB":function(e,t,a){},"/d1K":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("IP2g"),c=a("KSab"),s=a("Y7J9"),m=(a("sfvA"),c.config.friends),i=void 0===m?[]:m,u=function(){return n.a.createElement("div",{className:"friend"},n.a.createElement("p",null,"links"),i.map((function(e){return n.a.createElement(s.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})})))},f=(a("qfuT"),function(e){var t=e.posts;return n.a.createElement("div",{className:"latest-post"},n.a.createElement("p",null,"recent post"),t.map((function(e){var t=e.node;return n.a.createElement(l.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),d=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return n.a.createElement("div",{className:"d-none d-lg-block information my-2"},n.a.createElement("hr",null),n.a.createElement("p",null,"total ",t," issues"),n.a.createElement("hr",null),n.a.createElement(f,{posts:a}),n.a.createElement("hr",null),n.a.createElement(u,null))});d.defaultProps={posts:[]};var g=d,h=(a("YX5f"),c.config.wordings),E=void 0===h?[]:h,p=c.config.githubUsername,v=(c.config.zhihuUsername,c.config.email),b=c.config.iconUrl,k=c.config.about,N=c.config.facebook,x=function(e){var t=e.href,a=e.icon;return n.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},n.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},n.a.createElement(o.a,{icon:a})))},y=function(e){var t=e.totalCount,a=e.latestPosts;return n.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},n.a.createElement("div",{className:"about-me"},n.a.createElement(l.Link,{to:k,href:k,className:"name"},n.a.createElement("img",{className:"avatar",src:b,alt:""}),n.a.createElement("h4",null,"mycode01")),n.a.createElement("p",{className:"mb-1"},E[0]),n.a.createElement("p",{className:"mb-3"},E[1]),n.a.createElement(x,{href:"https://github.com/"+p,icon:["fab","github"]}),n.a.createElement(x,{href:"mailto:"+v,icon:["far","envelope"]}),N&&n.a.createElement(x,{href:"https://www.facebook.com/"+N+"/",icon:["fab","facebook"]}),n.a.createElement(g,{totalCount:t,posts:a})))};y.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return n.a.createElement(l.StaticQuery,{query:"3705334695",render:function(e){return n.a.createElement(y,Object.assign({},e.all,e.limited))}})}},"9UDz":function(e,t,a){},Jz1z:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=function(e){var t=e.name,a=e.count;return n.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a)};l.defaultProps={count:""},t.a=l},TRom:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("+ZDr"),o=a.n(l),c=a("ZO1O"),s=a("/d1K"),m=a("U2Z3"),i=(a("VYsE"),function(e){var t=e.color,a=e.text;return n.a.createElement("div",{className:"navlink",style:{color:t}},a)}),u=function(e){var t=e.test,a=e.url,r=e.text;return t?n.a.createElement(o.a,{to:""+a},n.a.createElement(i,{color:"#66ccff",text:r})):n.a.createElement(i,{color:"#7d7d7d",text:r})};t.default=function(e){var t=e.pageContext,a=e.location,r=t.group,l=t.index,o=t.first,i=t.last,f=t.pathPrefix,d=l-1==1?"":"/"+f+"/"+(l-1),g="/"+f+"/"+(l+1);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row homepage",style:{marginTop:20}},n.a.createElement(s.a,null),n.a.createElement("div",{className:"col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2"},r.map((function(e){var t=e.node;return n.a.createElement(c.a,Object.assign({},t.frontmatter,{url:t.frontmatter.slug?t.frontmatter.slug:t.fields.slug,key:t.fields.slug}))})),n.a.createElement("div",{className:"row",style:{justifyContent:"space-around",marginBottom:"20px"}},n.a.createElement("div",{className:"previousLink"},n.a.createElement(u,{test:!o,url:d,text:"Previous"})),n.a.createElement("div",{className:"nextLink"},n.a.createElement(u,{test:!i,url:g,text:"Next"})))),n.a.createElement("div",{className:"col-xl-2 col-lg-1 order-3"})),n.a.createElement(m.a,{url:a.href,hasCommentBox:!1}))}},U2Z3:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("0b+E"),o=a("IP2g"),c=(a("+rFB"),function(){return n.a.createElement("a",{className:"share-button",style:{lineHeight:"1.7rem",color:"#337ab7",paddingLeft:"0.15rem"},href:"#gitalk-container",onClick:function(){return l.a.event({category:"User",action:"Goto Comment Box"})}},n.a.createElement(o.a,{icon:["far","comment"]}))}),s=function(e){var t=e.url,a=e.hasCommentBox;return n.a.createElement("div",{className:"m-share-box"},n.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+t,title:"",className:"share-button",onClick:function(){return l.a.event({category:"Share",action:"Facebook Share"})}},n.a.createElement(o.a,{icon:["fab","facebook-f"]})),a&&n.a.createElement(c,null),n.a.createElement("a",{className:"share-button",href:"#header",onClick:function(){l.a.event({category:"User",action:"Scroll to Top"})},style:{lineHeight:"1.7rem",paddingLeft:"0.1rem"}},n.a.createElement(o.a,{icon:["fas","chevron-up"]})))};s.defaultProps={hasCommentBox:!0},t.a=s},VYsE:function(e,t,a){},YX5f:function(e,t,a){},ZO1O:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("Jz1z"),c=a("f/UQ"),s=(a("9UDz"),function(e){var t,a,r=e.url,o=e.image,s=e.backgroundColor;return n.a.createElement(l.Link,{to:r,href:r},n.a.createElement("div",{className:"wrapper",style:(t=o,a=s,{backgroundColor:"#"+a,backgroundImage:" url("+Object(c.parseImgur)(t,"large")+")"})}))}),m=function(e){var t=e.title,a=e.date,r=e.url,c=e.headerImage,m=e.headerBackgroundColor,i=e.description,u=e.tags,f=void 0===u?[]:u;return n.a.createElement("div",{className:"col-sm-12 pb-4"},n.a.createElement("div",{className:"custom-card"},c&&n.a.createElement(s,{url:r,image:c,backgroundColor:m}),n.a.createElement("div",{className:"data"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"stats"},n.a.createElement("span",{className:"date"},a.split("T")[0]),f.map((function(e){return n.a.createElement(o.a,{name:e,key:e})}))),n.a.createElement(l.Link,{to:r,href:r},n.a.createElement("h4",{className:"title"},t)),n.a.createElement("p",null,i),n.a.createElement(l.Link,{to:r,href:r},"....more")))))};m.defaultProps={headerImage:"",tags:[],date:"",headerBackgroundColor:""},t.a=m},"f/UQ":function(e,t){var a=function(e,t){if(void 0===t&&(t="large"),!e)return"https://i.imgur.com/M795H8A.jpg";if(e.match("(png)|(gif)"))return e.match("http")?e:"https://i.imgur.com/"+e;var a=e.replace(/(.*)\.(.*)/,"$1"+{"small-square":"s","big-square":"b",small:"t",medium:"m",large:"l",huge:"h"}[t]+".$2");return a.match("http")?a:"https://i.imgur.com/"+a},r=function(e){var t=e.href,r=e.title,n=e.text;return'<img class="lozad d-block mx-auto" data-src='+a(t,"large")+" "+function(e,t){return'title="'+(e||t)+'"'}(r,n)+" />"};e.exports={parseImgur:a,parseImageTag:r,getGalleryImage:function(e){var t=e.href,n=e.title,l=e.text;return'<a data-fancybox="gallery" href="'+a(t,"huge")+'">'+r({href:t,title:n,text:l})+"</a>"}}},qfuT:function(e,t,a){},sfvA:function(e,t,a){},usu3:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-index-js-ae5ebbca1ebff0327c41.js.map