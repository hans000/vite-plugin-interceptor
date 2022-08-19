var minimatch=function(){"use strict";var t="object"==typeof process&&process&&"win32"===process.platform?{sep:"\\"}:{sep:"/"},e=n;function n(t,e,n){t instanceof RegExp&&(t=s(t,n)),e instanceof RegExp&&(e=s(e,n));var i=r(t,e,n);return i&&{start:i[0],end:i[1],pre:n.slice(0,i[0]),body:n.slice(i[0]+t.length,i[1]),post:n.slice(i[1]+e.length)}}function s(t,e){var n=e.match(t);return n?n[0]:null}function r(t,e,n){var s,r,i,a,o,h=n.indexOf(t),c=n.indexOf(e,h+1),p=h;if(h>=0&&c>0){if(t===e)return[h,c];for(s=[],i=n.length;p>=0&&!o;)p==h?(s.push(p),h=n.indexOf(t,p+1)):1==s.length?o=[s.pop(),c]:((r=s.pop())<i&&(i=r,a=c),c=n.indexOf(e,p+1)),p=h<c&&h>=0?h:c;s.length&&(o=[i,a])}return o}n.range=r;var i=e,a=function(t){if(!t)return[];"{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2));return v(function(t){return t.split("\\\\").join(o).split("\\{").join(h).split("\\}").join(c).split("\\,").join(p).split("\\.").join(l)}(t),!0).map(g)},o="\0SLASH"+Math.random()+"\0",h="\0OPEN"+Math.random()+"\0",c="\0CLOSE"+Math.random()+"\0",p="\0COMMA"+Math.random()+"\0",l="\0PERIOD"+Math.random()+"\0";function u(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function g(t){return t.split(o).join("\\").split(h).join("{").split(c).join("}").split(p).join(",").split(l).join(".")}function f(t){if(!t)return[""];var e=[],n=i("{","}",t);if(!n)return t.split(",");var s=n.pre,r=n.body,a=n.post,o=s.split(",");o[o.length-1]+="{"+r+"}";var h=f(a);return a.length&&(o[o.length-1]+=h.shift(),o.push.apply(o,h)),e.push.apply(e,o),e}function d(t){return"{"+t+"}"}function b(t){return/^-?0\d/.test(t)}function m(t,e){return t<=e}function y(t,e){return t>=e}function v(t,e){var n=[],s=i("{","}",t);if(!s)return[t];var r=s.pre,a=s.post.length?v(s.post,!1):[""];if(/\$$/.test(s.pre))for(var o=0;o<a.length;o++){var h=r+"{"+s.body+"}"+a[o];n.push(h)}else{var p,l,g=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body),x=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body),E=g||x,j=s.body.indexOf(",")>=0;if(!E&&!j)return s.post.match(/,.*\}/)?v(t=s.pre+"{"+s.body+c+s.post):[t];if(E)p=s.body.split(/\.\./);else if(1===(p=f(s.body)).length&&1===(p=v(p[0],!1).map(d)).length)return a.map((function(t){return s.pre+p[0]+t}));if(E){var w=u(p[0]),O=u(p[1]),S=Math.max(p[0].length,p[1].length),A=3==p.length?Math.abs(u(p[2])):1,$=m;O<w&&(A*=-1,$=y);var M=p.some(b);l=[];for(var R=w;$(R,O);R+=A){var k;if(x)"\\"===(k=String.fromCharCode(R))&&(k="");else if(k=String(R),M){var C=S-k.length;if(C>0){var N=new Array(C+1).join("0");k=R<0?"-"+N+k.slice(1):N+k}}l.push(k)}}else{l=[];for(var P=0;P<p.length;P++)l.push.apply(l,v(p[P],!1))}for(P=0;P<l.length;P++)for(o=0;o<a.length;o++){h=r+l[P]+a[o];(!e||E||h)&&n.push(h)}}return n}const x=(t,e,n={})=>(T(e),!(!n.nocomment&&"#"===e.charAt(0))&&new B(e,n).match(t));var E=x;const j=t;x.sep=j.sep;const w=Symbol("globstar **");x.GLOBSTAR=w;const O=a,S={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},A="[^/]",$="[^/]*?",M=t=>t.split("").reduce(((t,e)=>(t[e]=!0,t)),{}),R=M("().*{}+?[]^$\\!"),k=M("[.("),C=/\/+/;x.filter=(t,e={})=>(n,s,r)=>x(n,t,e);const N=(t,e={})=>{const n={};return Object.keys(t).forEach((e=>n[e]=t[e])),Object.keys(e).forEach((t=>n[t]=e[t])),n};x.defaults=t=>{if(!t||"object"!=typeof t||!Object.keys(t).length)return x;const e=x,n=(n,s,r)=>e(n,s,N(t,r));return(n.Minimatch=class extends e.Minimatch{constructor(e,n){super(e,N(t,n))}}).defaults=n=>e.defaults(N(t,n)).Minimatch,n.filter=(n,s)=>e.filter(n,N(t,s)),n.defaults=n=>e.defaults(N(t,n)),n.makeRe=(n,s)=>e.makeRe(n,N(t,s)),n.braceExpand=(n,s)=>e.braceExpand(n,N(t,s)),n.match=(n,s,r)=>e.match(n,s,N(t,r)),n},x.braceExpand=(t,e)=>P(t,e);const P=(t,e={})=>(T(t),e.nobrace||!/\{(?:(?!\{).)*\}/.test(t)?[t]:O(t)),T=t=>{if("string"!=typeof t)throw new TypeError("invalid pattern");if(t.length>65536)throw new TypeError("pattern is too long")},L=Symbol("subparse");x.makeRe=(t,e)=>new B(t,e||{}).makeRe(),x.match=(t,e,n={})=>{const s=new B(e,n);return t=t.filter((t=>s.match(t))),s.options.nonull&&!t.length&&t.push(e),t};class B{constructor(t,e){T(t),e||(e={}),this.options=e,this.set=[],this.pattern=t,this.windowsPathsNoEscape=!!e.windowsPathsNoEscape||!1===e.allowWindowsEscape,this.windowsPathsNoEscape&&(this.pattern=this.pattern.replace(/\\/g,"/")),this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.partial=!!e.partial,this.make()}debug(){}make(){const t=this.pattern,e=this.options;if(!e.nocomment&&"#"===t.charAt(0))return void(this.comment=!0);if(!t)return void(this.empty=!0);this.parseNegate();let n=this.globSet=this.braceExpand();e.debug&&(this.debug=(...t)=>console.error(...t)),this.debug(this.pattern,n),n=this.globParts=n.map((t=>t.split(C))),this.debug(this.pattern,n),n=n.map(((t,e,n)=>t.map(this.parse,this))),this.debug(this.pattern,n),n=n.filter((t=>-1===t.indexOf(!1))),this.debug(this.pattern,n),this.set=n}parseNegate(){if(this.options.nonegate)return;const t=this.pattern;let e=!1,n=0;for(let s=0;s<t.length&&"!"===t.charAt(s);s++)e=!e,n++;n&&(this.pattern=t.substr(n)),this.negate=e}matchOne(t,e,n){var s=this.options;this.debug("matchOne",{this:this,file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var r=0,i=0,a=t.length,o=e.length;r<a&&i<o;r++,i++){this.debug("matchOne loop");var h,c=e[i],p=t[r];if(this.debug(e,c,p),!1===c)return!1;if(c===w){this.debug("GLOBSTAR",[e,c,p]);var l=r,u=i+1;if(u===o){for(this.debug("** at the end");r<a;r++)if("."===t[r]||".."===t[r]||!s.dot&&"."===t[r].charAt(0))return!1;return!0}for(;l<a;){var g=t[l];if(this.debug("\nglobstar while",t,l,e,u,g),this.matchOne(t.slice(l),e.slice(u),n))return this.debug("globstar found match!",l,a,g),!0;if("."===g||".."===g||!s.dot&&"."===g.charAt(0)){this.debug("dot detected!",t,l,e,u);break}this.debug("globstar swallow a segment, and continue"),l++}return!(!n||(this.debug("\n>>> no match, partial?",t,l,e,u),l!==a))}if("string"==typeof c?(h=p===c,this.debug("string match",c,p,h)):(h=p.match(c),this.debug("pattern match",c,p,h)),!h)return!1}if(r===a&&i===o)return!0;if(r===a)return n;if(i===o)return r===a-1&&""===t[r];throw new Error("wtf?")}braceExpand(){return P(this.pattern,this.options)}parse(t,e){T(t);const n=this.options;if("**"===t){if(!n.noglobstar)return w;t="*"}if(""===t)return"";let s="",r=!!n.nocase,i=!1;const a=[],o=[];let h,c,p,l,u=!1,g=-1,f=-1;const d="."===t.charAt(0)?"":n.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",b=()=>{if(h){switch(h){case"*":s+=$,r=!0;break;case"?":s+=A,r=!0;break;default:s+="\\"+h}this.debug("clearStateChar %j %j",h,s),h=!1}};for(let e,d=0;d<t.length&&(e=t.charAt(d));d++)if(this.debug("%s\t%s %s %j",t,d,s,e),i){if("/"===e)return!1;R[e]&&(s+="\\"),s+=e,i=!1}else switch(e){case"/":return!1;case"\\":b(),i=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s\t%s %s %j <-- stateChar",t,d,s,e),u){this.debug("  in class"),"!"===e&&d===f+1&&(e="^"),s+=e;continue}this.debug("call clearStateChar %j",h),b(),h=e,n.noext&&b();continue;case"(":if(u){s+="(";continue}if(!h){s+="\\(";continue}a.push({type:h,start:d-1,reStart:s.length,open:S[h].open,close:S[h].close}),s+="!"===h?"(?:(?!(?:":"(?:",this.debug("plType %j %j",h,s),h=!1;continue;case")":if(u||!a.length){s+="\\)";continue}b(),r=!0,p=a.pop(),s+=p.close,"!"===p.type&&o.push(p),p.reEnd=s.length;continue;case"|":if(u||!a.length){s+="\\|";continue}b(),s+="|";continue;case"[":if(b(),u){s+="\\"+e;continue}u=!0,f=d,g=s.length,s+=e;continue;case"]":if(d===f+1||!u){s+="\\"+e;continue}c=t.substring(f+1,d);try{RegExp("["+c+"]")}catch(t){l=this.parse(c,L),s=s.substr(0,g)+"\\["+l[0]+"\\]",r=r||l[1],u=!1;continue}r=!0,u=!1,s+=e;continue;default:b(),!R[e]||"^"===e&&u||(s+="\\"),s+=e}for(u&&(c=t.substr(f+1),l=this.parse(c,L),s=s.substr(0,g)+"\\["+l[0],r=r||l[1]),p=a.pop();p;p=a.pop()){let t;t=s.slice(p.reStart+p.open.length),this.debug("setting tail",s,p),t=t.replace(/((?:\\{2}){0,64})(\\?)\|/g,((t,e,n)=>(n||(n="\\"),e+e+n+"|"))),this.debug("tail=%j\n   %s",t,t,p,s);const e="*"===p.type?$:"?"===p.type?A:"\\"+p.type;r=!0,s=s.slice(0,p.reStart)+e+"\\("+t}b(),i&&(s+="\\\\");const m=k[s.charAt(0)];for(let t=o.length-1;t>-1;t--){const n=o[t],r=s.slice(0,n.reStart),i=s.slice(n.reStart,n.reEnd-8);let a=s.slice(n.reEnd);const h=s.slice(n.reEnd-8,n.reEnd)+a,c=r.split("(").length-1;let p=a;for(let t=0;t<c;t++)p=p.replace(/\)[+*?]?/,"");a=p;s=r+i+a+(""===a&&e!==L?"$":"")+h}if(""!==s&&r&&(s="(?=.)"+s),m&&(s=d+s),e===L)return[s,r];if(!r)return t.replace(/\\(.)/g,"$1");const y=n.nocase?"i":"";try{return Object.assign(new RegExp("^"+s+"$",y),{_glob:t,_src:s})}catch(t){return new RegExp("$.")}}makeRe(){if(this.regexp||!1===this.regexp)return this.regexp;const t=this.set;if(!t.length)return this.regexp=!1,this.regexp;const e=this.options,n=e.noglobstar?$:e.dot?"(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?":"(?:(?!(?:\\/|^)\\.).)*?",s=e.nocase?"i":"";let r=t.map((t=>(t=t.map((t=>"string"==typeof t?t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):t===w?w:t._src)).reduce(((t,e)=>(t[t.length-1]===w&&e===w||t.push(e),t)),[]),t.forEach(((e,s)=>{e===w&&t[s-1]!==w&&(0===s?t.length>1?t[s+1]="(?:\\/|"+n+"\\/)?"+t[s+1]:t[s]=n:s===t.length-1?t[s-1]+="(?:\\/|"+n+")?":(t[s-1]+="(?:\\/|\\/"+n+"\\/)"+t[s+1],t[s+1]=w))})),t.filter((t=>t!==w)).join("/")))).join("|");r="^(?:"+r+")$",this.negate&&(r="^(?!"+r+").*$");try{this.regexp=new RegExp(r,s)}catch(t){this.regexp=!1}return this.regexp}match(t,e=this.partial){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;const n=this.options;"/"!==j.sep&&(t=t.split(j.sep).join("/")),t=t.split(C),this.debug(this.pattern,"split",t);const s=this.set;let r;this.debug(this.pattern,"set",s);for(let e=t.length-1;e>=0&&(r=t[e],!r);e--);for(let i=0;i<s.length;i++){const a=s[i];let o=t;n.matchBase&&1===a.length&&(o=[r]);if(this.matchOne(o,a,e))return!!n.flipNegate||!this.negate}return!n.flipNegate&&this.negate}static defaults(t){return x.defaults(t).Minimatch}}return x.Minimatch=B,E}();

self.addEventListener('install',() => {
    self.skipWaiting()
})

self.addEventListener('activate',() => {
    self.clients.claim()
})

const __ruleMap = new Map()

function sendMsg(action) {
    self.clients.matchAll().then(clients => {
        if (clients) {
            clients.forEach(client => {
                client.postMessage(action)
            })
        }
    })
}

const handleMap = {
    __INTERCEPTOR_DEVTOOL_SET__({ id, rule }) {
        if (rule && typeof rule === 'object') {
            __ruleMap.set(id, rule)
        } else {
            __ruleMap.delete(id)
        }
        sendMsg({
            type: '__INTERCEPTOR_DEVTOOL_SW_SET__'
        })
    },
    __INTERCEPTOR_DEVTOOL_GET__() {
        sendMsg({
            type: '__INTERCEPTOR_DEVTOOL_SW_GET__',
            payload: __ruleMap,
        })
    },
    __INTERCEPTOR_DEVTOOL_CLEAR__() {
        __ruleMap.clear()
        sendMsg({
            type: '__INTERCEPTOR_DEVTOOL_SW_CLEAR__'
        })
    }
}

self.addEventListener('message', event => {
    if (event.data && typeof event.data === 'object') {
        const { type, payload } = event.data
        const handle = handleMap[type]
        if (handle) {
            handle(payload)
        }
    }
})

self.addEventListener('fetch', (event) => {
    const { url, method } = event.request
    const matchItem = matching(__ruleMap, url, method.toLowerCase())

    if (matchItem) {
        const [, rule] = matchItem
        const { response, responseHeaders, status, enable = true, delay } = rule
        if (enable) {
            event.respondWith(new Promise((resolve) => {
                setTimeout(() => {
                    resolve(new Response(response, {
                        status: status || 200,
                        headers: responseHeaders || {},
                    }))
                }, delay|| 0)
            }))
        }
    }
})

function matching(ruleMap, url, method) {
    for (const [id, rule] of ruleMap) {
        if (
            minimatch(url, rule.url) &&
            (rule.method ? (rule.method.toLowerCase() === method) : true)
        ) {
            return [id, rule]
        }
    }
}