import{r,R as b}from"./index-76fb7be0.js";import{_ as $}from"./extends-98964cd2.js";import{c as W,a as F,L as T}from"./Loading-bf9a763b.js";import"./_commonjsHelpers-de833af9.js";function Z(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function J(...e){return t=>e.forEach(n=>Z(n,t))}const H=r.forwardRef((e,t)=>{const{children:n,...a}=e,o=r.Children.toArray(n),s=o.find(M);if(s){const i=s.props.children,c=o.map(y=>y===s?r.Children.count(i)>1?r.Children.only(null):r.isValidElement(i)?i.props.children:null:y);return r.createElement(v,$({},a,{ref:t}),r.isValidElement(i)?r.cloneElement(i,void 0,c):null)}return r.createElement(v,$({},a,{ref:t}),n)});H.displayName="Slot";const v=r.forwardRef((e,t)=>{const{children:n,...a}=e;return r.isValidElement(n)?r.cloneElement(n,{...Q(a,n.props),ref:t?J(t,n.ref):n.ref}):r.Children.count(n)>1?r.Children.only(null):null});v.displayName="SlotClone";const K=({children:e})=>r.createElement(r.Fragment,null,e);function M(e){return r.isValidElement(e)&&e.type===K}function Q(e,t){const n={...t};for(const a in t){const o=e[a],s=t[a];/^on[A-Z]/.test(a)?o&&s?n[a]=(...c)=>{s(...c),o(...c)}:o&&(n[a]=o):a==="style"?n[a]={...o,...s}:a==="className"&&(n[a]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}const U=F("bg-green inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 px-3",lg:"h-11 px-8",icon:"h-10 w-10"},rounded:{none:"rounded-none",md:"rounded-md",full:"rounded-full"}},defaultVariants:{variant:"default",size:"default",rounded:"md"}}),h=r.forwardRef(({className:e,variant:t,size:n,rounded:a,asChild:o=!1,...s},i)=>{const c=o?H:"button";return r.createElement(c,{className:W(U({variant:t,size:n,rounded:a,className:e})),ref:i,...s})});h.displayName="Button";try{h.displayName="Button",h.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null'}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:'"none" | "md" | "full" | null'}}}}}catch{}const re={title:"Components/Button",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{rounded:{options:["none","md","full"],control:{type:"radio"}}}},l={args:{variant:"default",children:"Button Primary",rounded:"full"}},d={args:{variant:"secondary",children:"Button Secondary"}},u={args:{variant:"destructive",children:"Button Destructive"}},m={args:{variant:"outline",children:"Button Outline"}},p={args:{variant:"ghost",children:"Button Ghost"}},f={args:{variant:"link",children:"Button Link"}},g={args:{variant:"outline",size:"default",children:b.createElement("span",{className:"flex items-center gap-4"},b.createElement(T,{type:"points",size:"sm"}),"Loading...")}};var x,B,E;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: "Button Primary",
    rounded: "full"
  }
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var S,C,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Button Secondary"
  }
}`,...(V=(C=d.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var _,k,N;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Button Destructive"
  }
}`,...(N=(k=u.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var L,z,P;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Button Outline"
  }
}`,...(P=(z=m.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var O,q,w;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Button Ghost"
  }
}`,...(w=(q=p.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var D,G,R;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "link",
    children: "Button Link"
  }
}`,...(R=(G=f.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var A,I,j;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "default",
    children: <span className="flex items-center gap-4">
        <Loading type="points" size="sm" />
        Loading...
      </span>
  }
}`,...(j=(I=g.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const te=["Primary","Secondary","Destructive","Outline","Ghost","Link","WithIcon"];export{u as Destructive,p as Ghost,f as Link,m as Outline,l as Primary,d as Secondary,g as WithIcon,te as __namedExportsOrder,re as default};
//# sourceMappingURL=Button.stories-78733f5d.js.map
