"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[882],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,b=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},372:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return m}});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1,sidebar_label:"\ud83d\udcbb CLI"},l="CLI",i={unversionedId:"usage/cli",id:"usage/cli",title:"CLI",description:"anon-col - Anonymize a single column",source:"@site/docs/usage/cli.md",sourceDirName:"usage",slug:"/usage/cli",permalink:"/dbzar/docs/usage/cli",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/cli.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\ud83d\udcbb CLI"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc7b Usage",permalink:"/dbzar/docs/usage/"},next:{title:"\ud83d\udc68\u200d\ud83d\udcbb API",permalink:"/dbzar/docs/usage/api"}},s={},m=[{value:"<code>anon-col</code> - Anonymize a single column",id:"anon-col---anonymize-a-single-column",level:3},{value:"Examples",id:"examples",level:4},{value:"<code>anon-db</code>",id:"anon-db",level:3},{value:"Demo",id:"demo",level:4}],c={toc:m};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli"},"CLI"),(0,r.kt)("h3",{id:"anon-col---anonymize-a-single-column"},(0,r.kt)("inlineCode",{parentName:"h3"},"anon-col")," - Anonymize a single column"),(0,r.kt)("p",null,"(\u26a0 Changes whichever db provided so use with caution)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: dbzar anon-col [options] [command]\n\nAnonymize a single column in a table\n\nOptions:\n  -skip --skip-confirm  skip confirmation\n  -u --uri              Connection string\n  -db --database        Database name\n  -t --table            Table name\n  -c --column           Column name\n  -h, --help            display help for command\n\nCommands:\n  scramble [options]    scramble a single column\n  fake [options]        fake a single column\n  mask [options]        mask a single column\n  help [command]        display help for command\n")),(0,r.kt)("p",null,"For a list of providers: ",(0,r.kt)("a",{parentName:"p",href:"/docs/providers"},"Providers"),"."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Mask the ",(0,r.kt)("inlineCode",{parentName:"li"},"firstName")," column in the ",(0,r.kt)("inlineCode",{parentName:"li"},"users")," table of the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," database in MongoDB.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'dbzar anon-col mask -u postgresql://example:example@localhost -db test -t users -c firstName\n// { "firstName": "John" } => { "firstName": "****" }\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Scramble the ",(0,r.kt)("inlineCode",{parentName:"li"},"firstName")," column in the ",(0,r.kt)("inlineCode",{parentName:"li"},"users")," table of the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," database in MongoDB.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// mongo\ndbzar anon-col scramble -u mongodb://example:example@localhost -db test -t users -c firstName\n// { "firstName": "John" } => { "firstName": "nhJo" }\n')),(0,r.kt)("h3",{id:"anon-db"},(0,r.kt)("inlineCode",{parentName:"h3"},"anon-db")),(0,r.kt)("p",null,"Anonymize entire database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Usage: dbzar anon-db [options] [uri]\n\nAnonymize an entire database\n\nArguments:\n  uri         connection string\n\nOptions:\n  -h, --help  display help for command\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create Configuration file (see ",(0,r.kt)("a",{parentName:"li",href:"https://nitzano.github.io/dbzar/docs/config"},"Configuration"),")")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'// .dbzarrc\ndbName: db1\ntables:\n  - name: users\n    columns:\n      - name: firstName\n        provider: mask\n      - name: lastName\n        provider:\n          type: mask\n          options:\n            character: "#"\n  - name: products\n    columns:\n      - name: name\n        provider:\n          type: fake\n          options:\n            fakeValue: animal\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Running the anonymizer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dbzar anon-db mongodb://example:example@localhost\n")),(0,r.kt)("p",null,"Will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mask")," the ",(0,r.kt)("inlineCode",{parentName:"li"},"firstName")," column in ",(0,r.kt)("inlineCode",{parentName:"li"},"users")," table (replacing letters with default ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),")."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mask")," the ",(0,r.kt)("inlineCode",{parentName:"li"},"lastName")," column in ",(0,r.kt)("inlineCode",{parentName:"li"},"users")," table (replacing letters with ",(0,r.kt)("inlineCode",{parentName:"li"},"#"),")."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"fake")," the ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," column in ",(0,r.kt)("inlineCode",{parentName:"li"},"products"),' table (replacing it with a random animal name, for example: "Fish").')),(0,r.kt)("p",null,"From:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// users table\n{ "firstName": "John", "lastName": "Doe" }\n\n// products table\n{ "name": "Product1", "price": 100 }\n')),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// users table\n{ "firstName": "****", "lastName": "###" }\n\n// products table\n{ "name": "Fish", "price": 100 }\n')),(0,r.kt)("h4",{id:"demo"},"Demo"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zdowhmstYgY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);