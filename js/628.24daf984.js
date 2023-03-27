"use strict";(self["webpackChunkpd"]=self["webpackChunkpd"]||[]).push([[628],{9734:function(e,l,a){a.r(l),a.d(l,{default:function(){return R}});var t=a(3396),n=a(4870),o=a(7139),s=a(5957),i=a(3179),r=a(65),u=a(4075),d=a(1970),p=a(1138),c=a(7041),v=a(8434),x=a(320),f=a(9888);const m=Symbol.for("vuetify:v-expansion-panel"),g=["default","accordion","inset","popout"],w=(0,x.ev)()({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>g.includes(e)},readonly:Boolean,...(0,d.k4)(),...(0,p.Q)(),...(0,c.x$)()},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;(0,d._v)(e,m);const{themeClasses:o}=(0,c.ER)(e),s=(0,t.Fl)((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`));return(0,v.AF)({VExpansionPanel:{color:(0,n.Vh)(e,"color")},VExpansionPanelTitle:{readonly:(0,n.Vh)(e,"readonly")}}),(0,f.L)((()=>(0,t.Wm)(e.tag,{class:["v-expansion-panels",o.value,s.value]},a))),{}}});a(7658);var b=a(3289),h=a(3824),y=a(4960),W=a(2370),_=a(3766);const k=(0,_.U)({color:String,expandIcon:{type:y.lE,default:"$expand"},collapseIcon:{type:y.lE,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),S=(0,x.ev)()({name:"VExpansionPanelTitle",directives:{Ripple:h.H},props:{...k()},setup(e,l){let{slots:a}=l;const n=(0,t.f3)(m);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:o,backgroundColorStyles:s}=(0,W.Y5)(e,"color"),i=(0,t.Fl)((()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})));return(0,f.L)((()=>(0,t.wy)((0,t.Wm)("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value},o.value],style:s.value,type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[(0,t.Wm)("span",{class:"v-expansion-panel-title__overlay"},null),a.default?.(i.value),!e.hideActions&&(0,t.Wm)("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(i.value):(0,t.Wm)(b.t,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[(0,t.Q2)("ripple"),e.ripple]]))),{}}});var C=a(9242),V=a(8952),I=a(1136);const E=(0,x.ev)()({name:"VExpansionPanelText",props:{...(0,I.H)()},setup(e,l){let{slots:a}=l;const n=(0,t.f3)(m);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:o,onAfterLeave:s}=(0,I.l)(e,n.isSelected);return(0,f.L)((()=>(0,t.Wm)(V.Fx,{onAfterLeave:s},{default:()=>[(0,t.wy)((0,t.Wm)("div",{class:"v-expansion-panel-text"},[a.default&&o.value&&(0,t.Wm)("div",{class:"v-expansion-panel-text__wrapper"},[a.default?.()])]),[[C.F8,n.isSelected.value]])]}))),{}}});var F=a(2465),L=a(4231);const U=(0,x.ev)()({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...(0,F.c)(),...(0,d.YQ)(),...(0,I.H)(),...(0,L.I)(),...(0,p.Q)(),...k()},emits:{"group:selected":e=>!0},setup(e,l){let{slots:a}=l;const n=(0,d.Yt)(e,m),{backgroundColorClasses:o,backgroundColorStyles:s}=(0,W.Y5)(e,"bgColor"),{elevationClasses:i}=(0,F.Y)(e),{roundedClasses:r}=(0,L.b)(e),u=(0,t.Fl)((()=>n?.disabled.value||e.disabled)),p=(0,t.Fl)((()=>n.group.items.value.reduce(((e,l,a)=>(n.group.selected.value.includes(l.id)&&e.push(a),e)),[]))),c=(0,t.Fl)((()=>{const e=n.group.items.value.findIndex((e=>e.id===n.id));return!n.isSelected.value&&p.value.some((l=>l-e===1))})),v=(0,t.Fl)((()=>{const e=n.group.items.value.findIndex((e=>e.id===n.id));return!n.isSelected.value&&p.value.some((l=>l-e===-1))}));return(0,t.JJ)(m,n),(0,f.L)((()=>{const l=!(!a.text&&!e.text),d=!(!a.title&&!e.title);return(0,t.Wm)(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":c.value,"v-expansion-panel--after-active":v.value,"v-expansion-panel--disabled":u.value},r.value,o.value],style:s.value,"aria-expanded":n.isSelected.value},{default:()=>[(0,t.Wm)("div",{class:["v-expansion-panel__shadow",...i.value]},null),d&&(0,t.Wm)(S,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),l&&(0,t.Wm)(E,{key:"text",eager:e.eager},{default:()=>[a.text?a.text():e.text]}),a.default?.()]})})),{}}});var A=a(3369),B=a(6824),H=a(8521),Y=a(3140),P=a(3144),$=a(9870);const z=(0,t._)("h1",null,"常見問題",-1);var D={__name:"QAView",setup(e){const l=(0,r.oR)(),a=(0,n.iH)(),d=(0,t.Fl)((()=>l.state.question_list.filter((function(e){return e.type==a.value}))));return(e,l)=>((0,t.wg)(),(0,t.j4)(A.K,{class:"pa-0"},{default:(0,t.w5)((()=>[(0,t.Wm)(s.Z),(0,t.Wm)(Y.O,{class:"pt-5"},{default:(0,t.w5)((()=>[(0,t.Wm)(A.K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(B.o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(H.D,{cols:"12",class:"pb-0"},{default:(0,t.w5)((()=>[z])),_:1}),(0,t.Wm)(H.D,{cols:"12",class:"pt-0"},{default:(0,t.w5)((()=>[(0,t.Wm)(P.d,{"slider-color":"blue",modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)($.L,{value:"1"},{default:(0,t.w5)((()=>[(0,t.Uk)("生理類")])),_:1}),(0,t.Wm)($.L,{value:"2"},{default:(0,t.w5)((()=>[(0,t.Uk)("用物類")])),_:1}),(0,t.Wm)($.L,{value:"4"},{default:(0,t.w5)((()=>[(0,t.Uk)("飲食類")])),_:1}),(0,t.Wm)($.L,{value:"3"},{default:(0,t.w5)((()=>[(0,t.Uk)("導管問題及傷口照護類")])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(u.J,{thickness:2,color:"blue"})])),_:1})])),_:1}),(0,t.Wm)(B.o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(H.D,{cols:"12"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(d),(e=>((0,t.wg)(),(0,t.j4)(w,{key:e.type,variant:"popout"},{default:(0,t.w5)((()=>[e.type==a.value?((0,t.wg)(),(0,t.j4)(U,{key:0,class:"mb-2"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{style:{"white-space":"pre-line","font-size":"18px"}},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.question),1)])),_:2},1024),(0,t.Wm)(E,{style:{"white-space":"pre-line","box-shadow":"0px 5px 5px gray"}},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.answer),1)])),_:2},1024)])),_:2},1024)):(0,t.kq)("",!0)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(i.Z)])),_:1}))}};const Q=D;var R=Q},4075:function(e,l,a){a.d(l,{J:function(){return d}});var t=a(3396),n=a(7041),o=a(2370),s=a(4870),i=a(320),r=a(131),u=a(9888);const d=(0,i.ev)()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...(0,n.x$)()},setup(e,l){let{attrs:a}=l;const{themeClasses:i}=(0,n.ER)(e),{textColorClasses:d,textColorStyles:p}=(0,o.rY)((0,s.Vh)(e,"color")),c=(0,t.Fl)((()=>{const l={};return e.length&&(l[e.vertical?"maxHeight":"maxWidth"]=(0,r.kb)(e.length)),e.thickness&&(l[e.vertical?"borderRightWidth":"borderTopWidth"]=(0,r.kb)(e.thickness)),l}));return(0,u.L)((()=>(0,t.Wm)("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},i.value,d.value],style:[c.value,p.value],"aria-orientation":a.role&&"separator"!==a.role?void 0:e.vertical?"vertical":"horizontal",role:`${a.role||"separator"}`},null))),{}}})},1136:function(e,l,a){a.d(l,{H:function(){return s},l:function(){return i}});var t=a(4870),n=a(3396),o=a(3766);const s=(0,o.U)({eager:Boolean},"lazy");function i(e,l){const a=(0,t.iH)(!1),o=(0,n.Fl)((()=>a.value||e.eager||l.value));function s(){e.eager||(a.value=!1)}return(0,n.YP)(l,(()=>a.value=!0)),{isBooted:a,hasContent:o,onAfterLeave:s}}}}]);
//# sourceMappingURL=628.24daf984.js.map