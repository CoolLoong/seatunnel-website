"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[61439],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,N=c["".concat(i,".").concat(m)]||c[m]||k[m]||l;return n?a.createElement(N,o(o({ref:e},u),{},{components:n})):a.createElement(N,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29557:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return u},toc:function(){return k},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],d={},i=void 0,p={unversionedId:"connector-v2/connector-status/connector-health-status",id:"connector-v2/connector-status/connector-health-status",title:"connector-health-status",description:"Connector Release Status",source:"@site/docs/connector-v2/connector-status/connector-health-status.md",sourceDirName:"connector-v2/connector-status",slug:"/connector-v2/connector-status/connector-health-status",permalink:"/zh-CN/docs/connector-v2/connector-status/connector-health-status",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/connector-status/connector-health-status.md",tags:[],version:"current",frontMatter:{}},u={},k=[{value:"Connector Release Status",id:"connector-release-status",level:2},{value:"Connector V2 Health",id:"connector-v2-health",level:2}],c={toc:k};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"connector-release-status"},"Connector Release Status"),(0,l.kt)("p",null,"SeaTunnel uses a grading system for connectors to help you understand what to expect from a connector:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("th",{parentName:"tr",align:null},"Beta"),(0,l.kt)("th",{parentName:"tr",align:null},"General Availability (GA)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Expectations"),(0,l.kt)("td",{parentName:"tr",align:null},"An alpha connector signifies a connector under development and helps SeaTunnel gather early feedback and issues reported by early adopters. We strongly discourage using alpha releases for production use cases"),(0,l.kt)("td",{parentName:"tr",align:null},"A beta connector is considered stable and reliable with no backwards incompatible changes but has not been validated by a broader group of users. We expect to find and fix a few issues and bugs in the release before it\u2019s ready for GA."),(0,l.kt)("td",{parentName:"tr",align:null},"A generally available connector has been deemed ready for use in a production environment and is officially supported by SeaTunnel. Its documentation is considered sufficient to support widespread adoption.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Production Readiness"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h2",{id:"connector-v2-health"},"Connector V2 Health"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connector Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Support Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Assert"},"Asset")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Clickhouse"},"ClickHouse")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Clickhouse"},"ClickHouse")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/ClickhouseFile"},"ClickHouseFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Console"},"Console")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Datahub"},"DataHub")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/dingtalk"},"DingTalk")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Elasticsearch"},"Elasticsearch")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Email"},"Email")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Enterprise-WeChat"},"Enterprise WeChat")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Feishu"},"FeiShu")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/FakeSource"},"Fake")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/FtpFile"},"FtpFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Greenplum"},"Greenplum")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Greenplum"},"Greenplum")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/HdfsFile"},"HdfsFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/HdfsFile"},"HdfsFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Hive"},"Hive")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Hive"},"Hive")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Http"},"Http")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Http"},"Http")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Hudi"},"Hudi")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Iceberg"},"Iceberg")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/IoTDB"},"IoTDB")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/IoTDB"},"IoTDB")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Jdbc"},"Jdbc")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Jdbc"},"Jdbc")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Kudu"},"Kudu")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Kudu"},"Kudu")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/LocalFile"},"LocalFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/LocalFile"},"LocalFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/MongoDB"},"MongoDB")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/MongoDB"},"MongoDB")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Neo4j"},"Neo4j")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/OssFile"},"OssFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/OssFile"},"OssFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Phoenix"},"Phoenix")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Phoenix"},"Phoenix")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/pulsar"},"Pulsar")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../sink/redis.md"},"Redis")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../source/redis.md"},"Redis")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Sentry"},"Sentry")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Socket"},"Socket")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Socket"},"Socket")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")))))}m.isMDXComponent=!0}}]);