(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ZLTS:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return u})),n.d(e,"default",(function(){return d}));var a=n("Fcif"),b=n("+I+c"),o=(n("mXGw"),n("/FXl")),l=n("TjRS"),c=n("ZFoC"),r=n("fXad"),u=(n("aD51"),{});void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/examples.mdx"}});var i={_frontmatter:u},p=l.a;function d(t){var e,n,d,O,j=t.components,m=Object(b.a)(t,["components"]);return Object(o.b)(p,Object(a.a)({},i,m,{components:j,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"usage"},"Usage"),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic-usage"},"Basic usage"),Object(o.b)("p",null,"A very simple example."),Object(o.b)(c.c,{__position:0,__code:'<Button token="123" countryCode="AU" />',__scope:(e={props:m,DefaultLayout:l.a,Playground:c.c,Button:r.a},e.DefaultLayout=l.a,e._frontmatter=u,e),mdxType:"Playground"},Object(o.b)(r.a,{token:"123",countryCode:"AU",mdxType:"Button"})),Object(o.b)("h3",{id:"logo"},"Logo"),Object(o.b)("p",null,"Display text logo, image logo or both."),Object(o.b)(c.c,{__position:1,__code:'<Button token="123" countryCode="AU">\n  Buy now with\n</Button>\n<label> </label>\n<Button token="123" countryCode="AU" logo="image">\n  Buy now with\n</Button>\n<label> </label>\n<Button token="123" countryCode="AU" logo="text">\n  Buy now with\n</Button>',__scope:(n={props:m,DefaultLayout:l.a,Playground:c.c,Button:r.a},n.DefaultLayout=l.a,n._frontmatter=u,n),mdxType:"Playground"},Object(o.b)(r.a,{token:"123",countryCode:"AU",mdxType:"Button"},"Buy now with"),Object(o.b)("label",null," "),Object(o.b)(r.a,{token:"123",countryCode:"AU",logo:"image",mdxType:"Button"},"Buy now with"),Object(o.b)("label",null," "),Object(o.b)(r.a,{token:"123",countryCode:"AU",logo:"text",mdxType:"Button"},"Buy now with")),Object(o.b)("h3",{id:"theme"},"Theme"),Object(o.b)("p",null,"Different button styles. ",Object(o.b)("inlineCode",{parentName:"p"},"white-black")," is the default style."),Object(o.b)(c.c,{__position:2,__code:'<Button token="123" countryCode="AU" theme="white-black">\n  Shop now with\n</Button>\n<label> </label>\n<Button token="123" countryCode="AU" theme="mint-black">\n  Shop now with\n</Button>\n<label> </label>\n<Button token="123" countryCode="AU" theme="black-mint">\n  Shop now with\n</Button>',__scope:(d={props:m,DefaultLayout:l.a,Playground:c.c,Button:r.a},d.DefaultLayout=l.a,d._frontmatter=u,d),mdxType:"Playground"},Object(o.b)(r.a,{token:"123",countryCode:"AU",theme:"white-black",mdxType:"Button"},"Shop now with"),Object(o.b)("label",null," "),Object(o.b)(r.a,{token:"123",countryCode:"AU",theme:"mint-black",mdxType:"Button"},"Shop now with"),Object(o.b)("label",null," "),Object(o.b)(r.a,{token:"123",countryCode:"AU",theme:"black-mint",mdxType:"Button"},"Shop now with")),Object(o.b)("h3",{id:"clearpay"},"Clearpay"),Object(o.b)("p",null,"When the ",Object(o.b)("inlineCode",{parentName:"p"},"countryCode='GB'"),", the logo will be Clearpay."),Object(o.b)(c.c,{__position:3,__code:'<Button token="123" countryCode="GB">\n  Shop with\n</Button>',__scope:(O={props:m,DefaultLayout:l.a,Playground:c.c,Button:r.a},O.DefaultLayout=l.a,O._frontmatter=u,O),mdxType:"Playground"},Object(o.b)(r.a,{token:"123",countryCode:"GB",mdxType:"Button"},"Shop with")),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"token"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(required) checkout token to be used to complete payment."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"countryCode"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(required) country code."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"behavior"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"method of launching the checkout page."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum: ",Object(o.b)("inlineCode",{parentName:"td"},"popup")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"redirect")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"popup"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onComplete"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"callback when transaction is complete. ",Object(o.b)("strong",{parentName:"td"},"popup mode only"),"."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(event: any) => void"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"logo"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"determine how to display the logo."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum: ",Object(o.b)("inlineCode",{parentName:"td"},"image")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"text")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"all")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"all"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"theme"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"color of button's background and label."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum: ",Object(o.b)("inlineCode",{parentName:"td"},"white-black")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"black-mint")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"mint-black")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"white-black"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"className"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"classname of button wrapper."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"style"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"extra styles."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"React.CSSProperties"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/examples.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-examples-mdx-92678267e3a882b3242a.js.map