(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const Lo="180",Th=0,ec=1,Ah=2,Cl=1,Rl=2,zn=3,Bn=0,qt=1,it=2,Kn=0,es=1,Lr=2,tc=3,nc=4,Ch=5,fi=100,Rh=101,Ph=102,Dh=103,Lh=104,Ih=200,Uh=201,Nh=202,Fh=203,Ir=204,Ur=205,zh=206,Oh=207,Bh=208,kh=209,Hh=210,Gh=211,Vh=212,Wh=213,Xh=214,Nr=0,Fr=1,zr=2,ns=3,Or=4,Br=5,kr=6,Hr=7,Pl=0,qh=1,$h=2,Zn=0,Yh=1,jh=2,Kh=3,Dl=4,Zh=5,Jh=6,Qh=7,Ll=300,is=301,ss=302,Gr=303,Vr=304,za=306,Aa=1e3,mi=1001,Wr=1002,Dt=1003,ed=1004,Gs=1005,wn=1006,Xa=1007,gi=1008,An=1009,Il=1010,Ul=1011,Ds=1012,Io=1013,xi=1014,En=1015,zs=1016,Uo=1017,No=1018,Ls=1020,Nl=35902,Fl=35899,zl=1021,Ol=1022,mn=1023,Is=1026,Us=1027,Fo=1028,zo=1029,Bl=1030,Oo=1031,Bo=1033,Ma=33776,Sa=33777,ba=33778,wa=33779,Xr=35840,qr=35841,$r=35842,Yr=35843,jr=36196,Kr=37492,Zr=37496,Jr=37808,Qr=37809,eo=37810,to=37811,no=37812,io=37813,so=37814,ao=37815,ro=37816,oo=37817,co=37818,lo=37819,ho=37820,uo=37821,fo=36492,po=36494,mo=36495,go=36283,xo=36284,_o=36285,vo=36286,td=3200,nd=3201,kl=0,id=1,jn="",nn="srgb",as="srgb-linear",Ca="linear",lt="srgb",Ti=7680,ic=519,sd=512,ad=513,rd=514,Hl=515,od=516,cd=517,ld=518,hd=519,yo=35044,sc="300 es",Tn=2e3,Ra=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qa=Math.PI/180,Mo=180/Math.PI;function Jn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ze(s,e,t){return Math.max(e,Math.min(t,s))}function dd(s,e){return(s%e+e)%e}function $a(s,e,t){return(1-t)*s+t*e}function Sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*x,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const T=Math.sqrt(v),E=Math.atan2(T,f*y);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}const _=o*y;if(l=l*m+u*_,c=c*m+p*_,h=h*m+g*_,d=d*m+x*_,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=a[r],u=a[r+1],p=a[r+2],g=a[r+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(a/2),u=l(n/2),p=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(a+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(a-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(r-i)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),h=2*(o*t-a*i),d=2*(a*n-r*t);return this.x=t+l*c+r*d-o*h,this.y=n+l*h+o*c-a*d,this.z=i+l*d+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new P,ac=new Os;class Xe{constructor(e,t,n,i,a,r,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c)}set(e,t,n,i,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],y=i[1],v=i[4],_=i[7],T=i[2],E=i[5],A=i[8];return a[0]=r*x+o*y+l*T,a[3]=r*m+o*v+l*E,a[6]=r*f+o*_+l*A,a[1]=c*x+h*y+d*T,a[4]=c*m+h*v+d*E,a[7]=c*f+h*_+d*A,a[2]=u*x+p*y+g*T,a[5]=u*m+p*v+g*E,a[8]=u*f+p*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*r-o*c,u=o*l-h*a,p=c*a-r*l,g=t*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*r)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*a-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(r*t-n*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new Xe;function Gl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ud(){const s=Pa("canvas");return s.style.display="block",s}const rc={};function Ns(s){s in rc||(rc[s]=!0,console.warn(s))}function fd(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const oc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pd(){const s={enabled:!0,workingColorSpace:as,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===lt&&(i.r=On(i.r),i.g=On(i.g),i.b=On(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===lt&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===jn?Ca:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return Ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return Ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[as]:{primaries:e,whitePoint:n,transfer:Ca,toXYZ:oc,fromXYZ:cc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:oc,fromXYZ:cc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),s}const nt=pd();function On(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ai;class md{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=Pa("canvas")),Ai.width=e.width,Ai.height=e.height;const i=Ai.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=On(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gd=0;class ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(Ka(i[r].image)):a.push(Ka(i[r]))}else a=Ka(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ka(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?md.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xd=0;const Za=new P;class Ht extends hs{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=mi,i=mi,a=wn,r=gi,o=mn,l=An,c=Ht.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Jn(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Za).x}get height(){return this.source.getSize(Za).y}get depth(){return this.source.getSize(Za).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Ll;Ht.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,_=(p+1)/2,T=(f+1)/2,E=(h+u)/4,A=(d+x)/4,D=(g+m)/4;return v>_&&v>T?v<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(v),i=E/n,a=A/n):_>T?_<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(_),n=E/i,a=D/i):T<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(T),n=A/a,i=D/a),this.set(n,i,a,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _d extends hs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:n.depth},a=new Ht(i);this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ko(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends _d{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vl extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vd extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,dn):dn.fromBufferAttribute(a,r),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Ws.subVectors(this.max,ps),Ci.subVectors(e.a,ps),Ri.subVectors(e.b,ps),Pi.subVectors(e.c,ps),Gn.subVectors(Ri,Ci),Vn.subVectors(Pi,Ri),si.subVectors(Ci,Pi);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-si.z,si.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,si.z,0,-si.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-si.y,si.x,0];return!Ja(t,Ci,Ri,Pi,Ws)||(t=[1,0,0,0,1,0,0,0,1],!Ja(t,Ci,Ri,Pi,Ws))?!1:(Xs.crossVectors(Gn,Vn),t=[Xs.x,Xs.y,Xs.z],Ja(t,Ci,Ri,Pi,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,Vs=new Si,Ci=new P,Ri=new P,Pi=new P,Gn=new P,Vn=new P,si=new P,ps=new P,Ws=new P,Xs=new P,ai=new P;function Ja(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){ai.fromArray(s,a);const o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yd=new Si,ms=new P,Qa=new P;class bi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yd.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Qa)),this.expandByPoint(ms.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const In=new P,er=new P,qs=new P,Wn=new P,tr=new P,$s=new P,nr=new P;class Ho{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){er.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(er);const a=e.distanceTo(t)*.5,r=-this.direction.dot(qs),o=Wn.dot(this.direction),l=-Wn.dot(qs),c=Wn.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*l-o,u=r*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(er).addScaledVector(qs,u),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,i,a){tr.subVectors(t,e),$s.subVectors(n,e),nr.crossVectors(tr,$s);let r=this.direction.dot(nr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot($s.crossVectors(Wn,$s));if(l<0)return null;const c=o*this.direction.dot(tr.cross(Wn));if(c<0||l+c>r)return null;const h=-o*Wn.dot(nr);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,i,a,r,o,l,c,h,d,u,p,g,x,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c,h,d,u,p,g,x,m)}set(e,t,n,i,a,r,o,l,c,h,d,u,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Di.setFromMatrixColumn(e,0).length(),a=1/Di.setFromMatrixColumn(e,1).length(),r=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const u=r*h,p=r*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-r*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=x-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,p=r*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,p=r*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+p,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-x*d}else if(e.order==="XZY"){const u=r*l,p=r*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=r*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Md,e,Sd)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Xn.crossVectors(n,Qt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Xn.crossVectors(n,Qt)),Xn.normalize(),Ys.crossVectors(Qt,Xn),i[0]=Xn.x,i[4]=Ys.x,i[8]=Qt.x,i[1]=Xn.y,i[5]=Ys.y,i[9]=Qt.y,i[2]=Xn.z,i[6]=Ys.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],y=n[3],v=n[7],_=n[11],T=n[15],E=i[0],A=i[4],D=i[8],M=i[12],b=i[1],I=i[5],O=i[9],W=i[13],k=i[2],Y=i[6],K=i[10],Q=i[14],X=i[3],ae=i[7],pe=i[11],ye=i[15];return a[0]=r*E+o*b+l*k+c*X,a[4]=r*A+o*I+l*Y+c*ae,a[8]=r*D+o*O+l*K+c*pe,a[12]=r*M+o*W+l*Q+c*ye,a[1]=h*E+d*b+u*k+p*X,a[5]=h*A+d*I+u*Y+p*ae,a[9]=h*D+d*O+u*K+p*pe,a[13]=h*M+d*W+u*Q+p*ye,a[2]=g*E+x*b+m*k+f*X,a[6]=g*A+x*I+m*Y+f*ae,a[10]=g*D+x*O+m*K+f*pe,a[14]=g*M+x*W+m*Q+f*ye,a[3]=y*E+v*b+_*k+T*X,a[7]=y*A+v*I+_*Y+T*ae,a[11]=y*D+v*O+_*K+T*pe,a[15]=y*M+v*W+_*Q+T*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+a*l*d-i*c*d-a*o*u+n*c*u+i*o*p-n*l*p)+x*(+t*l*p-t*c*u+a*r*u-i*r*p+i*c*h-a*l*h)+m*(+t*c*d-t*o*p-a*r*d+n*r*p+a*o*h-n*c*h)+f*(-i*o*h-t*l*d+t*o*u+i*r*d-n*r*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],y=d*m*c-x*u*c+x*l*p-o*m*p-d*l*f+o*u*f,v=g*u*c-h*m*c-g*l*p+r*m*p+h*l*f-r*u*f,_=h*x*c-g*d*c+g*o*p-r*x*p-h*o*f+r*d*f,T=g*d*l-h*x*l-g*o*u+r*x*u+h*o*m-r*d*m,E=t*y+n*v+i*_+a*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=y*A,e[1]=(x*u*a-d*m*a-x*i*p+n*m*p+d*i*f-n*u*f)*A,e[2]=(o*m*a-x*l*a+x*i*c-n*m*c-o*i*f+n*l*f)*A,e[3]=(d*l*a-o*u*a-d*i*c+n*u*c+o*i*p-n*l*p)*A,e[4]=v*A,e[5]=(h*m*a-g*u*a+g*i*p-t*m*p-h*i*f+t*u*f)*A,e[6]=(g*l*a-r*m*a-g*i*c+t*m*c+r*i*f-t*l*f)*A,e[7]=(r*u*a-h*l*a+h*i*c-t*u*c-r*i*p+t*l*p)*A,e[8]=_*A,e[9]=(g*d*a-h*x*a-g*n*p+t*x*p+h*n*f-t*d*f)*A,e[10]=(r*x*a-g*o*a+g*n*c-t*x*c-r*n*f+t*o*f)*A,e[11]=(h*o*a-r*d*a-h*n*c+t*d*c+r*n*p-t*o*p)*A,e[12]=T*A,e[13]=(h*x*i-g*d*i+g*n*u-t*x*u-h*n*m+t*d*m)*A,e[14]=(g*o*i-r*x*i-g*n*l+t*x*l+r*n*m-t*o*m)*A,e[15]=(r*d*i-h*o*i+h*n*l-t*d*l-r*n*u+t*o*u)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,d=o+o,u=a*c,p=a*h,g=a*d,x=r*h,m=r*d,f=o*d,y=l*c,v=l*h,_=l*d,T=n.x,E=n.y,A=n.z;return i[0]=(1-(x+f))*T,i[1]=(p+_)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(p-_)*E,i[5]=(1-(u+f))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+v)*A,i[9]=(m-y)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=Di.set(i[0],i[1],i[2]).length();const r=Di.set(i[4],i[5],i[6]).length(),o=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],un.copy(this);const c=1/a,h=1/r,d=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,t.setFromRotationMatrix(un),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,i,a,r,o=Tn,l=!1){const c=this.elements,h=2*a/(t-e),d=2*a/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i);let g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===Tn)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Ra)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=Tn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===Tn)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===Ra)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new P,un=new ft,Md=new P(0,0,0),Sd=new P(1,1,1),Xn=new P,Ys=new P,Qt=new P,lc=new ft,hc=new Os;class Cn{constructor(e=0,t=0,n=0,i=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hc.setFromEuler(this),this.setFromQuaternion(hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bd=0;const dc=new P,Li=new Os,Un=new ft,js=new P,gs=new P,wd=new P,Ed=new Os,uc=new P(1,0,0),fc=new P(0,1,0),pc=new P(0,0,1),mc={type:"added"},Td={type:"removed"},Ii={type:"childadded",child:null},ir={type:"childremoved",child:null};class Tt extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new P,t=new Cn,n=new Os,i=new P(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new Xe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(pc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?js.copy(e):js.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(gs,js,this.up):Un.lookAt(js,gs,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Un),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Td),ir.child=e,this.dispatchEvent(ir),ir.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new P(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new P,Nn=new P,sr=new P,Fn=new P,Ui=new P,Ni=new P,gc=new P,ar=new P,rr=new P,or=new P,cr=new dt,lr=new dt,hr=new dt;class hn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){fn.subVectors(i,t),Nn.subVectors(n,t),sr.subVectors(e,t);const r=fn.dot(fn),o=fn.dot(Nn),l=fn.dot(sr),c=Nn.dot(Nn),h=Nn.dot(sr),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,i,a,r,o,l){return this.getBarycoord(e,t,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Fn.x),l.addScaledVector(r,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,i,a,r){return cr.setScalar(0),lr.setScalar(0),hr.setScalar(0),cr.fromBufferAttribute(e,t),lr.fromBufferAttribute(e,n),hr.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(cr,a.x),r.addScaledVector(lr,a.y),r.addScaledVector(hr,a.z),r}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),Nn.subVectors(e,t),fn.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),fn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;Ui.subVectors(i,n),Ni.subVectors(a,n),ar.subVectors(e,n);const l=Ui.dot(ar),c=Ni.dot(ar);if(l<=0&&c<=0)return t.copy(n);rr.subVectors(e,i);const h=Ui.dot(rr),d=Ni.dot(rr);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Ui,r);or.subVectors(e,a);const p=Ui.dot(or),g=Ni.dot(or);if(g>=0&&p<=g)return t.copy(a);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ni,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return gc.subVectors(a,i),o=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(gc,o);const f=1/(m+x+u);return r=x*f,o=u*f,t.copy(n).addScaledVector(Ui,r).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function dr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=dd(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=dr(r,a,e+1/3),this.g=dr(r,a,e),this.b=dr(r,a,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=nn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=Xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return nt.workingToColorSpace(kt.copy(this),e),Math.round(Ze(kt.r*255,0,255))*65536+Math.round(Ze(kt.g*255,0,255))*256+Math.round(Ze(kt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,a=kt.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(i-a)/d+(i<a?6:0);break;case i:l=(a-n)/d+2;break;case a:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=nn){nt.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Ks);const n=$a(qn.h,Ks.h,t),i=$a(qn.s,Ks.s,t),a=$a(qn.l,Ks.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new xe;xe.NAMES=Xl;let Ad=0;class ei extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=es,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ir,this.blendDst=Ur,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ir&&(n.blendSrc=this.blendSrc),this.blendDst!==Ur&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xn extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new P,Zs=new ke;let Cd=0;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yo,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),a=ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yo&&(e.usage=this.usage),e}}class ql extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $l extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rd=0;const cn=new ft,ur=new Tt,Fi=new P,en=new Si,xs=new Si,zt=new P;class At extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gl(e)?$l:ql)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Xe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return ur.lookAt(e),ur.updateMatrix(),this.applyMatrix4(ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new rt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];en.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(en.min,xs.min),en.expandByPoint(zt),zt.addVectors(en.max,xs.max),en.expandByPoint(zt)):(en.expandByPoint(xs.min),en.expandByPoint(xs.max))}en.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)zt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),zt.add(Fi)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new P,l[D]=new P;const c=new P,h=new P,d=new P,u=new ke,p=new ke,g=new ke,x=new P,m=new P;function f(D,M,b){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,b),u.fromBufferAttribute(a,D),p.fromBufferAttribute(a,M),g.fromBufferAttribute(a,b),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[D].add(x),o[M].add(x),o[b].add(x),l[D].add(m),l[M].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,M=y.length;D<M;++D){const b=y[D],I=b.start,O=b.count;for(let W=I,k=I+O;W<k;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new P,_=new P,T=new P,E=new P;function A(D){T.fromBufferAttribute(i,D),E.copy(T);const M=o[D];v.copy(M),v.sub(T.multiplyScalar(T.dot(M))).normalize(),_.crossVectors(E,M);const I=_.dot(l[D])<0?-1:1;r.setXYZW(D,v.x,v.y,v.z,I)}for(let D=0,M=y.length;D<M;++D){const b=y[D],I=b.start,O=b.count;for(let W=I,k=I+O;W<k;W+=3)A(e.getX(W+0)),A(e.getX(W+1)),A(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new P,a=new P,r=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new $t(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new ft,ri=new Ho,Js=new bi,_c=new P,Qs=new P,ea=new P,ta=new P,fr=new P,na=new P,vc=new P,ia=new P;class ve extends Tt{constructor(e=new At,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){na.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(fr.fromBufferAttribute(d,e),r?na.addScaledVector(fr,h):na.addScaledVector(fr.sub(t),h))}t.add(na)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(a),ri.copy(e.ray).recast(e.near),!(Js.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Js,_c)===null||ri.origin.distanceToSquared(_c)>(e.far-e.near)**2))&&(xc.copy(a).invert(),ri.copy(e.ray).applyMatrix4(xc),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=r[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,T=v;_<T;_+=3){const E=o.getX(_),A=o.getX(_+1),D=o.getX(_+2);i=sa(this,f,e,n,c,h,d,E,A,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const y=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);i=sa(this,r,e,n,c,h,d,y,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=r[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,T=v;_<T;_+=3){const E=_,A=_+1,D=_+2;i=sa(this,f,e,n,c,h,d,E,A,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const y=m,v=m+1,_=m+2;i=sa(this,r,e,n,c,h,d,y,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Pd(s,e,t,n,i,a,r,o){let l;if(e.side===qt?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,e.side===Bn,o),l===null)return null;ia.copy(o),ia.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ia);return c<t.near||c>t.far?null:{distance:c,point:ia.clone(),object:s}}function sa(s,e,t,n,i,a,r,o,l,c){s.getVertexPosition(o,Qs),s.getVertexPosition(l,ea),s.getVertexPosition(c,ta);const h=Pd(s,e,t,n,Qs,ea,ta,vc);if(h){const d=new P;hn.getBarycoord(vc,Qs,ea,ta,d),i&&(h.uv=hn.getInterpolatedAttribute(i,o,l,c,d,new ke)),a&&(h.uv1=hn.getInterpolatedAttribute(a,o,l,c,d,new ke)),r&&(h.normal=hn.getInterpolatedAttribute(r,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};hn.getNormal(Qs,ea,ta,u.normal),h.face=u,h.barycoord=d}return h}class ti extends At{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function g(x,m,f,y,v,_,T,E,A,D,M){const b=_/A,I=T/D,O=_/2,W=T/2,k=E/2,Y=A+1,K=D+1;let Q=0,X=0;const ae=new P;for(let pe=0;pe<K;pe++){const ye=pe*I-W;for(let He=0;He<Y;He++){const Qe=He*b-O;ae[x]=Qe*y,ae[m]=ye*v,ae[f]=k,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[m]=0,ae[f]=E>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(He/A),d.push(1-pe/D),Q+=1}}for(let pe=0;pe<D;pe++)for(let ye=0;ye<A;ye++){const He=u+ye+Y*pe,Qe=u+ye+Y*(pe+1),st=u+(ye+1)+Y*(pe+1),Ke=u+(ye+1)+Y*pe;l.push(He,Qe,Ke),l.push(Qe,st,Ke),X+=6}o.addGroup(p,X,M),p+=X,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(s){const e={};for(let t=0;t<s.length;t++){const n=rs(s[t]);for(const i in n)e[i]=n[i]}return e}function Dd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Ld={clone:rs,merge:Wt};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Dd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jl extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new P,yc=new ke,Mc=new ke;class sn extends jl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,yc,Mc),t.subVectors(Mc,yc)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Oi=1;class Nd extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(zi,Oi,e,t);i.layers=this.layers,this.add(i);const a=new sn(zi,Oi,e,t);a.layers=this.layers,this.add(a);const r=new sn(zi,Oi,e,t);r.layers=this.layers,this.add(r);const o=new sn(zi,Oi,e,t);o.layers=this.layers,this.add(o);const l=new sn(zi,Oi,e,t);l.layers=this.layers,this.add(l);const c=new sn(zi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kl extends Ht{constructor(e=[],t=is,n,i,a,r,o,l,c,h){super(e,t,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fd extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ti(5,5,5),a=new kn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Kn});a.uniforms.tEquirect.value=t;const r=new ve(i,a),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=wn),new Nd(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}class fe extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zd={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Go{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new Go(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Od extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yo,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new P;class Da{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),a=ht(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Da(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vo extends ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bi;const _s=new P,ki=new P,Hi=new P,Gi=new ke,vs=new ke,Zl=new ft,aa=new P,ys=new P,ra=new P,Sc=new ke,mr=new ke,bc=new ke;class Jl extends Tt{constructor(e=new Vo){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bd(t,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new Da(n,3,0,!1)),Bi.setAttribute("uv",new Da(n,2,3,!1))}this.geometry=Bi,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),Zl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Hi.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;oa(aa.set(-.5,-.5,0),Hi,r,ki,i,a),oa(ys.set(.5,-.5,0),Hi,r,ki,i,a),oa(ra.set(.5,.5,0),Hi,r,ki,i,a),Sc.set(0,0),mr.set(1,0),bc.set(1,1);let o=e.ray.intersectTriangle(aa,ys,ra,!1,_s);if(o===null&&(oa(ys.set(-.5,.5,0),Hi,r,ki,i,a),mr.set(0,1),o=e.ray.intersectTriangle(aa,ra,ys,!1,_s),o===null))return;const l=e.ray.origin.distanceTo(_s);l<e.near||l>e.far||t.push({distance:l,point:_s.clone(),uv:hn.getInterpolation(_s,aa,ys,ra,Sc,mr,bc,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function oa(s,e,t,n,i,a){Gi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(vs.x=a*Gi.x-i*Gi.y,vs.y=i*Gi.x+a*Gi.y):vs.copy(Gi),s.copy(e),s.x+=vs.x,s.y+=vs.y,s.applyMatrix4(Zl)}class kd extends Ht{constructor(e=null,t=1,n=1,i,a,r,o,l,c=Dt,h=Dt,d,u){super(null,r,o,l,c,h,i,a,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wc extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new ft,Ec=new ft,ca=[],Tc=new Si,Hd=new ft,Ms=new ve,Ss=new bi;class Gd extends ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),Tc.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(Tc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),Ss.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(Ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),e.ray.intersectsSphere(Ss)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Vi),Ec.multiplyMatrices(n,Vi),Ms.matrixWorld=Ec,Ms.raycast(e,ca);for(let r=0,o=ca.length;r<o;r++){const l=ca[r];l.instanceId=a,l.object=this,t.push(l)}ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new kd(new Float32Array(i*this.count),i,this.count,Fo,En));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*e;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gr=new P,Vd=new P,Wd=new Xe;class di{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gr.subVectors(n,t).cross(Vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wd.getNormalMatrix(e),i=this.coplanarPoint(gr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new bi,Xd=new ke(.5,.5),la=new P;class Wo{constructor(e=new di,t=new di,n=new di,i=new di,a=new di,r=new di){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const i=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],u=a[6],p=a[7],g=a[8],x=a[9],m=a[10],f=a[11],y=a[12],v=a[13],_=a[14],T=a[15];if(i[0].setComponents(c-r,p-h,f-g,T-y).normalize(),i[1].setComponents(c+r,p+h,f+g,T+y).normalize(),i[2].setComponents(c+o,p+d,f+x,T+v).normalize(),i[3].setComponents(c-o,p-d,f-x,T-v).normalize(),n)i[4].setComponents(l,u,m,_).normalize(),i[5].setComponents(c-l,p-u,f-m,T-_).normalize();else if(i[4].setComponents(c-l,p-u,f-m,T-_).normalize(),t===Tn)i[5].setComponents(c+l,p+u,f+m,T+_).normalize();else if(t===Ra)i[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=Xd.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(la.x=i.normal.x>0?e.max.x:e.min.x,la.y=i.normal.y>0?e.max.y:e.min.y,la.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xo extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const La=new P,Ia=new P,Ac=new ft,bs=new Ho,ha=new bi,xr=new P,Cc=new P;class Ql extends Tt{constructor(e=new At,t=new Xo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)La.fromBufferAttribute(t,i-1),Ia.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=La.distanceTo(Ia);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(i),ha.radius+=a,e.ray.intersectsSphere(ha)===!1)return;Ac.copy(i).invert(),bs.copy(e.ray).applyMatrix4(Ac);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){const f=h.getX(x),y=h.getX(x+1),v=da(this,e,bs,l,f,y,x);v&&t.push(v)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),f=da(this,e,bs,l,x,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){const f=da(this,e,bs,l,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){const x=da(this,e,bs,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function da(s,e,t,n,i,a,r){const o=s.geometry.attributes.position;if(La.fromBufferAttribute(o,i),Ia.fromBufferAttribute(o,a),t.distanceSqToSegment(La,Ia,xr,Cc)>n)return;xr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(xr);if(!(c<e.near||c>e.far))return{distance:c,point:Cc.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const Rc=new P,Pc=new P;class qd extends Ql{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)Rc.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rc.distanceTo(Pc);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class So extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dc=new ft,bo=new Ho,ua=new bi,fa=new P;class Lc extends Tt{constructor(e=new At,t=new So){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=a,e.ray.intersectsSphere(ua)===!1)return;Dc.copy(i).invert(),bo.copy(e.ray).applyMatrix4(Dc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=u,x=p;g<x;g++){const m=c.getX(g);fa.fromBufferAttribute(d,m),Ic(fa,m,l,i,e,t,this)}}else{const u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=u,x=p;g<x;g++)fa.fromBufferAttribute(d,g),Ic(fa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ic(s,e,t,n,i,a,r){const o=bo.distanceSqToPoint(s);if(o<t){const l=new P;bo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Oa extends Ht{constructor(e,t,n,i,a,r,o,l,c){super(e,t,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eh extends Ht{constructor(e,t,n=xi,i,a,r,o=Dt,l=Dt,c,h=Is,d=1){if(h!==Is&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class th extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rn extends At{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new P,h=new ke;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=n+d/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wi extends At{constructor(e=1,t=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],d=[],u=[],p=[];let g=0;const x=[],m=n/2;let f=0;y(),r===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(p,2));function y(){const _=new P,T=new P;let E=0;const A=(t-e)/n;for(let D=0;D<=a;D++){const M=[],b=D/a,I=b*(t-e)+e;for(let O=0;O<=i;O++){const W=O/i,k=W*l+o,Y=Math.sin(k),K=Math.cos(k);T.x=I*Y,T.y=-b*n+m,T.z=I*K,d.push(T.x,T.y,T.z),_.set(Y,A,K).normalize(),u.push(_.x,_.y,_.z),p.push(W,1-b),M.push(g++)}x.push(M)}for(let D=0;D<i;D++)for(let M=0;M<a;M++){const b=x[M][D],I=x[M+1][D],O=x[M+1][D+1],W=x[M][D+1];(e>0||M!==0)&&(h.push(b,I,W),E+=3),(t>0||M!==a-1)&&(h.push(I,O,W),E+=3)}c.addGroup(f,E,0),f+=E}function v(_){const T=g,E=new ke,A=new P;let D=0;const M=_===!0?e:t,b=_===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,m*b,0),u.push(0,b,0),p.push(.5,.5),g++;const I=g;for(let O=0;O<=i;O++){const k=O/i*l+o,Y=Math.cos(k),K=Math.sin(k);A.x=M*K,A.y=m*b,A.z=M*Y,d.push(A.x,A.y,A.z),u.push(0,b,0),E.x=Y*.5+.5,E.y=K*.5*b+.5,p.push(E.x,E.y),g++}for(let O=0;O<i;O++){const W=T+O,k=I+O;_===!0?h.push(k,k+1,W):h.push(k+1,k,W),D+=3}c.addGroup(f,D,_===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class It extends wi{constructor(e=1,t=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new It(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ba extends At{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const a=[],r=[];o(i),c(n),h(),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(a.slice(),3)),this.setAttribute("uv",new rt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new P,_=new P,T=new P;for(let E=0;E<t.length;E+=3)p(t[E+0],v),p(t[E+1],_),p(t[E+2],T),l(v,_,T,y)}function l(y,v,_,T){const E=T+1,A=[];for(let D=0;D<=E;D++){A[D]=[];const M=y.clone().lerp(_,D/E),b=v.clone().lerp(_,D/E),I=E-D;for(let O=0;O<=I;O++)O===0&&D===E?A[D][O]=M:A[D][O]=M.clone().lerp(b,O/I)}for(let D=0;D<E;D++)for(let M=0;M<2*(E-D)-1;M++){const b=Math.floor(M/2);M%2===0?(u(A[D][b+1]),u(A[D+1][b]),u(A[D][b])):(u(A[D][b+1]),u(A[D+1][b+1]),u(A[D+1][b]))}}function c(y){const v=new P;for(let _=0;_<a.length;_+=3)v.x=a[_+0],v.y=a[_+1],v.z=a[_+2],v.normalize().multiplyScalar(y),a[_+0]=v.x,a[_+1]=v.y,a[_+2]=v.z}function h(){const y=new P;for(let v=0;v<a.length;v+=3){y.x=a[v+0],y.y=a[v+1],y.z=a[v+2];const _=m(y)/2/Math.PI+.5,T=f(y)/Math.PI+.5;r.push(_,1-T)}g(),d()}function d(){for(let y=0;y<r.length;y+=6){const v=r[y+0],_=r[y+2],T=r[y+4],E=Math.max(v,_,T),A=Math.min(v,_,T);E>.9&&A<.1&&(v<.2&&(r[y+0]+=1),_<.2&&(r[y+2]+=1),T<.2&&(r[y+4]+=1))}}function u(y){a.push(y.x,y.y,y.z)}function p(y,v){const _=y*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function g(){const y=new P,v=new P,_=new P,T=new P,E=new ke,A=new ke,D=new ke;for(let M=0,b=0;M<a.length;M+=9,b+=6){y.set(a[M+0],a[M+1],a[M+2]),v.set(a[M+3],a[M+4],a[M+5]),_.set(a[M+6],a[M+7],a[M+8]),E.set(r[b+0],r[b+1]),A.set(r[b+2],r[b+3]),D.set(r[b+4],r[b+5]),T.copy(y).add(v).add(_).divideScalar(3);const I=m(T);x(E,b+0,y,I),x(A,b+2,v,I),x(D,b+4,_,I)}}function x(y,v,_,T){T<0&&y.x===1&&(r[v]=y.x-1),_.x===0&&_.z===0&&(r[v]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.vertices,e.indices,e.radius,e.details)}}class qo extends Ba{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qo(e.radius,e.detail)}}class ds extends Ba{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ds(e.radius,e.detail)}}class Hn extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const y=f*u-r;for(let v=0;v<c;v++){const _=v*d-a;g.push(_,-y,0),x.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,_=y+c*(f+1),T=y+1+c*(f+1),E=y+1+c*f;p.push(v,_,E),p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pn extends At{constructor(e=.5,t=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,p=new P,g=new ke;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const f=a+m/n*r;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let f=0;f<n;f++){const y=f+m,v=y,_=y+n+1,T=y+n+2,E=y+1;o.push(v,_,E),o.push(_,T,E)}}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bs extends At{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new P,u=new P,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const y=[],v=f/n;let _=0;f===0&&r===0?_=.5/t:f===n&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){const E=T/t;d.x=-e*Math.cos(i+E*a)*Math.sin(r+v*o),d.y=e*Math.cos(r+v*o),d.z=e*Math.sin(i+E*a)*Math.sin(r+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+_,1-v),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const v=h[f][y+1],_=h[f][y],T=h[f+1][y],E=h[f+1][y+1];(f!==0||r>0)&&p.push(v,_,E),(f!==n-1||l<Math.PI)&&p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gn extends At{constructor(e=1,t=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],h=new P,d=new P,u=new P;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const x=g/i*a,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const x=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,y=(i+1)*p+g;r.push(x,m,y),r.push(m,f,y)}this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ut extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $d extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yd extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ka extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jd extends ka{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _r=new ft,Uc=new P,Nc=new P;class nh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uc),Nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nc),t.updateMatrixWorld(),_r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_r,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fc=new ft,ws=new P,vr=new P;class Kd extends nh{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(ws),vr.copy(n.position),vr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vr),n.updateMatrixWorld(),i.makeTranslation(-ws.x,-ws.y,-ws.z),Fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc,n.coordinateSystem,n.reversedDepth)}}class Qn extends ka{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ih extends jl{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zd extends nh{constructor(){super(new ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zc extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Zd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jd extends ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qd extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class eu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Oc(s,e,t,n){const i=tu(n);switch(t){case zl:return s*e;case Fo:return s*e/i.components*i.byteLength;case zo:return s*e/i.components*i.byteLength;case Bl:return s*e*2/i.components*i.byteLength;case Oo:return s*e*2/i.components*i.byteLength;case Ol:return s*e*3/i.components*i.byteLength;case mn:return s*e*4/i.components*i.byteLength;case Bo:return s*e*4/i.components*i.byteLength;case Ma:case Sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ba:case wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qr:case Yr:return Math.max(s,16)*Math.max(e,8)/4;case Xr:case $r:return Math.max(s,8)*Math.max(e,8)/2;case jr:case Kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case eo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case to:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case no:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case io:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case so:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ro:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case oo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ho:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case uo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case fo:case po:case mo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case go:case xo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _o:case vo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tu(s){switch(s){case An:case Il:return{byteLength:1,components:1};case Ds:case Ul:case zs:return{byteLength:2,components:1};case Uo:case No:return{byteLength:2,components:4};case xi:case Io:case En:return{byteLength:4,components:1};case Nl:case Fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);function sh(){let s=null,e=!1,t=null,n=null;function i(a,r){t(a,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function nu(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}var iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,su=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,du=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ju=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,If=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,up=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ep=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:iu,alphahash_pars_fragment:su,alphamap_fragment:au,alphamap_pars_fragment:ru,alphatest_fragment:ou,alphatest_pars_fragment:cu,aomap_fragment:lu,aomap_pars_fragment:hu,batching_pars_vertex:du,batching_vertex:uu,begin_vertex:fu,beginnormal_vertex:pu,bsdfs:mu,iridescence_fragment:gu,bumpmap_pars_fragment:xu,clipping_planes_fragment:_u,clipping_planes_pars_fragment:vu,clipping_planes_pars_vertex:yu,clipping_planes_vertex:Mu,color_fragment:Su,color_pars_fragment:bu,color_pars_vertex:wu,color_vertex:Eu,common:Tu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:Cu,displacementmap_pars_vertex:Ru,displacementmap_vertex:Pu,emissivemap_fragment:Du,emissivemap_pars_fragment:Lu,colorspace_fragment:Iu,colorspace_pars_fragment:Uu,envmap_fragment:Nu,envmap_common_pars_fragment:Fu,envmap_pars_fragment:zu,envmap_pars_vertex:Ou,envmap_physical_pars_fragment:ju,envmap_vertex:Bu,fog_vertex:ku,fog_pars_vertex:Hu,fog_fragment:Gu,fog_pars_fragment:Vu,gradientmap_pars_fragment:Wu,lightmap_pars_fragment:Xu,lights_lambert_fragment:qu,lights_lambert_pars_fragment:$u,lights_pars_begin:Yu,lights_toon_fragment:Ku,lights_toon_pars_fragment:Zu,lights_phong_fragment:Ju,lights_phong_pars_fragment:Qu,lights_physical_fragment:ef,lights_physical_pars_fragment:tf,lights_fragment_begin:nf,lights_fragment_maps:sf,lights_fragment_end:af,logdepthbuf_fragment:rf,logdepthbuf_pars_fragment:of,logdepthbuf_pars_vertex:cf,logdepthbuf_vertex:lf,map_fragment:hf,map_pars_fragment:df,map_particle_fragment:uf,map_particle_pars_fragment:ff,metalnessmap_fragment:pf,metalnessmap_pars_fragment:mf,morphinstance_vertex:gf,morphcolor_vertex:xf,morphnormal_vertex:_f,morphtarget_pars_vertex:vf,morphtarget_vertex:yf,normal_fragment_begin:Mf,normal_fragment_maps:Sf,normal_pars_fragment:bf,normal_pars_vertex:wf,normal_vertex:Ef,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:Af,clearcoat_normal_fragment_maps:Cf,clearcoat_pars_fragment:Rf,iridescence_pars_fragment:Pf,opaque_fragment:Df,packing:Lf,premultiplied_alpha_fragment:If,project_vertex:Uf,dithering_fragment:Nf,dithering_pars_fragment:Ff,roughnessmap_fragment:zf,roughnessmap_pars_fragment:Of,shadowmap_pars_fragment:Bf,shadowmap_pars_vertex:kf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Gf,skinbase_vertex:Vf,skinning_pars_vertex:Wf,skinning_vertex:Xf,skinnormal_vertex:qf,specularmap_fragment:$f,specularmap_pars_fragment:Yf,tonemapping_fragment:jf,tonemapping_pars_fragment:Kf,transmission_fragment:Zf,transmission_pars_fragment:Jf,uv_pars_fragment:Qf,uv_pars_vertex:ep,uv_vertex:tp,worldpos_vertex:np,background_vert:ip,background_frag:sp,backgroundCube_vert:ap,backgroundCube_frag:rp,cube_vert:op,cube_frag:cp,depth_vert:lp,depth_frag:hp,distanceRGBA_vert:dp,distanceRGBA_frag:up,equirect_vert:fp,equirect_frag:pp,linedashed_vert:mp,linedashed_frag:gp,meshbasic_vert:xp,meshbasic_frag:_p,meshlambert_vert:vp,meshlambert_frag:yp,meshmatcap_vert:Mp,meshmatcap_frag:Sp,meshnormal_vert:bp,meshnormal_frag:wp,meshphong_vert:Ep,meshphong_frag:Tp,meshphysical_vert:Ap,meshphysical_frag:Cp,meshtoon_vert:Rp,meshtoon_frag:Pp,points_vert:Dp,points_frag:Lp,shadow_vert:Ip,shadow_frag:Up,sprite_vert:Np,sprite_frag:Fp},le={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},yn={basic:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new xe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Wt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Wt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new xe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Wt([le.points,le.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Wt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Wt([le.common,le.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Wt([le.sprite,le.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Wt([le.common,le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Wt([le.lights,le.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};yn.physical={uniforms:Wt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const pa={r:0,b:0,g:0},ci=new Cn,zp=new ft;function Op(s,e,t,n,i,a,r){const o=new xe(0);let l=a===!0?0:1,c,h,d=null,u=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1;const T=g(v);T===null?f(o,l):T&&T.isColor&&(f(T,1),_=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,_){const T=g(_);T&&(T.isCubeTexture||T.mapping===za)?(h===void 0&&(h=new ve(new ti(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:rs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ci.copy(_.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zp.makeRotationFromEuler(ci)),h.material.toneMapped=nt.getTransfer(T.colorSpace)!==lt,(d!==T||u!==T.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=T,u=T.version,p=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ve(new Hn(2,2),new kn({name:"BackgroundMaterial",uniforms:rs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=nt.getTransfer(T.colorSpace)!==lt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||u!==T.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=T,u=T.version,p=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,_){v.getRGB(pa,Yl(s)),n.buffers.color.setClear(pa.r,pa.g,pa.b,_,r)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(o,l)},render:x,addToRenderList:m,dispose:y}}function Bp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,r=!1;function o(b,I,O,W,k){let Y=!1;const K=d(W,O,I);a!==K&&(a=K,c(a.object)),Y=p(b,W,O,k),Y&&g(b,W,O,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,_(b,I,O,W),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function d(b,I,O){const W=O.wireframe===!0;let k=n[b.id];k===void 0&&(k={},n[b.id]=k);let Y=k[I.id];Y===void 0&&(Y={},k[I.id]=Y);let K=Y[W];return K===void 0&&(K=u(l()),Y[W]=K),K}function u(b){const I=[],O=[],W=[];for(let k=0;k<t;k++)I[k]=0,O[k]=0,W[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:W,object:b,attributes:{},index:null}}function p(b,I,O,W){const k=a.attributes,Y=I.attributes;let K=0;const Q=O.getAttributes();for(const X in Q)if(Q[X].location>=0){const pe=k[X];let ye=Y[X];if(ye===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor)),pe===void 0||pe.attribute!==ye||ye&&pe.data!==ye.data)return!0;K++}return a.attributesNum!==K||a.index!==W}function g(b,I,O,W){const k={},Y=I.attributes;let K=0;const Q=O.getAttributes();for(const X in Q)if(Q[X].location>=0){let pe=Y[X];pe===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor));const ye={};ye.attribute=pe,pe&&pe.data&&(ye.data=pe.data),k[X]=ye,K++}a.attributes=k,a.attributesNum=K,a.index=W}function x(){const b=a.newAttributes;for(let I=0,O=b.length;I<O;I++)b[I]=0}function m(b){f(b,0)}function f(b,I){const O=a.newAttributes,W=a.enabledAttributes,k=a.attributeDivisors;O[b]=1,W[b]===0&&(s.enableVertexAttribArray(b),W[b]=1),k[b]!==I&&(s.vertexAttribDivisor(b,I),k[b]=I)}function y(){const b=a.newAttributes,I=a.enabledAttributes;for(let O=0,W=I.length;O<W;O++)I[O]!==b[O]&&(s.disableVertexAttribArray(O),I[O]=0)}function v(b,I,O,W,k,Y,K){K===!0?s.vertexAttribIPointer(b,I,O,k,Y):s.vertexAttribPointer(b,I,O,W,k,Y)}function _(b,I,O,W){x();const k=W.attributes,Y=O.getAttributes(),K=I.defaultAttributeValues;for(const Q in Y){const X=Y[Q];if(X.location>=0){let ae=k[Q];if(ae===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ae!==void 0){const pe=ae.normalized,ye=ae.itemSize,He=e.get(ae);if(He===void 0)continue;const Qe=He.buffer,st=He.type,Ke=He.bytesPerElement,Z=st===s.INT||st===s.UNSIGNED_INT||ae.gpuType===Io;if(ae.isInterleavedBufferAttribute){const q=ae.data,oe=q.stride,be=ae.offset;if(q.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)f(X.location+me,q.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let me=0;me<X.locationSize;me++)v(X.location+me,ye/X.locationSize,st,pe,oe*Ke,(be+ye/X.locationSize*me)*Ke,Z)}else{if(ae.isInstancedBufferAttribute){for(let q=0;q<X.locationSize;q++)f(X.location+q,ae.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let q=0;q<X.locationSize;q++)m(X.location+q);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let q=0;q<X.locationSize;q++)v(X.location+q,ye/X.locationSize,st,pe,ye*Ke,ye/X.locationSize*q*Ke,Z)}}else if(K!==void 0){const pe=K[Q];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(X.location,pe);break;case 3:s.vertexAttrib3fv(X.location,pe);break;case 4:s.vertexAttrib4fv(X.location,pe);break;default:s.vertexAttrib1fv(X.location,pe)}}}}y()}function T(){D();for(const b in n){const I=n[b];for(const O in I){const W=I[O];for(const k in W)h(W[k].object),delete W[k];delete I[O]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const I=n[b.id];for(const O in I){const W=I[O];for(const k in W)h(W[k].object),delete W[k];delete I[O]}delete n[b.id]}function A(b){for(const I in n){const O=n[I];if(O[b.id]===void 0)continue;const W=O[b.id];for(const k in W)h(W[k].object),delete W[k];delete O[b.id]}}function D(){M(),r=!0,a!==i&&(a=i,c(a.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function kp(s,e,t){let n;function i(c){n=c}function a(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];t.update(g,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hp(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==mn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==An&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==En&&!D)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function Gp(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new di,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||a&&!m)a?h(null):c();else{const y=a?0:n,v=y*4;let _=f.clippingState||null;l.value=_,_=h(g,u,v,p);for(let T=0;T!==v;++T)_[T]=t[T];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,_=p;v!==x;++v,_+=4)r.copy(d[v]).applyMatrix4(y,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Vp(s){let e=new WeakMap;function t(r,o){return o===Gr?r.mapping=is:o===Vr&&(r.mapping=ss),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Gr||o===Vr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Fd(l.height);return c.fromEquirectangularTexture(s,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Ji=4,Bc=[.125,.215,.35,.446,.526,.582],pi=20,yr=new ih,kc=new xe;let Mr=null,Sr=0,br=0,wr=!1;const ui=(1+Math.sqrt(5))/2,Wi=1/ui,Hc=[new P(-ui,Wi,0),new P(ui,Wi,0),new P(-Wi,0,ui),new P(Wi,0,ui),new P(0,ui,-Wi),new P(0,ui,Wi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Wp=new P;class Gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,a={}){const{size:r=256,position:o=Wp}=a;Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mr,Sr,br),this._renderer.xr.enabled=wr,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:zs,format:mn,colorSpace:as,depthBuffer:!1},i=Vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xp(a)),this._blurMaterial=qp(a,e,t)}return i}_compileMaterial(e){const t=new ve(this._lodPlanes[0],e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,n,i,a){const l=new sn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(kc),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const x=new xn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new ve(new ti,x);let f=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,f=!0):(x.color.copy(kc),f=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[v],a.y,a.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[v],a.z)):(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[v]));const T=this._cubeSize;ma(i,_*T,v>2?T:0,T,T),d.setRenderTarget(i),f&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===is||e.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new ve(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Hc[(i-a-1)%Hc.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",a),this._halfBlur(r,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ve(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*pi-1),x=a/g,m=isFinite(a)?1+Math.floor(h*x):pi;m>pi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const f=[];let y=0;for(let A=0;A<pi;++A){const D=A/x,M=Math.exp(-D*D/2);f.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const _=this._sizeLods[i],T=3*_*(i>v-Ji?i-v+Ji:0),E=4*(this._cubeSize-_);ma(t,T,E,3*_,2*_),l.setRenderTarget(t),l.render(d,yr)}}function Xp(s){const e=[],t=[],n=[];let i=s;const a=s-Ji+1+Bc.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>s-Ji?l=Bc[r-s+Ji-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,f=1,y=new Float32Array(x*g*p),v=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,D=E>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(M,x*g*E),v.set(u,m*g*E);const b=[E,E,E,E,E,E];_.set(b,f*g*E)}const T=new At;T.setAttribute("position",new $t(y,x)),T.setAttribute("uv",new $t(v,m)),T.setAttribute("faceIndex",new $t(_,f)),e.push(T),i>Ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vc(s,e,t){const n=new _i(s,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function qp(s,e,t){const n=new Float32Array(pi),i=new P(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Wc(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Xc(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $p(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gr||l===Vr,h=l===is||l===ss;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Gc(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Gc(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Yp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ns("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jp(s,e,t,n){const i={},a=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],s.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let v=0,_=y.length;v<_;v+=3){const T=y[v+0],E=y[v+1],A=y[v+2];u.push(T,E,E,A,A,T)}}else if(g!==void 0){const y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){const T=v+0,E=v+1,A=v+2;u.push(T,E,E,A,A,T)}}else return;const m=new(Gl(u)?$l:ql)(u,1);m.version=x;const f=a.get(d);f&&e.remove(f),a.set(d,m)}function h(d){const u=a.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Kp(s,e,t){let n;function i(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,p){s.drawElements(n,p,a,u*r),t.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,a,u*r,g),t.update(p,n,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(u,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/r,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,u,0,x,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*x[y];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Zp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Jp(s,e,t){const n=new WeakMap,i=new dt;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let b=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var p=b;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let T=o.attributes.position.count*_,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*E*4*d),D=new Vl(A,T,E,d);D.type=En,D.needsUpdate=!0;const M=_*4;for(let I=0;I<d;I++){const O=f[I],W=y[I],k=v[I],Y=T*E*4*I;for(let K=0;K<O.count;K++){const Q=K*M;g===!0&&(i.fromBufferAttribute(O,K),A[Y+Q+0]=i.x,A[Y+Q+1]=i.y,A[Y+Q+2]=i.z,A[Y+Q+3]=0),x===!0&&(i.fromBufferAttribute(W,K),A[Y+Q+4]=i.x,A[Y+Q+5]=i.y,A[Y+Q+6]=i.z,A[Y+Q+7]=0),m===!0&&(i.fromBufferAttribute(k,K),A[Y+Q+8]=i.x,A[Y+Q+9]=i.y,A[Y+Q+10]=i.z,A[Y+Q+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:D,size:new ke(T,E)},n.set(o,u),o.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function Qp(s,e,t,n){let i=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}const ah=new Ht,qc=new eh(1,1),rh=new Vl,oh=new vd,ch=new Kl,$c=[],Yc=[],jc=new Float32Array(16),Kc=new Float32Array(9),Zc=new Float32Array(4);function us(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=$c[i];if(a===void 0&&(a=new Float32Array(i),$c[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ha(s,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function em(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function nm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function im(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function sm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Zc.set(n),s.uniformMatrix2fv(this.addr,!1,Zc),Nt(t,n)}}function am(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Kc.set(n),s.uniformMatrix3fv(this.addr,!1,Kc),Nt(t,n)}}function rm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;jc.set(n),s.uniformMatrix4fv(this.addr,!1,jc),Nt(t,n)}}function om(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function dm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function fm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function pm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function mm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(qc.compareFunction=Hl,a=qc):a=ah,t.setTexture2D(e||a,i)}function gm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||oh,i)}function xm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ch,i)}function _m(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rh,i)}function vm(s){switch(s){case 5126:return em;case 35664:return tm;case 35665:return nm;case 35666:return im;case 35674:return sm;case 35675:return am;case 35676:return rm;case 5124:case 35670:return om;case 35667:case 35671:return cm;case 35668:case 35672:return lm;case 35669:case 35673:return hm;case 5125:return dm;case 36294:return um;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return _m}}function ym(s,e){s.uniform1fv(this.addr,e)}function Mm(s,e){const t=us(e,this.size,2);s.uniform2fv(this.addr,t)}function Sm(s,e){const t=us(e,this.size,3);s.uniform3fv(this.addr,t)}function bm(s,e){const t=us(e,this.size,4);s.uniform4fv(this.addr,t)}function wm(s,e){const t=us(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Em(s,e){const t=us(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Tm(s,e){const t=us(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Am(s,e){s.uniform1iv(this.addr,e)}function Cm(s,e){s.uniform2iv(this.addr,e)}function Rm(s,e){s.uniform3iv(this.addr,e)}function Pm(s,e){s.uniform4iv(this.addr,e)}function Dm(s,e){s.uniform1uiv(this.addr,e)}function Lm(s,e){s.uniform2uiv(this.addr,e)}function Im(s,e){s.uniform3uiv(this.addr,e)}function Um(s,e){s.uniform4uiv(this.addr,e)}function Nm(s,e,t){const n=this.cache,i=e.length,a=Ha(t,i);Ut(n,a)||(s.uniform1iv(this.addr,a),Nt(n,a));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||ah,a[r])}function Fm(s,e,t){const n=this.cache,i=e.length,a=Ha(t,i);Ut(n,a)||(s.uniform1iv(this.addr,a),Nt(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||oh,a[r])}function zm(s,e,t){const n=this.cache,i=e.length,a=Ha(t,i);Ut(n,a)||(s.uniform1iv(this.addr,a),Nt(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||ch,a[r])}function Om(s,e,t){const n=this.cache,i=e.length,a=Ha(t,i);Ut(n,a)||(s.uniform1iv(this.addr,a),Nt(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||rh,a[r])}function Bm(s){switch(s){case 5126:return ym;case 35664:return Mm;case 35665:return Sm;case 35666:return bm;case 35674:return wm;case 35675:return Em;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return Cm;case 35668:case 35672:return Rm;case 35669:case 35673:return Pm;case 5125:return Dm;case 36294:return Lm;case 36295:return Im;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Om}}class km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vm(t.type)}}class Hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bm(t.type)}}class Gm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const Er=/(\w+)(\])?(\[|\.)?/g;function Jc(s,e){s.seq.push(e),s.map[e.id]=e}function Vm(s,e,t){const n=s.name,i=n.length;for(Er.lastIndex=0;;){const a=Er.exec(n),r=Er.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Jc(t,c===void 0?new km(o,s,e):new Hm(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Gm(o),Jc(t,d)),t=d}}}class Ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),r=e.getUniformLocation(t,a.name);Vm(a,r,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Qc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Wm=37297;let Xm=0;function qm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const el=new Xe;function $m(s){nt._getMatrix(el,nt.workingColorSpace,s);const e=`mat3( ${el.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case Ca:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function tl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+qm(s.getShaderSource(e),o)}else return a}function Ym(s,e){const t=$m(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jm(s,e){let t;switch(e){case Yh:t="Linear";break;case jh:t="Reinhard";break;case Kh:t="Cineon";break;case Dl:t="ACESFilmic";break;case Jh:t="AgX";break;case Qh:t="Neutral";break;case Zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ga=new P;function Km(){nt.getLuminanceCoefficients(ga);const s=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Jm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function Rs(s){return s!==""}function nl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function il(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(s){return s.replace(e0,n0)}const t0=new Map;function n0(s,e){let t=$e[e];if(t===void 0){const n=t0.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wo(t)}const i0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(s){return s.replace(i0,s0)}function s0(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function al(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function r0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case is:case ss:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o0(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===ss&&(e="ENVMAP_MODE_REFRACTION"),e}function c0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pl:e="ENVMAP_BLENDING_MULTIPLY";break;case qh:e="ENVMAP_BLENDING_MIX";break;case $h:e="ENVMAP_BLENDING_ADD";break}return e}function l0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function h0(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=a0(t),c=r0(t),h=o0(t),d=c0(t),u=l0(t),p=Zm(t),g=Jm(a),x=i.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),f.length>0&&(f+=`
`)):(m=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),f=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Zn?jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Ym("linearToOutputTexel",t.outputColorSpace),Km(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),r=wo(r),r=nl(r,t),r=il(r,t),o=wo(o),o=nl(o,t),o=il(o,t),r=sl(r),o=sl(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+m+r,_=y+f+o,T=Qc(i,i.VERTEX_SHADER,v),E=Qc(i,i.FRAGMENT_SHADER,_);i.attachShader(x,T),i.attachShader(x,E),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(I){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(x)||"",W=i.getShaderInfoLog(T)||"",k=i.getShaderInfoLog(E)||"",Y=O.trim(),K=W.trim(),Q=k.trim();let X=!0,ae=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,E);else{const pe=tl(i,T,"vertex"),ye=tl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+pe+`
`+ye)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(K===""||Q==="")&&(ae=!1);ae&&(I.diagnostics={runnable:X,programLog:Y,vertexShader:{log:K,prefix:m},fragmentShader:{log:Q,prefix:f}})}i.deleteShader(T),i.deleteShader(E),D=new Ea(i,x),M=Qm(i,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,Wm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}let d0=0;class u0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new f0(e),t.set(e,n)),n}}class f0{constructor(e){this.id=d0++,this.code=e,this.usedTimes=0}}function p0(s,e,t,n,i,a,r){const o=new Wl,l=new u0,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,I,O,W){const k=O.fog,Y=W.geometry,K=M.isMeshStandardMaterial?O.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),X=Q&&Q.mapping===za?Q.image.height:null,ae=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ye=pe!==void 0?pe.length:0;let He=0;Y.morphAttributes.position!==void 0&&(He=1),Y.morphAttributes.normal!==void 0&&(He=2),Y.morphAttributes.color!==void 0&&(He=3);let Qe,st,Ke,Z;if(ae){const at=yn[ae];Qe=at.vertexShader,st=at.fragmentShader}else Qe=M.vertexShader,st=M.fragmentShader,l.update(M),Ke=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);const q=s.getRenderTarget(),oe=s.state.buffers.depth.getReversed(),be=W.isInstancedMesh===!0,me=W.isBatchedMesh===!0,Ue=!!M.map,ot=!!M.matcap,R=!!Q,Ve=!!M.aoMap,Oe=!!M.lightMap,De=!!M.bumpMap,we=!!M.normalMap,yt=!!M.displacementMap,Ee=!!M.emissiveMap,qe=!!M.metalnessMap,Ft=!!M.roughnessMap,Ct=M.anisotropy>0,C=M.clearcoat>0,S=M.dispersion>0,B=M.iridescence>0,j=M.sheen>0,ee=M.transmission>0,$=Ct&&!!M.anisotropyMap,Re=C&&!!M.clearcoatMap,re=C&&!!M.clearcoatNormalMap,Te=C&&!!M.clearcoatRoughnessMap,Ae=B&&!!M.iridescenceMap,ie=B&&!!M.iridescenceThicknessMap,ue=j&&!!M.sheenColorMap,ze=j&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,he=!!M.specularColorMap,We=!!M.specularIntensityMap,U=ee&&!!M.transmissionMap,se=ee&&!!M.thicknessMap,ce=!!M.gradientMap,_e=!!M.alphaMap,te=M.alphaTest>0,J=!!M.alphaHash,Se=!!M.extensions;let Ge=Zn;M.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const xt={shaderID:ae,shaderType:M.type,shaderName:M.name,vertexShader:Qe,fragmentShader:st,defines:M.defines,customVertexShaderID:Ke,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:me,batchingColor:me&&W._colorsTexture!==null,instancing:be,instancingColor:be&&W.instanceColor!==null,instancingMorph:be&&W.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:q===null?s.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:as,alphaToCoverage:!!M.alphaToCoverage,map:Ue,matcap:ot,envMap:R,envMapMode:R&&Q.mapping,envMapCubeUVHeight:X,aoMap:Ve,lightMap:Oe,bumpMap:De,normalMap:we,displacementMap:u&&yt,emissiveMap:Ee,normalMapObjectSpace:we&&M.normalMapType===id,normalMapTangentSpace:we&&M.normalMapType===kl,metalnessMap:qe,roughnessMap:Ft,anisotropy:Ct,anisotropyMap:$,clearcoat:C,clearcoatMap:Re,clearcoatNormalMap:re,clearcoatRoughnessMap:Te,dispersion:S,iridescence:B,iridescenceMap:Ae,iridescenceThicknessMap:ie,sheen:j,sheenColorMap:ue,sheenRoughnessMap:ze,specularMap:Ce,specularColorMap:he,specularIntensityMap:We,transmission:ee,transmissionMap:U,thicknessMap:se,gradientMap:ce,opaque:M.transparent===!1&&M.blending===es&&M.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:J,combine:M.combine,mapUv:Ue&&x(M.map.channel),aoMapUv:Ve&&x(M.aoMap.channel),lightMapUv:Oe&&x(M.lightMap.channel),bumpMapUv:De&&x(M.bumpMap.channel),normalMapUv:we&&x(M.normalMap.channel),displacementMapUv:yt&&x(M.displacementMap.channel),emissiveMapUv:Ee&&x(M.emissiveMap.channel),metalnessMapUv:qe&&x(M.metalnessMap.channel),roughnessMapUv:Ft&&x(M.roughnessMap.channel),anisotropyMapUv:$&&x(M.anisotropyMap.channel),clearcoatMapUv:Re&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(M.sheenRoughnessMap.channel),specularMapUv:Ce&&x(M.specularMap.channel),specularColorMapUv:he&&x(M.specularColorMap.channel),specularIntensityMapUv:We&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:se&&x(M.thicknessMap.channel),alphaMapUv:_e&&x(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(we||Ct),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Y.attributes.uv&&(Ue||_e),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:W.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:He,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ue&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===lt,decodeVideoTextureEmissive:Ee&&M.emissiveMap.isVideoTexture===!0&&nt.getTransfer(M.emissiveMap.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===it,flipSided:M.side===qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Se&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&M.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(y(b,M),v(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const b=g[M.type];let I;if(b){const O=yn[b];I=Ld.clone(O.uniforms)}else I=M.uniforms;return I}function T(M,b){let I;for(let O=0,W=h.length;O<W;O++){const k=h[O];if(k.cacheKey===b){I=k,++I.usedTimes;break}}return I===void 0&&(I=new h0(s,b,M,a),h.push(I)),I}function E(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:D}}function m0(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function g0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ol(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(d,u,p,g,x,m){let f=s[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},s[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function o(d,u,p,g,x,m){const f=r(d,u,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(d,u,p,g,x,m){const f=r(d,u,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||g0),n.length>1&&n.sort(u||rl),i.length>1&&i.sort(u||rl)}function h(){for(let d=e,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:h,sort:c}}function x0(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new ol,s.set(n,[r])):i>=a.length?(r=new ol,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function _0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new xe};break;case"SpotLight":t={position:new P,direction:new P,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function v0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let y0=0;function M0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function S0(s){const e=new _0,t=v0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,a=new ft,r=new ft;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,y=0,v=0,_=0,T=0,E=0,A=0;c.sort(M0);for(let M=0,b=c.length;M<b;M++){const I=c[M],O=I.color,W=I.intensity,k=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*W,d+=O.g*W,u+=O.b*W;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],W);A++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,X=t.get(I);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=K,p++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(O).multiplyScalar(W),K.distance=k,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[x]=K;const Q=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,Q.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[x]=Q.matrix,I.castShadow){const X=t.get(I);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=Y,_++}x++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(O).multiplyScalar(W),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=K,m++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const Q=I.shadow,X=t.get(I);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=K,g++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(W),K.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[f]=K,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==y||D.numPointShadows!==v||D.numSpotShadows!==_||D.numSpotMaps!==T||D.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=y,D.numPointShadows=v,D.numSpotShadows=_,D.numSpotMaps=T,D.numLightProbes=A,n.version=y0++)}function l(c,h){let d=0,u=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const v=c[f];if(v.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(v.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function cl(s){const e=new S0(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function b0(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new cl(s),e.set(i,[o])):a>=r.length?(o=new cl(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function T0(s,e,t){let n=new Wo;const i=new ke,a=new ke,r=new dt,o=new $d({depthPacking:nd}),l=new Yd,c={},h=t.maxTextureSize,d={[Bn]:qt,[qt]:Bn,[it]:it},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:w0,fragmentShader:E0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ve(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let f=this.type;this.render=function(E,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Kn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=f!==zn&&this.type===zn,k=f===zn&&this.type!==zn;for(let Y=0,K=E.length;Y<K;Y++){const Q=E[Y],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ae=X.getFrameExtents();if(i.multiply(ae),a.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/ae.x),i.x=a.x*ae.x,X.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/ae.y),i.y=a.y*ae.y,X.mapSize.y=a.y)),X.map===null||W===!0||k===!0){const ye=this.type!==zn?{minFilter:Dt,magFilter:Dt}:{};X.map!==null&&X.map.dispose(),X.map=new _i(i.x,i.y,ye),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const pe=X.getViewportCount();for(let ye=0;ye<pe;ye++){const He=X.getViewport(ye);r.set(a.x*He.x,a.y*He.y,a.x*He.z,a.y*He.w),O.viewport(r),X.updateMatrices(Q,ye),n=X.getFrustum(),_(A,D,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===zn&&y(X,D),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,b,I)};function y(E,A){const D=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new _i(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,D,u,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,D,p,x,null)}function v(E,A,D,M){let b=null;const I=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)b=I;else if(b=D.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=b.uuid,W=A.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let Y=k[W];Y===void 0&&(Y=b.clone(),k[W]=Y,A.addEventListener("dispose",T)),b=Y}if(b.visible=A.visible,b.wireframe=A.wireframe,M===zn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=s.properties.get(b);O.light=D}return b}function _(E,A,D,M,b){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===zn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const W=e.update(E),k=E.material;if(Array.isArray(k)){const Y=W.groups;for(let K=0,Q=Y.length;K<Q;K++){const X=Y[K],ae=k[X.materialIndex];if(ae&&ae.visible){const pe=v(E,ae,M,b);E.onBeforeShadow(s,E,A,D,W,pe,X),s.renderBufferDirect(D,null,W,pe,E,X),E.onAfterShadow(s,E,A,D,W,pe,X)}}}else if(k.visible){const Y=v(E,k,M,b);E.onBeforeShadow(s,E,A,D,W,Y,null),s.renderBufferDirect(D,null,W,Y,E,null),E.onAfterShadow(s,E,A,D,W,Y,null)}}const O=E.children;for(let W=0,k=O.length;W<k;W++)_(O[W],A,D,M,b)}function T(E){E.target.removeEventListener("dispose",T);for(const D in c){const M=c[D],b=E.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const A0={[Nr]:Fr,[zr]:kr,[Or]:Hr,[ns]:Br,[Fr]:Nr,[kr]:zr,[Hr]:Or,[Br]:ns};function C0(s,e){function t(){let U=!1;const se=new dt;let ce=null;const _e=new dt(0,0,0,0);return{setMask:function(te){ce!==te&&!U&&(s.colorMask(te,te,te,te),ce=te)},setLocked:function(te){U=te},setClear:function(te,J,Se,Ge,xt){xt===!0&&(te*=Ge,J*=Ge,Se*=Ge),se.set(te,J,Se,Ge),_e.equals(se)===!1&&(s.clearColor(te,J,Se,Ge),_e.copy(se))},reset:function(){U=!1,ce=null,_e.set(-1,0,0,0)}}}function n(){let U=!1,se=!1,ce=null,_e=null,te=null;return{setReversed:function(J){if(se!==J){const Se=e.get("EXT_clip_control");J?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),se=J;const Ge=te;te=null,this.setClear(Ge)}},getReversed:function(){return se},setTest:function(J){J?q(s.DEPTH_TEST):oe(s.DEPTH_TEST)},setMask:function(J){ce!==J&&!U&&(s.depthMask(J),ce=J)},setFunc:function(J){if(se&&(J=A0[J]),_e!==J){switch(J){case Nr:s.depthFunc(s.NEVER);break;case Fr:s.depthFunc(s.ALWAYS);break;case zr:s.depthFunc(s.LESS);break;case ns:s.depthFunc(s.LEQUAL);break;case Or:s.depthFunc(s.EQUAL);break;case Br:s.depthFunc(s.GEQUAL);break;case kr:s.depthFunc(s.GREATER);break;case Hr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=J}},setLocked:function(J){U=J},setClear:function(J){te!==J&&(se&&(J=1-J),s.clearDepth(J),te=J)},reset:function(){U=!1,ce=null,_e=null,te=null,se=!1}}}function i(){let U=!1,se=null,ce=null,_e=null,te=null,J=null,Se=null,Ge=null,xt=null;return{setTest:function(at){U||(at?q(s.STENCIL_TEST):oe(s.STENCIL_TEST))},setMask:function(at){se!==at&&!U&&(s.stencilMask(at),se=at)},setFunc:function(at,Dn,_n){(ce!==at||_e!==Dn||te!==_n)&&(s.stencilFunc(at,Dn,_n),ce=at,_e=Dn,te=_n)},setOp:function(at,Dn,_n){(J!==at||Se!==Dn||Ge!==_n)&&(s.stencilOp(at,Dn,_n),J=at,Se=Dn,Ge=_n)},setLocked:function(at){U=at},setClear:function(at){xt!==at&&(s.clearStencil(at),xt=at)},reset:function(){U=!1,se=null,ce=null,_e=null,te=null,J=null,Se=null,Ge=null,xt=null}}}const a=new t,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,y=null,v=null,_=null,T=null,E=null,A=new xe(0,0,0),D=0,M=!1,b=null,I=null,O=null,W=null,k=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=Q>=2);let ae=null,pe={};const ye=s.getParameter(s.SCISSOR_BOX),He=s.getParameter(s.VIEWPORT),Qe=new dt().fromArray(ye),st=new dt().fromArray(He);function Ke(U,se,ce,_e){const te=new Uint8Array(4),J=s.createTexture();s.bindTexture(U,J),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Se=0;Se<ce;Se++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(se+Se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return J}const Z={};Z[s.TEXTURE_2D]=Ke(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),q(s.DEPTH_TEST),r.setFunc(ns),De(!1),we(ec),q(s.CULL_FACE),Ve(Kn);function q(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function oe(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function be(U,se){return d[U]!==se?(s.bindFramebuffer(U,se),d[U]=se,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=se),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=se),!0):!1}function me(U,se){let ce=p,_e=!1;if(U){ce=u.get(se),ce===void 0&&(ce=[],u.set(se,ce));const te=U.textures;if(ce.length!==te.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let J=0,Se=te.length;J<Se;J++)ce[J]=s.COLOR_ATTACHMENT0+J;ce.length=te.length,_e=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,_e=!0);_e&&s.drawBuffers(ce)}function Ue(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const ot={[fi]:s.FUNC_ADD,[Rh]:s.FUNC_SUBTRACT,[Ph]:s.FUNC_REVERSE_SUBTRACT};ot[Dh]=s.MIN,ot[Lh]=s.MAX;const R={[Ih]:s.ZERO,[Uh]:s.ONE,[Nh]:s.SRC_COLOR,[Ir]:s.SRC_ALPHA,[Hh]:s.SRC_ALPHA_SATURATE,[Bh]:s.DST_COLOR,[zh]:s.DST_ALPHA,[Fh]:s.ONE_MINUS_SRC_COLOR,[Ur]:s.ONE_MINUS_SRC_ALPHA,[kh]:s.ONE_MINUS_DST_COLOR,[Oh]:s.ONE_MINUS_DST_ALPHA,[Gh]:s.CONSTANT_COLOR,[Vh]:s.ONE_MINUS_CONSTANT_COLOR,[Wh]:s.CONSTANT_ALPHA,[Xh]:s.ONE_MINUS_CONSTANT_ALPHA};function Ve(U,se,ce,_e,te,J,Se,Ge,xt,at){if(U===Kn){x===!0&&(oe(s.BLEND),x=!1);return}if(x===!1&&(q(s.BLEND),x=!0),U!==Ch){if(U!==m||at!==M){if((f!==fi||_!==fi)&&(s.blendEquation(s.FUNC_ADD),f=fi,_=fi),at)switch(U){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lr:s.blendFunc(s.ONE,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case tc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,v=null,T=null,E=null,A.set(0,0,0),D=0,m=U,M=at}return}te=te||se,J=J||ce,Se=Se||_e,(se!==f||te!==_)&&(s.blendEquationSeparate(ot[se],ot[te]),f=se,_=te),(ce!==y||_e!==v||J!==T||Se!==E)&&(s.blendFuncSeparate(R[ce],R[_e],R[J],R[Se]),y=ce,v=_e,T=J,E=Se),(Ge.equals(A)===!1||xt!==D)&&(s.blendColor(Ge.r,Ge.g,Ge.b,xt),A.copy(Ge),D=xt),m=U,M=!1}function Oe(U,se){U.side===it?oe(s.CULL_FACE):q(s.CULL_FACE);let ce=U.side===qt;se&&(ce=!ce),De(ce),U.blending===es&&U.transparent===!1?Ve(Kn):Ve(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);const _e=U.stencilWrite;o.setTest(_e),_e&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?q(s.SAMPLE_ALPHA_TO_COVERAGE):oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function De(U){b!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),b=U)}function we(U){U!==Th?(q(s.CULL_FACE),U!==I&&(U===ec?s.cullFace(s.BACK):U===Ah?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):oe(s.CULL_FACE),I=U}function yt(U){U!==O&&(K&&s.lineWidth(U),O=U)}function Ee(U,se,ce){U?(q(s.POLYGON_OFFSET_FILL),(W!==se||k!==ce)&&(s.polygonOffset(se,ce),W=se,k=ce)):oe(s.POLYGON_OFFSET_FILL)}function qe(U){U?q(s.SCISSOR_TEST):oe(s.SCISSOR_TEST)}function Ft(U){U===void 0&&(U=s.TEXTURE0+Y-1),ae!==U&&(s.activeTexture(U),ae=U)}function Ct(U,se,ce){ce===void 0&&(ae===null?ce=s.TEXTURE0+Y-1:ce=ae);let _e=pe[ce];_e===void 0&&(_e={type:void 0,texture:void 0},pe[ce]=_e),(_e.type!==U||_e.texture!==se)&&(ae!==ce&&(s.activeTexture(ce),ae=ce),s.bindTexture(U,se||Z[U]),_e.type=U,_e.texture=se)}function C(){const U=pe[ae];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(U){Qe.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Qe.copy(U))}function ze(U){st.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),st.copy(U))}function Ce(U,se){let ce=c.get(se);ce===void 0&&(ce=new WeakMap,c.set(se,ce));let _e=ce.get(U);_e===void 0&&(_e=s.getUniformBlockIndex(se,U.name),ce.set(U,_e))}function he(U,se){const _e=c.get(se).get(U);l.get(se)!==_e&&(s.uniformBlockBinding(se,_e,U.__bindingPointIndex),l.set(se,_e))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ae=null,pe={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,y=null,v=null,_=null,T=null,E=null,A=new xe(0,0,0),D=0,M=!1,b=null,I=null,O=null,W=null,k=null,Qe.set(0,0,s.canvas.width,s.canvas.height),st.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:q,disable:oe,bindFramebuffer:be,drawBuffers:me,useProgram:Ue,setBlending:Ve,setMaterial:Oe,setFlipSided:De,setCullFace:we,setLineWidth:yt,setPolygonOffset:Ee,setScissorTest:qe,activeTexture:Ft,bindTexture:Ct,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Ae,texImage3D:ie,updateUBOMapping:Ce,uniformBlockBinding:he,texStorage2D:re,texStorage3D:Te,texSubImage2D:j,texSubImage3D:ee,compressedTexSubImage2D:$,compressedTexSubImage3D:Re,scissor:ue,viewport:ze,reset:We}}function R0(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):Pa("canvas")}function x(C,S,B){let j=1;const ee=Ct(C);if((ee.width>B||ee.height>B)&&(j=B/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(j*ee.width),Re=Math.floor(j*ee.height);d===void 0&&(d=g($,Re));const re=S?g($,Re):d;return re.width=$,re.height=Re,re.getContext("2d").drawImage(C,0,0,$,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Re+")."),re}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,S,B,j,ee=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=S;if(S===s.RED&&(B===s.FLOAT&&($=s.R32F),B===s.HALF_FLOAT&&($=s.R16F),B===s.UNSIGNED_BYTE&&($=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.R8UI),B===s.UNSIGNED_SHORT&&($=s.R16UI),B===s.UNSIGNED_INT&&($=s.R32UI),B===s.BYTE&&($=s.R8I),B===s.SHORT&&($=s.R16I),B===s.INT&&($=s.R32I)),S===s.RG&&(B===s.FLOAT&&($=s.RG32F),B===s.HALF_FLOAT&&($=s.RG16F),B===s.UNSIGNED_BYTE&&($=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.RG8UI),B===s.UNSIGNED_SHORT&&($=s.RG16UI),B===s.UNSIGNED_INT&&($=s.RG32UI),B===s.BYTE&&($=s.RG8I),B===s.SHORT&&($=s.RG16I),B===s.INT&&($=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.RGB8UI),B===s.UNSIGNED_SHORT&&($=s.RGB16UI),B===s.UNSIGNED_INT&&($=s.RGB32UI),B===s.BYTE&&($=s.RGB8I),B===s.SHORT&&($=s.RGB16I),B===s.INT&&($=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.RGBA8UI),B===s.UNSIGNED_SHORT&&($=s.RGBA16UI),B===s.UNSIGNED_INT&&($=s.RGBA32UI),B===s.BYTE&&($=s.RGBA8I),B===s.SHORT&&($=s.RGBA16I),B===s.INT&&($=s.RGBA32I)),S===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),S===s.RGBA){const Re=ee?Ca:nt.getTransfer(j);B===s.FLOAT&&($=s.RGBA32F),B===s.HALF_FLOAT&&($=s.RGBA16F),B===s.UNSIGNED_BYTE&&($=Re===lt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(C,S){let B;return C?S===null||S===xi||S===Ls?B=s.DEPTH24_STENCIL8:S===En?B=s.DEPTH32F_STENCIL8:S===Ds&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xi||S===Ls?B=s.DEPTH_COMPONENT24:S===En?B=s.DEPTH_COMPONENT32F:S===Ds&&(B=s.DEPTH_COMPONENT16),B}function T(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dt&&C.minFilter!==wn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function E(C){const S=C.target;S.removeEventListener("dispose",E),D(S),S.isVideoTexture&&h.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),b(S)}function D(C){const S=n.get(C);if(S.__webglInit===void 0)return;const B=C.source,j=u.get(B);if(j){const ee=j[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(C),Object.keys(j).length===0&&u.delete(B)}n.remove(C)}function M(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const B=C.source,j=u.get(B);delete j[S.__cacheKey],r.memory.textures--}function b(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ee=0;ee<S.__webglFramebuffer[j].length;ee++)s.deleteFramebuffer(S.__webglFramebuffer[j][ee]);else s.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)s.deleteFramebuffer(S.__webglFramebuffer[j]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=C.textures;for(let j=0,ee=B.length;j<ee;j++){const $=n.get(B[j]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(B[j])}n.remove(C)}let I=0;function O(){I=0}function W(){const C=I;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function k(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Y(C,S){const B=n.get(C);if(C.isVideoTexture&&qe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,C,S);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function K(C,S){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Z(B,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function Q(C,S){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Z(B,C,S);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function X(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){q(B,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const ae={[Aa]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[Wr]:s.MIRRORED_REPEAT},pe={[Dt]:s.NEAREST,[ed]:s.NEAREST_MIPMAP_NEAREST,[Gs]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[Xa]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},ye={[sd]:s.NEVER,[hd]:s.ALWAYS,[ad]:s.LESS,[Hl]:s.LEQUAL,[rd]:s.EQUAL,[ld]:s.GEQUAL,[od]:s.GREATER,[cd]:s.NOTEQUAL};function He(C,S){if(S.type===En&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===wn||S.magFilter===Xa||S.magFilter===Gs||S.magFilter===gi||S.minFilter===wn||S.minFilter===Xa||S.minFilter===Gs||S.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ae[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ae[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ae[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,pe[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Dt||S.minFilter!==Gs&&S.minFilter!==gi||S.type===En&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Qe(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));const j=S.source;let ee=u.get(j);ee===void 0&&(ee={},u.set(j,ee));const $=k(S);if($!==C.__cacheKey){ee[$]===void 0&&(ee[$]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,B=!0),ee[$].usedTimes++;const Re=ee[C.__cacheKey];Re!==void 0&&(ee[C.__cacheKey].usedTimes--,Re.usedTimes===0&&M(S)),C.__cacheKey=$,C.__webglTexture=ee[$].texture}return B}function st(C,S,B){return Math.floor(Math.floor(C/B)/S)}function Ke(C,S,B,j){const $=C.updateRanges;if($.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,B,j,S.data);else{$.sort((ie,ue)=>ie.start-ue.start);let Re=0;for(let ie=1;ie<$.length;ie++){const ue=$[Re],ze=$[ie],Ce=ue.start+ue.count,he=st(ze.start,S.width,4),We=st(ue.start,S.width,4);ze.start<=Ce+1&&he===We&&st(ze.start+ze.count-1,S.width,4)===he?ue.count=Math.max(ue.count,ze.start+ze.count-ue.start):(++Re,$[Re]=ze)}$.length=Re+1;const re=s.getParameter(s.UNPACK_ROW_LENGTH),Te=s.getParameter(s.UNPACK_SKIP_PIXELS),Ae=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let ie=0,ue=$.length;ie<ue;ie++){const ze=$[ie],Ce=Math.floor(ze.start/4),he=Math.ceil(ze.count/4),We=Ce%S.width,U=Math.floor(Ce/S.width),se=he,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,We,U,se,ce,B,j,S.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function Z(C,S,B){let j=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=s.TEXTURE_3D);const ee=Qe(C,S),$=S.source;t.bindTexture(j,C.__webglTexture,s.TEXTURE0+B);const Re=n.get($);if($.version!==Re.__version||ee===!0){t.activeTexture(s.TEXTURE0+B);const re=nt.getPrimaries(nt.workingColorSpace),Te=S.colorSpace===jn?null:nt.getPrimaries(S.colorSpace),Ae=S.colorSpace===jn||re===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ie=x(S.image,!1,i.maxTextureSize);ie=Ft(S,ie);const ue=a.convert(S.format,S.colorSpace),ze=a.convert(S.type);let Ce=v(S.internalFormat,ue,ze,S.colorSpace,S.isVideoTexture);He(j,S);let he;const We=S.mipmaps,U=S.isVideoTexture!==!0,se=Re.__version===void 0||ee===!0,ce=$.dataReady,_e=T(S,ie);if(S.isDepthTexture)Ce=_(S.format===Us,S.type),se&&(U?t.texStorage2D(s.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ie.width,ie.height,0,ue,ze,null));else if(S.isDataTexture)if(We.length>0){U&&se&&t.texStorage2D(s.TEXTURE_2D,_e,Ce,We[0].width,We[0].height);for(let te=0,J=We.length;te<J;te++)he=We[te],U?ce&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,ue,ze,he.data):t.texImage2D(s.TEXTURE_2D,te,Ce,he.width,he.height,0,ue,ze,he.data);S.generateMipmaps=!1}else U?(se&&t.texStorage2D(s.TEXTURE_2D,_e,Ce,ie.width,ie.height),ce&&Ke(S,ie,ue,ze)):t.texImage2D(s.TEXTURE_2D,0,Ce,ie.width,ie.height,0,ue,ze,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ce,We[0].width,We[0].height,ie.depth);for(let te=0,J=We.length;te<J;te++)if(he=We[te],S.format!==mn)if(ue!==null)if(U){if(ce)if(S.layerUpdates.size>0){const Se=Oc(he.width,he.height,S.format,S.type);for(const Ge of S.layerUpdates){const xt=he.data.subarray(Ge*Se/he.data.BYTES_PER_ELEMENT,(Ge+1)*Se/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Ge,he.width,he.height,1,ue,xt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ie.depth,ue,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Ce,he.width,he.height,ie.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ie.depth,ue,ze,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Ce,he.width,he.height,ie.depth,0,ue,ze,he.data)}else{U&&se&&t.texStorage2D(s.TEXTURE_2D,_e,Ce,We[0].width,We[0].height);for(let te=0,J=We.length;te<J;te++)he=We[te],S.format!==mn?ue!==null?U?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ce&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,ue,ze,he.data):t.texImage2D(s.TEXTURE_2D,te,Ce,he.width,he.height,0,ue,ze,he.data)}else if(S.isDataArrayTexture)if(U){if(se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ce,ie.width,ie.height,ie.depth),ce)if(S.layerUpdates.size>0){const te=Oc(ie.width,ie.height,S.format,S.type);for(const J of S.layerUpdates){const Se=ie.data.subarray(J*te/ie.data.BYTES_PER_ELEMENT,(J+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ue,ze,Se)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ue,ze,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,ue,ze,ie.data);else if(S.isData3DTexture)U?(se&&t.texStorage3D(s.TEXTURE_3D,_e,Ce,ie.width,ie.height,ie.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ue,ze,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,ue,ze,ie.data);else if(S.isFramebufferTexture){if(se)if(U)t.texStorage2D(s.TEXTURE_2D,_e,Ce,ie.width,ie.height);else{let te=ie.width,J=ie.height;for(let Se=0;Se<_e;Se++)t.texImage2D(s.TEXTURE_2D,Se,Ce,te,J,0,ue,ze,null),te>>=1,J>>=1}}else if(We.length>0){if(U&&se){const te=Ct(We[0]);t.texStorage2D(s.TEXTURE_2D,_e,Ce,te.width,te.height)}for(let te=0,J=We.length;te<J;te++)he=We[te],U?ce&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ue,ze,he):t.texImage2D(s.TEXTURE_2D,te,Ce,ue,ze,he);S.generateMipmaps=!1}else if(U){if(se){const te=Ct(ie);t.texStorage2D(s.TEXTURE_2D,_e,Ce,te.width,te.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,ze,ie)}else t.texImage2D(s.TEXTURE_2D,0,Ce,ue,ze,ie);m(S)&&f(j),Re.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function q(C,S,B){if(S.image.length!==6)return;const j=Qe(C,S),ee=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);const $=n.get(ee);if(ee.version!==$.__version||j===!0){t.activeTexture(s.TEXTURE0+B);const Re=nt.getPrimaries(nt.workingColorSpace),re=S.colorSpace===jn?null:nt.getPrimaries(S.colorSpace),Te=S.colorSpace===jn||Re===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let J=0;J<6;J++)!Ae&&!ie?ue[J]=x(S.image[J],!0,i.maxCubemapSize):ue[J]=ie?S.image[J].image:S.image[J],ue[J]=Ft(S,ue[J]);const ze=ue[0],Ce=a.convert(S.format,S.colorSpace),he=a.convert(S.type),We=v(S.internalFormat,Ce,he,S.colorSpace),U=S.isVideoTexture!==!0,se=$.__version===void 0||j===!0,ce=ee.dataReady;let _e=T(S,ze);He(s.TEXTURE_CUBE_MAP,S);let te;if(Ae){U&&se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,We,ze.width,ze.height);for(let J=0;J<6;J++){te=ue[J].mipmaps;for(let Se=0;Se<te.length;Se++){const Ge=te[Se];S.format!==mn?Ce!==null?U?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,Ge.width,Ge.height,Ce,Ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,We,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,Ge.width,Ge.height,Ce,he,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,We,Ge.width,Ge.height,0,Ce,he,Ge.data)}}}else{if(te=S.mipmaps,U&&se){te.length>0&&_e++;const J=Ct(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,We,J.width,J.height)}for(let J=0;J<6;J++)if(ie){U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ue[J].width,ue[J].height,Ce,he,ue[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,ue[J].width,ue[J].height,0,Ce,he,ue[J].data);for(let Se=0;Se<te.length;Se++){const xt=te[Se].image[J].image;U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,xt.width,xt.height,Ce,he,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,We,xt.width,xt.height,0,Ce,he,xt.data)}}else{U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ce,he,ue[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Ce,he,ue[J]);for(let Se=0;Se<te.length;Se++){const Ge=te[Se];U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,Ce,he,Ge.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,We,Ce,he,Ge.image[J])}}}m(S)&&f(s.TEXTURE_CUBE_MAP),$.__version=ee.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function oe(C,S,B,j,ee,$){const Re=a.convert(B.format,B.colorSpace),re=a.convert(B.type),Te=v(B.internalFormat,Re,re,B.colorSpace),Ae=n.get(S),ie=n.get(B);if(ie.__renderTarget=S,!Ae.__hasExternalTextures){const ue=Math.max(1,S.width>>$),ze=Math.max(1,S.height>>$);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,Te,ue,ze,S.depth,0,Re,re,null):t.texImage2D(ee,$,Te,ue,ze,0,Re,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Ee(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,ee,ie.__webglTexture,0,yt(S)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,ee,ie.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(C,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const j=S.depthTexture,ee=j&&j.isDepthTexture?j.type:null,$=_(S.stencilBuffer,ee),Re=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=yt(S);Ee(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,$,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,$,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,$,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,C)}else{const j=S.textures;for(let ee=0;ee<j.length;ee++){const $=j[ee],Re=a.convert($.format,$.colorSpace),re=a.convert($.type),Te=v($.internalFormat,Re,re,$.colorSpace),Ae=yt(S);B&&Ee(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,Te,S.width,S.height):Ee(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,Te,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Te,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const ee=j.__webglTexture,$=yt(S);if(S.depthTexture.format===Is)Ee(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Us)Ee(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(C){const S=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=j}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const j=C.texture.mipmaps;j&&j.length>0?me(S.__webglFramebuffer[0],C):me(S.__webglFramebuffer,C)}else if(B){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=s.createRenderbuffer(),be(S.__webglDepthbuffer[j],C,!1);else{const ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,$)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),be(S.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,$)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(C,S,B){const j=n.get(C);S!==void 0&&oe(j.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ue(C)}function R(C){const S=C.texture,B=n.get(C),j=n.get(S);C.addEventListener("dispose",A);const ee=C.textures,$=C.isWebGLCubeRenderTarget===!0,Re=ee.length>1;if(Re||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=S.version,r.memory.textures++),$){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let Te=0;Te<S.mipmaps.length;Te++)B.__webglFramebuffer[re][Te]=s.createFramebuffer()}else B.__webglFramebuffer[re]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)B.__webglFramebuffer[re]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Re)for(let re=0,Te=ee.length;re<Te;re++){const Ae=n.get(ee[re]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),r.memory.textures++)}if(C.samples>0&&Ee(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let re=0;re<ee.length;re++){const Te=ee[re];B.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[re]);const Ae=a.convert(Te.format,Te.colorSpace),ie=a.convert(Te.type),ue=v(Te.internalFormat,Ae,ie,Te.colorSpace,C.isXRRenderTarget===!0),ze=yt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,ue,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,B.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),be(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),He(s.TEXTURE_CUBE_MAP,S);for(let re=0;re<6;re++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)oe(B.__webglFramebuffer[re][Te],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te);else oe(B.__webglFramebuffer[re],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(S)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let re=0,Te=ee.length;re<Te;re++){const Ae=ee[re],ie=n.get(Ae);let ue=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,ie.__webglTexture),He(ue,Ae),oe(B.__webglFramebuffer,C,Ae,s.COLOR_ATTACHMENT0+re,ue,0),m(Ae)&&f(ue)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),He(re,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)oe(B.__webglFramebuffer[Te],C,S,s.COLOR_ATTACHMENT0,re,Te);else oe(B.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,re,0);m(S)&&f(re),t.unbindTexture()}C.depthBuffer&&Ue(C)}function Ve(C){const S=C.textures;for(let B=0,j=S.length;B<j;B++){const ee=S[B];if(m(ee)){const $=y(C),Re=n.get(ee).__webglTexture;t.bindTexture($,Re),f($),t.unbindTexture()}}}const Oe=[],De=[];function we(C){if(C.samples>0){if(Ee(C)===!1){const S=C.textures,B=C.width,j=C.height;let ee=s.COLOR_BUFFER_BIT;const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(C),re=S.length>1;if(re)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Te=C.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const ie=n.get(S[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,B,j,0,0,B,j,ee,s.NEAREST),l===!0&&(Oe.length=0,De.length=0,Oe.push(s.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Oe.push($),De.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,De)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const ie=n.get(S[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function yt(C){return Math.min(i.maxSamples,C.samples)}function Ee(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function qe(C){const S=r.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Ft(C,S){const B=C.colorSpace,j=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==as&&B!==jn&&(nt.getTransfer(B)===lt?(j!==mn||ee!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=ot,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ee}function P0(s,e){function t(n,i=jn){let a;const r=nt.getTransfer(i);if(n===An)return s.UNSIGNED_BYTE;if(n===Uo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===No)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Il)return s.BYTE;if(n===Ul)return s.SHORT;if(n===Ds)return s.UNSIGNED_SHORT;if(n===Io)return s.INT;if(n===xi)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===zs)return s.HALF_FLOAT;if(n===zl)return s.ALPHA;if(n===Ol)return s.RGB;if(n===mn)return s.RGBA;if(n===Is)return s.DEPTH_COMPONENT;if(n===Us)return s.DEPTH_STENCIL;if(n===Fo)return s.RED;if(n===zo)return s.RED_INTEGER;if(n===Bl)return s.RG;if(n===Oo)return s.RG_INTEGER;if(n===Bo)return s.RGBA_INTEGER;if(n===Ma||n===Sa||n===ba||n===wa)if(r===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ma)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ma)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xr||n===qr||n===$r||n===Yr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Xr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$r)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jr||n===Kr||n===Zr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===jr||n===Kr)return r===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Zr)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jr||n===Qr||n===eo||n===to||n===no||n===io||n===so||n===ao||n===ro||n===oo||n===co||n===lo||n===ho||n===uo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Jr)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qr)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===so)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ho)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uo)return r===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===po||n===mo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===fo)return r===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===po)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===go||n===xo||n===_o||n===vo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===go)return a.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new th(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:D0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U0 extends hs{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new I0,f={},y=t.getContextAttributes();let v=null,_=null;const T=[],E=[],A=new ke;let D=null;const M=new sn;M.viewport=new dt;const b=new sn;b.viewport=new dt;const I=[M,b],O=new Qd;let W=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let q=T[Z];return q===void 0&&(q=new pr,T[Z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Z){let q=T[Z];return q===void 0&&(q=new pr,T[Z]=q),q.getGripSpace()},this.getHand=function(Z){let q=T[Z];return q===void 0&&(q=new pr,T[Z]=q),q.getHandSpace()};function Y(Z){const q=E.indexOf(Z.inputSource);if(q===-1)return;const oe=T[q];oe!==void 0&&(oe.update(Z.inputSource,Z.frame,c||r),oe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<T.length;Z++){const q=E[Z];q!==null&&(E[Z]=null,T[Z].disconnect(q))}W=null,k=null,m.reset();for(const Z in f)delete f[Z];e.setRenderTarget(v),p=null,u=null,d=null,i=null,_=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",K),i.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,be=null,me=null;y.depth&&(me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?Us:Is,be=y.stencil?Ls:xi);const Ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(Ue),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new _i(u.textureWidth,u.textureHeight,{format:mn,type:An,depthTexture:new eh(u.textureWidth,u.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new _i(p.framebufferWidth,p.framebufferHeight,{format:mn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Z){for(let q=0;q<Z.removed.length;q++){const oe=Z.removed[q],be=E.indexOf(oe);be>=0&&(E[be]=null,T[be].disconnect(oe))}for(let q=0;q<Z.added.length;q++){const oe=Z.added[q];let be=E.indexOf(oe);if(be===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=E.length){E.push(oe),be=Ue;break}else if(E[Ue]===null){E[Ue]=oe,be=Ue;break}if(be===-1)break}const me=T[be];me&&me.connect(oe)}}const X=new P,ae=new P;function pe(Z,q,oe){X.setFromMatrixPosition(q.matrixWorld),ae.setFromMatrixPosition(oe.matrixWorld);const be=X.distanceTo(ae),me=q.projectionMatrix.elements,Ue=oe.projectionMatrix.elements,ot=me[14]/(me[10]-1),R=me[14]/(me[10]+1),Ve=(me[9]+1)/me[5],Oe=(me[9]-1)/me[5],De=(me[8]-1)/me[0],we=(Ue[8]+1)/Ue[0],yt=ot*De,Ee=ot*we,qe=be/(-De+we),Ft=qe*-De;if(q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ft),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),me[10]===-1)Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Ct=ot+qe,C=R+qe,S=yt-Ft,B=Ee+(be-Ft),j=Ve*R/C*Ct,ee=Oe*R/C*Ct;Z.projectionMatrix.makePerspective(S,B,j,ee,Ct,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ye(Z,q){q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let q=Z.near,oe=Z.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),O.near=b.near=M.near=q,O.far=b.far=M.far=oe,(W!==O.near||k!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,k=O.far),O.layers.mask=Z.layers.mask|6,M.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;const be=Z.parent,me=O.cameras;ye(O,be);for(let Ue=0;Ue<me.length;Ue++)ye(me[Ue],be);me.length===2?pe(O,M,b):O.projectionMatrix.copy(M.projectionMatrix),He(Z,O,be)};function He(Z,q,oe){oe===null?Z.matrix.copy(q.matrixWorld):(Z.matrix.copy(oe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Mo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return f[Z]};let Qe=null;function st(Z,q){if(h=q.getViewerPose(c||r),g=q,h!==null){const oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let be=!1;oe.length!==O.cameras.length&&(O.cameras.length=0,be=!0);for(let R=0;R<oe.length;R++){const Ve=oe[R];let Oe=null;if(p!==null)Oe=p.getViewport(Ve);else{const we=d.getViewSubImage(u,Ve);Oe=we.viewport,R===0&&(e.setRenderTargetTextures(_,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(_))}let De=I[R];De===void 0&&(De=new sn,De.layers.enable(R),De.viewport=new dt,I[R]=De),De.matrix.fromArray(Ve.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ve.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),R===0&&(O.matrix.copy(De.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),be===!0&&O.cameras.push(De)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const R=d.getDepthInformation(oe[0]);R&&R.isValid&&R.texture&&m.init(R,i.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let R=0;R<oe.length;R++){const Ve=oe[R].camera;if(Ve){let Oe=f[Ve];Oe||(Oe=new th,f[Ve]=Oe);const De=d.getCameraImage(Ve);Oe.sourceTexture=De}}}}for(let oe=0;oe<T.length;oe++){const be=E[oe],me=T[oe];be!==null&&me!==void 0&&me.update(be,q,c||r)}Qe&&Qe(Z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const Ke=new sh;Ke.setAnimationLoop(st),this.setAnimationLoop=function(Z){Qe=Z},this.dispose=function(){}}}const li=new Cn,N0=new ft;function F0(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Yl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),x(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,li.copy(_),li.x*=-1,li.y*=-1,li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(N0.makeRotationFromEuler(li)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function z0(s,e,t,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const _=v.program;n.uniformBlockBinding(y,_)}function c(y,v){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(y,T);const E=e.render.frame;a[y.id]!==E&&(u(y),a[y.id]=E)}function h(y){const v=d();y.__bindingPointIndex=v;const _=s.createBuffer(),T=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function d(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const v=i[y.id],_=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,A=_.length;E<A;E++){const D=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,b=D.length;M<b;M++){const I=D[M];if(p(I,E,M,T)===!0){const O=I.__offset,W=Array.isArray(I.value)?I.value:[I.value];let k=0;for(let Y=0;Y<W.length;Y++){const K=W[Y],Q=x(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,O+k,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,v,_,T){const E=y.value,A=v+"_"+_;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{const D=T[A];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return T[A]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function g(y){const v=y.uniforms;let _=0;const T=16;for(let A=0,D=v.length;A<D;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,I=M.length;b<I;b++){const O=M[b],W=Array.isArray(O.value)?O.value:[O.value];for(let k=0,Y=W.length;k<Y;k++){const K=W[k],Q=x(K),X=_%T,ae=X%Q.boundary,pe=X+ae;_+=ae,pe!==0&&T-pe<Q.storage&&(_+=T-pe),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=Q.storage}}}const E=_%T;return E>0&&(_+=T-E),y.__size=_,y.__cache={},this}function x(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const _=r.indexOf(v.__bindingPointIndex);r.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete a[v.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);r=[],i={},a={}}return{bind:l,update:c,dispose:f}}class O0{constructor(e={}){const{canvas:t=ud(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=nn;let E=0,A=0,D=null,M=-1,b=null;const I=new dt,O=new dt;let W=null;const k=new xe(0);let Y=0,K=t.width,Q=t.height,X=1,ae=null,pe=null;const ye=new dt(0,0,K,Q),He=new dt(0,0,K,Q);let Qe=!1;const st=new Wo;let Ke=!1,Z=!1;const q=new ft,oe=new P,be=new dt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function ot(){return D===null?X:1}let R=n;function Ve(w,F){return t.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lo}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",te,!1),R===null){const F="webgl2";if(R=Ve(F,w),R===null)throw Ve(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Oe,De,we,yt,Ee,qe,Ft,Ct,C,S,B,j,ee,$,Re,re,Te,Ae,ie,ue,ze,Ce,he,We;function U(){Oe=new Yp(R),Oe.init(),Ce=new P0(R,Oe),De=new Hp(R,Oe,e,Ce),we=new C0(R,Oe),De.reversedDepthBuffer&&u&&we.buffers.depth.setReversed(!0),yt=new Zp(R),Ee=new m0,qe=new R0(R,Oe,we,Ee,De,Ce,yt),Ft=new Vp(_),Ct=new $p(_),C=new nu(R),he=new Bp(R,C),S=new jp(R,C,yt,he),B=new Qp(R,S,C,yt),ie=new Jp(R,De,qe),re=new Gp(Ee),j=new p0(_,Ft,Ct,Oe,De,he,re),ee=new F0(_,Ee),$=new x0,Re=new b0(Oe),Ae=new Op(_,Ft,Ct,we,B,p,l),Te=new T0(_,B,De),We=new z0(R,yt,De,we),ue=new kp(R,Oe,yt),ze=new Kp(R,Oe,yt),yt.programs=j.programs,_.capabilities=De,_.extensions=Oe,_.properties=Ee,_.renderLists=$,_.shadowMap=Te,_.state=we,_.info=yt}U();const se=new U0(_,R);this.xr=se,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const w=Oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(K,Q,!1))},this.getSize=function(w){return w.set(K,Q)},this.setSize=function(w,F,G=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,Q=F,t.width=Math.floor(w*X),t.height=Math.floor(F*X),G===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(K*X,Q*X).floor()},this.setDrawingBufferSize=function(w,F,G){K=w,Q=F,X=G,t.width=Math.floor(w*G),t.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,F,G,V){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,F,G,V),we.viewport(I.copy(ye).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(He)},this.setScissor=function(w,F,G,V){w.isVector4?He.set(w.x,w.y,w.z,w.w):He.set(w,F,G,V),we.scissor(O.copy(He).multiplyScalar(X).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){we.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,G=!0){let V=0;if(w){let z=!1;if(D!==null){const ne=D.texture.format;z=ne===Bo||ne===Oo||ne===zo}if(z){const ne=D.texture.type,de=ne===An||ne===xi||ne===Ds||ne===Ls||ne===Uo||ne===No,Me=Ae.getClearColor(),ge=Ae.getClearAlpha(),Fe=Me.r,Be=Me.g,Le=Me.b;de?(g[0]=Fe,g[1]=Be,g[2]=Le,g[3]=ge,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Fe,x[1]=Be,x[2]=Le,x[3]=ge,R.clearBufferiv(R.COLOR,0,x))}else V|=R.COLOR_BUFFER_BIT}F&&(V|=R.DEPTH_BUFFER_BIT),G&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Ae.dispose(),$.dispose(),Re.dispose(),Ee.dispose(),Ft.dispose(),Ct.dispose(),B.dispose(),he.dispose(),We.dispose(),j.dispose(),se.dispose(),se.removeEventListener("sessionstart",_n),se.removeEventListener("sessionend",Yo),ni.stop()};function ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=yt.autoReset,F=Te.enabled,G=Te.autoUpdate,V=Te.needsUpdate,z=Te.type;U(),yt.autoReset=w,Te.enabled=F,Te.autoUpdate=G,Te.needsUpdate=V,Te.type=z}function te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function J(w){const F=w.target;F.removeEventListener("dispose",J),Se(F)}function Se(w){Ge(w),Ee.remove(w)}function Ge(w){const F=Ee.get(w).programs;F!==void 0&&(F.forEach(function(G){j.releaseProgram(G)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,V,z,ne){F===null&&(F=me);const de=z.isMesh&&z.matrixWorld.determinant()<0,Me=yh(w,F,G,V,z);we.setMaterial(V,de);let ge=G.index,Fe=1;if(V.wireframe===!0){if(ge=S.getWireframeAttribute(G),ge===void 0)return;Fe=2}const Be=G.drawRange,Le=G.attributes.position;let Ye=Be.start*Fe,ct=(Be.start+Be.count)*Fe;ne!==null&&(Ye=Math.max(Ye,ne.start*Fe),ct=Math.min(ct,(ne.start+ne.count)*Fe)),ge!==null?(Ye=Math.max(Ye,0),ct=Math.min(ct,ge.count)):Le!=null&&(Ye=Math.max(Ye,0),ct=Math.min(ct,Le.count));const wt=ct-Ye;if(wt<0||wt===1/0)return;he.setup(z,V,Me,G,ge);let _t,pt=ue;if(ge!==null&&(_t=C.get(ge),pt=ze,pt.setIndex(_t)),z.isMesh)V.wireframe===!0?(we.setLineWidth(V.wireframeLinewidth*ot()),pt.setMode(R.LINES)):pt.setMode(R.TRIANGLES);else if(z.isLine){let Ne=V.linewidth;Ne===void 0&&(Ne=1),we.setLineWidth(Ne*ot()),z.isLineSegments?pt.setMode(R.LINES):z.isLineLoop?pt.setMode(R.LINE_LOOP):pt.setMode(R.LINE_STRIP)}else z.isPoints?pt.setMode(R.POINTS):z.isSprite&&pt.setMode(R.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))pt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ne=z._multiDrawStarts,Mt=z._multiDrawCounts,et=z._multiDrawCount,Zt=ge?C.get(ge).bytesPerElement:1,Ei=Ee.get(V).currentProgram.getUniforms();for(let Jt=0;Jt<et;Jt++)Ei.setValue(R,"_gl_DrawID",Jt),pt.render(Ne[Jt]/Zt,Mt[Jt])}else if(z.isInstancedMesh)pt.renderInstances(Ye,wt,z.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mt=Math.min(G.instanceCount,Ne);pt.renderInstances(Ye,wt,Mt)}else pt.render(Ye,wt)};function xt(w,F,G){w.transparent===!0&&w.side===it&&w.forceSinglePass===!1?(w.side=qt,w.needsUpdate=!0,Hs(w,F,G),w.side=Bn,w.needsUpdate=!0,Hs(w,F,G),w.side=it):Hs(w,F,G)}this.compile=function(w,F,G=null){G===null&&(G=w),f=Re.get(G),f.init(F),v.push(f),G.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),w!==G&&w.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const V=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ne=z.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const Me=ne[de];xt(Me,G,z),V.add(Me)}else xt(ne,G,z),V.add(ne)}),f=v.pop(),V},this.compileAsync=function(w,F,G=null){const V=this.compile(w,F,G);return new Promise(z=>{function ne(){if(V.forEach(function(de){Ee.get(de).currentProgram.isReady()&&V.delete(de)}),V.size===0){z(w);return}setTimeout(ne,10)}Oe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let at=null;function Dn(w){at&&at(w)}function _n(){ni.stop()}function Yo(){ni.start()}const ni=new sh;ni.setAnimationLoop(Dn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(w){at=w,se.setAnimationLoop(w),w===null?ni.stop():ni.start()},se.addEventListener("sessionstart",_n),se.addEventListener("sessionend",Yo),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,F,D),f=Re.get(w,v.length),f.init(F),v.push(f),q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),st.setFromProjectionMatrix(q,Tn,F.reversedDepth),Z=this.localClippingEnabled,Ke=re.init(this.clippingPlanes,Z),m=$.get(w,y.length),m.init(),y.push(m),se.enabled===!0&&se.isPresenting===!0){const ne=_.xr.getDepthSensingMesh();ne!==null&&Va(ne,F,-1/0,_.sortObjects)}Va(w,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ae,pe),Ue=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ue&&Ae.addToRenderList(m,w),this.info.render.frame++,Ke===!0&&re.beginShadows();const G=f.state.shadowsArray;Te.render(G,w,F),Ke===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,z=m.transmissive;if(f.setupLights(),F.isArrayCamera){const ne=F.cameras;if(z.length>0)for(let de=0,Me=ne.length;de<Me;de++){const ge=ne[de];Ko(V,z,w,ge)}Ue&&Ae.render(w);for(let de=0,Me=ne.length;de<Me;de++){const ge=ne[de];jo(m,w,ge,ge.viewport)}}else z.length>0&&Ko(V,z,w,F),Ue&&Ae.render(w),jo(m,w,F);D!==null&&A===0&&(qe.updateMultisampleRenderTarget(D),qe.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(_,w,F),he.resetDefaultState(),M=-1,b=null,v.pop(),v.length>0?(f=v[v.length-1],Ke===!0&&re.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Va(w,F,G,V){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||st.intersectsSprite(w)){V&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(q);const de=B.update(w),Me=w.material;Me.visible&&m.push(w,de,Me,G,be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||st.intersectsObject(w))){const de=B.update(w),Me=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),be.copy(de.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(q)),Array.isArray(Me)){const ge=de.groups;for(let Fe=0,Be=ge.length;Fe<Be;Fe++){const Le=ge[Fe],Ye=Me[Le.materialIndex];Ye&&Ye.visible&&m.push(w,de,Ye,G,be.z,Le)}}else Me.visible&&m.push(w,de,Me,G,be.z,null)}}const ne=w.children;for(let de=0,Me=ne.length;de<Me;de++)Va(ne[de],F,G,V)}function jo(w,F,G,V){const z=w.opaque,ne=w.transmissive,de=w.transparent;f.setupLightsView(G),Ke===!0&&re.setGlobalState(_.clippingPlanes,G),V&&we.viewport(I.copy(V)),z.length>0&&ks(z,F,G),ne.length>0&&ks(ne,F,G),de.length>0&&ks(de,F,G),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ko(w,F,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new _i(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?zs:An,minFilter:gi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ne=f.state.transmissionRenderTarget[V.id],de=V.viewport||I;ne.setSize(de.z*_.transmissionResolutionScale,de.w*_.transmissionResolutionScale);const Me=_.getRenderTarget(),ge=_.getActiveCubeFace(),Fe=_.getActiveMipmapLevel();_.setRenderTarget(ne),_.getClearColor(k),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Ue&&Ae.render(G);const Be=_.toneMapping;_.toneMapping=Zn;const Le=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Ke===!0&&re.setGlobalState(_.clippingPlanes,V),ks(w,G,V),qe.updateMultisampleRenderTarget(ne),qe.updateRenderTargetMipmap(ne),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let ct=0,wt=F.length;ct<wt;ct++){const _t=F[ct],pt=_t.object,Ne=_t.geometry,Mt=_t.material,et=_t.group;if(Mt.side===it&&pt.layers.test(V.layers)){const Zt=Mt.side;Mt.side=qt,Mt.needsUpdate=!0,Zo(pt,G,V,Ne,Mt,et),Mt.side=Zt,Mt.needsUpdate=!0,Ye=!0}}Ye===!0&&(qe.updateMultisampleRenderTarget(ne),qe.updateRenderTargetMipmap(ne))}_.setRenderTarget(Me,ge,Fe),_.setClearColor(k,Y),Le!==void 0&&(V.viewport=Le),_.toneMapping=Be}function ks(w,F,G){const V=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ne=w.length;z<ne;z++){const de=w[z],Me=de.object,ge=de.geometry,Fe=de.group;let Be=de.material;Be.allowOverride===!0&&V!==null&&(Be=V),Me.layers.test(G.layers)&&Zo(Me,F,G,ge,Be,Fe)}}function Zo(w,F,G,V,z,ne){w.onBeforeRender(_,F,G,V,z,ne),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(_,F,G,V,w,ne),z.transparent===!0&&z.side===it&&z.forceSinglePass===!1?(z.side=qt,z.needsUpdate=!0,_.renderBufferDirect(G,F,V,z,w,ne),z.side=Bn,z.needsUpdate=!0,_.renderBufferDirect(G,F,V,z,w,ne),z.side=it):_.renderBufferDirect(G,F,V,z,w,ne),w.onAfterRender(_,F,G,V,z,ne)}function Hs(w,F,G){F.isScene!==!0&&(F=me);const V=Ee.get(w),z=f.state.lights,ne=f.state.shadowsArray,de=z.state.version,Me=j.getParameters(w,z.state,ne,F,G),ge=j.getProgramCacheKey(Me);let Fe=V.programs;V.environment=w.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(w.isMeshStandardMaterial?Ct:Ft).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",J),Fe=new Map,V.programs=Fe);let Be=Fe.get(ge);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===de)return Qo(w,Me),Be}else Me.uniforms=j.getUniforms(w),w.onBeforeCompile(Me,_),Be=j.acquireProgram(Me,ge),Fe.set(ge,Be),V.uniforms=Me.uniforms;const Le=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=re.uniform),Qo(w,Me),V.needsLights=Sh(w),V.lightsStateVersion=de,V.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.directionalShadowMap.value=z.state.directionalShadowMap,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotShadowMap.value=z.state.spotShadowMap,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMap.value=z.state.pointShadowMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function Jo(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Ea.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Qo(w,F){const G=Ee.get(w);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function yh(w,F,G,V,z){F.isScene!==!0&&(F=me),qe.resetTextureUnits();const ne=F.fog,de=V.isMeshStandardMaterial?F.environment:null,Me=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:as,ge=(V.isMeshStandardMaterial?Ct:Ft).get(V.envMap||de),Fe=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!G.morphAttributes.position,Ye=!!G.morphAttributes.normal,ct=!!G.morphAttributes.color;let wt=Zn;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(wt=_.toneMapping);const _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=_t!==void 0?_t.length:0,Ne=Ee.get(V),Mt=f.state.lights;if(Ke===!0&&(Z===!0||w!==b)){const Gt=w===b&&V.id===M;re.setState(V,w,Gt)}let et=!1;V.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Mt.state.version||Ne.outputColorSpace!==Me||z.isBatchedMesh&&Ne.batching===!1||!z.isBatchedMesh&&Ne.batching===!0||z.isBatchedMesh&&Ne.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ne.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ne.instancing===!1||!z.isInstancedMesh&&Ne.instancing===!0||z.isSkinnedMesh&&Ne.skinning===!1||!z.isSkinnedMesh&&Ne.skinning===!0||z.isInstancedMesh&&Ne.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ne.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ne.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ne.instancingMorph===!1&&z.morphTexture!==null||Ne.envMap!==ge||V.fog===!0&&Ne.fog!==ne||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==re.numPlanes||Ne.numIntersection!==re.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Be||Ne.morphTargets!==Le||Ne.morphNormals!==Ye||Ne.morphColors!==ct||Ne.toneMapping!==wt||Ne.morphTargetsCount!==pt)&&(et=!0):(et=!0,Ne.__version=V.version);let Zt=Ne.currentProgram;et===!0&&(Zt=Hs(V,F,z));let Ei=!1,Jt=!1,fs=!1;const St=Zt.getUniforms(),rn=Ne.uniforms;if(we.useProgram(Zt.program)&&(Ei=!0,Jt=!0,fs=!0),V.id!==M&&(M=V.id,Jt=!0),Ei||b!==w){we.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),St.setValue(R,"projectionMatrix",w.projectionMatrix),St.setValue(R,"viewMatrix",w.matrixWorldInverse);const Yt=St.map.cameraPosition;Yt!==void 0&&Yt.setValue(R,oe.setFromMatrixPosition(w.matrixWorld)),De.logarithmicDepthBuffer&&St.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Jt=!0,fs=!0)}if(z.isSkinnedMesh){St.setOptional(R,z,"bindMatrix"),St.setOptional(R,z,"bindMatrixInverse");const Gt=z.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),St.setValue(R,"boneTexture",Gt.boneTexture,qe))}z.isBatchedMesh&&(St.setOptional(R,z,"batchingTexture"),St.setValue(R,"batchingTexture",z._matricesTexture,qe),St.setOptional(R,z,"batchingIdTexture"),St.setValue(R,"batchingIdTexture",z._indirectTexture,qe),St.setOptional(R,z,"batchingColorTexture"),z._colorsTexture!==null&&St.setValue(R,"batchingColorTexture",z._colorsTexture,qe));const on=G.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&ie.update(z,G,Zt),(Jt||Ne.receiveShadow!==z.receiveShadow)&&(Ne.receiveShadow=z.receiveShadow,St.setValue(R,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rn.envMap.value=ge,rn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),Jt&&(St.setValue(R,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&Mh(rn,fs),ne&&V.fog===!0&&ee.refreshFogUniforms(rn,ne),ee.refreshMaterialUniforms(rn,V,X,Q,f.state.transmissionRenderTarget[w.id]),Ea.upload(R,Jo(Ne),rn,qe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ea.upload(R,Jo(Ne),rn,qe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(R,"center",z.center),St.setValue(R,"modelViewMatrix",z.modelViewMatrix),St.setValue(R,"normalMatrix",z.normalMatrix),St.setValue(R,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Gt=V.uniformsGroups;for(let Yt=0,Wa=Gt.length;Yt<Wa;Yt++){const ii=Gt[Yt];We.update(ii,Zt),We.bind(ii,Zt)}}return Zt}function Mh(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Sh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,F,G){const V=Ee.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ee.get(w.texture).__webglTexture=F,Ee.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const G=Ee.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const bh=R.createFramebuffer();this.setRenderTarget=function(w,F=0,G=0){D=w,E=F,A=G;let V=!0,z=null,ne=!1,de=!1;if(w){const ge=Ee.get(w);if(ge.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(ge.__webglFramebuffer===void 0)qe.setupRenderTarget(w);else if(ge.__hasExternalTextures)qe.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Le=w.depthTexture;if(ge.__boundDepthTexture!==Le){if(Le!==null&&Ee.has(Le)&&(w.width!==Le.image.width||w.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(de=!0);const Be=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?z=Be[F][G]:z=Be[F],ne=!0):w.samples>0&&qe.useMultisampledRTT(w)===!1?z=Ee.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[G]:z=Be,I.copy(w.viewport),O.copy(w.scissor),W=w.scissorTest}else I.copy(ye).multiplyScalar(X).floor(),O.copy(He).multiplyScalar(X).floor(),W=Qe;if(G!==0&&(z=bh),we.bindFramebuffer(R.FRAMEBUFFER,z)&&V&&we.drawBuffers(w,z),we.viewport(I),we.scissor(O),we.setScissorTest(W),ne){const ge=Ee.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,G)}else if(de){const ge=F;for(let Fe=0;Fe<w.textures.length;Fe++){const Be=Ee.get(w.textures[Fe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,G,ge)}}else if(w!==null&&G!==0){const ge=Ee.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ge.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(w,F,G,V,z,ne,de,Me=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){we.bindFramebuffer(R.FRAMEBUFFER,ge);try{const Fe=w.textures[Me],Be=Fe.format,Le=Fe.type;if(!De.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-V&&G>=0&&G<=w.height-z&&(w.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Me),R.readPixels(F,G,V,z,Ce.convert(Be),Ce.convert(Le),ne))}finally{const Fe=D!==null?Ee.get(D).__webglFramebuffer:null;we.bindFramebuffer(R.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,F,G,V,z,ne,de,Me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge)if(F>=0&&F<=w.width-V&&G>=0&&G<=w.height-z){we.bindFramebuffer(R.FRAMEBUFFER,ge);const Fe=w.textures[Me],Be=Fe.format,Le=Fe.type;if(!De.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ye),R.bufferData(R.PIXEL_PACK_BUFFER,ne.byteLength,R.STREAM_READ),w.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Me),R.readPixels(F,G,V,z,Ce.convert(Be),Ce.convert(Le),0);const ct=D!==null?Ee.get(D).__webglFramebuffer:null;we.bindFramebuffer(R.FRAMEBUFFER,ct);const wt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await fd(R,wt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ye),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ne),R.deleteBuffer(Ye),R.deleteSync(wt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,G=0){const V=Math.pow(2,-G),z=Math.floor(w.image.width*V),ne=Math.floor(w.image.height*V),de=F!==null?F.x:0,Me=F!==null?F.y:0;qe.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,de,Me,z,ne),we.unbindTexture()};const wh=R.createFramebuffer(),Eh=R.createFramebuffer();this.copyTextureToTexture=function(w,F,G=null,V=null,z=0,ne=null){ne===null&&(z!==0?(Ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=z,z=0):ne=0);let de,Me,ge,Fe,Be,Le,Ye,ct,wt;const _t=w.isCompressedTexture?w.mipmaps[ne]:w.image;if(G!==null)de=G.max.x-G.min.x,Me=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Fe=G.min.x,Be=G.min.y,Le=G.isBox3?G.min.z:0;else{const on=Math.pow(2,-z);de=Math.floor(_t.width*on),Me=Math.floor(_t.height*on),w.isDataArrayTexture?ge=_t.depth:w.isData3DTexture?ge=Math.floor(_t.depth*on):ge=1,Fe=0,Be=0,Le=0}V!==null?(Ye=V.x,ct=V.y,wt=V.z):(Ye=0,ct=0,wt=0);const pt=Ce.convert(F.format),Ne=Ce.convert(F.type);let Mt;F.isData3DTexture?(qe.setTexture3D(F,0),Mt=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(qe.setTexture2DArray(F,0),Mt=R.TEXTURE_2D_ARRAY):(qe.setTexture2D(F,0),Mt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const et=R.getParameter(R.UNPACK_ROW_LENGTH),Zt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ei=R.getParameter(R.UNPACK_SKIP_PIXELS),Jt=R.getParameter(R.UNPACK_SKIP_ROWS),fs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,_t.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_t.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Be),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Le);const St=w.isDataArrayTexture||w.isData3DTexture,rn=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const on=Ee.get(w),Gt=Ee.get(F),Yt=Ee.get(on.__renderTarget),Wa=Ee.get(Gt.__renderTarget);we.bindFramebuffer(R.READ_FRAMEBUFFER,Yt.__webglFramebuffer),we.bindFramebuffer(R.DRAW_FRAMEBUFFER,Wa.__webglFramebuffer);for(let ii=0;ii<ge;ii++)St&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(w).__webglTexture,z,Le+ii),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(F).__webglTexture,ne,wt+ii)),R.blitFramebuffer(Fe,Be,de,Me,Ye,ct,de,Me,R.DEPTH_BUFFER_BIT,R.NEAREST);we.bindFramebuffer(R.READ_FRAMEBUFFER,null),we.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||Ee.has(w)){const on=Ee.get(w),Gt=Ee.get(F);we.bindFramebuffer(R.READ_FRAMEBUFFER,wh),we.bindFramebuffer(R.DRAW_FRAMEBUFFER,Eh);for(let Yt=0;Yt<ge;Yt++)St?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,on.__webglTexture,z,Le+Yt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,on.__webglTexture,z),rn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Gt.__webglTexture,ne,wt+Yt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Gt.__webglTexture,ne),z!==0?R.blitFramebuffer(Fe,Be,de,Me,Ye,ct,de,Me,R.COLOR_BUFFER_BIT,R.NEAREST):rn?R.copyTexSubImage3D(Mt,ne,Ye,ct,wt+Yt,Fe,Be,de,Me):R.copyTexSubImage2D(Mt,ne,Ye,ct,Fe,Be,de,Me);we.bindFramebuffer(R.READ_FRAMEBUFFER,null),we.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else rn?w.isDataTexture||w.isData3DTexture?R.texSubImage3D(Mt,ne,Ye,ct,wt,de,Me,ge,pt,Ne,_t.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(Mt,ne,Ye,ct,wt,de,Me,ge,pt,_t.data):R.texSubImage3D(Mt,ne,Ye,ct,wt,de,Me,ge,pt,Ne,_t):w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ne,Ye,ct,de,Me,pt,Ne,_t.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ne,Ye,ct,_t.width,_t.height,pt,_t.data):R.texSubImage2D(R.TEXTURE_2D,ne,Ye,ct,de,Me,pt,Ne,_t);R.pixelStorei(R.UNPACK_ROW_LENGTH,et),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Zt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ei),R.pixelStorei(R.UNPACK_SKIP_ROWS,Jt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,fs),ne===0&&F.generateMipmaps&&R.generateMipmap(Mt),we.unbindTexture()},this.initRenderTarget=function(w){Ee.get(w).__webglFramebuffer===void 0&&qe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?qe.setTextureCube(w,0):w.isData3DTexture?qe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?qe.setTexture2DArray(w,0):qe.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){E=0,A=0,D=null,we.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const vt=272,B0=vt/2-5,Et=-1.65,Mn={physical:{name:"Physical",css:"#e7dcc2",color:15195330,icon:"⚔",resist:null},fire:{name:"Fire",css:"#f17b4f",color:15825743,icon:"🜂",resist:"fire"},ice:{name:"Frost",css:"#83d4e9",color:8639721,icon:"❄",resist:"ice"},lightning:{name:"Storm",css:"#d3bd6a",color:13876586,icon:"ϟ",resist:"lightning"},holy:{name:"Radiant",css:"#f4dc9c",color:16047260,icon:"✦",resist:"holy"},shadow:{name:"Shadow",css:"#a38bc9",color:10718153,icon:"☾",resist:"shadow"},earth:{name:"Earth",css:"#a8b36a",color:11055978,icon:"❖",resist:"earth"},water:{name:"Tide",css:"#6db5cf",color:7189967,icon:"≈",resist:"water"},wind:{name:"Gale",css:"#97d0b0",color:9949360,icon:"≋",resist:"wind"}},bt={meadow:{id:"meadow",name:"The Verdant Reach",short:"Verdant Reach",center:[0,24],radius:59,element:"wind",levels:[1,2],ground:7904331,accent:10074459,map:"#91b75d",desc:"Sun-washed fields where every road begins.",enemies:{slime:5,wolf:3,bandit:2}},forest:{id:"forest",name:"Whisperwood",short:"Whisperwood",center:[-12,-73],radius:55,element:"earth",levels:[2,4],ground:4023874,accent:3035706,map:"#46784f",desc:"Conifers older than kingdoms keep their secrets.",enemies:{wolf:5,treant:2,sprite:3}},volcano:{id:"volcano",name:"Cinderwake",short:"Cinderwake",center:[-84,-68],radius:47,element:"fire",levels:[4,7],ground:5060402,accent:7160117,map:"#b6563b",desc:"The mountain breathes ash and remembers every oath.",enemies:{imp:5,magmahound:3,golem:2}},beach:{id:"beach",name:"Sunwreck Coast",short:"Sunwreck Coast",center:[96,57],radius:48,element:"water",levels:[3,6],ground:14204794,accent:15588002,map:"#d8c077",desc:"Salt, shipwrecks, and things that crawl from the tide.",enemies:{crab:5,bandit:2,tidesprite:3}},lake:{id:"lake",name:"Mirrormere",short:"Mirrormere",center:[-72,51],radius:31,element:"ice",levels:[3,6],ground:5207655,accent:7312512,map:"#568d91",desc:"A still lake that shows a sky no one else can see.",enemies:{bogslime:4,sprite:3,tidesprite:2}},graveyard:{id:"graveyard",name:"The Quiet Orchard",short:"Quiet Orchard",center:[-51,-16],radius:29,element:"shadow",levels:[3,6],ground:5857625,accent:7173482,map:"#718078",desc:"The dead are patient. They have had practice.",enemies:{skeleton:5,wraith:3,cultist:2}},highlands:{id:"highlands",name:"Stormcrag Heights",short:"Stormcrag",center:[80,-65],radius:44,element:"lightning",levels:[4,7],ground:7106919,accent:8751742,map:"#777d72",desc:"Thunder lives in the stone. So does something older.",enemies:{bat:4,golem:3,cultist:2}},cave:{id:"cave",name:"Gloomroot Hollow",short:"Gloomroot",center:[72,-43],radius:15,element:"earth",levels:[5,7],ground:2962229,accent:5065802,map:"#3b4244",desc:"Roots and crystals twist through a dark older than names.",enemies:{bat:4,golem:3,cultist:2}},town:{id:"town",name:"Hearthvale",short:"Hearthvale",center:[0,12],radius:27,element:"holy",levels:[1,1],ground:10195562,accent:12956794,map:"#d6b96e",desc:"A warm hearth at the edge of everything."},city:{id:"city",name:"Aurelune",short:"Aurelune",center:[58,4],radius:27,element:"holy",levels:[1,1],ground:10721910,accent:12365440,map:"#d7bd7b",desc:"The last city keeps a lantern lit for the dawn."}},k0=["meadow","forest","volcano","beach","lake","graveyard","highlands","cave"],Eo={human:{id:"human",name:"Human",sigil:"⚜",color:"#e9b85f",blurb:"Adaptable · ambitious · stubborn",perkName:"Human Versatility",perk:"+12% experience, +10% gold, +2% critical chance.",bonuses:{health:0,power:0,spirit:0,speed:.1,crit:.02,armor:1,xp:1.12,gold:1.1,heal:1,lifesteal:0,resist:{}}},angel:{id:"angel",name:"Angel",sigil:"✦",color:"#f4dc9c",blurb:"Winged · luminous · merciful",perkName:"Radiant Birth",perk:"+18 vitality, +25% healing, radiant resistance. Wings catch the light.",bonuses:{health:18,power:0,spirit:8,speed:0,crit:0,armor:0,xp:1,gold:1,heal:1.25,lifesteal:0,resist:{holy:.35,shadow:.1}}},demon:{id:"demon",name:"Demon",sigil:"☽",color:"#d17c69",blurb:"Horned · hungering · unbroken",perkName:"Infernal Inheritance",perk:"+4 attack, 10% lifesteal on strikes, fire resistance.",bonuses:{health:0,power:4,spirit:0,speed:0,crit:0,armor:1,xp:1,gold:1,heal:.9,lifesteal:.1,resist:{fire:.32,shadow:.12}}},beast:{id:"beast",name:"Beast",sigil:"❖",color:"#a8b36a",blurb:"Wildkin · keen-nosed · loyal",perkName:"Wildheart",perk:"Choose a beast kin. Dog: +30 vitality and speed. Cat: +9% crit and evasion.",bonuses:{health:12,power:1,spirit:0,speed:.35,crit:.03,armor:0,xp:1,gold:1,heal:1,lifesteal:0,resist:{}}}},To={dog:{id:"dog",name:"Dog",blurb:"Loyal heart, tireless legs.",bonusText:"+18 vitality, +0.7 move speed, +12% stamina recovery.",bonuses:{health:18,power:2,speed:.7,crit:0,evade:0,stamina:.12,resist:{earth:.12}}},cat:{id:"cat",name:"Cat",blurb:"Nine lives, one perfect strike.",bonusText:"+9% critical chance, +8% evasion, +0.35 move speed.",bonuses:{health:0,power:0,speed:.35,crit:.09,evade:.08,stamina:.04,resist:{wind:.12}}}},vi={warrior:{id:"warrior",name:"Warrior",icon:"⚔",element:"physical",role:"Vanguard",color:"#e9b85f",desc:"A wall of steel and stubbornness. Cleaves through packs and refuses to fall.",weapon:"Sword",health:155,energy:55,power:15,armor:13,crit:.08,speed:6.05,range:3.1,attackSpeed:.48,ability:{name:"Whirlwind",icon:"⟳",cooldown:7,cost:20,desc:"Spin through nearby foes, striking all of them."},startingWeapon:"warrior_iron"},rogue:{id:"rogue",name:"Rogue",icon:"†",element:"shadow",role:"Duelist",color:"#a38bc9",desc:"One clean cut is worth a hundred loud ones. Fast, fragile, and hard to catch.",weapon:"Daggers",health:108,energy:72,power:17,armor:6,crit:.22,speed:7.15,range:2.7,attackSpeed:.34,ability:{name:"Shadowstep",icon:"⌁",cooldown:6,cost:20,desc:"Dash through the dark and cut everything you pass."},startingWeapon:"rogue_iron"},archer:{id:"archer",name:"Archer",icon:"➶",element:"wind",role:"Sharpshot",color:"#9bc568",desc:"The wild is a quiver. Every horizon is a target.",weapon:"Bow",health:112,energy:74,power:14,armor:6,crit:.15,speed:6.85,range:17,attackSpeed:.58,ability:{name:"Rain of Arrows",icon:"⇊",cooldown:8,cost:24,desc:"Call a volley down on the nearest pack."},startingWeapon:"archer_iron"},wizard:{id:"wizard",name:"Wizard",icon:"✧",element:"fire",role:"Arcanist",color:"#71d7c4",desc:"Reality is a manuscript. The wizard has a red pen.",weapon:"Staff",health:96,energy:108,power:20,armor:4,crit:.1,speed:6.25,range:15,attackSpeed:.68,ability:{name:"Starfall",icon:"☄",cooldown:9,cost:30,desc:"Call a burning star down on a distant pack."},startingWeapon:"wizard_iron"},priest:{id:"priest",name:"Priest",icon:"✟",element:"holy",role:"Oracle",color:"#f4dc9c",desc:"Mercy is a kind of weapon. So is a well-aimed sunrise.",weapon:"Mace",health:124,energy:94,power:13,armor:9,crit:.08,speed:6.45,range:12,attackSpeed:.62,ability:{name:"Sanctuary",icon:"✺",cooldown:9,cost:26,desc:"Restore health and sear nearby shadows with light."},startingWeapon:"priest_iron"}},ll={slime:{id:"slime",name:"Meadow Slime",species:"slime",model:"slime",elementTint:!0,hp:44,damage:6,speed:2.7,range:1.55,aggro:10,radius:.7,height:1,xp:16,gold:5,scale:1,attackCooldown:1.75,windup:.5,ranged:!1},wolf:{id:"wolf",name:"Frostfang Wolf",species:"wolf",model:"wolf",elementTint:!0,hp:55,damage:8,speed:4.9,range:1.9,aggro:14,radius:.72,height:1.1,xp:22,gold:7,scale:1,attackCooldown:1.5,windup:.4,ranged:!1},bandit:{id:"bandit",name:"Roadside Bandit",species:"bandit",model:"bandit",elementTint:!1,hp:66,damage:9,speed:4,range:2.1,aggro:12,radius:.58,height:1.8,xp:26,gold:13,scale:1,attackCooldown:1.65,windup:.45,ranged:!1},treant:{id:"treant",name:"Rootbound Treant",species:"treant",model:"treant",elementTint:!0,hp:125,damage:13,speed:2.2,range:2.9,aggro:11,radius:1.1,height:2.5,xp:46,gold:17,scale:1.25,attackCooldown:2.2,windup:.75,ranged:!1,elite:!0},sprite:{id:"sprite",name:"Whisper Sprite",species:"sprite",model:"wisp",elementTint:!0,hp:34,damage:7,speed:3.7,range:9,aggro:15,radius:.5,height:1.2,xp:22,gold:6,scale:.9,attackCooldown:2.1,windup:.7,ranged:!0},imp:{id:"imp",name:"Cinder Imp",species:"imp",model:"imp",elementTint:!0,hp:58,damage:10,speed:4.3,range:1.9,aggro:13,radius:.58,height:1.5,xp:32,gold:10,scale:.95,attackCooldown:1.55,windup:.4,ranged:!1},magmahound:{id:"magmahound",name:"Magma Hound",species:"magmahound",model:"wolf",elementTint:!0,hp:78,damage:12,speed:5.2,range:2,aggro:15,radius:.75,height:1.15,xp:38,gold:12,scale:1.08,attackCooldown:1.4,windup:.35,ranged:!1},golem:{id:"golem",name:"Crag Golem",species:"golem",model:"golem",elementTint:!0,hp:145,damage:14,speed:2.3,range:2.7,aggro:11,radius:1.15,height:2.25,xp:55,gold:20,scale:1.3,attackCooldown:2.4,windup:.85,ranged:!1,elite:!0},crab:{id:"crab",name:"Reef Crab",species:"crab",model:"crab",elementTint:!0,hp:60,damage:8,speed:3.3,range:1.9,aggro:11,radius:.8,height:1,xp:27,gold:9,scale:1,attackCooldown:1.6,windup:.5,ranged:!1},tidesprite:{id:"tidesprite",name:"Tidewisp",species:"tidesprite",model:"wisp",elementTint:!0,hp:40,damage:8,speed:3.5,range:10,aggro:15,radius:.48,height:1.1,xp:24,gold:6,scale:.85,attackCooldown:2.2,windup:.8,ranged:!0},skeleton:{id:"skeleton",name:"Hollow Skeleton",species:"skeleton",model:"skeleton",elementTint:!1,hp:66,damage:10,speed:4,range:2,aggro:13,radius:.55,height:1.85,xp:32,gold:10,scale:1,attackCooldown:1.7,windup:.45,ranged:!1},wraith:{id:"wraith",name:"Sorrow Wraith",species:"wraith",model:"wraith",elementTint:!0,hp:52,damage:11,speed:3.9,range:8,aggro:15,radius:.55,height:1.8,xp:34,gold:9,scale:1,attackCooldown:2,windup:.7,ranged:!0},cultist:{id:"cultist",name:"Veiled Cultist",species:"cultist",model:"cultist",elementTint:!0,hp:70,damage:12,speed:3.6,range:10,aggro:16,radius:.55,height:1.85,xp:38,gold:12,scale:1,attackCooldown:2.1,windup:.8,ranged:!0},bogslime:{id:"bogslime",name:"Mirrormere Sludge",species:"bogslime",model:"slime",elementTint:!0,hp:88,damage:11,speed:2.6,range:1.65,aggro:10,radius:.85,height:1.15,xp:36,gold:10,scale:1.18,attackCooldown:1.9,windup:.6,ranged:!1},bat:{id:"bat",name:"Gloom Bat",species:"bat",model:"bat",elementTint:!0,hp:40,damage:9,speed:5.1,range:1.6,aggro:14,radius:.45,height:1.3,xp:26,gold:7,scale:.8,attackCooldown:1.4,windup:.3,ranged:!1}},lh=[{id:"thornmaw",name:"Thornmaw",title:"THE OLD GROWTH",biome:"forest",model:"treant",element:"earth",level:5,spawn:[-16,-72],scale:2.05,hp:760,damage:17,xp:420,gold:180,aggro:17,radius:1.8,speed:2.3,range:3.4,line:"The forest does not forgive axes.",quest:"boss_thornmaw"},{id:"pyreclaw",name:"Pyreclaw",title:"THE CINDER CROWN",biome:"volcano",model:"magmahound",element:"fire",level:7,spawn:[-84,-66],scale:2.25,hp:1080,damage:23,xp:680,gold:280,aggro:18,radius:2,speed:4,range:3.4,line:"The mountain wears its hunger like a crown.",quest:"boss_pyreclaw"},{id:"gravewarden",name:"The Gravewarden",title:"KEEPER OF THE QUIET ORCHARD",biome:"graveyard",model:"wraith",element:"shadow",level:6,spawn:[-51,-21],scale:2.15,hp:950,damage:20,xp:580,gold:240,aggro:17,radius:1.6,speed:3.5,range:9,line:"You are late. Everyone is late, eventually.",quest:"boss_gravewarden"},{id:"tidecolossus",name:"Tide Colossus",title:"THE HUNGRY SHALLOW",biome:"beach",model:"crab",element:"water",level:6,spawn:[98,61],scale:2.5,hp:1020,damage:21,xp:580,gold:240,aggro:17,radius:2.4,speed:2.8,range:3.8,line:"The sea gives. The sea takes. The sea keeps.",quest:"boss_tidecolossus"},{id:"gloomroot",name:"Gloomroot",title:"THE UNLIT ROOT",biome:"cave",model:"golem",element:"earth",level:8,spawn:[72,-43],scale:2.2,hp:1350,damage:27,xp:900,gold:360,aggro:16,radius:2,speed:2.4,range:3.2,line:"Light came down here once. It did not leave.",quest:"boss_gloomroot"}],tn={clear:{id:"clear",name:"Clear skies",icon:"☀",weight:24,fog:.0032,light:1,ambient:.62,tint:"transparent",rain:!1,snow:!1,ash:!1,wind:.3},fair:{id:"fair",name:"Drifting clouds",icon:"☁",weight:20,fog:.0038,light:.88,ambient:.58,tint:"rgba(178,198,190,.035)",rain:!1,snow:!1,ash:!1,wind:.55},rain:{id:"rain",name:"Soft rain",icon:"☂",weight:15,fog:.0062,light:.64,ambient:.47,tint:"rgba(35,62,76,.16)",rain:!0,snow:!1,ash:!1,wind:.8},storm:{id:"storm",name:"Thunderstorm",icon:"ϟ",weight:10,fog:.0085,light:.48,ambient:.38,tint:"rgba(25,35,54,.24)",rain:!0,snow:!1,ash:!1,wind:1.2},fog:{id:"fog",name:"Low mist",icon:"≋",weight:11,fog:.015,light:.58,ambient:.52,tint:"rgba(191,201,187,.10)",rain:!1,snow:!1,ash:!1,wind:.12},ash:{id:"ash",name:"Falling ash",icon:"✦",weight:8,fog:.0092,light:.56,ambient:.43,tint:"rgba(99,41,29,.17)",rain:!1,snow:!1,ash:!0,wind:.7},snow:{id:"snow",name:"Crystal snow",icon:"❄",weight:8,fog:.0075,light:.72,ambient:.55,tint:"rgba(176,201,214,.13)",rain:!1,snow:!0,ash:!1,wind:.5}},hl=[{id:"elder",name:"Elder Maren",title:"KEEPER OF EMBERS",zone:"Hearthvale",pos:[2.7,18.5],race:"human",sex:"feminine",role:"quest",icon:"✦",palette:["#5c3e54","#d2b06f","#f0c8a3"],greeting:"The old road has teeth tonight, traveller. But you already know that, don't you?",questId:"wolves"},{id:"bram",name:"Bram Coalfist",title:"MASTER OF THE ANVIL",zone:"Hearthvale",pos:[11.5,13.4],race:"demon",sex:"masculine",role:"vendor",vendor:"weapon",icon:"⚒",palette:["#5b3328","#c88a42","#b75e46"],greeting:"Steel remembers every hand that held it. Let's give yours something worth remembering."},{id:"ysolde",name:"Ysolde Threadbare",title:"WARDROBE OF WAYFARERS",zone:"Hearthvale",pos:[8.4,24],race:"human",sex:"feminine",role:"vendor",vendor:"armor",icon:"❖",palette:["#37586a","#d4c08e","#d39b74"],greeting:"A good coat is a promise you make to your future self. I sell very good coats."},{id:"pip",name:"Pip",title:"PEDDLER OF SMALL MIRACLES",zone:"Hearthvale",pos:[-5.8,22.6],race:"beast",beastType:"cat",sex:"masculine",role:"vendor",vendor:"item",icon:"✧",palette:["#5e4b32","#d0a85c","#d39b74"],greeting:"Potions! Bombs! A rope that is only slightly cursed! Everything a hero needs."},{id:"ivy",name:"Sister Ivy",title:"THE LAST LANTERN",zone:"Hearthvale",pos:[-11.7,8],race:"angel",sex:"feminine",role:"quest",icon:"✟",palette:["#d6d3bb","#d9b864","#f0c8a3"],greeting:"The Quiet Orchard is not quiet anymore. Something there is learning our names.",questId:"hollow"},{id:"tomas",name:"Tomas Vane",title:"GATEWARDEN",zone:"Hearthvale",pos:[.3,31.2],race:"human",sex:"masculine",role:"quest",icon:"⚔",palette:["#41505c","#a77738","#a96e4f"],greeting:"Gate's open, hero. Whether you come back through it is between you and the wilds.",questId:"ash"},{id:"vey",name:"Chancellor Vey",title:"VOICE OF AURELUNE",zone:"Aurelune",pos:[56,-1],race:"demon",sex:"feminine",role:"quest",icon:"☽",palette:["#432d4b","#d5b167","#a96e4f"],greeting:"The Cinder Crown is not a metaphor, child. It is a thing with a heartbeat. Stop it.",questId:"cinder"},{id:"mira",name:"Mira Sol",title:"CURATOR OF FIRST THINGS",zone:"Aurelune",pos:[50.5,2],race:"angel",sex:"feminine",role:"quest",icon:"◈",palette:["#d6d0b4","#6aa5a6","#e7e0d1"],greeting:"Whisperwood keeps three runestones older than the city. Wake them in the old order and the wood will open its hand.",questId:"runes"},{id:"kael",name:"Kael Emberhand",title:"CITY ARMOURER",zone:"Aurelune",pos:[49,8.7],race:"beast",beastType:"dog",sex:"masculine",role:"vendor",vendor:"weapon",icon:"⚒",palette:["#4a3f2f","#cb8e3c","#d39b74"],greeting:"Hearthvale steel is honest. Aurelune steel is honest *and* angry. Pick your poison."},{id:"sable",name:"Sable",title:"NIGHTWEAVE TAILOR",zone:"Aurelune",pos:[61.2,9.8],race:"beast",beastType:"cat",sex:"feminine",role:"vendor",vendor:"armor",icon:"✧",palette:["#313a45","#9b84dd","#754737"],greeting:"Armor should move like a second skin. Or a first one, if you are brave."},{id:"nia",name:"Nia Quill",title:"APOTHECARY",zone:"Aurelune",pos:[65,4],race:"human",sex:"feminine",role:"vendor",vendor:"item",icon:"♜",palette:["#3d5a46","#d1b56e","#754737"],greeting:"Everything in this shop is safe. The things outside it are not. Buy accordingly."},{id:"cassian",name:"Cassian Rook",title:"TIDE-WATCHER",zone:"Aurelune",pos:[52,-9.3],race:"human",sex:"masculine",role:"quest",icon:"≈",palette:["#355064","#b6c2b7","#a96e4f"],greeting:"The coast has been crawling. If the reef crabs reach the road, Aurelune starves by winter.",questId:"tide"}],H0={wolves:{id:"wolves",title:"Wolves at the Woodline",giver:"elder",level:1,intro:"Three nights running, the frostfang pack has come down from Whisperwood. They are starving — which makes them bold. Thin the pack before they reach the sheep. Six should do.",completedLine:"The fields will sleep easier tonight. Take this — and keep your blade close. The wood has been restless since the last moon.",objectives:[{type:"kill",target:"wolf",count:6,label:"Frostfang wolves slain"}],rewards:{gold:95,xp:210}},hollow:{id:"hollow",title:"Restless Hollow",giver:"ivy",level:2,intro:"The Quiet Orchard used to be a place of rest. Now the bones walk at dusk. Put five of them back to sleep. Do not read the names on their stones; they read yours.",completedLine:"May their names be light. Your soul is heavier for the work, I know. Let me ease it.",objectives:[{type:"kill",target:"skeleton",count:5,label:"Hollow skeletons laid to rest"}],rewards:{gold:150,xp:340}},ash:{id:"ash",title:"Ash on the Wind",giver:"tomas",level:3,intro:"Cinderwake is spitting imps onto the northern road. Four of them were circling the gate last night. I cannot leave my post. You can.",completedLine:"The gate lanterns are steady again. Here's coin from the watch fund — don't spend it all on pretty armor.",objectives:[{type:"kill",target:"imp",count:6,label:"Cinder imps banished"}],rewards:{gold:220,xp:470}},runes:{id:"runes",title:"The First Dawn",giver:"mira",level:4,intro:"Three runestones stand in Whisperwood. Wake them all and the old vault beneath the roots will open. The stones answer to touch — but they are shy of the unworthy.",completedLine:"The vault remembered you. Look at that. Take this relic; it was waiting for a hand like yours.",objectives:[{type:"puzzle",target:"forest",count:1,label:"Wake the Whisperwood runestones"}],rewards:{gold:320,xp:640,item:"relic"}},tide:{id:"tide",title:"Tidebreaker",giver:"cassian",level:4,intro:"Reef crabs have been dragging the fishing nets under. Kill six and the fleet can sail again. Mind the big one — the Tide Colossus is more than a story.",completedLine:"The boats are singing again. Not literally. That would be worse. Coin, as promised.",objectives:[{type:"kill",target:"crab",count:6,label:"Reef crabs broken"}],rewards:{gold:280,xp:560}},cinder:{id:"cinder",title:"The Cinder Crown",giver:"vey",level:6,intro:"Pyreclaw has worn the Cinder Crown long enough. The mountain obeys it now. Bring me its heart, hero, and Aurelune will owe you a season of dawns.",completedLine:"The Crown is cold. The mountain is quiet. You have done what armies could not. Aurelune is yours.",objectives:[{type:"kill",target:"boss_pyreclaw",count:1,label:"Pyreclaw defeated"}],rewards:{gold:720,xp:1800,item:"relic"}}},os={common:{name:"Common",color:"#c7b892",mult:1,css:"#c7b892"},uncommon:{name:"Uncommon",color:"#71d7c4",mult:1.35,css:"#71d7c4"},rare:{name:"Rare",color:"#5caee8",mult:1.85,css:"#5caee8"},epic:{name:"Epic",color:"#a38bc9",mult:2.6,css:"#a38bc9"},legendary:{name:"Legendary",color:"#e9b85f",mult:3.8,css:"#e9b85f"}},hh={warrior:"⚔",rogue:"†",archer:"➶",wizard:"✧",priest:"✟"},cs={warrior:{weapons:[{id:"warrior_iron",name:"Iron Longsword",element:"physical",base:9,rarity:"common",desc:"Dependable, dented, dear."},{id:"warrior_oak",name:"Oakheart Blade",element:"earth",base:14,rarity:"uncommon",desc:"Grown around a fallen star."},{id:"warrior_ember",name:"Emberbrand",element:"fire",base:20,rarity:"rare",desc:"The edge never truly cools."},{id:"warrior_storm",name:"Stormcleaver",element:"lightning",base:27,rarity:"epic",desc:"Thunder given a handle."},{id:"warrior_dawn",name:"Dawnsunder",element:"holy",base:36,rarity:"legendary",desc:"The first light, folded into steel."}],armor:[{id:"warrior_leather",name:"Wayfarer Plate",element:"physical",health:22,armor:8,rarity:"common"},{id:"warrior_ironarmor",name:"Ironbark Cuirass",element:"earth",health:38,armor:14,rarity:"uncommon"},{id:"warrior_emberarmor",name:"Cinder-forged Mail",element:"fire",health:58,armor:22,rarity:"rare"},{id:"warrior_dawnarmor",name:"Aegis of Morning",element:"holy",health:86,armor:34,rarity:"legendary"}]},rogue:{weapons:[{id:"rogue_iron",name:"Paired Kindnesses",element:"physical",base:8,rarity:"common",desc:"Quick, quiet, convincing."},{id:"rogue_frost",name:"Winter's Whisper",element:"ice",base:13,rarity:"uncommon",desc:"A cold word in the dark."},{id:"rogue_venom",name:"Nightbloom Fangs",element:"shadow",base:19,rarity:"rare",desc:"Blooms only where blood falls."},{id:"rogue_storm",name:"Static Twins",element:"lightning",base:26,rarity:"epic",desc:"Two answers to one question."},{id:"rogue_dawn",name:"Dawn's Last Secret",element:"holy",base:35,rarity:"legendary",desc:"The cut that ends the night."}],armor:[{id:"rogue_leather",name:"Softstep Jerkin",element:"physical",health:14,armor:4,rarity:"common"},{id:"rogue_shadow",name:"Duskweave Harness",element:"shadow",health:24,armor:8,rarity:"uncommon"},{id:"rogue_frostarmor",name:"Rimeleather Coat",element:"ice",health:38,armor:13,rarity:"rare"},{id:"rogue_dawnarmor",name:"Crown of Quiet Dawns",element:"holy",health:55,armor:21,rarity:"legendary"}]},archer:{weapons:[{id:"archer_iron",name:"Greenwood Shortbow",element:"physical",base:8,rarity:"common",desc:"Strung with waxed sinew."},{id:"archer_wind",name:"Gale-song Longbow",element:"wind",base:13,rarity:"uncommon",desc:"Every arrow hums one note."},{id:"archer_frost",name:"Rimefall Recurve",element:"ice",base:19,rarity:"rare",desc:"Draws winter from the sky."},{id:"archer_storm",name:"Thunderstring",element:"lightning",base:26,rarity:"epic",desc:"The bowstring is a held storm."},{id:"archer_dawn",name:"Sunshot",element:"holy",base:35,rarity:"legendary",desc:"A sunrise with fletching."}],armor:[{id:"archer_leather",name:"Ranger's Mantle",element:"physical",health:15,armor:4,rarity:"common"},{id:"archer_leaf",name:"Whisperleaf Vest",element:"earth",health:26,armor:8,rarity:"uncommon"},{id:"archer_stormarmor",name:"Stormfeather Cloak",element:"lightning",health:40,armor:13,rarity:"rare"},{id:"archer_dawnarmor",name:"Skyhunter Regalia",element:"holy",health:57,armor:20,rarity:"legendary"}]},wizard:{weapons:[{id:"wizard_iron",name:"Apprentice Ashstaff",element:"physical",base:9,rarity:"common",desc:"Mostly a walking stick. Mostly."},{id:"wizard_frost",name:"Mirrormere Rod",element:"ice",base:14,rarity:"uncommon",desc:"The water remembers the spell."},{id:"wizard_ember",name:"Cinderwake Scepter",element:"fire",base:21,rarity:"rare",desc:"A small, obedient volcano."},{id:"wizard_storm",name:"Stormglass Staff",element:"lightning",base:28,rarity:"epic",desc:"Lightning, bottled badly."},{id:"wizard_dawn",name:"The First Word",element:"holy",base:38,rarity:"legendary",desc:"Before light, there was a sentence."}],armor:[{id:"wizard_robe",name:"Dustgrey Robes",element:"physical",health:10,armor:3,rarity:"common"},{id:"wizard_ice",name:"Mirrorweave Robes",element:"ice",health:20,armor:6,rarity:"uncommon"},{id:"wizard_emberarmor",name:"Emberglass Vestments",element:"fire",health:33,armor:11,rarity:"rare"},{id:"wizard_dawnarmor",name:"Aetheric Mantle",element:"holy",health:48,armor:18,rarity:"legendary"}]},priest:{weapons:[{id:"priest_iron",name:"Chapel Mace",element:"physical",base:9,rarity:"common",desc:"Blessed, blunt, businesslike."},{id:"priest_holy",name:"Lantern Sceptre",element:"holy",base:13,rarity:"uncommon",desc:"Holds a light that will not drown."},{id:"priest_water",name:"Tidecaller",element:"water",base:19,rarity:"rare",desc:"Mercy, with a tide behind it."},{id:"priest_storm",name:"Stormbell",element:"lightning",base:26,rarity:"epic",desc:"Rings once. Thunder answers."},{id:"priest_dawn",name:"Vigil of Dawn",element:"holy",base:35,rarity:"legendary",desc:"The last lantern of the old world."}],armor:[{id:"priest_robe",name:"Novice Vestments",element:"physical",health:18,armor:6,rarity:"common"},{id:"priest_holyarmor",name:"Lanternspun Robes",element:"holy",health:31,armor:11,rarity:"uncommon"},{id:"priest_waterarmor",name:"Tidewoven Habit",element:"water",health:48,armor:17,rarity:"rare"},{id:"priest_dawnarmor",name:"Vestments of the Dawn",element:"holy",health:68,armor:26,rarity:"legendary"}]}},Qi=[{id:"trinket_luck",name:"Rabbit's Regret",icon:"◈",desc:"+8% critical chance.",crit:.08,power:2,rarity:"uncommon",price:110},{id:"trinket_ember",name:"Ember Locket",icon:"◉",desc:"+10 fire damage · +8% fire resistance.",element:"fire",elementPower:10,resist:{fire:.08},power:3,rarity:"rare",price:190},{id:"trinket_frost",name:"Frozen Tear",icon:"❄",desc:"+10 frost damage · +8% frost resistance.",element:"ice",elementPower:10,resist:{ice:.08},power:3,rarity:"rare",price:190},{id:"trinket_dawn",name:"Dawnstone Shard",icon:"✦",desc:"+16 radiant damage · +15 vitality.",element:"holy",elementPower:16,health:15,power:5,rarity:"epic",price:340},{id:"trinket_shadow",name:"Whisper of the Hollow",icon:"☾",desc:"+12 shadow damage · +6% lifesteal.",element:"shadow",elementPower:12,lifesteal:.06,power:4,rarity:"epic",price:340}],G0={health_potion:{id:"health_potion",name:"Sunpetal Draught",icon:"♜",type:"potion",desc:"Restores 45% of maximum health.",price:26,effect:"heal",value:.45},focus_tonic:{id:"focus_tonic",name:"Stormcap Tonic",icon:"☄",type:"potion",desc:"Restores 55% of maximum spirit.",price:22,effect:"energy",value:.55},bomb:{id:"bomb",name:"Cinder Flask",icon:"✦",type:"bomb",desc:"Explodes for 45 + 5× level fire damage.",price:38,effect:"bomb"},wardraught:{id:"wardraught",name:"Ironbark Brew",icon:"♨",type:"potion",desc:"Grants +30 armor for 20 seconds.",price:34,effect:"ward"}},xa={common:0,uncommon:1,rare:2,epic:3,legendary:4};let dh=1;function yi(s,e=1,t={}){const n=Math.max(1,Math.round(e)),i=t.rarity||s.rarity||"common",a=os[i]||os.common,r=!!s.base;return{uid:t.uid||`item_${dh++}`,templateId:s.id,name:s.name,icon:t.icon||(r?hh[t.classId]||"⚔":"❖"),type:r?"weapon":"armor",slot:r?"weapon":"armor",element:s.element||"physical",rarity:i,level:n,desc:s.desc||"A relic of the Sundered Realms.",classId:t.classId||null,price:Math.round((r?30:24)*a.mult+n*(r?8:7)*a.mult),damage:r?Math.round((s.base+n*2.1)*a.mult):0,elementPower:r?Math.round((s.base*.33+n*.8)*a.mult):0,health:s.health?Math.round(s.health*(1+(n-1)*.16)*a.mult):0,armor:s.armor?Math.round(s.armor*(1+(n-1)*.14)*a.mult):0,crit:0,power:r?0:Math.round((2+n*.45)*a.mult),resist:s.element&&s.element!=="physical"?{[s.element]:.05+a.mult*.015}:{},trinket:!1}}function Ao(s,e=1){os[s.rarity]||os.rare;const t=1+(Math.max(1,e)-1)*.18;return{uid:`item_${dh++}`,templateId:s.id,name:s.name,icon:s.icon,type:"trinket",slot:"trinket",element:s.element||"physical",rarity:s.rarity,level:Math.max(1,Math.round(e)),desc:s.desc,price:Math.round(s.price*t),classId:null,damage:0,elementPower:Math.round((s.elementPower||0)*t),health:Math.round((s.health||0)*t),armor:0,power:Math.round((s.power||0)*t),crit:s.crit||0,lifesteal:s.lifesteal||0,resist:s.resist||{},trinket:!0}}function V0(s){const t=cs[s].weapons[0],n=yi(t,1,{classId:s,rarity:"common"});return n.name=t.name,n.damage=Math.round(t.base+2),n.elementPower=0,n.price=12,n.desc=t.desc,n}function W0(s){const t=cs[s].armor[0];return yi(t,1,{classId:s,rarity:"common"})}function X0(s,e){const t=cs[s],n=Math.min(t.weapons.length-1,2+Math.floor(e/5)),i=t.weapons[n];return yi(i,Math.max(3,e+1),{classId:s,rarity:n>=3?"epic":"rare"})}function q0(s,e,t=1){const n=Math.max(1,e.level+(t>=5?1:0)),i=[],a=cs[e.classId],r=Math.min(5,Math.ceil(n/3)+1);if(s==="weapon"){const o=a.weapons.filter(h=>xa[h.rarity]*3+1<=n+2||xa[h.rarity]+1<=r),l=Math.max(0,Math.min(o.length-1,Math.floor((n-1)/4))),c=new Set;for(let h=0;h<4;h++){const d=o[(l+h)%o.length];if(!d||c.has(d.id))continue;c.add(d.id);const u=Math.max(1,n+(h===3?1:0)),p=yi(d,u,{classId:e.classId,icon:hh[e.classId]});p.price=Math.round(p.price*(t>=5?1.18:1)),i.push(p)}}else if(s==="armor"){const o=a.armor.filter(h=>xa[h.rarity]*3+1<=n+2||xa[h.rarity]+1<=r),l=Math.max(0,Math.min(o.length-1,Math.floor((n-1)/4))),c=new Set;for(let h=0;h<4;h++){const d=o[(l+h)%o.length];if(!d||c.has(d.id))continue;c.add(d.id);const u=yi(d,Math.max(1,n+(h===3?1:0)),{classId:e.classId});u.price=Math.round(u.price*(t>=5?1.18:1)),i.push(u)}i.push(Ao(Qi[Math.min(Qi.length-1,Math.floor(n/3))],n))}else{for(const o of["health_potion","focus_tonic","bomb","wardraught"])i.push({...G0[o],consumable:!0});i.push(Ao(Qi[Math.min(Qi.length-1,1+Math.floor(n/5))],n))}return i}function Tr(s){if(!s)return"";if(s.consumable)return s.desc;if(s.type==="weapon"){const t=Mn[s.element]?.name||"Physical";return`${s.damage} power · ${s.elementPower} ${t.toLowerCase()} · Lv.${s.level}`}if(s.type==="armor")return`+${s.health} vitality · +${s.armor} armor · Lv.${s.level}`;const e=[];return s.power&&e.push(`+${s.power} attack`),s.crit&&e.push(`+${Math.round(s.crit*100)}% crit`),s.elementPower&&e.push(`+${s.elementPower} ${Mn[s.element]?.name.toLowerCase()}`),s.health&&e.push(`+${s.health} vitality`),e.join(" · ")}function Co(s){return Math.round(110*Math.pow(s,1.26))}function bn(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function _a(s,e,t=1){let n=Math.imul(s|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t,2147483647);return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967296}function Yn(s,e,t=1){const n=Math.floor(s),i=Math.floor(e),a=s-n,r=e-i,o=a*a*(3-2*a),l=r*r*(3-2*r),c=_a(n,i,t),h=_a(n+1,i,t),d=_a(n,i+1,t),u=_a(n+1,i+1,t);return(c*(1-o)+h*o)*(1-l)+(d*(1-o)+u*o)*l}function Xi(s,e,t=1){let n=0,i=.5,a=1;for(let r=0;r<4;r++)n+=Yn(s*a,e*a,t+r*11)*i,a*=2.03,i*=.5;return n}function mt(s,e,t){return Math.max(e,Math.min(t,s))}function hi(s,e,t){return s+(e-s)*t}function pn(s,e,t){const n=mt((t-s)/(e-s),0,1);return n*n*(3-2*n)}function Je(s,e,t,n){return Math.hypot(s-t,e-n)}function $0(s){const e=Math.floor(s)%24,t=Math.floor(s%1*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function Y0(s,e){const t=Object.entries(e),n=t.reduce((a,[,r])=>a+r,0);let i=s()*n;for(const[a,r]of t)if(i-=r,i<=0)return a;return t[0][0]}const Ro=[15780003,13867892,11103823,7685943,15196369],Po=[4353648,8077125,4149123,7034674,5068356],Ar=new Map,j0=new Set,va=new xe,dl=new xe;function Ua(s=0,e=0){return{skin:Ro[s%Ro.length],cloth:Po[e%Po.length]}}function L(s,e={}){const t=`${s}_${e.emissive||0}_${e.emissiveIntensity||0}_${e.roughness||0}_${e.metalness||0}_${e.transparent||0}_${e.opacity||1}_${e.flat===!1?0:1}`;if(!e.unique&&Ar.has(t))return Ar.get(t);const n=new ut({color:s,roughness:e.roughness??.86,metalness:e.metalness??.02,flatShading:e.flat!==!1,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??0,transparent:!!e.transparent,opacity:e.opacity??1,side:e.side??Bn,depthWrite:e.depthWrite??!0,vertexColors:!!e.vertexColors});return e.unique||Ar.set(t,n),j0.add(n),n}function N(s,e,t,n,i=0,a=0,r=0){const o=new ve(new ti(s,e,t),n);return o.position.set(i,a,r),o.castShadow=!0,o.receiveShadow=!0,o}function gt(s,e,t,n,i=0,a=0,r=0){const o=new ve(new It(s,e,t),n);return o.position.set(i,a,r),o.castShadow=!0,o.receiveShadow=!0,o}function Pe(s,e,t,n,i,a=0,r=0,o=0){const l=new ve(new wi(s,e,t,n),i);return l.position.set(a,r,o),l.castShadow=!0,l.receiveShadow=!0,l}function je(s,e,t=0,n=0,i=0,a=8,r=6){const o=new ve(new Bs(s,a,r),e);return o.position.set(t,n,i),o.castShadow=!0,o.receiveShadow=!0,o}function jt(s,e=0){return va.setHex(s),e>0?va.lerp(dl.setHex(16777215),e):va.lerp(dl.setHex(0),-e),va.getHex()}function Mi(s){return Mn[s]?.color||15195330}function Ot(s,e,t){return new xe(s).lerp(new xe(e),t).getHex()}function ls(s={}){const e=s.race||"human",t=s.beastType||"dog",n=s.sex||"feminine",i=s.classId||"warrior",a=vi[i]||vi.warrior,r=s.skin??Ro[0],o=s.cloth??Po[0],l=s.role||"hero",c=s.palette||null,h=l==="npc",d=c?c[0]:o,u=c?c[1]:Ot(o,15317087,.45),p=c?c[2]:r,g=jt(d,-.42);jt(d,-.62);const x=l==="npc"?jt(u,-.35):3942946,m=L(d),f=L(g),y=L(u),v=L(p),_=L(x),T=L(9147537,{metalness:.65,roughness:.4}),E=L(14001228,{metalness:.7,roughness:.36,emissive:3810309,emissiveIntensity:.25}),A=L(e==="demon"?16738893:1054752,{emissive:e==="demon"?7737606:0,emissiveIntensity:e==="demon"?.8:0}),D=new fe,M=new fe;D.add(M);const b=n==="masculine"?.67:.58,I=n==="feminine"?.56:.49,O=n==="feminine"?.58:.62;M.add(N(I,.2,.31,f,0,1.02,0));const W=N(b,O,.34,m,0,1.35,0);M.add(W),M.add(N(b*.92,.1,.36,_,0,1.08,0)),M.add(N(.1,.1,.05,E,0,1.09,-.19)),M.add(N(b*.75,.08,.36,y,0,1.51,0));const k=new fe;k.position.set(0,1.71,0),M.add(k),k.add(N(.13,.13,.13,v,0,.01,0));const Y=N(.39,.4,.35,v,0,.21,0);k.add(Y),k.add(N(.045,.055,.04,A,-.09,.23,-.185)),k.add(N(.045,.055,.04,A,.09,.23,-.185)),k.add(N(.07,.035,.045,L(jt(p,-.12)),0,.13,-.2));const K=N(.1,.018,.01,L(jt(p,-.36)),0,.085,-.182);k.add(K);const Q=s.hair??(e==="beast"?jt(p,-.28):e==="angel"?14997676:3483165),X=L(Q);k.add(N(.42,.13,.39,X,0,.4,0)),k.add(N(.06,.25,.12,X,-.2,.23,.08)),k.add(N(.06,.25,.12,X,.2,.23,.08)),(n==="feminine"||i==="wizard")&&k.add(N(.32,.38,.11,X,0,.13,.18)),i==="rogue"&&!h&&(k.add(N(.46,.27,.42,f,0,.33,.02)),k.add(N(.5,.06,.44,y,0,.19,.03))),i==="archer"&&!h&&(k.add(gt(.33,.3,5,f,0,.5,.02)),k.add(N(.5,.045,.48,_,0,.34,.01))),i==="wizard"&&!h&&(k.add(gt(.37,.7,5,m,0,.64,.01)),k.add(N(.48,.055,.44,E,0,.33,0)),k.add(N(.42,.08,.4,f,0,.19,.01))),i==="priest"&&!h&&(k.add(N(.36,.03,.36,E,0,.37,-.01)),k.add(gt(.04,.14,4,E,0,.46,-.03)));const ae={};if(e==="angel"){const q=new ve(new gn(.24,.022,5,20),E.clone());q.material.emissive=new xe(15251295),q.material.emissiveIntensity=1.3,q.rotation.x=Math.PI/2,q.position.y=2.15,M.add(q);const oe=L(15657174,{emissive:6114858,emissiveIntensity:.16,side:it}),be=new fe;be.position.set(-.25,1.43,.19),M.add(be);const me=new fe;me.position.set(.25,1.43,.19),M.add(me);for(const[Ue,ot]of[[-1,be],[1,me]])for(let R=0;R<3;R++){const Ve=N(.16,.52+R*.14,.045,oe,Ue*(.1+R*.09),.14+R*.06,.03+R*.045);Ve.rotation.z=Ue*(-.3-R*.11),Ve.rotation.x=-.16,ot.add(Ve)}ae.wings=[be,me],ae.halo=q}if(e==="demon"){const q=L(2957345,{roughness:.6}),oe=gt(.075,.32,4,q,-.15,.48,.02);oe.rotation.z=.36,k.add(oe);const be=gt(.075,.32,4,q,.15,.48,.02);be.rotation.z=-.36,k.add(be);const me=L(6039088,{side:it,emissive:2491915,emissiveIntensity:.2}),Ue=new fe;Ue.position.set(-.3,1.4,.18),M.add(Ue);const ot=new fe;ot.position.set(.3,1.4,.18),M.add(ot);for(const[Ve,Oe]of[[-1,Ue],[1,ot]]){const De=new ve(new It(.38,.7,4,1,!0),me);De.position.set(Ve*.18,.15,.02),De.rotation.z=Ve*-.85,De.rotation.x=-.4,De.scale.z=.25,Oe.add(De)}ae.wings=[Ue,ot];const R=new fe;R.position.set(0,.97,.18),M.add(R);for(let Ve=0;Ve<4;Ve++){const Oe=Pe(.035-Ve*.006,.045-Ve*.006,.27,4,L(5580074),0,.05,Ve*.22);Oe.rotation.x=-.15-Ve*.05,R.add(Oe)}R.add(gt(.07,.18,4,L(7614263),0,.14,.85)),ae.tail=R}if(e==="beast"){const q=s.fur??(t==="cat"?8085829:5850680),oe=L(q);if(t==="cat"){const be=gt(.11,.27,3,oe,-.14,.52,0);be.rotation.z=.2,k.add(be);const me=gt(.11,.27,3,oe,.14,.52,0);me.rotation.z=-.2,k.add(me),k.add(N(.13,.07,.08,L(jt(q,-.35)),-.09,.5,-.02)),k.add(N(.13,.07,.08,L(jt(q,-.35)),.09,.5,-.02)),k.add(N(.16,.11,.08,oe,0,.13,-.22));const Ue=new fe;Ue.position.set(0,.94,.18),M.add(Ue);let ot=Ue;for(let R=0;R<4;R++){const Ve=Pe(.04-R*.005,.05-R*.004,.32,4,oe,0,.06,R*.26);Ve.rotation.x=-.55,ot.add(Ve),ot=Ve}ae.tail=Ue}else{const be=gt(.12,.2,3,oe,-.17,.48,.01);be.rotation.z=.65,k.add(be);const me=gt(.12,.2,3,oe,.17,.48,.01);me.rotation.z=-.65,k.add(me),k.add(N(.19,.13,.1,oe,0,.12,-.23)),k.add(N(.055,.045,.035,L(1774609),0,.15,-.285));const Ue=new fe;Ue.position.set(0,1,.18),M.add(Ue);const ot=Pe(.05,.085,.55,4,oe,0,-.2,.2);ot.rotation.x=-.55,Ue.add(ot),ae.tail=Ue}}const pe=m,ye=new fe;ye.position.set(-b/2-.06,1.51,0),M.add(ye),ye.add(N(.16,.52,.16,pe,0,-.25,0)),ye.add(N(.17,.12,.17,v,0,-.53,0));const He=new fe;He.position.set(b/2+.06,1.51,0),M.add(He),He.add(N(.16,.52,.16,pe,0,-.25,0)),He.add(N(.17,.12,.17,v,0,-.53,0));const Qe=new fe;Qe.position.set(-.15,.96,0),M.add(Qe),Qe.add(N(.19,.58,.21,f,0,-.29,0)),Qe.add(N(.22,.15,.28,_,0,-.61,-.04));const st=new fe;if(st.position.set(.15,.96,0),M.add(st),st.add(N(.19,.58,.21,f,0,-.29,0)),st.add(N(.22,.15,.28,_,0,-.61,-.04)),i==="warrior"&&!h&&(M.add(N(.27,.15,.42,T,-b/2-.05,1.57,0)),M.add(N(.27,.15,.42,T,b/2+.05,1.57,0)),M.add(N(.29,.06,.12,y,-.18,1.58,-.2)),M.add(N(.29,.06,.12,y,.18,1.58,-.2)),M.add(N(.21,.36,.06,f,0,.76,.16))),i==="rogue"&&!h&&(M.add(N(.34,.42,.06,f,0,1.22,-.18)),M.add(N(.22,.4,.12,y,.25,1.16,.12)),M.add(N(.22,.06,.12,E,.25,1.34,.12))),i==="archer"&&!h){M.add(N(.16,.52,.13,_,-.28,1.44,.09)),M.add(N(.16,.52,.13,_,.28,1.44,.09));const q=Pe(.1,.12,.5,6,_,.34,1.35,.16);q.rotation.z=.2,M.add(q);for(let oe=0;oe<3;oe++)M.add(N(.025,.3,.025,L(14272153),.3+oe*.035,1.67,.17))}i==="wizard"&&!h&&(M.add(gt(.42,.64,7,m,0,.82,0)),M.add(N(.45,.06,.32,E,0,1.04,0)),M.add(N(.14,.34,.28,y,-.29,1.37,0))),i==="priest"&&!h&&(M.add(gt(.42,.76,7,L(14208945),0,.8,0)),M.add(N(.48,.12,.34,E,0,1.39,0)),M.add(N(.28,.28,.05,L(15984319),0,1.42,.18)));const Ke=new fe;Ke.position.set(0,-.55,0),He.add(Ke);const Z=Na(i,s.weapon,u,Mi(a.element));if(Ke.add(Z),i==="rogue"&&!h){const q=Na("rogue_off",null,u,Mi(a.element));q.position.set(0,-.55,0),ye.add(q)}if(D.userData.rig={body:M,headPivot:k,armL:ye,armR:He,legL:Qe,legR:st,weaponMount:Ke,weapon:Z,wings:ae.wings||[],halo:ae.halo||null,tail:ae.tail||null,moving:0,attack:0,cast:0,dead:!1},D.userData.kind="character",D.userData.height=1.95,D.userData.classId=i,D.userData.race=e,D.userData.sex=n,D.userData.mainCloth=d,D.userData.accent=u,h&&l==="npc"){if(c&&s.vendor==="weapon"){const q=new fe;q.add(N(.05,.75,.05,_,0,0,0)),q.add(N(.28,.16,.16,T,0,.4,0)),q.position.set(-.43,1.02,.05),q.rotation.z=-.12,D.add(q)}else if(s.vendor==="item"){const q=Pe(.018,.025,1.55,5,_,-.45,1,.02);q.rotation.z=-.06,D.add(q),D.add(je(.1,L(7460804,{emissive:2256229,emissiveIntensity:1.1}),-.45,1.8,.02))}else if(s.questId){const q=Pe(.018,.025,1.5,5,_,-.45,1.04,.02);q.rotation.z=-.05,D.add(q);const oe=je(.1,L(15317087,{emissive:11955736,emissiveIntensity:1.1}),-.46,1.81,.02);D.add(oe)}}return D}function Na(s,e,t=14001228,n=15195330){const i=new fe;L(11844532,{metalness:.72,roughness:.33});const a=L(6054495,{metalness:.65,roughness:.45}),r=L(5059620),o=L(14001228,{metalness:.65,roughness:.35}),l=L(n,{emissive:n,emissiveIntensity:1.1,roughness:.2}),c=e?e.element:null,h=c&&c!=="physical"?Mi(c):13159879,d=L(h,{metalness:.55,roughness:.3,emissive:c&&c!=="physical"?h:0,emissiveIntensity:c&&c!=="physical"?.25:0});if(s==="warrior")i.add(N(.055,.68,.035,d,0,.3,0)),i.add(N(.18,.045,.06,o,0,-.04,0)),i.add(N(.05,.25,.055,r,0,-.17,0)),i.add(N(.07,.06,.07,o,0,-.31,0)),i.rotation.z=-.28;else if(s==="rogue"||s==="rogue_off")i.add(N(.04,.48,.025,d,0,.2,0)),i.add(N(.13,.035,.045,a,0,-.04,0)),i.add(N(.045,.2,.045,r,0,-.15,0)),i.rotation.z=s==="rogue_off"?.35:-.35;else if(s==="archer"){const u=new ve(new gn(.43,.025,4,14,Math.PI*1.25),r);u.rotation.z=Math.PI*.38,u.position.set(0,.1,0),u.castShadow=!0,i.add(u);const p=new Xo({color:14011312,transparent:!0,opacity:.7}),g=[new P(-.22,.5,0),new P(.16,.1,0),new P(-.22,-.3,0)];i.add(new Ql(new At().setFromPoints(g),p)),i.rotation.z=.32}else if(s==="wizard"){i.add(Pe(.022,.032,1.35,5,r,0,.2,0)),i.add(N(.08,.08,.08,o,0,.88,0));const u=je(.11,l,0,.99,0,8,5);i.add(u);const p=new ve(new gn(.17,.012,4,12),l);p.rotation.x=Math.PI/2,p.position.y=.99,i.add(p),i.rotation.z=-.12}else if(s==="priest"){i.add(Pe(.026,.035,.9,5,r,0,.1,0)),i.add(je(.14,o,0,.58,0,7,5));for(let p=0;p<4;p++){const g=gt(.045,.18,4,o,0,.67,0);g.rotation.z=Math.PI/2*(p%2?1:-1),g.rotation.x=p>1?Math.PI/2:0,g.position.x=p===0?.15:p===1?-.15:0,g.position.z=p===2?.15:p===3?-.15:0,g.position.y=.58,i.add(g)}const u=je(.05,L(16047260,{emissive:16047260,emissiveIntensity:1.7}),0,.76,0);i.add(u),i.rotation.z=-.14}return i}function ul(s,e,t){const n=s.userData.rig;if(!n?.weaponMount)return;const i=n.weapon;i&&n.weaponMount.remove(i);const a=s.userData.accent||14001228,r=Na(e,t,a,Mi(t?.element||"physical"));n.weaponMount.add(r),n.weapon=r}function Fa(s,e,t=0,n=0,i=!1){const a=s.userData?.rig;if(!a||!a.body||!a.armR||!a.legL)return;const r=Math.min(1,t/4.5),o=Math.sin(e*(8+r*4))*(.22+r*.55);if(a.legL.rotation.x=o*r,a.legR.rotation.x=-o*r,a.armL.rotation.x=-o*.75*r,a.armR.rotation.x=o*.75*r,a.body.position.y=Math.abs(Math.sin(e*(8+r*4)))*.035*r+Math.sin(e*2.2)*.008,n>0){const l=1-n,c=Math.sin(Math.min(1,l*1.4)*Math.PI);a.armR.rotation.x=-1.3*c,a.armR.rotation.z=-.8*c,a.body.rotation.y=-.26*c}else a.armR.rotation.z*=.86,a.body.rotation.y*=.85;if(a.headPivot.rotation.x=Math.sin(e*1.1)*.025,a.halo&&(a.halo.rotation.z=e*.45,a.halo.position.y=2.15+Math.sin(e*2)*.03),a.wings.length){const l=Math.sin(e*2.4)*.05+.08;a.wings[0].rotation.z=-l,a.wings[1].rotation.z=l,a.wings[0].rotation.y=.1+Math.sin(e*1.3)*.05,a.wings[1].rotation.y=-.1-Math.sin(e*1.3)*.05}a.tail&&(a.tail.rotation.y=Math.sin(e*2.5)*.25,a.tail.rotation.x=Math.sin(e*1.7)*.06),i&&(a.body.rotation.z=Math.min(Math.PI*.48,a.body.rotation.z+.04),a.body.position.y=.1)}function vn(s,e,t,n,i,a=.06){const r=L(e,{emissive:e,emissiveIntensity:1.2});s.add(N(a,a*.75,.03,r,-t,n,i)),s.add(N(a,a*.75,.03,r,t,n,i))}function K0(s,e="physical",t=!1,n=null){const i=s,a=new fe,r={parts:[],legs:[],wings:[],idle:Math.random()*10,attack:0},o=Mi(e),l=Ot(o,1251611,.66),c=Ot(o,3883842,.4),h=Ot(o,16777215,.28),d=(i.scale||1)*1,u=i.model,p=L(c),g=L(l),x=L(h,{emissive:o,emissiveIntensity:.9}),m=L(13288102),f=L(5920589);if(u==="wolf"){const y=je(.5,p,0,.67,0,8,6);y.scale.set(.8,.7,1.3),a.add(y);const v=je(.36,p,0,.71,-.45,7,5);v.scale.set(.95,1,.9),a.add(v);const _=new fe;_.position.set(0,.78,-.82),a.add(_),r.head=_;const T=je(.28,p,0,0,0,7,5);T.scale.set(.85,.82,1.1),_.add(T);const E=N(.2,.17,.32,g,0,-.09,-.25);_.add(E),_.add(N(.08,.08,.06,L(1512210),0,-.06,-.43)),vn(_,o,.13,.09,-.23,.07);for(const[M,b]of[[-1,-.16],[1,-.16],[-1,.08],[1,.08]]){const I=gt(.1,.3,4,g,M*.17,.27,b);I.rotation.z=M*.18,_.add(I)}const A=new fe;A.position.set(0,.84,.55),a.add(A);const D=Pe(.04,.14,.55,4,p,0,.12,.2);D.rotation.x=-.8,A.add(D),r.tail=A;for(let M=0;M<4;M++){const b=M%2===0?-1:1,I=M<2?-.4:.4,O=new fe;O.position.set(b*.34,.56,I),a.add(O);const W=N(.16,.38,.16,g,0,-.17,0);O.add(W),O.add(N(.2,.13,.26,p,0,-.4,-.03)),r.legs.push(O)}if(e==="fire"||t)for(let M=0;M<5;M++){const b=gt(.07,.3,4,x,0,1.05,-.55+M*.28);b.rotation.x=-.25,a.add(b)}}else if(u==="slime"){const y=je(.62,L(Ot(o,2240570,.45),{transparent:!0,opacity:.9}),0,.56,0,9,7);y.scale.set(1,.82,1),a.add(y),r.body=y;const v=je(.14,L(h,{emissive:o,emissiveIntensity:.5,transparent:!0,opacity:.65}),-.19,.77,-.28,6,4);a.add(v),vn(a,1448731,.18,.64,-.52,.07),a.add(N(.13,.035,.02,L(1713188),0,.48,-.6));for(let _=0;_<3;_++)a.add(je(.09+_*.025,p,.2-_*.2,.05,.34,5,3))}else if(u==="skeleton"){const y=N(.36,.15,.2,m,0,.94,0);a.add(y);const v=Pe(.045,.06,.6,4,m,0,1.25,0);a.add(v);for(let T=0;T<3;T++){const E=new ve(new gn(.21-T*.02,.025,3,8,Math.PI),m);E.rotation.z=Math.PI,E.position.y=1.12+T*.13,a.add(E)}const _=je(.24,m,0,1.73,0,7,5);_.scale.y=1.1,a.add(_),a.add(N(.18,.12,.15,f,0,1.59,-.04)),vn(a,o,.09,1.76,-.2,.065);for(const T of[-1,1]){const E=new fe;E.position.set(T*.25,1.5,0),a.add(E),E.add(Pe(.035,.045,.5,4,m,0,-.24,0)),E.add(N(.1,.1,.1,f,0,-.52,0)),r.parts.push(E)}r.parts[1].add(Na("warrior",null,10329224,o));for(const T of[-1,1]){const E=new fe;E.position.set(T*.14,.9,0),a.add(E),E.add(Pe(.04,.05,.74,4,m,0,-.38,0)),E.add(N(.16,.09,.3,f,0,-.77,-.06)),r.legs.push(E)}a.add(N(.4,.4,.05,L(4013112,{transparent:!0,opacity:.75}),0,.79,.08))}else if(u==="treant"){const y=Pe(.46,.68,1.7,7,L(4864295),0,1,0);a.add(y);const v=N(.95,.9,.65,L(5521709),0,1.55,0);a.add(v);const _=N(.72,.65,.6,L(4798246),0,2.2,0);a.add(_),r.head=_,vn(_,o,.16,.08,-.31,.09);const T=L(Ot(3894079,o,.18));for(let E=0;E<5;E++){const A=new ve(new ds(.46+E%2*.15,0),T);A.position.set((E-2)*.28,2.74+E%3*.12,E%2*.18-.1),A.castShadow=!0,a.add(A),r.parts.push(A)}for(const E of[-1,1]){const A=new fe;A.position.set(E*.62,1.85,0),a.add(A),A.add(Pe(.12,.17,.95,5,L(4864295),E*.25,-.4,0)),A.add(Pe(.04,.1,1.1,4,L(4140574),E*.55,-.9,0)),A.rotation.z=E*.5,r.parts.push(A),r.legs.push(A)}for(const E of[-1,1]){const A=Pe(.2,.3,.8,5,L(4140578),E*.35,.4,0);a.add(A)}if(a.add(N(.8,.18,.8,L(3023899),0,.07,0)),t){const E=new ve(new gn(.45,.055,4,8),L(10125637,{metalness:.5}));E.position.y=2.6,E.rotation.x=Math.PI/2,a.add(E)}}else if(u==="wisp"){const y=je(.36,L(o,{emissive:o,emissiveIntensity:1.8,transparent:!0,opacity:.92}),0,1.2,0,8,6);a.add(y),r.body=y;const v=je(.55,L(o,{emissive:o,emissiveIntensity:.8,transparent:!0,opacity:.16}),0,1.2,0,8,5);a.add(v),r.aura=v;const _=new ve(new gn(.55,.018,4,16),L(h,{emissive:o,emissiveIntensity:1.5}));_.position.y=1.2,_.rotation.x=.2,a.add(_),r.ring=_,vn(a,1319460,.1,1.26,-.31,.06);for(let T=0;T<5;T++){const E=je(.04+Math.random()*.04,x,(Math.random()-.5)*.8,.7+Math.random()*.8,(Math.random()-.5)*.5,4,3);a.add(E),r.parts.push(E)}}else if(u==="crab"){const y=je(.6,L(Ot(o,9387569,.35)),0,.62,0,8,5);y.scale.set(1.3,.62,.95),a.add(y);for(let v=0;v<3;v++)for(const _ of[-1,1]){const T=new fe;T.position.set(_*.55,.58,-.22+v*.23),a.add(T);const E=N(.55,.08,.08,L(jt(o,-.2)),_*.27,0,0);E.rotation.z=_*-.6,T.add(E),r.legs.push(T)}for(const v of[-1,1]){const _=new fe;_.position.set(v*.55,.7,-.5),a.add(_);const T=N(.4,.13,.13,L(Ot(o,8205099,.4)),v*.2,0,0);_.add(T);const E=N(.26,.3,.18,L(Ot(o,10308153,.34)),v*.4,-.06,0);_.add(E),r.parts.push(_)}for(const v of[-1,1]){const _=Pe(.03,.035,.34,4,g,v*.17,.95,-.32);a.add(_),a.add(je(.075,x,v*.17,1.14,-.32,6,4))}}else if(u==="golem"){const y=N(1.05,.85,.7,L(Ot(6119259,o,.18)),0,1.45,0);a.add(y);const v=N(.55,.5,.55,L(6645601),0,2.02,-.05);a.add(v),r.head=v,vn(v,o,.12,.04,-.29,.08);for(let _=0;_<4;_++){const T=N(.06,.18,.04,x,-.24+_*.16,1.55,-.37);a.add(T)}for(const _ of[-1,1]){const T=new fe;T.position.set(_*.72,1.72,0),a.add(T),T.add(N(.3,.95,.36,L(5592656),_*.14,-.43,0)),T.add(je(.27,L(7105379),_*.14,-.94,0,6,4)),r.parts.push(T),r.legs.push(T)}for(const _ of[-1,1]){const T=new fe;T.position.set(_*.28,1.05,0),a.add(T),T.add(N(.32,.8,.4,L(5329484),0,-.38,0)),T.add(N(.4,.16,.55,L(4539968),0,-.79,-.06)),r.legs.push(T)}if(t)for(let _=0;_<5;_++){const T=new ve(new It(.12,.55,5),x);T.position.set((_-2)*.18,2.38,_%2*.2-.05),T.rotation.z=(_-2)*.12,a.add(T)}}else if(u==="imp"){const y=je(.36,L(Ot(8139565,o,.28)),0,1.04,0,7,5);y.scale.set(.9,1.1,.8),a.add(y);const v=je(.28,L(Ot(9255729,o,.22)),0,1.53,-.02,7,5);a.add(v),r.head=v,vn(v,16766071,.1,.04,-.25,.065);const _=L(2958114);for(const T of[-1,1]){const E=gt(.06,.28,4,_,T*.16,.29,0);E.rotation.z=T*-.3,v.add(E)}for(const T of[-1,1]){const E=new ve(new It(.38,.7,4,1,!0),L(Ot(5908003,o,.15),{side:it,transparent:!0,opacity:.9}));E.position.set(T*.38,1.3,.2),E.rotation.z=T*-.9,E.scale.z=.3,a.add(E),r.wings.push(E)}for(const T of[-1,1]){const E=new fe;E.position.set(T*.4,1.22,0),a.add(E),E.add(N(.12,.5,.12,L(9059634),0,-.25,0)),E.add(N(.1,.1,.1,L(2826272),0,-.52,0)),r.parts.push(E)}for(const T of[-1,1]){const E=new fe;E.position.set(T*.16,.8,0),a.add(E),E.add(N(.15,.45,.15,L(7090218),0,-.22,0)),E.add(N(.17,.1,.27,L(2826272),0,-.46,-.05)),r.legs.push(E)}}else if(u==="wraith"){const y=new ve(new It(.56,1.75,7,1,!0),L(Ot(2894656,o,.28),{transparent:!0,opacity:.87,side:it}));y.position.y=1,a.add(y),r.body=y;const v=new ve(new It(.4,.62,7,1,!0),L(Ot(2302514,o,.2),{transparent:!0,opacity:.94,side:it}));v.position.y=1.9,a.add(v),r.head=v,vn(a,o,.11,1.88,-.31,.07);for(let _=0;_<5;_++){const T=N(.1,.55,.04,L(2894656,{transparent:!0,opacity:.55}),(Math.random()-.5)*.8,.25+Math.random()*.2,.15+Math.random()*.2);T.rotation.z=(Math.random()-.5)*.4,a.add(T),r.parts.push(T)}for(let _=0;_<3;_++){const T=new ve(new It(.09,.32,4),L(o,{emissive:o,emissiveIntensity:1.3,transparent:!0,opacity:.75}));T.position.set((_-1)*.25,1.2+Math.random()*.4,.32),a.add(T),r.parts.push(T)}if(t)for(let _=0;_<4;_++){const T=new ve(new gn(.65+_*.13,.025,3,20),L(5918522,{metalness:.5}));T.position.y=1.2-_*.3,T.rotation.x=Math.PI/2+_*.2,a.add(T),r.parts.push(T)}}else if(u==="cultist"){const y=new ve(new It(.48,1.55,6),L(Ot(2958903,o,.22)));y.position.y=.9,a.add(y);const v=je(.27,L(Ot(3418938,o,.16)),0,1.78,0,6,4);a.add(v),r.head=v,a.add(N(.3,.28,.1,L(1512476),0,1.76,-.21)),vn(a,o,.09,1.77,-.26,.055);const _=Pe(.025,.04,1.7,5,L(4206886),-.52,1,0);a.add(_),a.add(je(.11,L(o,{emissive:o,emissiveIntensity:1.5}),-.52,1.88,0,6,4))}else if(u==="bat"){const y=je(.27,g,0,1.2,0,6,4);a.add(y);const v=je(.2,p,0,1.45,-.08,6,4);a.add(v),r.head=v,vn(v,o,.07,.02,-.17,.055);for(const _ of[-1,1]){const T=gt(.07,.23,3,g,_*.1,.2,.02);T.rotation.z=_*.3,v.add(T);const E=new ve(new It(.55,.8,3,1,!0),L(Ot(3878976,o,.22),{side:it,transparent:!0,opacity:.88}));E.position.set(_*.45,1.22,.02),E.rotation.z=_*Math.PI/2,E.scale.z=.15,a.add(E),r.wings.push(E)}}else if(u==="bandit"){const y=ls({race:"human",sex:Math.random()>.5?"feminine":"masculine",classId:"rogue",role:"npc",palette:[3880241,10975032,11103823]});y.scale.setScalar(.95),a.add(y),a.userData.rig={...y.userData.rig,npcModel:!0},y.userData.rig.headPivot.add(N(.46,.1,.38,L(8008754),0,.15,0)),r.parts.push(y)}else{const y=je(.5,p,0,.8,0,7,5);a.add(y),r.body=y}if(a.scale.setScalar(d*(t?1.45:1)),t){const y=new ve(new Pn(.8,1.15,24),new xn({color:o,transparent:!0,opacity:.28,side:it,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.y=.045,a.add(y),r.aura=y;const v=new Qn(o,1.8,8,2);v.position.y=1.6,a.add(v),r.light=v}return a.userData.rig=r,a.userData.kind="enemy",a.userData.height=(i.height||1.5)*(t?1.45:1),a.userData.model=u,a.userData.elementColor=o,a.userData.isBoss=t,a}function Z0(s,e,t=0,n=0){const i=s.userData.rig;if(!i)return;const a=e*6+(i.idle||0);if(i.legs&&i.legs.forEach((r,o)=>{r.rotation.x=Math.sin(a+o*1.7)*.6*t}),i.parts&&i.parts.forEach((r,o)=>{r.isMesh&&o%2===0&&(r.rotation.y=Math.sin(e*1.4+o)*.08),r.isGroup&&(r.rotation.x=Math.sin(a+o)*.15*t)}),i.body&&(i.body.position.y+=Math.sin(e*2+(i.idle||0))*.001,s.userData.model==="slime"&&(i.body.scale.y=.82+Math.sin(e*3)*.06,i.body.scale.x=1+Math.cos(e*3)*.035),(s.userData.model==="wisp"||s.userData.model==="wraith")&&(i.body.position.y=(i.body.userData.baseY??i.body.position.y)+Math.sin(e*2.2)*.06)),i.wings&&i.wings.forEach((r,o)=>{r.rotation&&!r.isMesh?r.rotation.z+=Math.sin(e*9+o)*.01:r.isMesh&&(r.rotation.z=(o%2?-1:1)*(.9+Math.sin(e*11)*.15))}),i.ring&&(i.ring.rotation.z=e*.8),i.aura&&(i.aura.rotation.z=e*.35,i.aura.material&&(i.aura.material.opacity=.18+Math.sin(e*3)*.08)),i.tail&&(i.tail.rotation.y=Math.sin(e*4)*.35),n>0){const r=Math.sin((1-n)*Math.PI);s.children.forEach(o=>{o.userData.baseZ===void 0&&(o.userData.baseZ=o.position.z),o.position.z=o.userData.baseZ-r*.22})}}function J0(s=!1,e=15317087){const t=new fe,n=L(6439206),i=L(s?8090727:14001228,{metalness:.55,roughness:.4}),a=s?9146247:e,r=L(a,{emissive:a,emissiveIntensity:s?.05:.5}),o=N(.9,.5,.62,n,0,.28,0);t.add(o),t.add(N(.94,.08,.66,i,0,.05,0)),t.add(N(.1,.52,.66,i,-.3,.29,0)),t.add(N(.1,.52,.66,i,.3,.29,0)),t.add(N(.1,.52,.66,i,0,.29,0));const l=new fe;l.position.set(0,.53,.31),t.add(l);const c=N(.92,.18,.64,n,0,.09,-.31);l.add(c),l.add(N(.96,.06,.66,i,0,.17,-.31)),l.add(N(.18,.16,.06,r,0,.03,-.645));const h=N(.17,.2,.08,r,0,.45,-.32);if(t.add(h),s){const d=new ve(new gn(.48,.025,4,14),L(5066057,{metalness:.8}));d.rotation.y=Math.PI/2,d.position.y=.3,t.add(d)}return t.userData.lid=l,t.userData.lock=h,t.userData.glowColor=a,t.userData.kind="chest",t}function Q0(s="earth"){const e=new fe,t=Mi(s),n=L(6119771),i=Pe(.3,.42,.24,6,n,0,.12,0);e.add(i);const a=Pe(.18,.23,1.15,5,n,0,.7,0);e.add(a);const r=L(t,{emissive:t,emissiveIntensity:1.3}),o=N(.2,.36,.03,r,0,.92,-.21);e.add(o),e.add(N(.26,.05,.03,r,0,1.02,-.22));const l=new ve(new gn(.42,.018,4,20),r);l.rotation.x=Math.PI/2,l.position.y=.16,e.add(l);const c=new Qn(t,0,4.5,2);return c.position.y=.9,e.add(c),e.userData={kind:"rune",ring:l,glyph:o,light:c,element:s,lit:!1,baseY:0},e}function Ta(s="quest"){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");t.imageSmoothingEnabled=!1,t.clearRect(0,0,64,64),t.font='bold 44px "Press Start 2P", monospace',t.textAlign="center",t.textBaseline="middle",t.lineWidth=8,t.strokeStyle="#081216";const n=s==="complete"?"?":s==="vendor"?"◈":"!";t.strokeText(n,32,34),t.fillStyle=s==="complete"?"#71d7c4":s==="vendor"?"#c9b887":"#ffd36e",t.fillText(n,32,34);const i=new Oa(e);i.magFilter=Dt,i.minFilter=Dt;const a=new Jl(new Vo({map:i,transparent:!0,depthTest:!1}));return a.scale.set(.62,.62,1),a.renderOrder=20,a}const Cr=new Map;function uh(s="#ffffff"){if(Cr.has(s))return Cr.get(s);const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,31);n.addColorStop(0,s),n.addColorStop(.22,s),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new Oa(e);return i.magFilter=Dt,i.minFilter=Dt,Cr.set(s,i),i}function Kt(s="#ffffff",e=1){const t=new Vo({map:uh(s),transparent:!0,blending:Lr,depthWrite:!1,opacity:.85}),n=new Jl(t);return n.scale.set(e,e,1),n}function fl(s,e="physical"){const t=Mi(e);if(s==="arrow"){const n=new fe,i=Pe(.012,.012,.7,4,L(10388312),0,0,0);i.rotation.x=Math.PI/2,n.add(i);const a=gt(.06,.16,4,L(t,{emissive:t,emissiveIntensity:.8}),0,0,-.42);return a.rotation.x=-Math.PI/2,n.add(a),n.add(N(.1,.02,.2,L(14209205),0,0,.34)),n}if(s==="orb"){const n=new fe;return n.add(je(.14,L(t,{emissive:t,emissiveIntensity:2.2,transparent:!0,opacity:.9}),0,0,0,6,4)),n.add(Kt("#"+t.toString(16).padStart(6,"0"),1.1)),n}if(s==="holy"){const n=new fe;return n.add(N(.1,.1,.55,L(t,{emissive:t,emissiveIntensity:2}),0,0,0)),n.add(Kt("#"+t.toString(16).padStart(6,"0"),1.2)),n}return je(.15,L(t,{emissive:t,emissiveIntensity:1.6}),0,0,0,6,4)}function Rr(s){s.traverse(e=>{e.geometry&&e.geometry.dispose()})}const qi={x:0,z:13},$i={x:58,z:4};function fh(s,e="#f1e3bf",t="#15251f"){const n=document.createElement("canvas");n.width=512,n.height=128;const i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,512,128),i.strokeStyle="#b58b47",i.lineWidth=6,i.strokeRect(6,6,500,116),i.font='34px "Press Start 2P", monospace',i.textAlign="center",i.textBaseline="middle",i.fillStyle=e,i.fillText(s,256,68);const a=new Oa(n);return a.magFilter=Dt,a.minFilter=Dt,a}function Zi(s,e,t,n={}){const i=s.heightAt(e,t),a=new fe;a.position.set(e,i,t);const r=L(5191716),o=L(4015428,{metalness:.5}),l=Pe(.055,.075,n.height||3.2,5,r,0,(n.height||3.2)/2,0);a.add(l),a.add(N(.5,.06,.06,o,.2,(n.height||3.2)-.1,0));const c=N(.28,.36,.28,L(2829094,{metalness:.35,transparent:!0,opacity:.9}),.4,(n.height||3.2)-.42,0);a.add(c);const h=L(16762218,{emissive:16758614,emissiveIntensity:1.8,transparent:!0,opacity:.92}),d=N(.16,.22,.16,h,.4,(n.height||3.2)-.42,0);a.add(d),a.add(N(.34,.05,.34,o,.4,(n.height||3.2)-.23,0));const u=Kt("#ffc46a",1.35);if(u.position.set(.4,(n.height||3.2)-.4,0),u.material.opacity=.45,a.add(u),s.scene.add(a),n.withLight!==!1){const p=new Qn(16760168,1.3,n.range||11,2);p.position.set(.4,(n.height||3.2)-.4,0),p.castShadow=!1,a.add(p),s.lanterns.push({light:p,sprite:u,base:n.intensity||1.15,offset:Math.random()*8})}return a}function pl(s,e,t,n=1){const i=s.heightAt(e,t),a=new fe;a.position.set(e,i,t),s.scene.add(a);const r=L(6710364);for(let h=0;h<7;h++){const d=h/7*Math.PI*2;a.add(je(.15*n,r,Math.cos(d)*.48*n,.08,Math.sin(d)*.48*n,5,3))}const o=L(4861724);for(let h=0;h<3;h++){const d=N(.12*n,.12*n,.78*n,o,0,.12,0);d.rotation.y=h*Math.PI/3,a.add(d)}const l=new ve(new It(.26*n,.8*n,5),L(15895104,{emissive:15756832,emissiveIntensity:2.1,transparent:!0,opacity:.85}));l.position.y=.62*n,a.add(l),l.userData.offset=Math.random()*8,s.flames.push(l);const c=new Qn(16747582,1.8,8,2);c.position.y=1,a.add(c),s.lanterns.push({light:c,sprite:null,base:1.5,offset:Math.random()*7})}function ph(s,e,t,n){const i=new At,a=s/2,r=e/2,o=new Float32Array([-a,0,-r,a,0,-r,a,0,r,-a,0,r,0,t,-r,0,t,r]),l=[0,3,5,0,5,4,1,4,5,1,5,2,1,0,4,3,2,5];i.setAttribute("position",new $t(o,3)),i.setIndex(l),i.computeVertexNormals();const c=new ve(i,n);return c.castShadow=!0,c.receiveShadow=!0,c}function ln(s,e){const{x:t,z:n,w:i=7,d:a=5,h:r=2.6,rot:o=0,wall:l=13943964,roof:c=9325118,trim:h=6044452,floors:d=1,shopSign:u=null,open:p=!1}=e,g=s.heightAt(t,n),x=new fe;x.position.set(t,g,n),x.rotation.y=o,s.scene.add(x);const m=r*d,f=N(i+.35,.3,a+.35,L(7432793),0,.15,0);x.add(f);const y=L(l),v=L(h),_=L(c);x.add(N(i,m,a,y,0,m/2+.25,0));for(const A of[-i/2+.08,i/2-.08])for(const D of[-a/2+.03,a/2-.03])x.add(N(.16,m,.16,v,A,m/2+.25,D));for(let A=0;A<=d;A++)x.add(N(i+.05,.13,a+.05,v,0,.25+A*r,0));x.add(N(i+.05,.13,a+.05,v,0,m+.24,0));for(let A=0;A<d;A++){const D=.25+r*A+r*.62;for(const M of[-1,1]){const b=N(.9,.78,.05,L(8419939),M*(i*.28),D,a/2+.035);x.add(b);const I=new ut({color:8884616,emissive:16762733,emissiveIntensity:.18,roughness:.4}),O=N(.7,.58,.055,I,M*(i*.28),D,a/2+.07);if(x.add(O),x.add(N(.75,.06,.06,v,M*(i*.28),D+.34,a/2+.09)),x.add(N(.06,.62,.06,v,M*(i*.28),D,a/2+.09)),s.windows.push({material:I}),i>8){const W=new ut({color:8884616,emissive:16762733,emissiveIntensity:.16,roughness:.4});x.add(N(.05,.58,.7,W,i/2+.035,D,-a*.2)),s.windows.push({material:W})}}}if(x.add(N(1.05,1.85,.12,L(4861727),0,1.22,a/2+.08)),x.add(N(.17,.17,.06,L(14001228,{metalness:.6}),.3,1.23,a/2+.15)),x.add(N(1.35,.16,.2,v,0,2.16,a/2+.1)),u){const A=new ve(new Hn(2.7,.68),new xn({map:fh(u,"#f1e3bf","#3c2b1c"),side:it}));A.position.set(0,m+.45,a/2+.1),x.add(A)}const T=new fe;T.position.y=m+.3;const E=ph(i+1.3,a+1.1,1.7+m*.12,_);return T.add(E),T.add(N(i+1.5,.1,a+1.25,v,0,.03,0)),x.add(T),x.add(N(.6,1.45,.6,L(7101259),-i*.27,m+1.1,a*.16)),x.add(N(.75,.15,.75,L(5326653),-i*.27,m+1.85,a*.16)),p||s.addCollider(t,n,Math.max(i,a)*.54),x}function Yi(s,e,t,n=10174267,i=0){const a=s.heightAt(e,t),r=new fe;r.position.set(e,a,t),r.rotation.y=i,s.scene.add(r);const o=L(5650466),l=L(n),c=L(14272415);for(const h of[-1.05,1.05])for(const d of[-.8,.8])r.add(N(.08,2.2,.08,o,h,1.1,d));for(let h=0;h<6;h++)r.add(N(.36,.09,2.05,h%2?l:c,-.9+h*.36,2.2,0));r.add(N(2.2,.12,.85,o,0,.88,.03)),r.add(N(2.2,.55,.08,o,0,.46,.45));for(let h=0;h<3;h++)r.add(N(.25,.25,.25,L(h===0?9199160:h===1?5600618:8077125),-.6+h*.55,1.03,-.1));return r}function eg(s,e,t){const n=s.heightAt(e,t),i=new fe;i.position.set(e,n,t),s.scene.add(i),i.add(Pe(1.15,1.2,.75,10,L(8222053),0,.38,0)),i.add(Pe(.95,1,.12,10,L(2841440,{metalness:.15}),0,.72,0)),i.add(Pe(1.24,1.28,.12,10,L(7169367),0,.78,0));for(const r of[-.95,.95])i.add(N(.13,2.2,.13,L(4862497),r,1.72,0));const a=ph(2.8,1.8,.6,L(5978920));a.position.y=2.8,i.add(a),i.add(Pe(.16,.16,.5,6,L(3877660),0,2.55,0)),i.add(N(.18,.25,.18,L(7754284),0,2.3,0)),s.addCollider(e,t,1.35)}function tg(s,e,t){const n=s.heightAt(e,t),i=new fe;i.position.set(e,n,t),s.scene.add(i);const a=L(9143924);i.add(Pe(2.25,2.45,.5,14,a,0,.25,0)),i.add(Pe(1.9,2.1,.18,14,L(4030599,{transparent:!0,opacity:.75,roughness:.1}),0,.52,0)),i.add(Pe(.4,.55,1.5,8,a,0,1.15,0)),i.add(Pe(.85,.6,.28,12,a,0,1.95,0)),i.add(Pe(.6,.75,.12,12,L(5808294,{transparent:!0,opacity:.7}),0,2.12,0));const r=new ve(new It(.5,1,10,1,!0),L(10408914,{transparent:!0,opacity:.25,side:it}));r.position.y=2.45,i.add(r);const o=Kt("#b7e6dd",2.1);o.position.y=2.2,i.add(o),s.addCollider(e,t,2.5)}function Pr(s,e,t,n,i,a=0){const r=n-e,o=i-t,l=Math.hypot(r,o),c=Math.atan2(r,o),h=Math.floor(l/2.2),d=L(5651753);for(let u=0;u<=h;u++){if(a>0&&u%a===0)continue;const p=u/h,g=e+r*p,x=t+o*p,m=s.heightAt(g,x),f=new fe;f.position.set(g,m,x),f.rotation.y=c,s.scene.add(f),f.add(N(.16,1.25,.16,d,0,.62,0)),f.add(N(.1,.1,2.25,d,0,.9,1.1)),f.add(N(.1,.1,2.25,d,0,.45,1.1))}}function ya(s,e,t,n=8077125,i=0){const a=s.heightAt(e,t),r=new fe;r.position.set(e,a,t),r.rotation.y=i,s.scene.add(r),r.add(Pe(.045,.055,3.2,5,L(4143666),0,1.6,0)),r.add(N(.06,.06,2.4,L(4143666),0,3,1.2)),r.add(N(.04,1.7,1,L(n),0,2.05,1.55));const o=new ve(new Rn(.3,6),L(15317087,{side:it,emissive:5849109,emissiveIntensity:.25}));return o.position.set(0,2,2.06),o.rotation.y=0,r.add(o),r}function ml(s,e,t,n,i,a=5849130){const r=s.heightAt(e,t),o=new fe;o.position.set(e,r,t),s.scene.add(o);const l=L(a),c=L(8090980);for(const d of[-n/2,n/2])o.add(N(.65,4.4,.65,c,d,2.2,0)),o.add(N(.9,.3,.9,L(9603189),d,4.45,0)),o.add(N(.5,.5,.5,L(15116121,{emissive:16747317,emissiveIntensity:1.2}),d,4.8,0));o.add(N(n+1.3,.5,.7,l,0,4.4,0));const h=new ve(new Hn(Math.min(n*.9,4.5),.88),new xn({map:fh(i),side:it}));return h.position.set(0,4.9,.36),o.add(h),o}function ng(s){const e=(t,n,i=12165748)=>{const a=[],r=[];for(let c=0;c<t.length;c++){const[h,d]=t[c],[u,p]=t[Math.min(t.length-1,c+1)],[g,x]=t[Math.max(0,c-1)],m=u-g,f=p-x,y=Math.hypot(m,f)||1,v=-f/y*n/2,_=m/y*n/2,T=s.heightAt(h+v,d+_)+.06,E=s.heightAt(h-v,d-_)+.06;if(a.push(h+v,T,d+_,h-v,E,d-_),c>0){const A=(c-1)*2;r.push(A,A+1,A+2,A+1,A+3,A+2)}}const o=new At;o.setAttribute("position",new rt(a,3)),o.setIndex(r),o.computeVertexNormals();const l=new ve(o,new ut({color:i,roughness:1,side:it,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));l.receiveShadow=!0,s.scene.add(l)};e([[0,40],[0,33],[0,24],[4,19],[11,16],[20,18],[30,21],[41,23],[50,26],[56,29]],4.4),e([[0,10],[-7,5],[-15,-3],[-24,-15],[-35,-28],[-41,-42],[-30,-52]],3.1,11114089),e([[58,29],[67,35],[78,40],[90,46],[101,53]],3.6),e([[-41,-42],[-58,-48],[-69,-57]],2.4,8878944)}function ig(s){const e=s.heightAt(qi.x,qi.z)+.035,t=new ve(new Rn(13.5,28),new ut({color:10063474,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));t.rotation.x=-Math.PI/2,t.position.set(qi.x,e,qi.z),t.receiveShadow=!0,s.scene.add(t);const n=new ve(new Pn(7.2,7.7,28),new ut({color:8549980,roughness:1,side:it}));n.rotation.x=-Math.PI/2,n.position.set(qi.x,e+.01,qi.z),s.scene.add(n),ln(s,{x:-15.2,z:14,w:9.4,d:6.3,h:2.8,floors:2,wall:13943707,roof:8011318,trim:5058591,rot:.06,shopSign:"THE GILDED STAG"}),ln(s,{x:15.2,z:10.2,w:7.6,d:5.4,h:2.65,wall:11971725,roof:5983299,trim:4599839,rot:-.12,shopSign:"COALFIST FORGE"}),ln(s,{x:-15.4,z:28.6,w:7.2,d:5.4,h:2.5,wall:13613965,roof:9132603,trim:5584418,rot:.14}),ln(s,{x:14.2,z:28,w:7.4,d:5.2,h:2.45,wall:13089167,roof:7230788,trim:5256736,rot:-.2}),ln(s,{x:-2.2,z:-3.6,w:8.3,d:6.4,h:3.2,floors:2,wall:13156518,roof:4346191,trim:4143923,rot:.02,shopSign:"LANTERN CHAPEL"}),ln(s,{x:-17,z:-2.4,w:7.8,d:5.6,h:2.55,wall:12429182,roof:7557945,trim:5059615,rot:.34}),eg(s,-.4,15.2),Yi(s,7.4,23.7,10174267,-.06),Yi(s,-6.7,23.4,4156257,.05),Yi(s,11.8,20.8,8018482,-.18),ml(s,0,33.8,6.6,"HEARTHVALE"),pl(s,-7.8,9,.9),Zi(s,4.4,29.3,{height:3,withLight:!0,range:10}),Zi(s,-6,12.1,{height:3,withLight:!0,range:10}),Zi(s,9.6,17,{height:2.8,withLight:!1}),Zi(s,-11.5,20.5,{height:2.8,withLight:!1}),gl(s,[[2.4,37],[-2.3,36],[9.8,27.5],[-10.5,27.5]]),Pr(s,-22,34,-8,34,4),Pr(s,8,34,22,34,4),Pr(s,-23,0,-23,22,5);const i=new fe,a=s.heightAt(3.9,21.2);i.position.set(3.9,a,21.2),s.scene.add(i),i.add(N(.12,1.7,.12,L(4928031),-.8,.85,0)),i.add(N(.12,1.7,.12,L(4928031),.8,.85,0)),i.add(N(1.85,1.15,.12,L(7886391),0,1.35,0)),i.add(N(1.45,.78,.03,L(13746065),0,1.36,-.08));for(let p=0;p<5;p++)i.add(N(1,.03,.01,L(7099962),0,1.65-p*.13,-.11));for(let p=0;p<3;p++){const g=4.8+p*.55,x=19.8,m=s.heightAt(g,x),f=N(.48,.48,.48,L(8215349),g,m+.24,x);f.rotation.y=p*1.7,s.scene.add(f),s.scene.add(N(.55,.04,.04,L(5125920),g,m+.3,x))}for(let p=0;p<4;p++){const g=-3.6-p*.42,x=35.3+p%2*.35,m=s.heightAt(g,x);s.scene.add(N(.38,.75+p*.08,.28,L(7171164),g,m+.38,x))}const r=s.heightAt($i.x,$i.z)+.04,o=new ve(new Rn(16.5,32),new ut({color:11182468,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));o.rotation.x=-Math.PI/2,o.position.set($i.x,r,$i.z),o.receiveShadow=!0,s.scene.add(o);for(const p of[6.5,11.4]){const g=new ve(new Pn(p,p+.35,32),new ut({color:8550495,roughness:1,side:it}));g.rotation.x=-Math.PI/2,g.position.set($i.x,r+.015,$i.z),s.scene.add(g)}tg(s,58,2.8);const l=L(9406063),c=L(7432792),h=(p,g,x,m)=>{const f=s.heightAt(p,g),y=N(x,3.1,m,l,p,f+1.55,g);s.scene.add(y),s.scene.add(N(x+.3,.25,m+.3,c,p,f+3.15,g));const v=Math.floor(x/4),_=Math.floor(m/4);for(let T=0;T<Math.max(v,_);T++){const E=x>m?p-x/2+2+T*4:p,A=m>x?g-m/2+2+T*4:g;E<p+x/2&&s.scene.add(N(.7,.6,m+.5,c,E,f+3.45,g)),A<g+m/2&&s.scene.add(N(x+.5,.6,.7,c,p,f+3.45,A))}};h(58,28.2,24,.8),h(58,-21.8,24,.8),h(38.2,4,.8,47),h(81.8,4,.8,47);const d=(p,g,x,m)=>{const f=Math.hypot(x-p,m-g),y=Math.max(1,Math.ceil(f/1.15));for(let v=0;v<=y;v++){const _=v/y;s.addCollider(p+(x-p)*_,g+(m-g)*_,.82)}};d(46.2,28.2,54,28.2),d(62,28.2,69.8,28.2),d(46.2,-21.8,69.8,-21.8),d(38.2,-19.4,38.2,27.4),d(81.8,-19.4,81.8,27.4),ml(s,58,28.2,7.6,"AURELUNE",5002080);for(const p of[-6.4,6.4]){const g=s.heightAt(58+p,28.2),x=Pe(1.15,1.45,7.2,8,L(9274993),58+p,g+3.6,28.2);s.scene.add(x),s.scene.add(gt(1.5,2.4,8,L(3951185),58+p,g+8.4,28.2))}ln(s,{x:72.8,z:4.6,w:10.8,d:9.2,h:3.2,floors:3,wall:12104349,roof:3952217,trim:4802107,rot:.02,shopSign:"THE SUN KEEP"}),ln(s,{x:58,z:-14.7,w:9.6,d:7.4,h:3.5,floors:2,wall:13617074,roof:4348768,trim:4867384,rot:0,shopSign:"TEMPLE OF FIRST LIGHT"}),ln(s,{x:44.2,z:-10.8,w:8.6,d:6.5,h:2.9,floors:2,wall:11643023,roof:6113861,trim:4208686,rot:.07,shopSign:"TIDE-WATCH GUILD"}),ln(s,{x:44,z:10.5,w:8,d:6,h:2.8,wall:13088656,roof:7623229,trim:4731679,rot:-.06,shopSign:"THE HONEST ANVIL"}),ln(s,{x:69.4,z:15.4,w:8.4,d:6.2,h:2.9,wall:11839629,roof:6177346,trim:4469541,rot:-.1,shopSign:"NIGHTWEAVE"}),ln(s,{x:49.5,z:-18,w:6.8,d:5.2,h:2.6,wall:13024419,roof:5529692,trim:4603186,rot:.14});const u=(p,g,x,m)=>{const f=s.heightAt(p,g);s.scene.add(Pe(.55,.8,x,6,L(m),p,f+x/2,g)),s.scene.add(gt(.95,2.8,6,L(3427160),p,f+x+1.4,g))};u(54.2,-14.8,8.2,13024934),u(61.8,-14.8,8.2,13024934),u(72.8,8.2,10.8,11709848),s.addCollider(58,-14.7,5.6),s.addCollider(72.8,4.6,6),s.addCollider(44.2,-10.8,4.9),s.addCollider(44,10.5,4.8),s.addCollider(69.4,15.4,4.9),s.addCollider(49.5,-18,4.1),Yi(s,51,6.6,4153189,-.1),Yi(s,62.8,8.2,8077125,.12),Yi(s,65.3,.8,7297584,-.4),pl(s,46,16.4,.8);for(const[p,g]of[[48.5,24.7],[67.8,24.7],[50,2],[66,15]])Zi(s,p,g,{height:3.4,withLight:!0,range:11});gl(s,[[58,21],[45.5,14],[70,20],[42.2,1]]),ya(s,54,25,8077125,0),ya(s,62,25,4153189,Math.PI),ya(s,75.7,10.1,8077125,-Math.PI/2),ya(s,40.7,0,4153189,Math.PI/2);for(let p=0;p<4;p++){const g=s.heightAt(67.4,4.6)+p*.12;s.scene.add(N(5-p*.4,.14,.55,L(10984578),67.4,g+.08,4.6+(3-p)*.4))}}function gl(s,e){for(const[t,n]of e)Zi(s,t,n,{height:2.75,withLight:!1})}const xl={x:0,z:13},mh=[{id:"chest_meadow",x:26,z:-3,level:2,name:"Wayfarer's Cache",biome:"meadow"},{id:"chest_city",x:41.2,z:19,level:4,name:"Alley Cache",biome:"city"},{id:"chest_forest",x:-15,z:-80,level:5,name:"Rootbound Vault",biome:"forest",locked:"forest"},{id:"chest_grave",x:-59,z:-28,level:6,name:"Mourner's Chest",biome:"graveyard"},{id:"chest_beach",x:106,z:67,level:5,name:"Wrecked Strongbox",biome:"beach"},{id:"chest_volcano",x:-97,z:-57,level:7,name:"Cinder Hoard",biome:"volcano"},{id:"chest_highlands",x:94,z:-82,level:7,name:"Stormcache",biome:"highlands"},{id:"chest_cave",x:72,z:-50.5,level:8,name:"Gloomroot Reliquary",biome:"cave",locked:"cave"}],gh={forest:{id:"forest",name:"Whisperwood Runestones",order:["earth","fire","holy"],hint:"Root. Ember. Dawn.",chestId:"chest_forest",biome:"forest",runes:[{x:-28,z:-75,element:"earth",name:"Root Rune"},{x:-4,z:-67,element:"fire",name:"Ember Rune"},{x:-12,z:-92,element:"holy",name:"Dawn Rune"}]},cave:{id:"cave",name:"Gloomroot Resonance",order:["ice","lightning","shadow"],hint:"Frost. Storm. Hollow.",chestId:"chest_cave",biome:"cave",runes:[{x:64,z:-37.5,element:"ice",name:"Frost Crystal"},{x:80,z:-37.5,element:"lightning",name:"Storm Crystal"},{x:77.5,z:-50,element:"shadow",name:"Hollow Crystal"}]}},xh=[{x:25,z:28,biome:"meadow",count:3,level:[1,2]},{x:-27,z:26,biome:"meadow",count:2,level:[1,2]},{x:23,z:47,biome:"meadow",count:3,level:[1,2]},{x:-3,z:-55,biome:"forest",count:3,level:[2,4]},{x:18,z:-78,biome:"forest",count:3,level:[2,4]},{x:-39,z:-91,biome:"forest",count:4,level:[3,4]},{x:-8,z:-104,biome:"forest",count:2,level:[2,3]},{x:-43,z:-6,biome:"graveyard",count:3,level:[3,5]},{x:-62,z:-12,biome:"graveyard",count:3,level:[3,5]},{x:-42,z:-30,biome:"graveyard",count:2,level:[4,5]},{x:84,z:43,biome:"beach",count:3,level:[3,5]},{x:104,z:61,biome:"beach",count:2,level:[4,6]},{x:80,z:73,biome:"beach",count:4,level:[3,5]},{x:-63,z:41,biome:"lake",count:3,level:[3,5]},{x:-82,z:62,biome:"lake",count:2,level:[4,6]},{x:-55,z:63,biome:"lake",count:3,level:[3,5]},{x:76,z:-58,biome:"highlands",count:3,level:[4,6]},{x:93,z:-77,biome:"highlands",count:3,level:[5,7]},{x:61,z:-75,biome:"highlands",count:2,level:[4,6]},{x:-76,z:-60,biome:"volcano",count:3,level:[4,6]},{x:-95,z:-74,biome:"volcano",count:4,level:[5,7]},{x:-68,z:-84,biome:"volcano",count:2,level:[4,6]},{x:66,z:-37,biome:"cave",count:3,level:[5,7]},{x:78,z:-49,biome:"cave",count:2,level:[5,7]}];function sg(s){for(const e of mh)s.addClearing(e.x,e.z,3.2);for(const e of Object.values(gh))for(const t of e.runes)s.addClearing(t.x,t.z,3);for(const e of lh)s.addClearing(e.spawn[0],e.spawn[1],7.5);for(const e of xh)s.addClearing(e.x,e.z,4.2);s.addClearing(28,-4,3.4),s.addClearing(-59,-28,4.2),s.addClearing(106,67,5.5),s.addClearing(-97,-57,3.5),s.addClearing(94,-82,3.5),s.addClearing(72,-43,9)}function ag(s){const e=bn(11991);for(const t of xh){const n=bt[t.biome],i=n.enemies;for(let a=0;a<t.count;a++){const r=e()*Math.PI*2,o=.9+e()*2.6;let l=t.x+Math.cos(r)*o,c=t.z+Math.sin(r)*o;for(let u=0;u<4&&(s.heightAt(l,c)<Et+.35||Je(l,c,xl.x,xl.z)<25);u++)l=t.x+(e()-.5)*5,c=t.z+(e()-.5)*5;const h=Y0(e,i),d=t.level[0]+Math.floor(e()*(t.level[1]-t.level[0]+1));s.enemySpawns.push({x:l,z:c,y:s.heightAt(l,c),type:h,level:d,biome:n.id,element:n.element,group:`${t.x}_${t.z}`,rngSeed:e()})}}for(const t of lh)s.bossSpawns.push({...t,x:t.spawn[0],z:t.spawn[1],y:s.heightAt(t.spawn[0],t.spawn[1])})}function rg(s){const e=bn(7319);for(const i of mh){const a=s.heightAt(i.x,i.z),r=J0(!!i.locked);r.position.set(i.x,a+.02,i.z),r.rotation.y=e()*Math.PI*2,s.scene.add(r);const o={...i,root:r,x:i.x,z:i.z,locked:!!i.locked,opened:!1,opening:!1,open:!1};if(i.locked){const l=Kt("#d8c887",1.5);l.position.set(0,.9,0),r.add(l),r.userData.locked=!0}else{const l=Kt("#e9b85f",1.2);l.position.set(0,.6,0),l.material.opacity=.22,r.add(l)}s.chests.push(o)}for(const i of Object.values(gh)){const a={...i,runes:[],progress:0,solved:!1,chest:null};a.chest=s.chests.find(r=>r.id===i.chestId);for(const r of i.runes){const o=s.heightAt(r.x,r.z),l=Q0(r.element);l.position.set(r.x,o,r.z),l.rotation.y=e()*Math.PI,s.scene.add(l),l.userData.puzzleId=i.id,l.userData.element=r.element,l.userData.name=r.name,l.userData.lit=!1,l.userData.runeObject=l,l.userData.x=r.x,l.userData.z=r.z,a.runes.push(l),s.puzzleRunes.push(l),s.addCollider(r.x,r.z,.55)}s.puzzles[i.id]=a}const t=(i,a,r)=>{const o=s.heightAt(i,a),l=new fe;l.position.set(i,o,a),s.scene.add(l),l.add(N(2.25,.12,2.25,L(5328197),0,.06,0));const c=new ve(new Pn(.9,1.18,20),new xn({color:14178903,transparent:!0,opacity:.06,side:it,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.13,l.add(c);const h=new fe;h.position.y=0,l.add(h);for(let d=0;d<9;d++){const u=d/9*Math.PI*2,p=gt(.12,.85,4,L(7830644,{metalness:.5}),Math.cos(u)*.5,.42,Math.sin(u)*.5);h.add(p)}return{root:l,ring:c,spikes:h,x:i,z:a,radius:1.2,period:3.2,phase:e()*3,damage:7+r*3,element:"physical",name:"Hidden spike trap",spikeHeight:0}},n=(i,a,r,o="fire")=>{const l=s.heightAt(i,a),c=new fe;c.position.set(i,l,a),s.scene.add(c);const h=o==="lightning"?13876586:15760189;c.add(Pe(1.15,1.3,.18,9,L(3814449),0,.09,0)),c.add(je(.72,L(h,{emissive:h,emissiveIntensity:1.2,transparent:!0,opacity:.65}),0,.16,0,8,4));const d=new ve(new Pn(1.2,1.65,24),new xn({color:h,transparent:!0,opacity:.05,side:it,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.04,c.add(d);const u=new ve(new It(.45,2,5),L(h,{emissive:h,emissiveIntensity:1.8,transparent:!0,opacity:0}));return u.position.y=1,c.add(u),{root:c,ring:d,flame:u,x:i,z:a,radius:1.5,period:3.8,phase:e()*4,damage:9+r*3,element:o,name:o==="lightning"?"Storm vent":"Cinder vent"}};s.traps.push(t(75.5,-37,5),t(67.5,-46,5),t(-46,-21,4),t(85,-62,5),n(-80,-59,6,"fire"),n(-92,-76,7,"fire"),n(-66,44,4,"ice"),n(88,-71,6,"lightning")),s.traps.push(t(72,-35,5))}const _l={x:0,z:13},vl={x:58,z:4},Rt={x:72,z:-43},ji={x:-72,z:51},Es=new Tt,og=new xe;function Ga(s,e,t=30){return Je(s,e,_l.x,_l.z)<t||Je(s,e,vl.x,vl.z)<t}function an(s,e,t,n,i,a,r,o=t*30){const l=[];for(let c=0;c<o&&l.length<t;c++){const h=e()*Math.PI*2,d=Math.sqrt(e())*a,u=n+Math.cos(h)*d,p=i+Math.sin(h)*d;if(Math.abs(u)>132||Math.abs(p)>132||Ga(u,p)||s.blockedByClearing(u,p,.8))continue;const g=s.heightAt(u,p);if(g<Et+.45||Math.abs(s.heightAt(u+1.4,p)-g)>2.7||Math.abs(s.heightAt(u,p+1.4)-g)>2.7)continue;const x=s.biomeAt(u,p);r(x,u,p,g)&&l.push({x:u,z:p,y:g,biome:x})}return l}function Xt(s,e,t,n,i=!0,a=!0){if(!n.length)return null;const r=new Gd(e,t,n.length);r.castShadow=i,r.receiveShadow=a;const o=[];return n.forEach((l,c)=>{Es.position.set(l.x,l.y,l.z),Es.rotation.set(l.rx||0,l.ry||0,l.rz||0),Es.scale.set(l.sx||1,l.sy||1,l.sz||1),Es.updateMatrix(),r.setMatrixAt(c,Es.matrix),l.color!==void 0&&o.push(l.color)}),r.instanceMatrix.needsUpdate=!0,o.length===n.length&&(n.forEach((l,c)=>r.setColorAt(c,og.setHex(l.color))),r.instanceColor.needsUpdate=!0,t.vertexColors=!0),s.scene.add(r),r}function Dr(s,e,t,n=!0){if(!e.length)return;const i=new wi(.16,.26,2,5);i.translate(0,1,0);const a=new ut({color:16777215,roughness:1,flatShading:!0});Xt(s,i,a,e.map(o=>{const l=.72+t()*.8;return n&&s.addCollider(o.x,o.z,.42),{x:o.x,y:o.y,z:o.z,sx:l*.8,sy:l,sz:l*.8,color:jt(5914665,(t()-.5)*.22),sc:l}}));const r=[3234616,3894080,2838579,4353861,3563323];for(let o=0;o<3;o++){const l=new It(1,2.8,7),c=new ut({color:16777215,roughness:.95,flatShading:!0}),h=e.map((d,u)=>{const p=.72+u*.618%1*.8,g=p*[1.18,.93,.64][o];return{x:d.x,y:d.y+[2.35,3.55,4.65][o]*p,z:d.z,sx:g,sy:p*(o===0?1:.9),sz:g,ry:t()*Math.PI,color:r[(u+o)%r.length]}});Xt(s,l,c,h)}}function yl(s,e,t,n=!0){if(!e.length)return;const i=new wi(.18,.3,3.2,5);i.translate(0,1.6,0);const a=new ut({color:7031341,roughness:1,flatShading:!0});Xt(s,i,a,e.map(c=>{const h=.8+t()*.65;return n&&s.addCollider(c.x,c.z,.45),{x:c.x,y:c.y,z:c.z,sx:h,sy:h,sz:h,color:jt(7031341,(t()-.5)*.18)}}));const r=new ds(1.85,0),o=new ut({color:16777215,roughness:.95,flatShading:!0}),l=[5077821,5802564,4353336,6393161,4945216];Xt(s,r,o,e.map((c,h)=>{const d=.8+h*.37%1*.55;return{x:c.x,y:c.y+3.25*d,z:c.z,sx:d*1.06,sy:d*.9,sz:d,ry:t()*Math.PI,color:l[h%l.length]}})),Xt(s,r,o,e.slice(0,Math.ceil(e.length*.7)).map((c,h)=>{const d=.55+h*.71%1*.3;return{x:c.x+.6,y:c.y+4.05+d,z:c.z-.4,sx:d,sy:d*.8,sz:d,ry:t(),color:l[(h+2)%l.length]}}))}function cg(s,e){const t=an(s,e,700,0,10,122,v=>["meadow","forest","graveyard","highlands","lake"].includes(v.id)),n=new It(.06,.7,3);n.translate(0,.35,0);const i=new ut({color:16777215,roughness:1,flatShading:!0});Xt(s,n,i,t.map((v,_)=>({x:v.x,y:v.y,z:v.z,sx:1+e()*1.2,sy:.65+e()*1.25,sz:1+e()*.8,ry:e()*3.1,color:jt(v.biome.id==="graveyard"?7831658:7116606,(e()-.5)*.24)})),!1,!1);const a=an(s,e,260,-5,10,90,v=>v.id==="meadow"||v.id==="forest"),r=new ti(.09,.14,.09),o=new ut({color:16777215,roughness:1}),l=[15915407,13995158,12098269,16050376,9884083,15114590];Xt(s,r,o,a.map((v,_)=>({x:v.x,y:v.y+.31,z:v.z,sx:1,sy:1,sz:1,ry:e()*4,color:l[_%l.length]})),!1,!1);const c=an(s,e,55,bt.forest.center[0],bt.forest.center[1],48,v=>v.id==="forest"||v.id==="graveyard"),h=new wi(.035,.05,.24,4);h.translate(0,.12,0),Xt(s,h,L(14207399),c.map(v=>({x:v.x,y:v.y,z:v.z,sx:1,sy:1,sz:1})),!1,!1);const d=new Bs(.12,6,4,0,Math.PI*2,0,Math.PI/2),u=new ut({color:16777215,roughness:.9});Xt(s,d,u,c.map((v,_)=>({x:v.x,y:v.y+.22,z:v.z,sx:1,sy:.75,sz:1,color:_%3===0?10830141:9132860})),!1,!1);const p=an(s,e,135,0,0,126,(v,_,T,E)=>["highlands","volcano","beach","graveyard","meadow","cave"].includes(v.id)),g=new qo(.7,0),x=new ut({color:16777215,roughness:1,flatShading:!0});Xt(s,g,x,p.map(v=>{const _=.5+e()*1.75;return _>1.35&&s.addCollider(v.x,v.z,_*.65),{x:v.x,y:v.y+_*.35,z:v.z,sx:_*(1+e()*.3),sy:_*(.6+e()*.6),sz:_,ry:e()*6,rx:e()*.2,color:jt(v.biome.id==="volcano"?4931900:7829612,(e()-.5)*.2)}}));const m=an(s,e,95,0,5,118,v=>["meadow","forest","graveyard"].includes(v.id)),f=new ds(.7,0),y=new ut({color:16777215,roughness:1,flatShading:!0});Xt(s,f,y,m.map((v,_)=>({x:v.x,y:v.y+.45,z:v.z,sx:1+e()*.6,sy:.65+e()*.4,sz:1+e()*.5,ry:e()*5,color:_%3===0?6126142:4811577})));for(let v=0;v<26;v++){const _=-70+e()*145,T=-70+e()*110;if(Ga(_,T,24)||s.biomeAt(_,T).id==="city")continue;const E=s.heightAt(_,T);if(E<Et+.5)continue;const A=Kt("#d7e98b",.17+e()*.12);A.position.set(_,E+.8+e()*1.4,T),A.material.opacity=.5,s.scene.add(A),s.flames.push(A)}}function lg(s,e,t,n){const i=s.heightAt(e,t),a=new fe;a.position.set(e,i,t),a.scale.setScalar(.85+n()*.45),s.scene.add(a);const r=L(7295026);let o=0,l=0;for(let d=0;d<5;d++){const u=Pe(.12-d*.012,.17-d*.012,1.1,5,r,o,.5+d*1,l);u.rotation.z=.07+d*.018,u.rotation.x=.03*d,a.add(u),o+=.08,l+=.02}const c=5.2,h=L(5143362,{side:it});for(let d=0;d<7;d++){const u=d/7*Math.PI*2,p=new fe;p.position.set(o,c,l),p.rotation.y=u,a.add(p);for(let g=0;g<2;g++){const x=N(.42,.045,1.9-g*.4,h,0,.02-g*.16,.9+g*.3);x.rotation.x=.36+g*.12,p.add(x)}}for(let d=0;d<3;d++)a.add(je(.11,L(6177316),o+Math.cos(d*2)*.18,c-.2,l+Math.sin(d*2)*.18,5,3));s.addCollider(e,t,.38)}function Do(s,e,t,n){const i=s.heightAt(e,t),a=new fe;a.position.set(e,i,t),a.rotation.y=n()*Math.PI,s.scene.add(a);const r=L(5985869),o=Pe(.12,.3,3.6,5,r,0,1.8,0);o.rotation.z=(n()-.5)*.18,a.add(o);for(let l=0;l<5;l++){const c=Pe(.04,.1,1.4+n()*1,4,r,0,2+l*.3,0),h=n()*Math.PI*2;c.rotation.z=Math.PI/2+(n()-.5)*.5,c.rotation.y=h,c.position.x=Math.cos(h)*.55,c.position.z=Math.sin(h)*.55,a.add(c)}s.addCollider(e,t,.4)}function hg(s){const n=s.heightAt(29,-12),i=new fe;i.position.set(29,n,-12),s.scene.add(i),i.add(Pe(2,2.6,7.5,8,L(12693643),0,3.75,0)),i.add(Pe(2.2,2.4,.4,8,L(8286038),0,7.6,0)),i.add(gt(2.7,2.4,8,L(6899770),0,9,0)),i.add(N(1.1,2,.14,L(5453602),0,1,2.05));const a=new ut({color:7306097,emissive:16761706,emissiveIntensity:.2});for(const o of[-1.2,-2.2])i.add(N(.6,.65,.08,a,0,4.2+o,2.42));s.windows.push({material:a});const r=new fe;r.position.set(0,7,2.6),i.add(r),r.add(Pe(.24,.3,.5,8,L(4995111),0,0,0));for(let o=0;o<4;o++){const l=new fe;l.rotation.z=o*Math.PI/2,r.add(l),l.add(N(.18,3.4,.1,L(6966065),0,1.7,0));for(let c=1;c<4;c++)l.add(N(.75,.65,.06,L(13483934),.38,c*.8,0))}s.windmillBlades=r,s.addCollider(29,-12,2.8)}function dg(s,e,t,n,i){const a=s.heightAt(e,t),r=new fe;r.position.set(e,a,t),s.scene.add(r);const o=new ut({color:13849902,emissive:16731154,emissiveIntensity:2.4,roughness:.3,transparent:!0,opacity:.92}),l=new ve(new Rn(n,14),o);l.rotation.x=-Math.PI/2,l.position.y=.12,r.add(l);const c=L(3878184);for(let u=0;u<10;u++){const p=u/10*Math.PI*2,g=je(n*.14,c,Math.cos(p)*n,.1,Math.sin(p)*n,5,3);g.scale.y=.6,r.add(g)}const h=Kt("#ff7a37",n*2.3);h.position.y=.5,h.material.opacity=.42,r.add(h);const d=new Qn(16734756,1.2,n*4,2);d.position.y=1.2,r.add(d);for(let u=0;u<4;u++){const p=new ve(new It(.13,.6,4),L(16744763,{emissive:16735010,emissiveIntensity:2,transparent:!0,opacity:.6}));p.position.set((i()-.5)*n,.35,(i()-.5)*n),r.add(p),p.userData.offset=i()*9,s.flames.push(p)}}function _h(s,e,t,n){const i=s.heightAt(e,t),a=new fe;a.position.set(e,i,t),a.rotation.y=n()*6,s.scene.add(a);const r=L(3879986);let o=0;for(let l=0;l<4;l++){const c=1.4+n()*1.8,h=Pe(.4+n()*.35,.7+n()*.3,c,5,r,(n()-.5)*.5,o+c/2,(n()-.5)*.5);h.rotation.z=(n()-.5)*.2,a.add(h),o+=c*.75}if(n()>.5){const l=N(.08,o*.7,.06,L(16739894,{emissive:16729877,emissiveIntensity:1.8}),0,o*.5,.55);a.add(l)}s.addCollider(e,t,1)}function ug(s,e){const t=an(s,e,22,94,58,31,g=>g.id==="beach");for(const g of t)lg(s,g.x,g.z,e);const n=106,i=67,a=s.heightAt(n,i),r=new fe;r.position.set(n,a,i),r.rotation.y=-.3,s.scene.add(r);const o=L(5981745),l=L(4009762);r.add(N(7.4,.5,3.4,l,0,.35,0));for(const g of[-1,1])for(let x=0;x<4;x++){const m=N(7-x*.8,.85,.25,o,0,.55+x*.2,g*(2-x*.3));m.rotation.z=(e()-.5)*.04,m.rotation.x=g*(.3-x*.04),r.add(m)}const c=Pe(.14,.22,8,6,l,2.1,4,0);c.rotation.z=-.16,r.add(c);const h=new ve(new Hn(3.8,3.2),L(13944739,{side:it,transparent:!0,opacity:.62}));h.position.set(1.1,5.4,.12),h.rotation.y=.2,h.rotation.z=.18,r.add(h);for(let g=0;g<5;g++){const x=Pe(.28,.3,.7,7,L(7031340),2.8+e()*2,.6,(e()-.5)*3);x.rotation.z=Math.PI/2,r.add(x)}for(let g=0;g<15;g++){const x=33+g*1.15,m=Math.max(Et+.55,s.heightAt(114,x)+.12);s.scene.add(N(2.1,.14,.95,L(g%2?8874052:7756348),114,m,x)),g%3===0&&s.scene.add(Pe(.11,.14,1.7,5,L(5192487),115.1,m-.75,x))}for(const[g,x,m]of[[86,72,12743252],[91,50,6261378],[111,77,13743470]]){const f=s.heightAt(g,x),y=new fe;y.position.set(g,f,x),s.scene.add(y),y.add(Pe(.05,.07,2.4,5,L(7953214),0,1.2,0)),y.add(gt(1.8,.7,8,L(m),0,2.55,0)),y.add(gt(1.55,.3,8,L(14141863),0,2.42,0))}for(const[g,x,m]of[[84,60,2.2],[98,76,1.7],[118,72,2.8]]){const f=s.heightAt(g,x),y=new ve(new Rn(m,12),new ut({color:5150369,transparent:!0,opacity:.55,roughness:.12,metalness:.2}));y.rotation.x=-Math.PI/2,y.position.set(g,Math.max(Et+.03,f+.035),x),s.scene.add(y)}const d=an(s,e,40,95,58,30,g=>g.id==="beach"),u=new It(.12,.1,5),p=new ut({color:16777215,roughness:.8});Xt(s,u,p,d.map((g,x)=>({x:g.x,y:g.y+.04,z:g.z,sx:1,sy:1,sz:1,color:x%2?15259316:13013635})),!1,!1)}function fg(s,e){for(let g=0;g<18;g++){const x=24+g*1.2,m=Math.max(Et+.52,s.heightAt(-72,x)+.1);s.scene.add(N(2.2,.14,1,L(g%2?8808516:7361847),-72,m,x)),g%4===0&&(s.scene.add(Pe(.12,.15,1.8,5,L(4929060),-73.1,m-.8,x)),s.scene.add(Pe(.12,.15,1.8,5,L(4929060),-70.9,m-.8,x)))}s.scene.add(N(2.2,.08,.08,L(5456687),-72,Et+1.4,44.2));const t=new fe;t.position.set(-66.5,Et+.1,43.5),t.rotation.y=.5,s.scene.add(t);const n=L(6309679);t.add(N(1.35,.35,3,n,0,.1,0)),t.add(N(1,.28,2.35,L(3418141),0,.08,0)),t.add(N(.15,.16,2.9,L(9071173),-.7,.24,0)),t.add(N(.15,.16,2.9,L(9071173),.7,.24,0)),t.add(Pe(.04,.04,2.1,4,L(9005380),.1,.3,0));const i=new Rn(.42,7),a=new ut({color:16777215,roughness:1,side:it}),r=[];for(let g=0;g<42;g++){const x=ji.x+(e()-.5)*38,m=ji.z+(e()-.5)*36;s.heightAt(x,m)>Et-.3||r.push({x,y:Et+.04,z:m,sx:.6+e()*.8,sy:1,sz:.6+e()*.8,ry:e()*6,color:g%6===0?9611612:5209678})}Xt(s,i,a,r,!1,!1);const o=an(s,e,80,ji.x,ji.z,38,(g,x,m,f)=>g.id==="lake"&&f>Et-.7&&f<Et+.6),l=new It(.045,1.3,3);l.translate(0,.65,0),Xt(s,l,L(7177553),o.map(g=>({x:g.x,y:g.y,z:g.z,sx:.7+e()*.8,sy:.8+e()*1.2,sz:.7+e()*.8,ry:e()*3})),!1,!1);const c=-84,h=34,d=s.heightAt(c,h),u=new fe;u.position.set(c,d,h),s.scene.add(u),u.add(Pe(1.7,1.9,.35,8,L(6909798),0,.17,0));for(const[g,x]of[[-1.1,-1.1],[1.1,-1.1],[-1.1,1.1],[1.1,1.1]])u.add(N(.18,2.3,.18,L(5200207),g,1.15,x));u.add(Pe(1.3,1.45,.25,8,L(5923162),0,2.3,0)),u.add(je(.22,L(10477528,{emissive:5486770,emissiveIntensity:1.4}),0,1.1,0));const p=Kt("#8ce1d8",2.6);p.position.y=1.2,u.add(p),s.addCollider(c,h,1.7);for(let g=0;g<8;g++){const x=Kt("#b8c8bf",2.4+e()*2.5);x.position.set(ji.x+(e()-.5)*34,Et+.4,ji.z+(e()-.5)*30),x.material.opacity=.08,s.scene.add(x)}}function pg(s,e){const i=L(3225397,{metalness:.55}),a=L(7829612),r=[];for(let m=0;m<44;m++){const f=m/44*Math.PI*2,y=-51+Math.cos(f)*16,v=-16+Math.sin(f)*15;if(Math.sin(f)>.86&&Math.abs(Math.cos(f))<.4)continue;const _=s.heightAt(y,v),T=N(.1,1.9,.1,i,y,_+.95,v);T.rotation.y=f,s.scene.add(T),m%5===0&&s.scene.add(N(.38,2.2,.38,a,y,_+1.1,v)),r.push([y,v,_])}for(let m=0;m<r.length-1;m++){const[f,y,v]=r[m],[_,T,E]=r[m+1];if(Math.hypot(_-f,T-y)>3)continue;const A=(f+_)/2,D=(y+T)/2,M=N(.05,.05,Math.hypot(_-f,T-y)+.5,i,A,(v+E)/2+1.3,D);M.rotation.y=Math.atan2(_-f,T-y),s.scene.add(M)}const o=[],l=[];for(let m=0;m<44;m++){const f=e()*Math.PI*2,y=3+e()*12,v=-51+Math.cos(f)*y,_=-16+Math.sin(f)*y;if(s.blockedByClearing(v,_,.3))continue;const T=s.heightAt(v,_);e()>.66?l.push({x:v,z:_,y:T,ry:(e()-.5)*.3}):o.push({x:v,z:_,y:T,ry:(e()-.5)*.35})}const c=new ti(.65,1.15,.18),h=new ut({color:16777215,roughness:1,flatShading:!0});Xt(s,c,h,o.map(m=>({x:m.x,y:m.y+.55,z:m.z,sx:.8+e()*.5,sy:.8+e()*.65,sz:1,ry:m.ry,color:jt(7698027,(e()-.5)*.2)})));for(const m of l){const f=m.y,y=new fe;y.position.set(m.x,f,m.z),y.rotation.y=m.ry,s.scene.add(y),y.add(N(.17,1.25,.16,h,0,.62,0)),y.add(N(.65,.16,.16,h,0,.9,0))}const d=-63,u=-28,p=s.heightAt(d,u),g=new fe;g.position.set(d,p,u),s.scene.add(g),g.add(N(5.8,.35,5.2,a,0,.17,0)),g.add(N(5.1,3.2,4.5,L(7961199),0,1.7,0)),g.add(N(5.6,.35,5,L(6908512),0,3.45,0)),g.add(gt(.05,.1,4,a,0,3.6,0)),g.add(N(1.2,2.2,.18,L(2696996),0,1.2,2.3));for(const m of[-2.1,2.1])g.add(N(.5,3,.5,a,m,1.5,2.15));g.add(N(5,.5,.5,a,0,3,2.15)),s.addCollider(d,u,3.2);for(let m=0;m<12;m++){const f=-51+(e()-.5)*26,y=-16+(e()-.5)*24,v=s.heightAt(f,y);s.scene.add(Pe(.035,.045,.22+e()*.25,4,L(14208941),f,v+.15,y));const _=je(.035,L(16767371,{emissive:16756827,emissiveIntensity:2.2}),f,v+.32,y,4,3);s.scene.add(_)}const x=Kt("#88d99b",5);x.position.set(-46,s.heightAt(-46,-15)+2.4,-15),x.material.opacity=.13,s.scene.add(x);for(let m=0;m<8;m++){const f=-51+(e()-.5)*25,y=-16+(e()-.5)*22;Ga(f,y,20)||Do(s,f,y,e)}}function mg(s,e){for(let r=0;r<16;r++){const o=60+e()*50,l=-95+e()*55;Je(o,l,Rt.x,Rt.z)<15||s.blockedByClearing(o,l,1)||s.heightAt(o,l)<Et+.5||_h(s,o,l,e)}for(let r=0;r<7;r++){const o=r/7*Math.PI*2,l=88+Math.cos(o)*7,c=-92+Math.sin(o)*7,h=s.heightAt(l,c),d=N(.8,3.2+e()*1.4,.55,L(7501422),l,h+1.6,c);d.rotation.z=(e()-.5)*.2,d.rotation.y=-o,s.scene.add(d),r===0&&s.addCollider(l,c,.7)}const t=85,n=-82,i=s.heightAt(t,n),a=new ve(new Pn(2.2,3.1,14),new xn({color:13876586,transparent:!0,opacity:.22,side:it}));a.rotation.x=-Math.PI/2,a.position.set(t,i+.06,n),s.scene.add(a)}function gg(s,e){const t=new ve(new Rn(14,26),new ut({color:2501161,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));t.rotation.x=-Math.PI/2,t.position.set(Rt.x,Rt.flat+.03,Rt.z),t.receiveShadow=!0,s.scene.add(t);for(let r=0;r<26;r++){const o=r/26*Math.PI*2;if(Math.sin(o)>.55)continue;const l=11.5+e()*2.8,c=Rt.x+Math.cos(o)*l,h=Rt.z+Math.sin(o)*l,d=s.heightAt(c,h),u=je(2+e()*2.2,L(4541256),c,d+1.6+e()*2.2,h,7,5);u.scale.y=1.4+e(),s.scene.add(u),s.addCollider(c,h,2.1)}for(const r of[-4.8,4.8]){const o=Rt.x+r,l=Rt.z+10.2,c=s.heightAt(o,l),h=Pe(1.35,1.8,5.8,6,L(4278084),o,c+2.9,l);s.scene.add(h),s.addCollider(o,l,1.8)}const n=s.heightAt(Rt.x,Rt.z+10.2),i=N(11.8,1.6,1.9,L(4014912),Rt.x,n+6.2,Rt.z+10.2);i.rotation.z=.03,s.scene.add(i);for(const[r,o,l]of[[-5,-5,7],[4,-8,8],[-7,3,6],[7,2,5]]){const c=Rt.x+r,h=Rt.z+o,d=s.heightAt(c,h),u=je(l,L(3290933),c,d+7.5,h,6,4);u.scale.y=.32,s.scene.add(u)}const a=[8377046,10322907,10270841,14067050];for(let r=0;r<15;r++){const o=e()*Math.PI*2,l=3+e()*8,c=Rt.x+Math.cos(o)*l,h=Rt.z+Math.sin(o)*l,d=s.heightAt(c,h),u=new fe;u.position.set(c,d,h),s.scene.add(u);const p=a[r%a.length];for(let g=0;g<3+Math.floor(e()*3);g++){const x=.7+e()*2.3,m=gt(.16+e()*.18,x,5,L(p,{emissive:p,emissiveIntensity:.9,transparent:!0,opacity:.88}),(e()-.5)*.9,x/2,(e()-.5)*.9);m.rotation.z=(e()-.5)*.4,m.rotation.x=(e()-.5)*.4,u.add(m)}if(r%4===0){const g=new Qn(p,1,9,2);g.position.y=1.4,u.add(g)}}for(const r of[-6.6,6.6]){const o=Rt.x+r,l=Rt.z+8.7,c=s.heightAt(o,l);s.scene.add(Pe(.07,.1,2.2,5,L(4600870),o,c+1.1,l));const h=new ve(new It(.2,.6,5),L(16756827,{emissive:16742952,emissiveIntensity:2,transparent:!0,opacity:.7}));h.position.set(o,c+2.35,l),h.userData.offset=e()*7,s.scene.add(h),s.flames.push(h);const d=new Qn(16752727,1.4,10,2);d.position.set(o,c+2.5,l),s.scene.add(d),s.lanterns.push({light:d,sprite:null,base:1.2,offset:e()*8})}for(let r=0;r<10;r++){const o=Rt.x+(e()-.5)*15,l=Rt.z+(e()-.5)*15,c=s.heightAt(o,l),h=Pe(.03,.05,.7+e(),4,L(12432540),o,c+.08,l);h.rotation.z=Math.PI/2,h.rotation.y=e()*6,s.scene.add(h)}}function xg(s){const e=bn(91937);hg(s),cg(s,e);const t=an(s,e,155,bt.forest.center[0],bt.forest.center[1],62,o=>o.id==="forest");Dr(s,t,e);const n=an(s,e,34,80,-66,43,o=>o.id==="highlands");Dr(s,n,e);const i=an(s,e,16,0,20,65,o=>o.id==="meadow");Dr(s,i,e);const a=an(s,e,64,2,0,80,o=>o.id==="meadow"||o.id==="graveyard"||o.id==="lake");yl(s,a,e);const r=an(s,e,30,-12,-73,48,o=>o.id==="forest");yl(s,r,e);for(const[o,l,c]of[[-69,-56,4.2],[-93,-60,3.6],[-74,-82,4.8],[-100,-78,3.1],[-84,-67.8,4.5],[-61,-74,2.7]])s.heightAt(o,l)>Et&&dg(s,o,l,c,e);for(let o=0;o<18;o++){const l=-110+e()*58,c=-105+e()*55;s.biomeAt(l,c).id!=="volcano"||s.blockedByClearing(l,c,1)||Ga(l,c,28)||_h(s,l,c,e)}for(let o=0;o<13;o++){const l=-108+e()*55,c=-106+e()*58;s.biomeAt(l,c).id==="volcano"&&Do(s,l,c,e)}for(let o=0;o<7;o++){const l=-105+e()*48,c=-102+e()*54;if(s.biomeAt(l,c).id!=="volcano")continue;const h=s.heightAt(l,c),d=new ve(new Rn(1.1+e()*2,10),new xn({color:2827298,transparent:!0,opacity:.42,side:it,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(l,h+.05,c),s.scene.add(d)}ug(s,e),fg(s,e),pg(s,e),mg(s,e),gg(s,e);for(let o=0;o<8;o++){const l=58+e()*50,c=-103+e()*48;s.biomeAt(l,c).id==="highlands"&&!s.blockedByClearing(l,c,1)&&Do(s,l,c,e)}for(const[o,l,c]of[[-9,40,1.8],[7,42,1.4],[35,19,2.1],[-37,20,1.7]]){const h=s.heightAt(o,l),d=je(c,L(7632491),o,h+c*.5,l,6,4);d.scale.set(1.3,.85,1),d.rotation.y=e()*5,s.scene.add(d),s.addCollider(o,l,c*.9)}}function _g(s){sg(s),xg(s),rg(s),ag(s)}const Ts={x:0,z:13,flat:.55},As={x:58,z:4,flat:.62},Cs={x:72,z:-43,flat:1.15},Ki={x:-72,z:51},Ml={x:-84,z:-68},tt={x:0,z:38};function vh(s,e,t=1){const n=document.createElement("canvas");n.width=s,n.height=s;const i=n.getContext("2d");i.imageSmoothingEnabled=!1,e(i,s);const a=new Oa(n);return a.magFilter=Dt,a.minFilter=Dt,a.wrapS=a.wrapT=Aa,a.repeat.set(t,t),a.anisotropy=1,a}function vg(){return vh(32,(s,e)=>{s.fillStyle="#d7d7ce",s.fillRect(0,0,e,e);const t=bn(308);for(let n=0;n<90;n++){const i=Math.floor(t()*e),a=Math.floor(t()*e),r=Math.floor(158+t()*84);s.fillStyle=`rgb(${r},${r},${r})`,s.fillRect(i,a,t()>.8?2:1,1)}for(let n=0;n<20;n++){const i=Math.floor(t()*e),a=Math.floor(t()*e);s.fillStyle="rgba(48,42,31,.26)",s.fillRect(i,a,1,1)}},58)}function yg(){return vh(32,(s,e)=>{s.fillStyle="#c9e3e2",s.fillRect(0,0,e,e);const t=bn(909);for(let n=0;n<18;n++){const i=Math.floor(t()*e);s.fillStyle=t()>.5?"rgba(255,255,255,.4)":"rgba(56,105,115,.22)",s.fillRect(Math.floor(t()*e),i,3+Math.floor(t()*9),1)}},30)}class Mg{constructor(e){this.game=e,this.scene=e.scene,this.rng=bn(424242),this.colliders=[],this.windows=[],this.lanterns=[],this.flames=[],this.chests=[],this.traps=[],this.puzzles={},this.puzzleRunes=[],this.enemySpawns=[],this.bossSpawns=[],this.npcSpots=[],this.waterMats=[],this.clouds=[],this.stars=null,this.currentWeather=tn.clear,this.dayFactor=1,this.nightFactor=0,this.sunHeight=1,this.timeOfDay=9,this.lightning=0,this.lightningTimer=8,this.rainGroup=null,this.snowGroup=null,this.ashGroup=null,this.ripples=[],this.worldTime=0,this.mapCanvas=null,this.clearings=[],this.build()}addCollider(e,t,n,i="solid"){this.colliders.push({x:e,z:t,r:n,type:i})}addClearing(e,t,n){this.clearings.push({x:e,z:t,r:n})}blockedByClearing(e,t,n=0){for(const i of this.clearings)if(Je(e,t,i.x,i.z)<i.r+n)return!0;return!1}heightAt(e,t){let n=.15+Xi(e*.019,t*.019,8)*2.55+(Yn(e*.061,t*.061,4)-.5)*.52;const i=Je(e,t,bt.forest.center[0],bt.forest.center[1]);n+=pn(55,12,i)*1.25+Xi(e*.045,t*.045,17)*pn(60,15,i)*1.4;const a=Je(e,t,bt.highlands.center[0],bt.highlands.center[1]);n+=pn(55,8,a)*8.6+Xi(e*.07,t*.07,22)*2.8*pn(55,8,a);const r=Je(e,t,Ml.x,Ml.z),o=Math.max(0,1-r/62);n+=Math.pow(o,1.6)*15.5,r<13&&(n-=(1-r/13)*7.6),n+=Xi(e*.09,t*.09,31)*1.5*o;const l=Je(e,t,Ki.x,Ki.z);n-=(1-pn(12,35,l))*4.7,n-=pn(108,135,e)*6.5,n-=pn(112,135,t)*2.4;const c=Je(e,t,bt.graveyard.center[0],bt.graveyard.center[1]);n=hi(n,.7+Xi(e*.06,t*.06,43)*.65,(1-pn(17,31,c))*.8);const h=Je(e,t,Cs.x,Cs.z);n=hi(n,Cs.flat+Xi(e*.1,t*.1,66)*.24,1-pn(10,16,h));const d=Je(e,t,Ts.x,Ts.z);n=hi(n,Ts.flat,1-pn(21,29.5,d));const u=Je(e,t,As.x,As.z);return n=hi(n,As.flat,1-pn(22,30.5,u)),Math.abs(e)<9&&t>25&&t<43&&(n=hi(n,.55,.7)),n}biomeAt(e,t){if(Je(e,t,Ts.x,Ts.z)<24)return bt.town;if(Je(e,t,As.x,As.z)<23)return bt.city;if(Je(e,t,Cs.x,Cs.z)<16)return bt.cave;if(Je(e,t,Ki.x,Ki.z)<31)return bt.lake;let o=bt.meadow,l=1/0;for(const c of k0){const h=bt[c];if(c==="lake"||c==="cave")continue;const d=Je(e,t,h.center[0],h.center[1])/h.radius;d<l&&(l=d,o=h)}return o}zoneName(e,t){const n=this.biomeAt(e,t);return{biome:n,town:n.id==="town",city:n.id==="city"}}build(){this.scene.fog=new Go(11388082,.0032),this.createSky(),this.createLights(),this.createTerrain(),this.createWater(),ng(this),ig(this),_g(this),this.createWeatherParticles(),this.createMapCanvas()}createSky(){const e=new Bs(430,24,16);this.skyUniforms={topColor:{value:new xe(5739960)},horizonColor:{value:new xe(14209442)},bottomColor:{value:new xe(7901559)},sunColor:{value:new xe(16768159)},sunDirection:{value:new P(.3,.8,.3)},sunPower:{value:1}};const t=new kn({side:qt,depthWrite:!1,uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vWorldDirection;
        void main() {
          vWorldDirection = normalize((modelMatrix * vec4(position, 1.0)).xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 bottomColor;
        uniform vec3 sunColor;
        uniform vec3 sunDirection;
        uniform float sunPower;
        varying vec3 vWorldDirection;
        void main() {
          vec3 dir = normalize(vWorldDirection);
          float h = dir.y;
          vec3 col = mix(bottomColor, horizonColor, smoothstep(-0.18, 0.08, h));
          col = mix(col, topColor, smoothstep(0.02, 0.75, h));
          float sunDot = max(dot(dir, normalize(sunDirection)), 0.0);
          col += sunColor * (pow(sunDot, 700.0) * 1.8 + pow(sunDot, 22.0) * 0.18) * sunPower;
          float band = sin((h + 0.08) * 80.0) * 0.004;
          col += band * smoothstep(-0.05, 0.3, h);
          gl_FragColor = vec4(col, 1.0);
        }
      `});this.sky=new ve(e,t),this.sky.frustumCulled=!1,this.scene.add(this.sky);const n=new At,i=[],a=bn(881);for(let c=0;c<1100;c++){const h=a()*Math.PI*2,d=Math.acos(a()*.92),u=360,p=Math.sin(d)*Math.cos(h)*u,g=Math.cos(d)*u,x=Math.sin(d)*Math.sin(h)*u;g>5&&i.push(p,g,x)}n.setAttribute("position",new rt(i,3));const r=new So({color:15919560,size:1.65,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1});this.stars=new Lc(n,r),this.stars.frustumCulled=!1,this.scene.add(this.stars),this.sunSprite=Kt("#ffd78b",42),this.sunSprite.material.opacity=.6,this.scene.add(this.sunSprite),this.moonSprite=Kt("#d4e5ea",19),this.moonSprite.material.opacity=.7,this.scene.add(this.moonSprite);const o=new ut({color:15265506,roughness:1,transparent:!0,opacity:.54,depthWrite:!1,flatShading:!0});this.cloudMat=o;const l=bn(922);for(let c=0;c<9;c++){const h=new fe,d=4+Math.floor(l()*4);for(let u=0;u<d;u++){const p=new ve(new ds(3.4+l()*4.2,0),o);p.position.set((u-d/2)*3.5+l()*2,l()*2.2,(l()-.5)*5),p.scale.y=.6,h.add(p)}h.position.set((l()-.5)*220,43+l()*21,(l()-.5)*220),h.userData.speed=.4+l()*.5,this.clouds.push(h),this.scene.add(h)}}createLights(){this.hemi=new jd(12375260,3162159,.8),this.scene.add(this.hemi),this.ambient=new Jd(11187874,.16),this.scene.add(this.ambient),this.sun=new zc(16769198,2.4),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=150,this.sun.shadow.camera.left=-48,this.sun.shadow.camera.right=48,this.sun.shadow.camera.top=48,this.sun.shadow.camera.bottom=-48,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.03,this.sunTarget=new Tt,this.scene.add(this.sunTarget),this.sun.target=this.sunTarget,this.scene.add(this.sun),this.moon=new zc(10337496,.35),this.scene.add(this.moon);const e=bn(770),t=new ut({color:5464670,roughness:1,flatShading:!0});for(let n=0;n<22;n++){const i=n/22*Math.PI*2+e()*.15,a=178+e()*34,r=24+e()*42,o=gt(20+e()*24,r,5,t,Math.cos(i)*a,r*.32-3,Math.sin(i)*a);o.rotation.y=e()*Math.PI,o.castShadow=!1,o.receiveShadow=!1,this.scene.add(o)}}createTerrain(){const t=new Hn(vt,vt,168,168);t.rotateX(-Math.PI/2);const n=t.attributes.position,i=[],a=new xe;for(let o=0;o<n.count;o++){const l=n.getX(o),c=n.getZ(o),h=this.heightAt(l,c);n.setY(o,h);const d=this.biomeAt(l,c),u=Je(l,c,d.center[0],d.center[1]);mt(u/d.radius,0,1),a.setHex(d.ground);const p=Yn(l*.21,c*.21,3)-.5,g=Yn(l*.045,c*.045,9)-.5;if(a.offsetHSL(p*.012,g*.03,p*.075+g*.045),h<Et+1&&a.lerp(new xe(8419931),.28),h<Et&&a.lerp(new xe(3035473),.55),d.id==="volcano"){const x=Yn(l*.14,c*.14,17);x>.72&&a.lerp(new xe(9387312),(x-.72)*1.8)}d.id==="highlands"&&h>8&&a.lerp(new xe(11776420),mt((h-8)/10,0,.5)),d.id==="graveyard"&&Yn(l*.7,c*.7,12)>.7&&a.offsetHSL(0,-.03,-.08),i.push(a.r,a.g,a.b)}t.setAttribute("color",new rt(i,3)),t.computeVertexNormals();const r=new ut({vertexColors:!0,map:vg(),roughness:1,metalness:0,flatShading:!1});this.terrain=new ve(t,r),this.terrain.receiveShadow=!0,this.terrain.castShadow=!1,this.scene.add(this.terrain)}createWater(){const e=new Hn(vt+18,vt+18,1,1);e.rotateX(-Math.PI/2),this.waterTex=yg();const t=new ut({color:3897475,map:this.waterTex,transparent:!0,opacity:.82,roughness:.18,metalness:.18,emissive:730409,emissiveIntensity:.24});this.waterMat=t,this.water=new ve(e,t),this.water.position.y=Et,this.water.receiveShadow=!0,this.scene.add(this.water),this.waterMats.push(t);const n=new xn({color:12574424,transparent:!0,opacity:.18,side:it,depthWrite:!1});for(const[i,a,r]of[[Ki.x,Ki.z,24],[126,58,27],[122,95,22]]){const o=new ve(new Pn(r-.6,r,32),n);o.rotation.x=-Math.PI/2,o.position.set(i,Et+.02,a),this.scene.add(o)}}createWeatherParticles(){const e=bn(663),t=(i,a,r,o)=>{const l=new Float32Array(i*6),c=new Float32Array(i);for(let p=0;p<i;p++){const g=(e()-.5)*49,x=e()*24,m=(e()-.5)*49;l[p*6]=g,l[p*6+1]=x,l[p*6+2]=m,l[p*6+3]=g+.04,l[p*6+4]=x-.65,l[p*6+5]=m,c[p]=14+e()*12}const h=new At;h.setAttribute("position",new $t(l,3));const d=new Xo({color:a,transparent:!0,opacity:r,depthWrite:!1}),u=new qd(h,d);return u.frustumCulled=!1,u.userData.speeds=c,u.visible=!1,this.scene.add(u),u},n=(i,a,r,o)=>{const l=new Float32Array(i*3),c=new Float32Array(i);for(let p=0;p<i;p++)l[p*3]=(e()-.5)*48,l[p*3+1]=e()*22,l[p*3+2]=(e()-.5)*48,c[p]=e()*Math.PI*2;const h=new At;h.setAttribute("position",new $t(l,3));const d=new So({color:a,size:r,transparent:!0,opacity:o,depthWrite:!1,sizeAttenuation:!0,map:uh("#ffffff"),alphaTest:.15}),u=new Lc(h,d);return u.frustumCulled=!1,u.visible=!1,u.userData.seeds=c,this.scene.add(u),u};this.rainGroup=t(850,10929867,.46),this.snowGroup=n(620,15134448,.13,.54),this.ashGroup=n(520,14258017,.11,.38)}createMapCanvas(){const t=document.createElement("canvas");t.width=272,t.height=272;const n=t.getContext("2d"),i=n.createImageData(272,272);for(let a=0;a<272;a++)for(let r=0;r<272;r++){const o=r/272*vt-vt/2,l=a/272*vt-vt/2,c=this.heightAt(o,l),h=this.biomeAt(o,l);let d=new xe(h.map);if(c<Et)d=new xe(2905699);else{c>8&&d.lerp(new xe(10133397),mt((c-8)/16,0,.6));const g=mt(.5+(c-this.heightAt(o-2,l-2))*.12,.72,1.12);d.multiplyScalar(g),h.id==="volcano"&&Yn(o*.13,l*.13,71)>.74&&d.lerp(new xe(13786678),.55)}const u=(Yn(o*.8,l*.8,19)-.5)*.09;d.offsetHSL(0,0,u);const p=(a*272+r)*4;i.data[p]=Math.round(d.r*255),i.data[p+1]=Math.round(d.g*255),i.data[p+2]=Math.round(d.b*255),i.data[p+3]=255}n.putImageData(i,0,0),n.globalAlpha=.35,n.strokeStyle="#f1e3bf",n.lineWidth=1;for(const a of["town","city"]){const r=bt[a],o=(r.center[0]+vt/2)/vt*272,l=(r.center[1]+vt/2)/vt*272;n.beginPath(),n.arc(o,l,12,0,Math.PI*2),n.stroke()}n.globalAlpha=1,this.mapCanvas=t}setWeather(e){this.currentWeather=tn[e]||tn.clear,this.weatherTransition=0}setTime(e){this.timeOfDay=e}tryActivateRune(e){const t=this.puzzles[e.userData.puzzleId];if(!t||t.solved||e.userData.lit)return{result:"ignored"};const n=t.order[t.progress];if(e.userData.element===n){e.userData.lit=!0;const i=e.userData.runeObject;return i.userData.lit=!0,i.userData.light.intensity=2.2,i.userData.glyph.material.emissiveIntensity=2.4,i.userData.ring.scale.setScalar(1.35),t.progress++,t.progress>=t.order.length?(t.solved=!0,t.chest&&(t.chest.locked=!1,t.chest.root.userData.locked=!1,t.chest.root.userData.lock.visible=!1,t.chest.root.userData.lid.children.forEach(a=>{a.material?.emissive&&(a.material.emissiveIntensity=.8)})),this.game.onPuzzleSolved?.(t),{result:"solved"}):(this.game.onRuneLit?.(t,e),{result:"lit",progress:t.progress,total:t.order.length})}t.progress=0;for(const i of t.runes)i.userData.lit=!1,i.userData.runeObject.userData.lit=!1,i.userData.runeObject.userData.light.intensity=0,i.userData.runeObject.userData.glyph.material.emissiveIntensity=.45,i.userData.runeObject.userData.ring.scale.setScalar(1);return{result:"reset"}}update(e,t,n,i,a){this.worldTime=t,this.timeOfDay=n,this.currentWeather=i||this.currentWeather;const r=this.currentWeather,o=(n-6)/24*Math.PI*2,l=new P(Math.cos(o)*.82,Math.sin(o),.32).normalize();this.sunHeight=l.y;const c=mt(l.y*3.2+.16,0,1),h=mt(1-Math.abs(l.y)*5,0,1)*(l.y>-.2?1:0);this.dayFactor=c,this.nightFactor=1-c;const d=r.light,u=mt((1-d)*1.2,0,.8),p=new xe(463647),g=new xe(5149113),x=new xe(1452598),m=new xe(14013093),f=new xe(14256995),y=p.clone().lerp(g,c),v=x.clone().lerp(m,c).lerp(f,h*.58),_=new xe(7242353).lerp(new xe(1581086),1-c);y.lerp(new xe(5399401),u*.6),v.lerp(new xe(9147533),u*.55),this.skyUniforms.topColor.value.copy(y),this.skyUniforms.horizonColor.value.copy(v),this.skyUniforms.bottomColor.value.copy(_),this.skyUniforms.sunColor.value.setHex(h>.3?16751971:16769448),this.skyUniforms.sunDirection.value.copy(l),this.skyUniforms.sunPower.value=c,this.stars.material.opacity=mt((.16-l.y)*4.5,0,.92)*(1-u*.7);const T=this.lightning*2.5;this.sun.intensity=(.2+c*2.35)*d+T,this.sun.color.setHex(h>.35?16756085:16769969),this.moon.intensity=(1-c)*.38*d,this.hemi.intensity=(.16+c*.78)*(.75+r.ambient*.35)+T*.3,this.hemi.color.setHex(h>.3?12690831:11323860),this.hemi.groundColor.setHex(2833197),this.ambient.intensity=.07+(1-c)*.11+u*.04,a&&(this.sun.position.set(a.x+l.x*72,78+l.y*18,a.z+l.z*72),this.sunTarget.position.set(a.x,0,a.z),this.sunTarget.updateMatrixWorld()),this.sunSprite.position.copy(l).multiplyScalar(360),this.sunSprite.position.y+=8,this.sunSprite.visible=l.y>-.08,this.sunSprite.material.opacity=mt(c*.6,0,.65),this.moonSprite.position.copy(l).multiplyScalar(-360),this.moonSprite.visible=l.y<.1,this.moonSprite.material.opacity=mt(-l.y+.12,0,.65),this.scene.fog.density=r.fog*(1.1-c*.22),this.scene.fog.color.copy(v).lerp(new xe(2503735),.28+(1-c)*.22);const E=mt((.42-c)*2.4,.08,1)+u*.25;for(const A of this.windows)A.material.emissiveIntensity=.12+E*2.5,A.material.color.setHex(E>.45?16767128:7043704);for(const A of this.lanterns){const D=.86+Math.sin(t*8+A.offset)*.08+Math.sin(t*23+A.offset)*.04;A.light.intensity=A.base*E*D*(1+this.lightning*.1),A.sprite&&(A.sprite.material.opacity=.35+E*.55)}for(const A of this.flames)A.scale.setScalar(1+Math.sin(t*10+A.userData.offset)*.08),A.material.opacity=.5+Math.sin(t*9+A.userData.offset)*.16;this.windmillBlades&&(this.windmillBlades.rotation.z-=e*(.38+r.wind*.55));for(const A of this.clouds)A.position.x+=A.userData.speed*e*(.5+r.wind),A.position.x>145&&(A.position.x=-145),A.position.z+=Math.sin(t*.1+A.position.x)*e*.12,A.visible=c>.1;this.cloudMat.opacity=.38+c*.24-u*.1,this.cloudMat.color.setHex(c>.4?15331045:4609114),this.waterTex.offset.x+=e*.004,this.waterTex.offset.y+=e*.0017,this.waterMat.color.setHex(c>.3?3897475:1982283),this.waterMat.emissiveIntensity=.1+(1-c)*.18,r.id==="storm"&&(this.lightningTimer-=e,this.lightningTimer<=0&&(this.lightning=1,this.lightningTimer=6+Math.random()*11,this.game.onLightning?.())),this.lightning*=Math.max(0,1-e*5.5),this.updateWeatherParticles(e,t,r,a)}updateWeatherParticles(e,t,n,i){const a=i||{x:0,z:0},r=n.rain,o=n.snow,l=n.ash;if(this.rainGroup.visible=r,this.snowGroup.visible=o,this.ashGroup.visible=l,this.rainGroup.position.set(a.x,0,a.z),this.snowGroup.position.set(a.x,0,a.z),this.ashGroup.position.set(a.x,0,a.z),r){const c=this.rainGroup.geometry.attributes.position.array,h=this.rainGroup.userData.speeds;for(let d=0;d<h.length;d++){const u=h[d]*e;if(c[d*6+1]-=u,c[d*6+4]-=u,c[d*6]-=e*5.3*n.wind,c[d*6+3]-=e*5.3*n.wind,c[d*6+1]<0){const p=22+Math.random()*8;c[d*6+1]=p,c[d*6+4]=p-.6;const g=(Math.random()-.5)*48,x=(Math.random()-.5)*48;c[d*6]=g,c[d*6+2]=x,c[d*6+3]=g+.04,c[d*6+5]=x}}this.rainGroup.geometry.attributes.position.needsUpdate=!0,this.rainGroup.material.opacity=.34+Math.sin(t*.7)*.06}if(o){const c=this.snowGroup.geometry.attributes.position.array,h=this.snowGroup.userData.seeds;for(let d=0;d<h.length;d++)c[d*3+1]-=e*(1.8+d%5*.2),c[d*3]+=Math.sin(t*1.2+h[d])*e*.75,c[d*3+1]<0&&(c[d*3+1]=20+Math.random()*4);this.snowGroup.geometry.attributes.position.needsUpdate=!0}if(l){const c=this.ashGroup.geometry.attributes.position.array,h=this.ashGroup.userData.seeds;for(let d=0;d<h.length;d++)c[d*3+1]+=Math.sin(t*.8+h[d])*e*.24,c[d*3]+=Math.sin(t*.5+h[d])*e*.35,c[d*3+1]-=e*.35,c[d*3+1]<.3&&(c[d*3+1]=18+Math.random()*6);this.ashGroup.geometry.attributes.position.needsUpdate=!0}}updateChest(e,t){if(!e.opening&&!e.open)return;const n=e.root.userData.lid;e.opening&&(n.rotation.x=Math.max(-1.55,n.rotation.x-t*4.2),n.rotation.x<=-1.55&&(n.rotation.x=-1.55,e.opening=!1,e.open=!0))}updateTraps(e,t){for(const n of this.traps){n.timer-=e;const a=Je(t.position.x,t.position.z,n.x,n.z)<n.radius+.4,r=n.period,o=(this.worldTime+n.phase)%r/r,l=a&&o<.28,c=a&&o>=.28&&o<.5;if(n.ring&&(n.ring.material.opacity=l?.34+Math.sin(this.worldTime*18)*.15:c?.5:.05,n.ring.scale.setScalar(1+(l?.05:0))),n.flame){const h=c?.78:l?.3:.03;n.flame.material.opacity=hi(n.flame.material.opacity,h,mt(e*10,0,1)),n.flame.scale.y=.55+(c?.55:l?.18:0)+Math.sin(this.worldTime*16)*.08,n.flame.visible=n.flame.material.opacity>.02}if(n.spikes){const h=c?1:0;n.spikeHeight=hi(n.spikeHeight||0,h,mt(e*14,0,1)),n.spikes.position.y=(n.spikeHeight||0)*.9,n.spikes.visible=n.spikeHeight>.02}c&&!n.hitThisCycle&&(n.hitThisCycle=!0,t.takeDamage(n.damage,n.element,n.name||"Trap"),this.game.ui?.showToast("TRAP",`${n.name} catches you for ${n.damage} damage.`,"danger","☠")),c||(n.hitThisCycle=!1)}}}const H=s=>document.getElementById(s),Ie=(s,e="",t="")=>{const n=document.createElement(s);return e&&(n.className=e),t&&(n.textContent=t),n},Sl=["Rowan","Maelis","Corin","Sable","Tamsin","Orin","Yara","Vesper","Pike","Alwyn","Nyx","Elowen","Bram","Sorrel"],bl={warrior:"⚔",rogue:"†",archer:"➶",wizard:"✧",priest:"✟"};class Sg{constructor(e){this.game=e,this.selection={name:"Rowan",sex:"feminine",race:"human",beastType:"dog",classId:"warrior",skin:0,cloth:0},this.currentModal=null,this.enemyLabels=new Map,this.lastHUD=0,this.lastMinimap=0,this.questRenderKey="",this.inventoryRenderKey="",this.zoneKey="",this.deathTimer=0,this.dialogNpc=null,this.vendorNpc=null,this.waypoint=null,this.bind(),this.renderCreation(),this.createFloatingLayer()}bind(){for(const e of document.querySelectorAll("#sex-picker button"))e.addEventListener("click",()=>{this.selection.sex=e.dataset.sex,this.setActive("#sex-picker button",e),this.changed("sex")});for(const e of document.querySelectorAll("#race-picker button"))e.addEventListener("click",()=>{this.selection.race=e.dataset.race,this.setActive("#race-picker button",e),H("beast-picker").classList.toggle("hidden",this.selection.race!=="beast"),this.changed("race")});for(const e of document.querySelectorAll("#beast-picker button"))e.addEventListener("click",()=>{this.selection.beastType=e.dataset.beast,this.setActive("#beast-picker button",e),this.changed("beast")});for(const e of document.querySelectorAll("#class-picker button"))e.addEventListener("click",()=>{this.selection.classId=e.dataset.class,this.setActive("#class-picker button",e),this.changed("class")});for(const e of document.querySelectorAll("#skin-picker button"))e.addEventListener("click",()=>{this.selection.skin=Number(e.dataset.skin),this.setActive("#skin-picker button",e),this.changed("skin")});for(const e of document.querySelectorAll("#cloth-picker button"))e.addEventListener("click",()=>{this.selection.cloth=Number(e.dataset.cloth),this.setActive("#cloth-picker button",e),this.changed("cloth")});H("hero-name-input").addEventListener("input",e=>{this.selection.name=e.target.value.slice(0,18)||"Wanderer",H("preview-name").textContent=this.selection.name}),H("random-name").addEventListener("click",()=>{let e=this.selection.name;for(;e===this.selection.name;)e=Sl[Math.floor(Math.random()*Sl.length)];this.selection.name=e,H("hero-name-input").value=e,H("preview-name").textContent=e,this.game.audio?.sfx("ui")}),H("start-button").addEventListener("click",()=>this.startGame()),H("hero-name-input").addEventListener("keydown",e=>{e.key==="Enter"&&this.startGame()});for(const e of document.querySelectorAll("[data-open]"))e.addEventListener("click",()=>{const t=e.dataset.open;t==="pause"?this.openPause():t==="journal"?this.openJournal():t==="inventory"?this.openInventory():t==="map"&&this.openWorldMap()});for(const e of document.querySelectorAll("[data-close]"))e.addEventListener("click",()=>this.closeModal());H("modal-backdrop").addEventListener("click",()=>this.closeModal()),H("respawn-button").addEventListener("click",()=>this.game.respawn()),H("save-button").addEventListener("click",()=>{this.game.save(),this.showToast("SAVED","The ledger remembers your road.","reward","◆")}),H("new-hero-button").addEventListener("click",()=>{this.game.save(),location.reload()}),H("quality-toggle").addEventListener("click",()=>this.game.togglePixelFilter()),H("sound-toggle").addEventListener("click",()=>this.game.toggleSound());for(const e of document.querySelectorAll("[data-action]"))e.addEventListener("click",()=>{if(!this.game.started||this.game.uiOpen)return;const t=e.dataset.action;t==="attack"&&this.game.player.basicAttack(),t==="ability"&&this.game.player.useAbility(),t==="dodge"&&this.game.player.dodge(),t==="potion"&&this.game.usePotion(),t==="interact"&&this.game.interact()});H("world-map").addEventListener("click",e=>this.mapClick(e)),this.bindJoystick(),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.currentModal&&(e.preventDefault(),this.closeModal())})}bindJoystick(){const e=H("joystick"),t=H("joystick-knob");let n=!1,i=null;const a=()=>{n=!1,i=null,t.style.transform="",this.game.touchMove.set(0,0)};e.addEventListener("pointerdown",r=>{this.game.uiOpen||(n=!0,i=r.pointerId,e.setPointerCapture(i),this.moveJoystick(r,e,t))}),e.addEventListener("pointermove",r=>{!n||r.pointerId!==i||this.moveJoystick(r,e,t)}),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),e.addEventListener("lostpointercapture",a)}moveJoystick(e,t,n){const i=t.getBoundingClientRect(),a=e.clientX-(i.left+i.width/2),r=e.clientY-(i.top+i.height/2),o=i.width*.34,l=Math.hypot(a,r)||1,c=a/l,h=r/l,d=Math.min(1,l/o);n.style.transform=`translate(${c*Math.min(l,o)*.6}px, ${h*Math.min(l,o)*.6}px)`,this.game.touchMove.set(c*d,h*d)}createFloatingLayer(){const e=Ie("div","world-labels");e.id="world-labels",H("hud").appendChild(e);const t=Ie("div","floating-layer");t.id="floating-layer",H("hud").appendChild(t)}startGame(){if(this.game.started)return;this.game.audio?.init(),this.game.audio?.sfx("ui");const e=H("start-button");e.disabled=!0,e.textContent="…",this.game.startGame({...this.selection,name:this.selection.name.trim()||"Wanderer"}),H("hud").classList.remove("hidden"),H("creator").classList.add("leaving"),setTimeout(()=>{H("creator").style.display="none"},560),setTimeout(()=>this.showZoneBanner("Hearthvale","Warm hearth, cold roads."),700)}setActive(e,t){document.querySelectorAll(e).forEach(n=>n.classList.toggle("active",n===t))}changed(e){this.game.audio?.sfx("ui"),this.renderCreation(),this.game.previewCharacter(this.selection)}renderCreation(){const e=vi[this.selection.classId],t=Eo[this.selection.race],n=To[this.selection.beastType];H("preview-name").textContent=this.selection.name,H("preview-role").textContent=`${t.name.toUpperCase()}${this.selection.race==="beast"?` · ${n.name.toUpperCase()}`:""} · ${e.name.toUpperCase()}`,H("summary-class").textContent=e.role;const i=e.power+Math.round(e.power*.2),a=e.health+(this.selection.race==="beast"?12+n.bonuses.health:t.bonuses.health),r=e.speed+t.bonuses.speed+(this.selection.race==="beast"?n.bonuses.speed:0),o=e.energy+t.bonuses.spirit;H("stat-atk-value").textContent=String(i),H("stat-hp-value").textContent=String(a),H("stat-spd-value").textContent=r.toFixed(1),H("stat-en-value").textContent=String(o),H("stat-atk").style.width=`${Math.min(100,i*3.9)}%`,H("stat-hp").style.width=`${Math.min(100,a*.47)}%`,H("stat-spd").style.width=`${Math.min(100,r*11)}%`,H("stat-en").style.width=`${Math.min(100,o*.67)}%`;const l=this.selection.race==="beast"?` ${n.bonusText}`:"";H("race-perk").innerHTML=`<b>${t.perkName}</b> — ${t.perk}${l?`<br><b>${n.name} kin</b> — ${n.bonusText}`:""}`,H("hero-glyph").textContent=bl[this.selection.classId],document.querySelectorAll("#race-picker button").forEach(c=>c.classList.toggle("active",c.dataset.race===this.selection.race)),document.querySelectorAll("#class-picker button").forEach(c=>c.classList.toggle("active",c.dataset.class===this.selection.classId)),document.querySelectorAll("#sex-picker button").forEach(c=>c.classList.toggle("active",c.dataset.sex===this.selection.sex)),document.querySelectorAll("#beast-picker button").forEach(c=>c.classList.toggle("active",c.dataset.beast===this.selection.beastType)),H("beast-picker").classList.toggle("hidden",this.selection.race!=="beast")}setCharacter(e){this.selection={...this.selection,...e},H("hero-name-input").value=this.selection.name,this.renderCreation()}showHUD(){H("hud").classList.remove("hidden")}setUIOpen(e){this.game.uiOpen=e,H("modal-backdrop").classList.toggle("hidden",!e),e||(document.querySelectorAll(".game-modal").forEach(t=>t.classList.add("hidden")),this.currentModal=null,this.dialogNpc=null,this.vendorNpc=null)}closeModal(){this.currentModal&&(this.game.audio?.sfx("ui"),this.setUIOpen(!1))}openModal(e){document.querySelectorAll(".game-modal").forEach(t=>t.classList.add("hidden")),H(e).classList.remove("hidden"),H("modal-backdrop").classList.remove("hidden"),this.currentModal=e,this.game.uiOpen=!0}openDialogue(e){this.dialogNpc=e;const t=e.def;H("speaker-portrait").textContent=t.icon||"✦",H("speaker-title").textContent=t.title,H("speaker-name").textContent=t.name,H("speaker-zone").textContent=t.zone.toUpperCase(),H("dialogue-line").textContent=t.greeting,H("dialogue-quest").classList.add("hidden"),H("dialogue-rewards").classList.add("hidden");const n=H("dialogue-actions");n.innerHTML="";const i=t.questId?this.game.quests[t.questId]:null;if(i)if(i.state==="available")H("dialogue-quest").classList.remove("hidden"),H("quest-kicker").textContent="NEW OATH",H("quest-title").textContent=i.def.title,H("quest-objective").textContent=i.def.objectives.map(a=>`${a.count} × ${a.label}`).join(" · "),H("dialogue-line").textContent=i.def.intro,this.addDialogueAction("Accept oath","gold",()=>{this.game.acceptQuest(t.questId),this.openDialogue(e)}),this.addDialogueAction("Not now","muted",()=>this.closeModal());else if(i.state==="active")if(H("dialogue-quest").classList.remove("hidden"),H("quest-kicker").textContent=i.ready?"OATH FULFILLED":"OATH IN PROGRESS",H("quest-title").textContent=i.def.title,H("quest-objective").textContent=i.def.objectives.map(a=>`${Math.min(a.count,i.progress[a.target]||0)} / ${a.count} ${a.label}`).join(" · "),i.ready){H("dialogue-line").textContent=i.def.completedLine,this.addDialogueAction("Claim reward","gold",()=>{this.game.turnInQuest(t.questId),this.closeModal()}),this.addDialogueAction("Later","muted",()=>this.closeModal());const a=H("dialogue-rewards");a.classList.remove("hidden"),a.innerHTML=`<span class="reward-chip gold">◉ ${i.def.rewards.gold} gold</span><span class="reward-chip">✦ ${i.def.rewards.xp} experience</span>${i.def.rewards.item?'<span class="reward-chip">◆ Class relic</span>':""}`}else H("dialogue-line").textContent=`${t.greeting} The work is not done. ${i.def.objectives.map(a=>`${Math.max(0,a.count-(i.progress[a.target]||0))} more`).join(", ")}.`,this.addDialogueAction("I will return","muted",()=>this.closeModal());else H("dialogue-line").textContent=`${t.greeting} You have already carried that weight for us.`,this.addDialogueAction("Farewell","muted",()=>this.closeModal());else if(t.vendor){const a={weapon:"Browse the armory",armor:"Browse the wardrobe",item:"Browse supplies"}[t.vendor];this.addDialogueAction(a,"gold",()=>this.openVendor(e)),this.addDialogueAction("Just talking","muted",()=>this.closeModal())}else this.addDialogueAction("Farewell","muted",()=>this.closeModal());this.openModal("dialogue-modal")}addDialogueAction(e,t,n){const i=Ie("button",`pixel-button ${t}`,e);i.type="button",i.addEventListener("click",n),H("dialogue-actions").appendChild(i)}openVendor(e){this.vendorNpc=e;const t=this.game.openVendor(e);H("shop-kicker").textContent=`WARES OF ${e.def.zone.toUpperCase()}`,H("shop-name").textContent={weapon:"Weapons of Consequence",armor:"Threads & Plate",item:"Small Miracles"}[e.def.vendor]||"Travelling Wares",H("shop-hint").textContent=`Stock tuned to level ${this.game.player.level}. ${this.game.player.className} equipment only.`,H("shop-tabs").innerHTML=`<button type="button" class="active">${e.def.vendor==="weapon"?"ARMORY":e.def.vendor==="armor"?"WARDROBE":"SUPPLIES"}</button><button type="button" class="active" style="pointer-events:none;opacity:.5">LV. ${this.game.player.level}</button>`,this.renderShop(t.stock),this.openModal("vendor-modal")}renderShop(e){const t=H("shop-grid");if(t.innerHTML="",H("shop-gold").textContent=String(this.game.player.gold),!e.length){t.appendChild(Ie("div","empty-state","The shelves are bare. Return after your legend grows."));return}for(const n of e){const i=Ie("div","shop-item"),a=Ie("div","item-icon",n.icon||"❖"),r=Ie("div","item-copy"),o=Ie("b","",n.name),l=os[n.rarity];l&&(o.style.color=l.css);const c=Ie("small","",n.consumable?n.desc:Tr(n)),h=Ie("em","",n.consumable?"Restores on use":n.element?`${Mn[n.element]?.name||"Physical"} attuned`:"");r.append(o,c,h);const d=Ie("div","shop-buy"),u=Ie("button","","BUY"),p=Ie("small","",`◉ ${n.price}`),g=this.game.player.gold>=n.price;u.disabled=!g,u.addEventListener("click",()=>{this.game.buyItem(n)?(this.game.audio?.sfx("coin"),this.openVendor(this.vendorNpc),this.showToast("PURCHASED",`${n.name} secured.`,"reward","◉")):(this.game.audio?.sfx("error"),this.showToast("NOT ENOUGH GOLD","The merchant smiles apologetically.","danger","◉"))}),d.append(u,p),i.append(a,r,d),t.appendChild(i)}}openJournal(){this.game.started&&(this.renderJournal(),this.openModal("journal-modal"),this.game.audio?.sfx("ui"))}renderJournal(){const e=this.game.getActiveQuests(),t=this.game.getCompletedQuests();H("active-quest-count").textContent=String(e.length),H("completed-quest-count").textContent=String(t.length);const n=H("journal-active");n.innerHTML="",e.length||n.appendChild(Ie("div","journal-empty","No oaths sworn. The town boards are full of them."));for(const a of e){const r=Ie("div",`journal-entry ${a.ready?"ready":""}`),o=Ie("div","j-head");o.append(Ie("b","",a.def.title),Ie("span","j-status",a.ready?"RETURN TO GIVER":`LV. ${a.def.level}`)),r.appendChild(o),r.appendChild(Ie("p","",`Given by ${a.giverName} · ${a.zone}`));const l=Ie("ul");for(const c of a.def.objectives){const h=Math.min(c.count,a.progress[c.target]||0),d=Ie("li",h>=c.count?"done":"",`${c.label} — ${h}/${c.count}`);l.appendChild(d)}r.appendChild(l),n.appendChild(r)}const i=H("journal-completed");i.innerHTML="",t.length||i.appendChild(Ie("div","journal-empty","The ledger is still waiting for its first tale."));for(const a of t){const r=Ie("div","journal-entry"),o=Ie("div","j-head");o.append(Ie("b","",a.def.title),Ie("span","j-status","COMPLETE")),r.appendChild(o),r.appendChild(Ie("p","",`Rewarded by ${a.giverName}`)),i.appendChild(r)}}openInventory(){this.game.started&&(this.renderInventory(),this.openModal("inventory-modal"),this.game.audio?.sfx("ui"))}renderInventory(){const e=this.game.player;H("inventory-summary").textContent=`${e.className} · Level ${e.level} · ${e.raceName}${e.race==="beast"?` (${e.beastName})`:""}`,H("inventory-gold").textContent=`◉ ${e.gold}`;const t=H("equipment-slots");t.innerHTML="";for(const[a,r]of[["weapon","WEAPON"],["armor","ARMOR"],["trinket","RELIC"]]){const o=e.equipment[a],l=Ie("div","equipment-slot");l.appendChild(Ie("div","slot-icon",o?.icon||"·"));const c=Ie("div");c.appendChild(Ie("small","",r)),c.appendChild(Ie("b","",o?.name||"Nothing equipped")),c.appendChild(Ie("em","",o?Tr(o):"—")),l.appendChild(c),t.appendChild(l)}const n=H("inventory-stats");n.innerHTML=`<b>${e.attackPower}</b> attack · <b>${e.maxHealth}</b> vitality · <b>${e.armor}</b> armor<br>${Math.round(e.critChance*100)}% critical · ${Math.round(e.lifesteal*100)}% lifesteal · ${e.speed.toFixed(1)} speed`;const i=H("inventory-grid");if(i.innerHTML="",!e.inventory.length){i.appendChild(Ie("div","inv-empty","Your satchel is empty. Chests and vendors await."));return}e.inventory.forEach((a,r)=>{const o=Ie("button","inv-item");if(o.type="button",o.appendChild(Ie("div","inv-icon",a.icon||"❖")),o.appendChild(Ie("b","",a.name)),o.appendChild(Ie("small","",a.consumable?a.desc:Tr(a))),!a.consumable&&os[a.rarity]){const l=Ie("span",`rarity ${a.rarity}`);o.appendChild(l)}o.appendChild(Ie("div","inv-action",a.consumable?"USE":"EQUIP")),o.addEventListener("click",()=>{a.consumable?this.game.useConsumable(r):this.game.equipItem(r),this.renderInventory()}),i.appendChild(o)})}openWorldMap(){this.game.started&&(this.drawWorldMap(),this.openModal("map-modal"),this.game.audio?.sfx("ui"))}mapClick(e){const n=H("world-map").getBoundingClientRect(),i=(e.clientX-n.left)/n.width*vt-vt/2,a=(e.clientY-n.top)/n.height*vt-vt/2;this.waypoint={x:i,z:a},this.game.setWaypoint(i,a),this.showToast("WAYPOINT SET",`The compass now points to ${Math.round(i)}, ${Math.round(a)}.`,"reward","⌖"),this.drawWorldMap()}openPause(){if(!this.game.started)return;const e=this.game.player;H("pause-stats").innerHTML=`<span><b>${e.level}</b>LEVEL</span><span><b>${e.gold}</b>GOLD</span><span><b>${this.game.completedQuests.size}</b>OATHS</span><span><b>${e.kills}</b>FOES</span>`,H("sound-toggle").classList.toggle("active",!!this.game.audio?.enabled),this.openModal("pause-modal"),this.game.audio?.sfx("ui")}toggleSoundState(e){H("sound-toggle").classList.toggle("active",e),H("sound-toggle").textContent=e?"♫ Music on":"♫ Music off"}togglePixelState(e){H("quality-toggle").classList.toggle("active",e),H("quality-toggle").textContent=e?"▦ Pixel filter":"▦ Smooth filter"}showToast(e,t,n="",i="◆"){const a=H("toast-stack");if(!a)return;for(;a.children.length>=4;)a.firstElementChild.remove();const r=Ie("div",`toast ${n}`);r.appendChild(Ie("span","toast-icon",i));const o=Ie("div");o.appendChild(Ie("b","",e)),o.appendChild(document.createTextNode(t)),r.appendChild(o),a.appendChild(r),setTimeout(()=>r.remove(),5200)}showZoneBanner(e,t){const n=H("zone-banner");n.querySelector("strong").textContent=e,n.querySelector("small").textContent=t||"",n.classList.add("show"),clearTimeout(this.zoneBannerTimer),this.zoneBannerTimer=setTimeout(()=>n.classList.remove("show"),3200)}updateZone(e,t){const n=e?.name||t.name,i=`${n}|${t.name}`;if(i===this.zoneKey)return;this.zoneKey=i,H("zone-name").textContent=n;const a=n===t.name;H("biome-name").textContent=a?"":t.name,H("biome-name").style.display=a?"none":"";const r=H("zone-name").parentElement?.querySelector(".ribbon-dot");r&&(r.style.display=a?"none":""),H("minimap-zone").textContent=t.short.toUpperCase(),this.game.started&&(this.showZoneBanner(n,t.desc),this.game.audio?.setBiome(t.id))}updateHUD(e){if(!this.game.started)return;const t=performance.now();if(t-this.lastHUD<44)return;this.lastHUD=t;const n=this.game.player,i=this.game.world;H("health-fill").style.width=`${Math.max(0,n.health/n.maxHealth)*100}%`,H("energy-fill").style.width=`${Math.max(0,n.energy/n.maxEnergy)*100}%`,H("health-text").textContent=`${Math.ceil(n.health)} / ${n.maxHealth}`,H("energy-text").textContent=`${Math.ceil(n.energy)} / ${n.maxEnergy}`,H("xp-fill").style.width=`${Math.min(100,n.xp/n.xpNext*100)}%`,H("xp-text").textContent=`${n.xp} / ${n.xpNext}`,H("portrait-level").textContent=String(n.level),H("hero-name").textContent=n.name,H("hero-subtitle").textContent=`${n.raceName} ${n.className}`,H("hero-glyph").textContent=bl[n.classId],H("gold-text").textContent=String(n.gold),H("clock").textContent=$0(i.timeOfDay);const a=i.currentWeather||tn.clear;H("weather-icon").textContent=a.icon,H("weather-name").textContent=a.name,H("potion-count").textContent=String(n.potions),H("touch-potion-count").textContent=String(n.potions);const r=n.cooldowns.attack>0?n.cooldowns.attack/n.attackCooldown:0,o=n.cooldowns.ability>0?n.cooldowns.ability/n.abilityCooldown:0,l=n.cooldowns.dodge>0?n.cooldowns.dodge/.9:0;H("cd-attack").style.transform=`scaleY(${r})`,H("cd-ability").style.transform=`scaleY(${o})`,H("cd-dodge").style.transform=`scaleY(${l})`,H("minimap-coords").textContent=`${Math.round(n.position.x)}, ${Math.round(n.position.z)}`,this.updateQuestTracker(),this.updateBossBar(),this.updateStatuses(),this.updateInteract(),this.updateEnemyLabels(),t-this.lastMinimap>120&&(this.lastMinimap=t,this.drawMinimap()),this.game.audio?.tick(i.nightFactor>.5)}updateQuestTracker(){const e=this.game.getActiveQuests(),t=e.map(i=>`${i.id}:${i.ready}:${Object.values(i.progress).join(",")}`).join("|");if(t===this.questRenderKey)return;this.questRenderKey=t;const n=H("quest-tracker-list");if(n.innerHTML="",!e.length){n.appendChild(Ie("div","quest-empty","Find a soul with an oath to swear."));return}for(const i of e.slice(0,3)){const a=Ie("div","quest-track"),r=Ie("div","q-name");r.appendChild(Ie("span","q-mark",i.ready?"?":"!")),r.appendChild(document.createTextNode(i.def.title)),a.appendChild(r);for(const o of i.def.objectives){const l=Math.min(o.count,i.progress[o.target]||0),c=Ie("div",`q-obj ${l>=o.count?"done":""}`,`${o.label} ${l}/${o.count}`);a.appendChild(c)}i.ready&&a.appendChild(Ie("div","q-obj q-ready",`Return to ${i.giverName}`)),n.appendChild(a)}}updateBossBar(){const e=this.game.activeBoss,t=H("boss-bar");if(!e||e.dead){t.classList.add("hidden");return}t.classList.remove("hidden"),H("boss-title").textContent=`${e.name} — ${e.title}`,H("boss-level").textContent=`Lv. ${e.level}`,H("boss-fill").style.width=`${Math.max(0,e.health/e.maxHealth)*100}%`,H("boss-fill").style.background=e.element==="fire"?"linear-gradient(180deg,#ffb25e,#c74934 55%,#771f24)":e.element==="shadow"?"linear-gradient(180deg,#b69ae4,#6f4c99 55%,#3a2454)":"linear-gradient(180deg,#d4e47d,#7c9a3f 55%,#4b5f28)",H("boss-element").textContent=`${Mn[e.element]?.name.toUpperCase()||"UNKNOWN"} · ${e.title}`}updateStatuses(){const e=H("status-effects"),t=this.game.player.statuses,n=t.map(i=>i.id).join(",");if(n!==this.statusKey){this.statusKey=n,e.innerHTML="";for(const i of t){const a=Ie("div",`status-chip ${i.buff?"buff":""}`,`${i.icon||"◆"} ${i.name} ${Math.ceil(i.remaining)}s`);e.appendChild(a)}}}updateInteract(){const e=H("interact-prompt"),t=this.game.nearbyInteraction;if(!t||this.game.uiOpen||this.game.player.dead){e.classList.add("hidden");return}e.classList.remove("hidden"),H("interact-label").textContent=t.label}updateEnemyLabels(){const e=this.game.camera,t=new Set,n=this.game.player;for(const i of this.game.enemies){if(i.dead||i.isBoss)continue;if(t.add(i.id),i.root.position.distanceTo(n.position)>30||this.game.uiOpen){this.enemyLabels.has(i.id)&&(this.enemyLabels.get(i.id).style.display="none");continue}let r=this.enemyLabels.get(i.id);r||(r=Ie("div","enemy-label"),r.innerHTML='<span class="enemy-el"></span><b></b><i><s></s></i>',H("world-labels").appendChild(r),this.enemyLabels.set(i.id,r)),r.style.display="";const o=new P(i.root.position.x,i.root.position.y+i.height+.6,i.root.position.z).project(e);if(o.z>1||o.z<-1||Math.abs(o.x)>1.08||Math.abs(o.y)>1.08){r.style.display="none";continue}r.style.left=`${(o.x*.5+.5)*window.innerWidth}px`,r.style.top=`${(-o.y*.5+.5)*window.innerHeight}px`,r.querySelector("b").textContent=i.name,r.querySelector(".enemy-el").textContent=Mn[i.element]?.icon||"◆",r.querySelector(".enemy-el").style.color=Mn[i.element]?.css||"#fff",r.querySelector("s").style.width=`${Math.max(0,i.health/i.maxHealth)*100}%`,r.classList.toggle("elite",!!i.def.elite)}for(const[i,a]of this.enemyLabels)t.has(i)||(a.remove(),this.enemyLabels.delete(i))}showDamage(e,t,n={}){const i=this.game.camera,a=e.clone().project(i);if(a.z>1||Math.abs(a.x)>1.1||Math.abs(a.y)>1.1)return;const r=Ie("div",`damage-number ${n.crit?"crit":""} ${n.heal?"heal":""}`);r.textContent=`${n.heal?"+":"-"}${Math.round(t)}`,r.style.left=`${(a.x*.5+.5)*window.innerWidth+(Math.random()-.5)*22}px`,r.style.top=`${(-a.y*.5+.5)*window.innerHeight-10}px`,n.element&&Mn[n.element]&&(r.style.color=Mn[n.element].css),n.crit&&(r.style.fontSize="24px"),H("floating-layer").appendChild(r),setTimeout(()=>r.remove(),900)}flashDamage(){const e=H("damage-flash");e.classList.add("flash"),setTimeout(()=>e.classList.remove("flash"),110)}flashLightning(){const e=H("weather-tint");e.style.background="rgba(220,234,255,.32)",setTimeout(()=>{e.style.background=""},90)}setWeatherVisual(e){const t=H("weather-tint");t.style.background=e.tint,H("rain-glass").classList.toggle("active",e.rain||e.snow),e.rain&&(t.style.background=e.tint)}drawMinimap(){const t=H("minimap").getContext("2d"),n=this.game.player,i=196;t.imageSmoothingEnabled=!1,t.clearRect(0,0,i,i);const a=92,r=this.game.world.mapCanvas,o=n.position.x+vt/2,l=n.position.z+vt/2,c=o-a/2,h=l-a/2;t.fillStyle="#0b1716",t.fillRect(0,0,i,i),t.drawImage(r,c,h,a,a,0,0,i,i);const d=(x,m)=>[(x+vt/2-c)/a*i,(m+vt/2-h)/a*i];for(const x of this.game.world.chests){if(x.x<c||x.x>c+a||x.z<h||x.z>h+a)continue;const[m,f]=d(x.x,x.z);t.fillStyle=x.opened?"#5d5a4c":x.locked?"#9b84dd":"#e9b85f",t.fillRect(m-2,f-2,4,4)}for(const x of this.game.npcs){const[m,f]=d(x.def.pos[0],x.def.pos[1]),y=x.def.questId?this.game.quests[x.def.questId]:null;t.fillStyle=y?.ready?"#71d7c4":y?.state==="available"?"#e9b85f":x.def.vendor?"#9ad5c9":"#d8cfb0",t.fillRect(m-2,f-2,4,4)}for(const x of this.game.enemies){if(x.dead||x.isBoss||x.root.position.x<c||x.root.position.x>c+a||x.root.position.z<h||x.root.position.z>h+a)continue;const[m,f]=d(x.root.position.x,x.root.position.z);t.fillStyle="#d85a57",t.fillRect(m-1.5,f-1.5,3,3)}for(const x of this.game.enemies.filter(m=>m.isBoss&&!m.dead)){const[m,f]=d(x.root.position.x,x.root.position.z);m<0||m>i||f<0||f>i||(t.fillStyle="#dca7ff",t.fillRect(m-3,f-3,6,6))}if(this.waypoint){const[x,m]=d(this.waypoint.x,this.waypoint.z);t.strokeStyle="#ffd77e",t.lineWidth=1.5,t.beginPath(),t.moveTo(x,m-6),t.lineTo(x+5,m),t.lineTo(x,m+6),t.lineTo(x-5,m),t.closePath(),t.stroke()}const[u,p]=[i/2,i/2];t.save(),t.translate(u,p),t.rotate(-n.facing),t.fillStyle="#fff0bc",t.beginPath(),t.moveTo(0,-7),t.lineTo(5,5),t.lineTo(0,2),t.lineTo(-5,5),t.closePath(),t.fill(),t.strokeStyle="#1a1a12",t.lineWidth=1,t.stroke(),t.restore();const g=t.createRadialGradient(i/2,i/2,i*.3,i/2,i/2,i*.72);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(3,9,12,.55)"),t.fillStyle=g,t.fillRect(0,0,i,i)}drawWorldMap(){const e=H("world-map"),t=e.getContext("2d"),n=e.width,i=e.height;t.imageSmoothingEnabled=!1,t.drawImage(this.game.world.mapCanvas,0,0,n,i);const a=(c,h)=>[(c+vt/2)/vt*n,(h+vt/2)/vt*i];t.font='15px "Press Start 2P", monospace',t.textAlign="center",t.fillStyle="rgba(241,227,191,.75)";for(const c of["meadow","forest","volcano","beach","lake","graveyard","highlands","cave"]){this.game.world.biomeAt&&{...this.game.world};const h=this.game.biomes?.[c];if(!h)continue;const[d,u]=a(h.center[0],h.center[1]);t.fillStyle="rgba(9,20,24,.58)",t.fillRect(d-56,u-11,112,20),t.fillStyle="#f1e3bf",t.fillText(h.short.toUpperCase(),d,u+3)}for(const c of["town","city"]){const h=this.game.biomes?.[c];if(!h)continue;const[d,u]=a(h.center[0],h.center[1]);t.fillStyle="#ffe7a2",t.beginPath(),t.arc(d,u,5,0,Math.PI*2),t.fill(),t.font='12px "Press Start 2P", monospace',t.fillStyle="#fff0c4",t.fillText(h.name.toUpperCase(),d,u-13)}for(const c of this.game.npcs){const[h,d]=a(c.def.pos[0],c.def.pos[1]),u=c.def.questId?this.game.quests[c.def.questId]:null;t.fillStyle=u?.ready?"#71d7c4":u?.state==="available"?"#e9b85f":c.def.vendor?"#b8d6cc":"#d8cfb0",t.beginPath(),t.arc(h,d,3.4,0,Math.PI*2),t.fill()}for(const c of this.game.world.chests){if(c.opened)continue;const[h,d]=a(c.x,c.z);t.fillStyle=c.locked?"#a38bc9":"#e9b85f",t.fillRect(h-3,d-3,6,6)}for(const c of this.game.enemies.filter(h=>h.isBoss&&!h.dead)){const[h,d]=a(c.root.position.x,c.root.position.z);t.strokeStyle="#e0a5ff",t.lineWidth=2,t.beginPath(),t.arc(h,d,8,0,Math.PI*2),t.stroke(),t.fillStyle="#e0a5ff",t.font='10px "Press Start 2P"',t.fillText("☠",h,d+3)}if(this.waypoint){const[c,h]=a(this.waypoint.x,this.waypoint.z);t.strokeStyle="#ffd77e",t.lineWidth=2,t.beginPath(),t.moveTo(c,h-12),t.lineTo(c+9,h),t.lineTo(c,h+12),t.lineTo(c-9,h),t.closePath(),t.stroke()}const r=this.game.player,[o,l]=a(r.position.x,r.position.z);t.save(),t.translate(o,l),t.rotate(-r.facing),t.fillStyle="#fff0bc",t.strokeStyle="#0b1716",t.lineWidth=2,t.beginPath(),t.moveTo(0,-10),t.lineTo(7,7),t.lineTo(0,3),t.lineTo(-7,7),t.closePath(),t.fill(),t.stroke(),t.restore(),t.fillStyle="rgba(241,227,191,.7)",t.font='18px "Press Start 2P"',t.fillText("N",n-30,32)}showLevelUp(e,t){H("level-up-number").textContent=String(e),H("level-up-detail").textContent=t||"Vitality restored · New power unlocked";const n=H("level-up");n.classList.remove("hidden"),clearTimeout(this.levelTimer),this.levelTimer=setTimeout(()=>n.classList.add("hidden"),3e3)}showDeath(e){this.deathTimer=e,H("death-count").textContent=String(Math.ceil(e)),H("death-modal").classList.remove("hidden"),this.setUIOpen(!0),H("death-modal").classList.remove("hidden")}updateDeath(e){e!==void 0&&(H("death-count").textContent=String(Math.max(0,Math.ceil(e))))}hideDeath(){H("death-modal").classList.add("hidden"),this.setUIOpen(!1)}showFatal(e){H("fatal-message").textContent=e,H("fatal-error").classList.remove("hidden")}}class bg{constructor(){this.ctx=null,this.enabled=!0,this.master=null,this.musicGain=null,this.sfxGain=null,this.nextNote=0,this.noteIndex=0,this.noiseBuffer=null,this.lastStep=0,this.mood=1,this.drone=[]}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.55:0,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.22,this.musicGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.58,this.sfxGain.connect(this.master);const t=this.ctx.createBuffer(1,this.ctx.sampleRate*1.2,this.ctx.sampleRate),n=t.getChannelData(0);for(let o=0;o<n.length;o++)n[o]=Math.random()*2-1;this.noiseBuffer=t;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=420,i.Q.value=.8,i.connect(this.musicGain);for(const[o,l,c]of[[55,"sine",.16],[82.4,"triangle",.055],[110,"sine",.06]]){const h=this.ctx.createOscillator(),d=this.ctx.createGain();h.type=l,h.frequency.value=o,d.gain.value=c,h.connect(d),d.connect(i),h.start(),this.drone.push({osc:h,gain:d,base:c})}const a=this.ctx.createOscillator(),r=this.ctx.createGain();a.frequency.value=.045,r.gain.value=120,a.connect(r),r.connect(i.frequency),a.start(),this.musicFilter=i,this.nextNote=this.ctx.currentTime+1}setMuted(e){this.enabled=!e,this.master&&this.master.gain.setTargetAtTime(this.enabled?.55:0,this.ctx.currentTime,.08)}setNight(e){if(!this.ctx)return;const t=this.ctx.currentTime;this.mood=e,this.musicFilter.frequency.setTargetAtTime(e?290:470,t,2),this.drone.forEach((n,i)=>n.gain.gain.setTargetAtTime(n.base*(e?1.35:1),t,2))}setBiome(e){if(!this.ctx||this.biome===e)return;this.biome=e;const t={meadow:55,forest:49,volcano:43.65,beach:58.27,lake:51.91,graveyard:46.25,highlands:41.2,cave:36.7,town:55,city:58.27}[e]||55,n=this.ctx.currentTime;this.drone.forEach((i,a)=>i.osc.frequency.setTargetAtTime(t*(a===0?1:a===1?1.5:2),n,1.8))}tick(e){if(!this.ctx||!this.enabled||this.ctx.state!=="running")return;this.setNight(e);const t=this.ctx.currentTime;if(t<this.nextNote)return;const n=e?[220,261.63,293.66,329.63,392,440]:[261.63,329.63,392,440,523.25,659.25],i=e?[55,58.27,49]:[55,65.41,73.42,82.41],a=i[Math.floor(this.noteIndex/8)%i.length],r=n[(this.noteIndex*3+Math.floor(this.noteIndex/4))%n.length];this.note(r,.2,2.4,"triangle",.055),this.noteIndex%4===0&&this.note(a*2,.35,3.2,"sine",.04),this.noteIndex%8===0&&this.note(a,.5,4,"sine",.05),this.noteIndex++,this.nextNote=t+(e?2.8:2.25)+Math.random()*.4}note(e,t,n,i="sine",a=.08,r=null){if(!this.ctx)return;const o=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=i,l.frequency.setValueAtTime(e,o),c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(a,o+t),c.gain.exponentialRampToValueAtTime(1e-4,o+n),l.connect(c),c.connect(r||this.musicGain),l.start(o),l.stop(o+n+.02)}noise(e=.18,t=.15,n=1800,i="lowpass"){if(!this.ctx||!this.noiseBuffer)return;const a=this.ctx.currentTime,r=this.ctx.createBufferSource();r.buffer=this.noiseBuffer;const o=this.ctx.createBiquadFilter();o.type=i,o.frequency.setValueAtTime(n,a),o.frequency.exponentialRampToValueAtTime(Math.max(80,n*.25),a+e);const l=this.ctx.createGain();l.gain.setValueAtTime(t,a),l.gain.exponentialRampToValueAtTime(1e-4,a+e),r.connect(o),o.connect(l),l.connect(this.sfxGain),r.start(a),r.stop(a+e+.02)}tone(e,t=.14,n=.14,i="square",a=0){if(!this.ctx)return;const r=this.ctx.currentTime,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=i,o.frequency.setValueAtTime(e,r),a&&o.frequency.exponentialRampToValueAtTime(Math.max(30,e+a),r+t),l.gain.setValueAtTime(0,r),l.gain.linearRampToValueAtTime(n,r+.01),l.gain.exponentialRampToValueAtTime(1e-4,r+t),o.connect(l),l.connect(this.sfxGain),o.start(r),o.stop(r+t+.02)}sfx(e){if(!(!this.ctx||!this.enabled))switch(e){case"swing":this.noise(.16,.18,2700,"highpass");break;case"hit":this.tone(110,.1,.18,"square",-55),this.noise(.1,.12,1200);break;case"crit":this.tone(180,.13,.22,"sawtooth",-100),this.noise(.12,.15,2200);break;case"bow":this.tone(560,.08,.08,"triangle",300),this.noise(.16,.08,3e3,"highpass");break;case"magic":this.tone(320,.32,.09,"sine",650),this.tone(480,.4,.05,"triangle",320);break;case"holy":this.tone(523.25,.45,.08,"sine",260),this.tone(783.99,.55,.05,"sine",120);break;case"coin":this.tone(880,.08,.1,"square",200),setTimeout(()=>this.tone(1320,.1,.08,"square"),60);break;case"potion":this.tone(330,.2,.08,"sine",220),this.tone(440,.26,.06,"triangle",160);break;case"level":[523,659,784,1046].forEach((t,n)=>setTimeout(()=>this.tone(t,.3,.1,"triangle"),n*110));break;case"quest":[440,554,659].forEach((t,n)=>setTimeout(()=>this.tone(t,.25,.08,"triangle"),n*100));break;case"open":this.tone(220,.18,.1,"triangle",100),this.noise(.2,.08,700);break;case"error":this.tone(130,.18,.12,"sawtooth",-20);break;case"death":this.tone(220,.7,.12,"sawtooth",-160),this.noise(.5,.08,600);break;case"dodge":this.noise(.12,.08,3400,"highpass");break;case"footstep":this.noise(.055,.035,260);break;case"thunder":this.noise(.65,.22,440),this.tone(60,.8,.14,"sine",-20);break;case"chest":[392,523,659,784].forEach((t,n)=>setTimeout(()=>this.tone(t,.35,.08,"triangle"),n*90));break;case"ui":this.tone(700,.05,.04,"square",-80);break}}}const wg=s=>document.getElementById(s),wl="aetherfall_save_v2",El=2,Ps=Math.PI*2,Pt=s=>Mn[s]?.color||15195330;function Eg(s,e){let t=(e-s)%Ps;return t>Math.PI&&(t-=Ps),t<-Math.PI&&(t+=Ps),t}function Fs(s,e,t){return s+Eg(s,e)*mt(t,0,1)}function Tg(s){return{fire:"ice",ice:"fire",holy:"shadow",shadow:"holy",lightning:"earth",earth:"lightning",water:"wind",wind:"water"}[s]||null}function Ag(s,e=0){const t=s+e;return t>=8?"epic":t>=5?"rare":t>=3?"uncommon":"common"}function Tl(s){const e=Eo[s.race]||Eo.human,t=s.race==="beast"?To[s.beastType]||To.dog:null,n=vi[s.classId]||vi.warrior;return{race:e,beast:t,cls:n}}class Cg{constructor(){this.scene=new Od,this.clock=new eu,this.elapsed=0,this.started=!1,this.uiOpen=!1,this.previewMode=!0,this.dead=!1,this.player=null,this.previewModel=null,this.previewLight=null,this.npcs=[],this.enemies=[],this.projectiles=[],this.effects=[],this.timers=[],this.quests={},this.completedQuests=new Set,this.activeBoss=null,this.nearbyInteraction=null,this.touchMove=new ke,this.keys=new Set,this.cameraYaw=0,this.cameraPitch=.34,this.cameraDistance=8.6,this.cameraTarget=new P,this.pointer={down:!1,id:null,x:0,y:0,moved:0,start:0,button:0},this.biomes=bt,this.waypoint=null,this.timeOfDay=9.2,this.weather=tn.clear,this.weatherTimer=80,this.deathTimer=0,this.autosaveTimer=45,this.pixelFilter=!0,this.renderScale=.74,this.activeVendorNpc=null,this.savedGame=null,this.pendingSave=null,this.createRenderer(),this.createCamera(),this.audio=new bg,this.world=new Mg(this),this.world.sun.shadow.mapSize.set(1536,1536),this.ui=new Sg(this),this.initQuests(),this.createNpcs(),this.spawnEnemies(),this.createPreview(),this.bindEvents(),this.resize(),this.restoreSaveMeta(),this.animate()}createRenderer(){this.renderer=new O0({antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=nn,this.renderer.toneMapping=Dl,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Rl,this.renderer.domElement.setAttribute("aria-hidden","true"),wg("viewport").appendChild(this.renderer.domElement)}createCamera(){this.camera=new sn(52,1,.12,620),this.camera.position.set(4,4.2,44),this.camera.lookAt(0,1.4,38)}createPreview(){this.removePreview();const e=this.ui?.selection||{name:"Rowan",sex:"feminine",race:"human",beastType:"dog",classId:"warrior",skin:0,cloth:0},t=Ua(e.skin??0,e.cloth??0);this.previewModel=ls({...e,skin:t.skin,cloth:t.cloth,role:"hero"});const n=this.world.heightAt(tt.x,tt.z);this.previewModel.position.set(tt.x,n,tt.z),this.previewModel.rotation.y=Math.PI,this.scene.add(this.previewModel),this.previewLight=new Qn(16767392,2.1,13,2),this.previewLight.position.set(tt.x+2.4,n+3.4,tt.z+3.4),this.scene.add(this.previewLight)}removePreview(){this.previewModel&&(this.scene.remove(this.previewModel),Rr(this.previewModel),this.previewModel=null),this.previewLight&&(this.scene.remove(this.previewLight),this.previewLight=null)}previewCharacter(e){if(this.started)return;const t=Ua(e.skin??0,e.cloth??0),n=this.previewModel;this.previewModel=ls({...e,skin:t.skin,cloth:t.cloth,role:"hero"});const i=this.world.heightAt(tt.x,tt.z);this.previewModel.position.set(tt.x,i,tt.z),this.previewModel.rotation.y=Math.PI,this.scene.add(this.previewModel),n&&(this.scene.remove(n),Rr(n))}updatePreview(e){if(!this.previewModel)return;const t=this.elapsed;Fa(this.previewModel,t,0,0,!1);const n=Math.sin(t*.12)*.16+.12,i=6.4,a=tt.x+Math.sin(n)*i,r=tt.z+Math.cos(n)*i,o=this.world.heightAt(a,r),l=this.world.heightAt(tt.x,tt.z)+1.45;this.camera.position.lerp(new P(a,Math.max(o+2.6,l+1.35),r),1-Math.exp(-e*3.2)),this.camera.lookAt(tt.x,l,tt.z),this.previewLight&&this.previewLight.position.set(tt.x+Math.sin(t*.35)*2.8,this.world.heightAt(tt.x,tt.z)+3.6,tt.z+3.2),this.timeOfDay=9.2+Math.sin(t*.02)*.6,this.world.update(e,t,this.timeOfDay,tn.clear,{x:tt.x,y:0,z:tt.z}),this.updateRuneVisuals(e),this.world.chests.forEach(c=>this.world.updateChest(c,e))}startGame(e){if(!this.started&&(this.started=!0,this.previewMode=!1,this.removePreview(),this.player=new Rg(e,this),this.player.position.set(tt.x,this.world.heightAt(tt.x,tt.z),tt.z),this.player.root.position.copy(this.player.position),this.player.facing=0,this.player.root.rotation.y=0,this.scene.add(this.player.root),this.cameraYaw=0,this.cameraPitch=.32,this.cameraDistance=8.4,this.timeOfDay=9.2,this.weather=tn.clear,this.world.setWeather("clear"),this.ui.setWeatherVisual(this.weather),this.ui.togglePixelState(this.pixelFilter),this.ui.toggleSoundState(this.audio.enabled),this.ui.updateZone({name:bt.town.name},bt.town),this.ui.showToast("AETHERFALL","The road is yours. Follow the field notes.","reward","✦"),this.updateCamera(1,!0),this.refreshNpcMarkers(),this.pendingSave)){const t=this.pendingSave;this.pendingSave=null,this.applySave(t)}}restoreSaveMeta(){try{const e=localStorage.getItem(wl);if(!e)return;const t=JSON.parse(e);if(!t||t.version!==El||!t.character||!t.player)return;this.savedGame=t;const n=document.querySelector(".start-wrap");if(!n)return;const i=document.createElement("button");i.type="button",i.id="continue-button",i.className="pixel-button muted",i.style.cssText="font-size:7px;padding:8px 14px;margin-top:2px;",i.textContent=`Continue · Level ${t.player.level}`,i.addEventListener("click",()=>this.continueSavedGame(t));const a=n.querySelector("span");a?n.insertBefore(i,a):n.appendChild(i)}catch{}}continueSavedGame(e){this.started||(this.audio.init(),this.audio.sfx("ui"),this.ui.setCharacter(e.character),this.pendingSave=e,this.ui.startGame())}save(){if(!this.started||!this.player)return!1;try{const e=this.player,t={version:El,savedAt:Date.now(),character:{...e.character},player:{level:e.level,xp:e.xp,gold:e.gold,health:e.health,energy:e.energy,potions:e.potions,kills:e.kills,position:{x:e.position.x,y:e.position.y,z:e.position.z},equipment:{weapon:e.equipment.weapon,armor:e.equipment.armor,trinket:e.equipment.trinket},inventory:e.inventory},quests:Object.values(this.quests).map(n=>({id:n.id,state:n.state,progress:n.progress,ready:n.ready})),completed:[...this.completedQuests],timeOfDay:this.timeOfDay,weather:this.weather.id,waypoint:this.waypoint,chests:this.world.chests.map(n=>({id:n.id,opened:n.opened,locked:n.locked}))};return localStorage.setItem(wl,JSON.stringify(t)),this.savedGame=t,!0}catch{return!1}}applySave(e){if(!this.player||!e?.player)return;const t=this.player,n=e.player;if(t.level=Math.max(1,n.level||1),t.xp=n.xp||0,t.xpNext=Co(t.level),t.gold=n.gold||0,t.potions=n.potions||0,t.kills=n.kills||0,t.equipment.weapon=n.equipment?.weapon||t.equipment.weapon,t.equipment.armor=n.equipment?.armor||t.equipment.armor,t.equipment.trinket=n.equipment?.trinket||null,t.inventory=Array.isArray(n.inventory)?n.inventory:[],t.recalcStats(!1),t.health=mt(n.health||t.maxHealth,1,t.maxHealth),t.energy=mt(n.energy||t.maxEnergy,0,t.maxEnergy),n.position&&(t.position.set(n.position.x,this.world.heightAt(n.position.x,n.position.z),n.position.z),t.root.position.copy(t.position)),t.equipment.weapon&&ul(t.root,t.classId,t.equipment.weapon),e.quests)for(const i of e.quests){const a=this.quests[i.id];a&&(a.state=i.state||"available",a.progress=i.progress||{},a.ready=!!i.ready)}this.completedQuests=new Set(e.completed||[]);for(const i of this.completedQuests)this.quests[i]&&(this.quests[i].state="completed");if(typeof e.timeOfDay=="number"&&(this.timeOfDay=e.timeOfDay),e.weather&&(this.weather=tn[e.weather]||tn.clear,this.world.setWeather(this.weather.id),this.ui.setWeatherVisual(this.weather)),e.waypoint&&(this.waypoint={...e.waypoint}),e.chests)for(const i of e.chests){const a=this.world.chests.find(r=>r.id===i.id);a&&(a.locked=!!i.locked,a.opened=!!i.opened,a.opened&&(a.opening=!1,a.open=!0,a.root.userData.lid.rotation.x=-1.55,a.locked||(a.root.userData.lock.visible=!1)))}this.refreshNpcMarkers(),this.ui.questRenderKey="",this.ui.showToast("JOURNEY RESUMED",`${t.name} · Level ${t.level} · ${t.gold} gold`,"reward","◆"),this.updateCamera(1,!0)}initQuests(){for(const e of Object.values(H0)){const t=hl.find(n=>n.id===e.giver);this.quests[e.id]={id:e.id,def:e,state:"available",progress:Object.fromEntries(e.objectives.map(n=>[n.target,0])),ready:!1,giverName:t?.name||"A stranger",zone:t?.zone||"Aetherfall"}}}getActiveQuests(){return Object.values(this.quests).filter(e=>e.state==="active").sort((e,t)=>Number(t.ready)-Number(e.ready)||e.def.level-t.def.level)}getCompletedQuests(){return Object.values(this.quests).filter(e=>e.state==="completed").sort((e,t)=>e.def.level-t.def.level)}acceptQuest(e){const t=this.quests[e];return!t||t.state!=="available"?!1:(t.state="active",t.progress=Object.fromEntries(t.def.objectives.map(n=>[n.target,0])),t.ready=!1,this.ui.showToast("OATH SWORN",t.def.title,"reward","✦"),this.audio.sfx("quest"),this.ui.questRenderKey="",this.refreshNpcMarkers(),!0)}registerKill(e,t=1){for(const n of Object.values(this.quests)){if(n.state!=="active")continue;let i=!1;for(const r of n.def.objectives)r.type!=="kill"||r.target!==e||(n.progress[r.target]=Math.min(r.count,(n.progress[r.target]||0)+t),i=!0);if(!i)continue;n.def.objectives.every(r=>(n.progress[r.target]||0)>=r.count)&&!n.ready&&(n.ready=!0,this.soundQuestReady(n))}this.ui.questRenderKey="",this.refreshNpcMarkers()}registerPuzzle(e){for(const t of Object.values(this.quests)){if(t.state!=="active")continue;let n=!1;for(const a of t.def.objectives)a.type!=="puzzle"||a.target!==e||(t.progress[a.target]=Math.min(a.count,(t.progress[a.target]||0)+1),n=!0);if(!n)continue;t.def.objectives.every(a=>(t.progress[a.target]||0)>=a.count)&&!t.ready&&(t.ready=!0,this.soundQuestReady(t))}this.ui.questRenderKey="",this.refreshNpcMarkers()}soundQuestReady(e){this.audio.sfx("quest"),this.ui.showToast("OATH FULFILLED",`Return to ${e.giverName}.`,"reward","?")}turnInQuest(e){const t=this.quests[e];if(!t||t.state!=="active"||!t.ready)return!1;t.state="completed",this.completedQuests.add(e);const n=this.player,i=t.def.rewards,a=Math.round((i.gold||0)*(n.raceBonuses.gold||1)),r=Math.round((i.xp||0)*(n.raceBonuses.xp||1));n.gold+=a,n.gainXp(r);let o=null;return i.item&&(o=X0(n.classId,n.level),n.inventory.push(o)),this.audio.sfx("level"),this.ui.showToast("OATH COMPLETE",`${t.def.title} · ◉ ${a} · ✦ ${r}${o?` · ${o.name}`:""}`,"reward","◆"),this.ui.questRenderKey="",this.refreshNpcMarkers(),!0}refreshNpcMarkers(){for(const e of this.npcs)e.refreshMarker()}createNpcs(){this.markerTextures={quest:Ta("quest").material.map,complete:Ta("complete").material.map,vendor:Ta("vendor").material.map};for(const e of hl){const t=new Lg(e,this);this.npcs.push(t)}}spawnEnemies(){for(const e of this.world.enemySpawns)this.enemies.push(new Al(e,this,null));for(const e of this.world.bossSpawns)this.enemies.push(new Al(e,this,e))}updateInteractions(){const e=this.player;if(!e||e.dead||this.uiOpen){this.nearbyInteraction=null;return}let t=null,n=1/0;const i=e.position.x,a=e.position.z;for(const r of this.npcs){const o=Je(i,a,r.root.position.x,r.root.position.z);o<3.15&&o<n&&(n=o,t={type:"npc",target:r,label:`Speak with ${r.def.name}`})}for(const r of this.world.chests){if(r.opened)continue;const o=Je(i,a,r.x,r.z);o<2.5&&o<n&&(n=o,t={type:"chest",target:r,label:r.locked?`Sealed · ${r.name}`:`Open · ${r.name}`})}for(const r of this.world.puzzleRunes){const o=this.world.puzzles[r.userData.puzzleId];if(!o||o.solved||r.userData.lit)continue;const l=Je(i,a,r.userData.x,r.userData.z);l<2.45&&l<n&&(n=l,t={type:"rune",target:r,label:`Touch · ${r.userData.name}`})}this.nearbyInteraction=t}interact(){if(!this.started||this.uiOpen||!this.player||this.player.dead)return;const e=this.nearbyInteraction;e&&(e.type==="npc"?(this.audio.sfx("ui"),e.target.facePlayer(this.player.position),this.ui.openDialogue(e.target)):e.type==="chest"?this.openChest(e.target):e.type==="rune"&&this.activateRune(e.target))}openChest(e){if(e.opened)return;if(e.locked){this.audio.sfx("error");const c=Object.values(this.world.puzzles).find(h=>h.chest===e);this.ui.showToast("SEALED",c?`${c.name}: ${c.hint}`:"Old magic holds this lid shut.","danger","◆");return}e.opened=!0,e.opening=!0;const t=e.level||3,n=Math.round((20+t*13)*(this.player.raceBonuses.gold||1)),i=18+t*9;this.player.gold+=n,this.player.gainXp(Math.round(i*(this.player.raceBonuses.xp||1)));const a=cs[this.player.classId],r=Math.random()<.58?a.weapons:a.armor,o=r[Math.min(r.length-1,Math.floor(t/2.4))],l=yi(o,t,{classId:this.player.classId,rarity:Ag(t,1)});if(Math.random()<.25){const c=Ao(Qi[Math.min(Qi.length-1,Math.floor(t/3))],t);this.player.inventory.push(c)}this.player.inventory.push(l),Math.random()<.55&&(this.player.potions+=1),this.player.spawnBurst(new P(e.x,e.root.position.y+1,e.z),15317087),this.audio.sfx("chest"),this.ui.showToast("CHEST OPENED",`${e.name} · ◉ ${n} · ${l.name}`,"reward",l.icon||"◆"),this.ui.questRenderKey="",this.updateInteractions()}activateRune(e){const t=this.world.tryActivateRune(e);if(!t||t.result==="ignored"){this.ui.showToast("THE STONE SLEEPS","It has already answered.","muted","✦");return}t.result==="lit"?(this.audio.sfx("magic"),this.player.spawnBurst(new P(e.userData.x,this.world.heightAt(e.userData.x,e.userData.z)+1,e.userData.z),Pt(e.userData.element))):t.result==="reset"&&(this.audio.sfx("error"),this.ui.showToast("THE STONES DARKEN","Wrong order. Root. Ember. Dawn — or Frost. Storm. Hollow.","danger","☠")),this.updateInteractions()}onRuneLit(e,t){this.ui.showToast("RUNESTONE WAKES",`${t.userData.name} · ${e.progress}/${e.order.length}`,"reward","✦")}onPuzzleSolved(e){this.audio.sfx("quest"),this.ui.showToast("PUZZLE SOLVED",`${e.name} yields its vault.`,"reward","◆"),this.registerPuzzle(e.biome),e.chest&&(e.chest.locked=!1,this.player.spawnBurst(new P(e.chest.x,e.chest.root.position.y+1.2,e.chest.z),16047260))}onLightning(){this.ui.flashLightning(),this.audio.sfx("thunder")}openVendor(e){return this.activeVendorNpc=e,(!e.shopStock||e.shopLevel!==this.player.level)&&(e.shopStock=q0(e.def.vendor,this.player,e.def.zone==="Aurelune"?5:1),e.shopLevel=this.player.level),{stock:e.shopStock}}buyItem(e){const t=this.activeVendorNpc;if(!t||!e||this.player.gold<e.price)return!1;const n=t.shopStock.indexOf(e);return n===-1?!1:(this.player.gold-=e.price,t.shopStock.splice(n,1),e.consumable?e.id==="health_potion"?this.player.potions+=1:this.player.inventory.push({...e,consumable:!0}):this.player.inventory.push(e),!0)}equipItem(e){const t=this.player.inventory[e];if(!t||t.consumable)return!1;const n=t.slot||(t.trinket?"trinket":t.type);if(!["weapon","armor","trinket"].includes(n))return!1;const i=this.player.equipment[n];return this.player.equipment[n]=t,this.player.inventory.splice(e,1),i&&this.player.inventory.push(i),this.player.recalcStats(!0),n==="weapon"&&ul(this.player.root,this.player.classId,t),this.audio.sfx("ui"),this.ui.showToast("EQUIPPED",t.name,"reward",t.icon||"◆"),!0}useConsumable(e){const t=this.player.inventory[e];if(!t||!t.consumable)return!1;let n=t.name;if(t.effect==="heal")this.player.heal(this.player.maxHealth*(t.value||.45));else if(t.effect==="energy")this.player.energy=Math.min(this.player.maxEnergy,this.player.energy+this.player.maxEnergy*(t.value||.55));else if(t.effect==="bomb"){const i=this.player.position.clone();this.dealAreaDamage(i,6.2,1,"fire",{flat:45+this.player.level*5,label:t.name}),this.player.spawnPulse(i,15825743,6.2,.7)}else t.effect==="ward"&&(this.player.applyStatus({id:"ward_brew",name:"Ironbark",icon:"♨",remaining:20,buff:!0,armor:30,onExpire:()=>this.player.recalcStats(!1)}),this.player.recalcStats(!1),n=`${t.name} · +30 armor`);return this.player.inventory.splice(e,1),this.audio.sfx("potion"),this.ui.showToast("CONSUMED",n,"reward",t.icon||"◆"),!0}usePotion(){return!this.player||this.player.dead?!1:this.player.potions<=0?(this.ui.showToast("EMPTY FLASK","Buy more from an apothecary.","danger","♜"),this.audio.sfx("error"),!1):this.player.health>=this.player.maxHealth-1?(this.ui.showToast("ALREADY WHOLE","Save the draught for a worse hour.","muted","♜"),!1):(this.player.potions-=1,this.player.heal(this.player.maxHealth*.45),this.player.spawnBurst(this.player.position.clone().add(new P(0,1.2,0)),16047260),this.audio.sfx("potion"),!0)}setWaypoint(e,t){this.waypoint={x:e,z:t}}togglePixelFilter(){this.pixelFilter=!this.pixelFilter,this.renderer.domElement.style.imageRendering=this.pixelFilter?"pixelated":"auto",this.ui.togglePixelState(this.pixelFilter),this.resize()}toggleSound(){this.audio.setMuted(this.audio.enabled),this.ui.toggleSoundState(this.audio.enabled)}changeWeather(e,t=!1){const n=tn[e]||tn.clear;this.weather.id===n.id&&!t||(this.weather=n,this.world.setWeather(n.id),this.ui.setWeatherVisual(n),!t&&this.started&&this.ui.showToast("THE SKY TURNS",`${n.icon} ${n.name}`,"muted",n.icon))}pickWeather(){const e=Object.values(tn),t=e.reduce((i,a)=>i+a.weight,0);let n=Math.random()*t;for(const i of e)if(n-=i.weight,n<=0)return i;return tn.clear}updateCamera(e,t=!1){if(!this.started||!this.player)return;const n=this.player,i=new P(n.position.x,n.position.y+1.45,n.position.z),a=Math.cos(this.cameraPitch),r=new P(Math.sin(this.cameraYaw)*a*this.cameraDistance,Math.sin(this.cameraPitch)*this.cameraDistance,Math.cos(this.cameraYaw)*a*this.cameraDistance),o=i.clone().add(r),l=this.world.heightAt(o.x,o.z);o.y<l+.55&&(o.y=l+.55),t?this.camera.position.copy(o):this.camera.position.lerp(o,1-Math.exp(-e*9)),this.camera.lookAt(i)}updateRuneVisuals(e){for(const t of this.world.puzzleRunes){const n=t.userData;n.lit&&n.ring&&(n.ring.rotation.z+=e*1.4,n.light&&(n.light.intensity=1.8+Math.sin(this.elapsed*4+n.x)*.4))}}updateTimers(e){for(let t=this.timers.length-1;t>=0;t--){const n=this.timers[t];if(n.time-=e,n.time<=0){this.timers.splice(t,1);try{n.fn()}catch(i){console.error(i)}}}}after(e,t){this.timers.push({time:e,fn:t})}updateEffects(e){for(let t=this.effects.length-1;t>=0;t--){const n=this.effects[t];n.life-=e;const i=1-Math.max(0,n.life)/n.duration;if(n.type==="pulse"){const a=.3+i*2.7;n.mesh.scale.setScalar(n.radius/1.4*a),n.mesh.material.opacity=Math.max(0,(1-i)*.72)}else n.type==="glow"&&(n.sprite.material.opacity=Math.max(0,(1-i)*(n.opacity??.9)),n.sprite.scale.setScalar((n.size||2)*(.55+i*1.4)));n.life<=0&&(this.scene.remove(n.object),n.mesh?.geometry&&n.mesh.geometry.dispose(),n.mesh?.material&&n.mesh.material.dispose(),n.sprite?.material&&n.sprite.material.dispose(),this.effects.splice(t,1))}}spawnPulse(e,t,n=4,i=.55){const a=new ve(new Pn(.7,1,36),new xn({color:t,transparent:!0,opacity:.7,side:it,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.set(e.x,e.y+.12,e.z),a.renderOrder=8,this.scene.add(a),this.effects.push({type:"pulse",object:a,mesh:a,life:i,duration:i,radius:n})}spawnGlow(e,t,n=2.4,i=.7,a=.9){const r=Kt("#"+t.toString(16).padStart(6,"0"),n);r.position.copy(e),r.material.opacity=a,this.scene.add(r),this.effects.push({type:"glow",object:r,sprite:r,life:i,duration:i,size:n,opacity:a})}scheduleTelegraph(e,t,n,i,a){this.spawnPulse(e,n,t,Math.max(.35,i)),this.after(i,()=>{this.spawnPulse(e,n,t*1.12,.35),a?.()})}dealAreaDamage(e,t,n,i,a={}){let r=0;for(const o of this.enemies){if(o.dead||Je(e.x,e.z,o.root.position.x,o.root.position.z)>t+o.radius)continue;const c=a.flat?{amount:Math.round(a.flat*(.92+Math.random()*.16)),crit:!1}:this.player.rollDamage(n);this.player.damageEnemy(o,c.amount,i,c.crit,a.label||"Spell"),r++}return r}spawnPlayerProjectile(e,t,n,i,a){const r=this.player,o=new P(r.position.x,r.position.y+1.5,r.position.z);let l,c=null;e&&!e.dead?(c=new P(e.root.position.x,e.root.position.y+(e.height||1.2)*.55,e.root.position.z),l=c.clone().sub(o).normalize()):(l=new P(-Math.sin(r.facing),0,-Math.cos(r.facing)),c=o.clone().add(l.clone().multiplyScalar(16)));const h=fl(a,n);h.position.copy(o),a==="arrow"&&(h.rotation.y=Math.atan2(l.x,l.z)+Math.PI),this.scene.add(h),this.projectiles.push({mesh:h,owner:"player",element:n,amount:t,crit:i,life:2.8,speed:a==="arrow"?34:24,direction:l,target:e,radius:.75,trail:0})}spawnEnemyProjectile(e,t){const n=new P(e.root.position.x,e.root.position.y+(e.height||1.2)*.65,e.root.position.z),a=new P(t.position.x,t.position.y+1.15,t.position.z).clone().sub(n).normalize(),r=fl((e.isBoss,"orb"),e.element);r.position.copy(n),this.scene.add(r),this.projectiles.push({mesh:r,owner:"enemy",element:e.element,amount:e.damage,crit:!1,life:4.2,speed:e.isBoss?18:14,direction:a,target:null,radius:.9})}updateProjectiles(e){const t=this.player;for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n];i.life-=e;let a=i.life<=0;if(i.owner==="player"&&i.target&&!i.target.dead){const o=new P(i.target.root.position.x,i.target.root.position.y+(i.target.height||1.2)*.55,i.target.root.position.z).sub(i.mesh.position).normalize();i.direction.lerp(o,Math.min(1,e*7)).normalize()}i.mesh.position.addScaledVector(i.direction,i.speed*e),i.mesh.rotation.z+=e*7;const r=this.world.heightAt(i.mesh.position.x,i.mesh.position.z);if(i.mesh.position.y<r-.4&&(a=!0),i.owner==="player")for(const o of this.enemies){if(o.dead)continue;const l=o.root.position.x-i.mesh.position.x,c=o.root.position.z-i.mesh.position.z,h=o.root.position.y+(o.height||1.2)*.55-i.mesh.position.y;if(Math.hypot(l,c)<o.radius+i.radius&&Math.abs(h)<1.8){t.damageEnemy(o,i.amount,i.element,i.crit,"Shot"),a=!0;break}}else if(!t.dead){const o=t.position.x-i.mesh.position.x,l=t.position.z-i.mesh.position.z,c=t.position.y+1.1-i.mesh.position.y;Math.hypot(o,l)<.85+i.radius&&Math.abs(c)<1.9&&(t.takeDamage(i.amount,i.element,"Spell"),a=!0)}a&&(this.scene.remove(i.mesh),Rr(i.mesh),this.projectiles.splice(n,1))}}updateEnemySeparation(){const e=this.enemies.filter(t=>!t.dead);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){const i=e[t],a=e[n],r=a.root.position.x-i.root.position.x,o=a.root.position.z-i.root.position.z,l=(i.radius+a.radius)*.82,c=Math.hypot(r,o);if(c>1e-4&&c<l){const h=(l-c)*.5,d=r/c,u=o/c;i.root.position.x-=d*h,i.root.position.z-=u*h,a.root.position.x+=d*h,a.root.position.z+=u*h}}}onBossAggro(e){this.activeBoss=e,this.ui.showToast("A GREAT PRESENCE",`${e.name} — ${e.title}`,"danger","☠"),this.audio.sfx("thunder")}onEnemyKilled(e){const t=this.player;t.kills+=1;const n=Math.round(e.gold*(t.raceBonuses.gold||1));if(t.gold+=n,t.gainXp(Math.round(e.xp*(t.raceBonuses.xp||1))),e.isBoss){if(this.activeBoss=null,this.registerKill(`boss_${e.id}`),this.ui.showToast("BOSS FALLEN",`${e.name} · ◉ ${n} · ✦ ${e.xp}`,"reward","☠"),this.audio.sfx("level"),Math.random()<.8){const i=cs[t.classId],a=i.weapons[Math.min(i.weapons.length-1,2+Math.floor(t.level/5))],r=yi(a,t.level+1,{classId:t.classId,rarity:"epic"});t.inventory.push(r),this.ui.showToast("BOSS RELIC",r.name,"reward",r.icon||"◆")}}else this.registerKill(e.def.id),e.def.elite&&Math.random()<.28&&this.ui.showToast("ELITE DROP",`${e.name} · ◉ ${n}`,"reward","◉")}onPlayerDeath(){this.deathTimer=5,this.ui.showDeath(5),this.audio.sfx("death")}respawn(){if(!this.player)return;const e=this.player;e.dead=!1,e.health=Math.max(1,Math.round(e.maxHealth*.65)),e.energy=Math.round(e.maxEnergy*.5),e.statuses=[],e.position.set(tt.x,this.world.heightAt(tt.x,tt.z),tt.z),e.root.position.copy(e.position),e.root.rotation.z=0,e.invulnerable=1.4,e.recalcStats(!1),this.deathTimer=0,this.cameraYaw=0,this.updateCamera(1,!0),this.ui.hideDeath(),this.ui.showToast("THE THREAD HOLDS","The dawnstone pulls you back to Hearthvale.","reward","✦"),this.audio.sfx("quest")}update(e){if(this.elapsed+=e,!this.started){this.updatePreview(e);return}const t=this.player;if(this.uiOpen){this.updateEffects(e),this.updateTimers(e),t.dead&&this.deathTimer>0&&(this.deathTimer-=e,this.ui.updateDeath(this.deathTimer),this.deathTimer<=0&&this.respawn()),this.world.update(e*.18,this.elapsed,this.timeOfDay,this.weather,t.position),this.updateRuneVisuals(e),this.world.chests.forEach(o=>this.world.updateChest(o,e)),this.updateCamera(e);return}this.timeOfDay=(this.timeOfDay+e*(24/660))%24,this.weatherTimer-=e,this.weatherTimer<=0&&(this.weatherTimer=78+Math.random()*72,this.changeWeather(this.pickWeather().id)),t.update(e);for(const o of this.npcs)o.update(e,this.elapsed,t);for(const o of this.enemies)o.update(e,t);this.updateEnemySeparation(),this.updateProjectiles(e),this.updateEffects(e),this.updateTimers(e);let n=null,i=1/0;for(const o of this.enemies){if(!o.isBoss||o.dead)continue;const l=Je(t.position.x,t.position.z,o.root.position.x,o.root.position.z);l<24&&l<i&&(i=l,n=o)}this.activeBoss=n,this.world.update(e,this.elapsed,this.timeOfDay,this.weather,t.position),this.world.updateTraps(e,t),this.world.chests.forEach(o=>this.world.updateChest(o,e)),this.updateRuneVisuals(e),this.updateInteractions(),this.updateCamera(e);const a=this.world.biomeAt(t.position.x,t.position.z),r=a.id==="town"?bt.town.name:a.id==="city"?bt.city.name:a.name;this.ui.updateZone({name:r},a),this.ui.updateHUD(e),this.autosaveTimer-=e,this.autosaveTimer<=0&&(this.autosaveTimer=45,this.save())}animate(){this.renderer.setAnimationLoop(()=>{const e=Math.min(.05,this.clock.getDelta());this.update(e),this.renderer.render(this.scene,this.camera)})}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix();const n=this.pixelFilter?e<780?.64:this.renderScale:Math.min(1,window.devicePixelRatio||1);this.renderer.setPixelRatio(1),this.renderer.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n)),!1)}bindEvents(){window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",n=>this.onKeyDown(n)),window.addEventListener("keyup",n=>this.onKeyUp(n)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("beforeunload",()=>{this.started&&this.save()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.started&&this.save(),this.keys.clear(),this.touchMove.set(0,0)});const e=this.renderer.domElement;e.addEventListener("contextmenu",n=>n.preventDefault()),e.addEventListener("pointerdown",n=>{!this.started||this.uiOpen||n.button===2||(this.pointer.down=!0,this.pointer.id=n.pointerId,this.pointer.x=n.clientX,this.pointer.y=n.clientY,this.pointer.moved=0,this.pointer.start=performance.now(),this.pointer.button=n.button,e.setPointerCapture?.(n.pointerId))}),e.addEventListener("pointermove",n=>{if(!this.pointer.down||n.pointerId!==this.pointer.id||this.uiOpen)return;const i=n.clientX-this.pointer.x,a=n.clientY-this.pointer.y;this.pointer.moved+=Math.abs(i)+Math.abs(a),this.pointer.x=n.clientX,this.pointer.y=n.clientY,this.pointer.moved>5&&(this.cameraYaw-=i*.0055,this.cameraPitch=mt(this.cameraPitch+a*.0042,.06,1.18))});const t=n=>{if(n.pointerId!==this.pointer.id)return;const i=this.pointer.down&&this.pointer.moved<7&&performance.now()-this.pointer.start<520;this.pointer.down=!1,this.pointer.id=null,i&&this.started&&!this.uiOpen&&this.player&&!this.player.dead&&this.player.basicAttack()};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",n=>{n.pointerId===this.pointer.id&&(this.pointer.down=!1,this.pointer.id=null)}),e.addEventListener("wheel",n=>{!this.started||this.uiOpen||(n.preventDefault(),this.cameraDistance=mt(this.cameraDistance+n.deltaY*.006,4.2,15))},{passive:!1}),window.addEventListener("gamepadconnected",()=>this.ui.showToast("CONTROLLER","A gamepad answers the call.","muted","◆"))}onKeyDown(e){if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;const t=e.key.toLowerCase();if(this.keys.add(t),!(!this.started||!this.player)){if(t==="escape"){if(this.ui.currentModal)return;this.player.dead||this.ui.openPause(),e.preventDefault();return}this.uiOpen||this.player.dead||e.repeat||(t===" "&&(e.preventDefault(),this.player.dodge()),t==="f"&&this.player.useAbility(),t==="r"&&this.usePotion(),t==="e"&&this.interact(),t==="i"&&this.ui.openInventory(),t==="j"&&this.ui.openJournal(),t==="m"&&this.ui.openWorldMap(),t==="p"&&this.ui.openPause(),t==="h"&&this.ui.showToast("CONTROLS","WASD move · drag to look · click to strike · E interact.","muted","✦"))}}onKeyUp(e){this.keys.delete(e.key.toLowerCase())}getMoveInput(){let e=0,t=0;(this.keys.has("w")||this.keys.has("arrowup"))&&(e+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(e-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(t+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(t-=1);const n=this.touchMove;n.lengthSq()>.012&&(t+=n.x,e+=-n.y);const i=Math.hypot(e,t);if(i>1&&(e/=i,t/=i),Math.abs(e)<.02&&Math.abs(t)<.02)return{x:0,z:0,moving:!1};const a=Math.sin(this.cameraYaw),r=Math.cos(this.cameraYaw),o=-a*e+r*t,l=-r*e-a*t,c=Math.hypot(o,l)||1;return{x:o/c,z:l/c,moving:!0,strength:Math.min(1,i)}}pollGamepad(){if(!this.started||this.uiOpen||!navigator.getGamepads)return null;const e=[...navigator.getGamepads()].find(Boolean);if(!e)return null;const t=Math.abs(e.axes[0])>.16?e.axes[0]:0,n=Math.abs(e.axes[1])>.16?e.axes[1]:0;return t||n?{x:t,z:n,moving:!0}:null}}class Rg{constructor(e,t){this.game=t,this.character={...e};const{race:n,beast:i,cls:a}=Tl(e);this.race=n.id,this.raceName=n.name,this.beastType=e.beastType||"dog",this.beastName=i?.name||"",this.classId=a.id,this.className=a.name,this.name=(e.name||"Wanderer").slice(0,18)||"Wanderer",this.sex=e.sex||"feminine",this.raceBonuses={...n.bonuses},this.beastBonuses=i?{...i.bonuses}:{},this.skin=e.skin,this.cloth=e.cloth,this.level=1,this.xp=0,this.xpNext=Co(1),this.gold=60,this.potions=3,this.kills=0,this.dead=!1,this.health=1,this.maxHealth=1,this.energy=0,this.maxEnergy=0,this.attackPower=1,this.armor=0,this.critChance=0,this.lifesteal=0,this.speed=5,this.resist={},this.statuses=[],this.facing=0,this.attackAnim=0,this.cooldowns={attack:0,ability:0,dodge:0},this.attackCooldown=a.attackSpeed,this.abilityCooldown=a.ability.cooldown,this.invulnerable=0,this.dashTime=0,this.dashDirection=new P,this.footstepTimer=0,this.energyRegen=4.2,this.position=new P(tt.x,0,tt.z),this.equipment={weapon:V0(a.id),armor:W0(a.id),trinket:null},this.inventory=[];const r=Ua(e.skin??0,e.cloth??0);this.root=ls({...e,skin:r.skin,cloth:r.cloth,role:"hero",weapon:this.equipment.weapon}),this.root.userData.rig.idle=Math.random()*10,this.root.position.copy(this.position),this.recalcStats(!1),this.health=this.maxHealth,this.energy=this.maxEnergy}recalcStats(e=!0){const{race:t,beast:n,cls:i}=Tl(this.character),a=this.maxHealth||0,r=this.health||0,o=this.equipment.weapon,l=this.equipment.armor,c=this.equipment.trinket,h=this.level,d=this.statuses.reduce((f,y)=>f+(y.armor||0),0),u=i.health+(t.bonuses.health||0)+(n?.bonuses.health||0)+(h-1)*14,p=i.energy+(t.bonuses.spirit||0)+(h-1)*3,g=i.armor+(t.bonuses.armor||0)+(h-1)*1.15,x=i.power+(t.bonuses.power||0)+(n?.bonuses.power||0)+(h-1)*2.1;this.maxHealth=Math.round(u+(l?.health||0)+(c?.health||0)),this.maxEnergy=Math.round(p),this.armor=Math.round(g+(l?.armor||0)+(c?.armor||0)+d);const m=(o?.damage||0)+(o?.elementPower||0)*.35;this.attackPower=Math.round(x+m+(c?.power||0)),this.critChance=mt(i.crit+(t.bonuses.crit||0)+(n?.bonuses.crit||0)+(o?.crit||0)+(c?.crit||0),.02,.7),this.lifesteal=mt((t.bonuses.lifesteal||0)+(c?.lifesteal||0),0,.45),this.speed=i.speed+(t.bonuses.speed||0)+(n?.bonuses.speed||0),this.attackCooldown=i.attackSpeed,this.abilityCooldown=i.ability.cooldown,this.resist={...t.bonuses.resist||{}};for(const f of[o,l,c])if(f?.resist)for(const[y,v]of Object.entries(f.resist))this.resist[y]=(this.resist[y]||0)+v;if(this.xpNext=Co(this.level),e&&a>0){const f=this.maxHealth-a;this.health=mt(r+Math.max(0,f),1,this.maxHealth)}this.health=mt(this.health||1,0,this.maxHealth),this.energy=mt(this.energy||0,0,this.maxEnergy)}rebuildModel(){this.root?.parent&&this.root.parent.remove(this.root);const e=Ua(this.character.skin??0,this.character.cloth??0);this.root=ls({...this.character,skin:e.skin,cloth:e.cloth,role:"hero",weapon:this.equipment.weapon}),this.root.position.copy(this.position),this.root.rotation.y=this.facing,this.game.scene.add(this.root)}rollDamage(e=1){const t=Math.random()<this.critChance,n=.9+Math.random()*.2;return{amount:Math.round(this.attackPower*e*n*(t?1.8:1)),crit:t}}damageEnemy(e,t,n,i,a="Strike"){if(!e||e.dead)return 0;let r=t;return e.element===n?r*=.78:Tg(e.element)===n&&(r*=1.18),r=Math.max(1,Math.round(r)),e.takeDamage(r,n,i,this),this.lifesteal>0&&this.heal(r*this.lifesteal,!0),r}heal(e,t=!1){if(this.dead)return 0;const n=this.raceBonuses.heal||1,i=Math.max(1,Math.round(e*n)),a=this.health;this.health=Math.min(this.maxHealth,this.health+i);const r=Math.round(this.health-a);if(r>0&&!t){const o=this.position.clone().add(new P(0,1.7,0));this.game.ui.showDamage(o,r,{heal:!0,element:"holy"})}return r}takeDamage(e,t="physical",n=""){if(this.dead||this.invulnerable>0)return 0;const i=this.armor/(this.armor+95),a=t==="physical"?0:mt(this.resist[t]||0,0,.6),r=Math.max(1,Math.round(e*(1-i)*(1-a)));this.health=Math.max(0,this.health-r),this.invulnerable=.12;const o=this.position.clone().add(new P(0,1.55,0));return this.game.ui.showDamage(o,r,{element:t}),this.game.ui.flashDamage(),this.game.audio.sfx("hit"),t==="fire"&&Math.random()<.18&&this.applyStatus({id:"burn",name:"Burning",icon:"🜂",remaining:3,dps:3+this.level,tick:1}),t==="ice"&&Math.random()<.16&&this.applyStatus({id:"chill",name:"Chilled",icon:"❄",remaining:3,slow:.72}),t==="lightning"&&Math.random()<.1&&this.applyStatus({id:"shock",name:"Shocked",icon:"ϟ",remaining:2.5,slow:.86}),this.health<=0&&this.die(n),r}applyStatus(e){const t=this.statuses.find(n=>n.id===e.id);t?(t.remaining=Math.max(t.remaining,e.remaining),Object.assign(t,e)):this.statuses.push({...e,tickTimer:e.tick??1})}die(e){this.dead||(this.dead=!0,this.health=0,this.invulnerable=99,this.dashTime=0,this.game.onPlayerDeath())}getSpeedMultiplier(){let e=1;for(const t of this.statuses)t.slow&&(e*=t.slow);return e}update(e){const t=this.game;if(this.dead){Fa(this.root,t.elapsed,0,0,!0);return}this.cooldowns.attack=Math.max(0,this.cooldowns.attack-e),this.cooldowns.ability=Math.max(0,this.cooldowns.ability-e),this.cooldowns.dodge=Math.max(0,this.cooldowns.dodge-e),this.invulnerable=Math.max(0,this.invulnerable-e),this.energy=Math.min(this.maxEnergy,this.energy+this.energyRegen*e),this.attackAnim=Math.max(0,this.attackAnim-e*4.2);for(let h=this.statuses.length-1;h>=0;h--){const d=this.statuses[h];if(d.remaining-=e,d.dps&&(d.tickTimer=(d.tickTimer||1)-e,d.tickTimer<=0)){d.tickTimer+=1,this.health=Math.max(0,this.health-Math.round(d.dps));const u=this.position.clone().add(new P(0,1.65,0));if(t.ui.showDamage(u,Math.round(d.dps),{element:d.id==="burn"?"fire":"shadow"}),this.health<=0){this.die(d.name);break}}d.remaining<=0&&(this.statuses.splice(h,1),d.id==="ward_brew"&&this.recalcStats(!1),typeof d.onExpire=="function"&&d.onExpire())}const n=t.getMoveInput(),i=t.pollGamepad?.();let a=n.x,r=n.z,o=n.moving;if(!o&&i){const h=Math.sin(t.cameraYaw),d=Math.cos(t.cameraYaw),u=h*i.x+d*i.z,p=d*i.x-h*i.z,g=Math.hypot(u,p)||1;a=u/g,r=p/g,o=!0}let l=0;if(this.dashTime>0){this.dashTime-=e;const h=this.speed*3.4*e;this.moveWithCollision(this.dashDirection.x*h,this.dashDirection.z*h),l=this.speed*1.5}else if(o){const h=this.speed*this.getSpeedMultiplier();this.moveWithCollision(a*h*e,r*h*e),this.facing=Math.atan2(-a,-r),l=h,this.footstepTimer-=e,this.footstepTimer<=0&&(this.footstepTimer=.33,t.audio.sfx("footstep"))}else this.footstepTimer=0;const c=t.world.heightAt(this.position.x,this.position.z);this.position.y=Math.abs(this.position.y-c)>3?c:this.position.y+(c-this.position.y)*Math.min(1,e*18),this.root.position.copy(this.position),this.root.rotation.y=Fs(this.root.rotation.y,this.facing,e*18),Fa(this.root,t.elapsed,l,this.attackAnim,!1)}moveWithCollision(e,t){const n=this.game,i=B0,a=.42,r=(c,h)=>{if(Math.abs(c)>i||Math.abs(h)>i||n.world.heightAt(c,h)<Et+.08)return!0;for(const d of n.world.colliders)if(!(d.r>8)&&Je(c,h,d.x,d.z)<d.r+a)return!0;return!1},o=mt(this.position.x+e,-i,i),l=mt(this.position.z+t,-i,i);if(!r(o,l)){this.position.x=o,this.position.z=l;return}Math.abs(e)>1e-4&&!r(o,this.position.z)&&(this.position.x=o),Math.abs(t)>1e-4&&!r(this.position.x,l)&&(this.position.z=l)}spawnBurst(e,t){this.game.spawnGlow(e,t,2.2,.55,.9)}spawnPulse(e,t,n,i){this.game.spawnPulse(e,t,n,i)}gainXp(e){if(e<=0)return;this.xp+=Math.round(e);let t=!1;for(;this.xp>=this.xpNext;)this.xp-=this.xpNext,this.level+=1,t=!0,this.recalcStats(!1),this.health=this.maxHealth,this.energy=this.maxEnergy,this.game.ui.showLevelUp(this.level,`Vitality ${this.maxHealth} · Attack ${this.attackPower} · Armor ${this.armor}`),this.game.audio.sfx("level");t&&(this.game.ui.showToast("LEVEL "+this.level,"New power settles into your bones.","reward","✦"),this.game.ui.questRenderKey="")}faceToward(e,t){const n=e-this.position.x,i=t-this.position.z;Math.hypot(n,i)>.01&&(this.facing=Math.atan2(-n,-i))}nearestEnemy(e=30){let t=null,n=e;for(const i of this.game.enemies){if(i.dead)continue;const a=Je(this.position.x,this.position.z,i.root.position.x,i.root.position.z);a<n&&(n=a,t=i)}return t}basicAttack(){if(this.dead||this.game.uiOpen||this.cooldowns.attack>0)return;const e=vi[this.classId];this.cooldowns.attack=this.attackCooldown,this.attackAnim=1;const t=this.equipment.weapon?.element||e.element;if(e.range>5){const r=this.nearestEnemy(e.range+4);r&&this.faceToward(r.root.position.x,r.root.position.z);const o=this.rollDamage(1),l=this.classId==="archer"?"arrow":this.classId==="priest"?"holy":"orb";this.game.spawnPlayerProjectile(r,o.amount,t,o.crit,l),this.game.audio.sfx(this.classId==="archer"?"bow":this.classId==="priest"?"holy":"magic"),r||this.game.spawnGlow(this.position.clone().add(new P(-Math.sin(this.facing)*2,1.4,-Math.cos(this.facing)*2)),Pt(t),1.4,.35,.6);return}this.game.audio.sfx("swing");const i=new P(-Math.sin(this.facing),0,-Math.cos(this.facing));let a=!1;for(const r of this.game.enemies){if(r.dead)continue;const o=r.root.position.x-this.position.x,l=r.root.position.z-this.position.z,c=Math.hypot(o,l);if(c>e.range+r.radius*.5||(o*i.x+l*i.z)/(c||1)<-.08)continue;const d=this.rollDamage(1);this.damageEnemy(r,d.amount,t,d.crit,"Strike"),a=!0}if(!a){const r=this.position.clone().add(new P(i.x*1.4,.8,i.z*1.4));this.game.spawnGlow(r,Pt(t),1.1,.28,.55)}}useAbility(){if(this.dead||this.game.uiOpen)return;const e=vi[this.classId];if(this.cooldowns.ability>0)return;if(this.energy<e.ability.cost){this.game.ui.showToast("NOT ENOUGH SPIRIT",`${e.ability.name} needs ${e.ability.cost} spirit.`,"danger","✦"),this.game.audio.sfx("error");return}this.energy-=e.ability.cost,this.cooldowns.ability=e.ability.cooldown,this.attackAnim=1;const t=this.equipment.weapon?.element||e.element,n=new P(-Math.sin(this.facing),0,-Math.cos(this.facing)),i=this.nearestEnemy(22);if(this.classId==="warrior"){this.game.spawnPulse(this.position,Pt("physical"),5.2,.6);let a=0;for(const r of this.game.enemies){if(r.dead||Je(this.position.x,this.position.z,r.root.position.x,r.root.position.z)>5.3+r.radius)continue;const o=this.rollDamage(1.75);this.damageEnemy(r,o.amount,t,o.crit,"Whirlwind"),a++}this.game.audio.sfx("swing"),this.game.ui.showToast("WHIRLWIND",a?`${a} foes struck.`:"The steel sings alone.","muted","⟳")}else if(this.classId==="rogue"){const a=n.clone();this.dashDirection.copy(a),this.dashTime=.2,this.invulnerable=.45,this.game.audio.sfx("dodge"),this.game.spawnPulse(this.position,Pt("shadow"),3.2,.45);for(const r of this.game.enemies){if(r.dead)continue;const o=r.root.position.x-this.position.x,l=r.root.position.z-this.position.z;if((o*a.x+l*a.z)/(Math.hypot(o,l)||1)>.55&&Je(this.position.x,this.position.z,r.root.position.x,r.root.position.z)<6.4){const h=this.rollDamage(1.65);this.damageEnemy(r,h.amount,t,h.crit,"Shadowstep")}}this.game.ui.showToast("SHADOWSTEP","Through the dark, and out the other side.","muted","⌁")}else if(this.classId==="archer"){const a=i?i.root.position.clone():this.position.clone().add(n.clone().multiplyScalar(9));a.y=this.game.world.heightAt(a.x,a.z),this.game.spawnPulse(a,Pt("wind"),4.8,.55),this.game.after(.42,()=>{this.game.spawnPulse(a,Pt("wind"),5.2,.4);for(let r=0;r<4;r++)this.game.after(r*.09,()=>this.game.dealAreaDamage(a,4.4,.7,t,{label:"Rain of Arrows"}))}),this.game.audio.sfx("bow"),this.game.ui.showToast("RAIN OF ARROWS","The sky answers in fletching.","muted","⇊")}else if(this.classId==="wizard"){const a=i?i.root.position.clone():this.position.clone().add(n.clone().multiplyScalar(10));a.y=this.game.world.heightAt(a.x,a.z),this.game.spawnPulse(a,Pt("fire"),6,.75),this.game.after(.55,()=>{this.game.spawnPulse(a,Pt("fire"),6.4,.45),this.game.spawnGlow(a.clone().add(new P(0,3,0)),Pt("fire"),4.5,.55,1),this.game.dealAreaDamage(a,6.4,2.2,t,{label:"Starfall"})}),this.game.audio.sfx("magic"),this.game.ui.showToast("STARFALL","A small, obedient star falls.","muted","☄")}else{const a=this.heal(this.maxHealth*.32);this.game.spawnPulse(this.position,Pt("holy"),6.2,.75),this.game.spawnGlow(this.position.clone().add(new P(0,2.4,0)),Pt("holy"),3.4,.7,1);for(const r of this.game.enemies){if(r.dead||Je(this.position.x,this.position.z,r.root.position.x,r.root.position.z)>6.2+r.radius)continue;const o=this.rollDamage(1.15);this.damageEnemy(r,o.amount,"holy",o.crit,"Sanctuary")}this.game.audio.sfx("holy"),this.game.ui.showToast("SANCTUARY",`+${a} vitality · shadows seared.`,"reward","✺")}}dodge(){if(this.dead||this.game.uiOpen||this.cooldowns.dodge>0)return;const e=this.game.getMoveInput();let t=new P(e.x,0,e.z);e.moving||t.set(-Math.sin(this.facing),0,-Math.cos(this.facing)),t.normalize(),this.dashDirection.copy(t),this.dashTime=.24,this.cooldowns.dodge=.9,this.invulnerable=.42,this.attackAnim=.5,this.game.audio.sfx("dodge"),this.game.spawnGlow(this.position.clone().add(new P(0,.7,0)),10475727,1.5,.35,.6)}}function Pg(s,e=9147537){if(typeof s=="number")return s;if(typeof s=="string"){const t=Number.parseInt(s.replace("#",""),16);if(Number.isFinite(t))return t}return e}const Dg={quest:"priest",vendor:"rogue"};class Lg{constructor(e,t){this.def=e,this.game=t,this.id=e.id;const n=t.world,i=e.pos[0],a=e.pos[1],r=e.palette?e.palette.map(l=>Pg(l)):null,o=e.classId||Dg[e.role]||"warrior";if(this.root=ls({race:e.race||"human",beastType:e.beastType,sex:e.sex||"feminine",classId:o,role:"npc",palette:r,vendor:e.vendor,questId:e.questId}),this.root.position.set(i,n.heightAt(i,a),a),this.root.rotation.y=e.rotation??Math.PI*(.65+Math.random()*.4),this.baseRotation=this.root.rotation.y,t.scene.add(this.root),this.marker=Ta(e.questId?"quest":"vendor"),t.markerTextures){const l=e.questId?t.markerTextures.quest:t.markerTextures.vendor;this.marker.material.map=l,this.marker.material.needsUpdate=!0}this.marker.position.y=2.45,this.root.add(this.marker),this.markerKind="",this.markerPhase=Math.random()*Math.PI*2,this.refreshMarker()}refreshMarker(){const e=this.def.questId?this.game.quests[this.def.questId]:null;let t=null;if(e?e.state==="available"?t="quest":e.state==="active"?t=e.ready?"complete":"quest":t=null:this.def.vendor&&(t="vendor"),this.marker.visible=!!t,!t)return;const n=this.game.markerTextures?.[t];n&&this.marker.material.map!==n&&(this.marker.material.map=n,this.marker.material.needsUpdate=!0);const i=e?.state==="active"&&!e.ready;this.marker.material.opacity=i?.45:1,this.marker.scale.setScalar(t==="complete"?.72:.62),this.markerKind=t}facePlayer(e){const t=e.x-this.root.position.x,n=e.z-this.root.position.z;Math.hypot(t,n)>.001&&(this.root.rotation.y=Math.atan2(-t,-n))}update(e,t,n){Fa(this.root,t+this.markerPhase,0,0,!1);const i=n.position.x-this.root.position.x,a=n.position.z-this.root.position.z;Math.hypot(i,a)<4.6&&!n.dead?this.root.rotation.y=Fs(this.root.rotation.y,Math.atan2(-i,-a),e*4.5):this.root.rotation.y=Fs(this.root.rotation.y,this.baseRotation,e*.8),this.marker.visible&&(this.marker.position.y=2.45+Math.sin(t*2.1+this.markerPhase)*.09)}}let Ig=0;const Ug={thornmaw:"slam",pyreclaw:"slam",gravewarden:"volley",tidecolossus:"slam",gloomroot:"slam"};class Al{constructor(e,t,n=null){this.game=t,this.spawn={x:e.x,z:e.z},this.isBoss=!!n,this.def=n||ll[e.type]||ll.slime,this.level=Math.max(1,e.level||this.def.level||1),this.element=n?.element||e.element||"physical",this.name=this.def.name,this.title=this.def.title||"",this.id=n?`boss_${n.id}`:`foe_${++Ig}`;const i=1+(this.level-1)*(this.isBoss?.07:.19);this.maxHealth=Math.round((this.def.hp||50)*i),this.health=this.maxHealth,this.damage=Math.max(1,Math.round((this.def.damage||5)*(1+(this.level-1)*.12))),this.xp=Math.round((this.def.xp||12)*(1+(this.level-1)*.14)),this.gold=Math.round((this.def.gold||3)*(1+(this.level-1)*.12)),this.radius=this.def.radius||.65,this.speed=this.def.speed||3,this.range=this.def.range||1.8,this.ranged=!!this.def.ranged||this.range>5.5,this.aggroRange=(this.def.aggro||12)*(this.isBoss?1.12:1),this.attackInterval=this.def.attackCooldown||1.8,this.windupTime=this.def.windup||.45,this.root=K0(this.def,this.element,this.isBoss,n);const a=t.world.heightAt(this.spawn.x,this.spawn.z);this.root.position.set(this.spawn.x,a,this.spawn.z),this.root.rotation.y=Math.random()*Ps,this.root.userData.enemy=this,t.scene.add(this.root),this.height=Math.max(1.1,(this.def.height||(this.isBoss?2.2:1.35))*(this.isBoss?1.35:1)*Math.min(1.7,this.def.scale||1)),this.baseScale=this.isBoss?Math.min(2.5,this.root.scale.x):this.root.scale.x,this.root.scale.setScalar(this.baseScale),this.dead=!1,this.dying=0,this.respawnTimer=0,this.aggroed=!1,this.attackCooldown=Math.random()*this.attackInterval*.8,this.attacking=0,this.attackTotal=this.windupTime,this.specialTimer=5+Math.random()*4,this.specialKind=Ug[n?.id]||"slam",this.bob=Math.random()*10,this.hitWobble=0,this.homeDistance=0,this.lastDamageSource=""}takeDamage(e,t="physical",n=!1,i=null){if(this.dead)return 0;const a=Math.max(1,Math.round(e));this.health=Math.max(0,this.health-a),this.aggroed=!0,this.hitWobble=.16;const r=new P(this.root.position.x,this.root.position.y+this.height*.55,this.root.position.z);return this.game.ui.showDamage(r,a,{element:t,crit:n}),this.game.spawnGlow(r,Pt(t),n?1.8:1.15,.28,.7),this.game.audio.sfx(n?"crit":"hit"),this.health<=0&&this.die(i),a}die(e=null){if(this.dead)return;this.dead=!0,this.health=0,this.dying=.9,this.attacking=0,this.aggroed=!1,this.respawnTimer=this.isBoss?40+Math.random()*15:5+Math.random()*5;const t=this.root.position.clone().add(new P(0,this.height*.45,0));this.game.spawnGlow(t,Pt(this.element),this.isBoss?7:2.8,this.isBoss?1.1:.6,.95),this.isBoss&&this.game.spawnPulse(this.root.position,Pt(this.element),10,1.2),this.game.audio.sfx(this.isBoss?"death":"hit"),this.game.onEnemyKilled(this)}respawn(){this.dead=!1,this.dying=0,this.health=this.maxHealth,this.root.visible=!0,this.root.rotation.set(0,Math.random()*Ps,0),this.root.position.set(this.spawn.x,this.game.world.heightAt(this.spawn.x,this.spawn.z),this.spawn.z),this.attackCooldown=1.2,this.attacking=0,this.specialTimer=5+Math.random()*4,this.aggroed=!1,this.game.spawnGlow(this.root.position.clone().add(new P(0,.7,0)),Pt(this.element),1.6,.5,.7)}releaseAttack(e){const t=Je(this.root.position.x,this.root.position.z,e.position.x,e.position.z);if(!e.dead){if(this.game.audio.sfx(this.ranged?"magic":"swing"),this.ranged)t<this.range*1.35&&this.game.spawnEnemyProjectile(this,e);else if(t<this.range+.85){e.takeDamage(this.damage,this.element,this.def.name);const n=e.position.clone().add(new P(0,1.1,0));this.game.spawnGlow(n,Pt(this.element),1.25,.3,.7)}}}bossSpecial(e){if(e.dead)return;const t=e.position.clone(),n=this.specialKind==="volley"?"Grave Volley":"Sundering Blow";if(this.game.spawnPulse(t,Pt(this.element),4.8,1.05),this.game.audio.sfx(this.specialKind==="volley"?"magic":"thunder"),this.game.scheduleTelegraph(t,4.4,Pt(this.element),1.05,()=>{this.dead||e.dead||Je(t.x,t.z,e.position.x,e.position.z)>4.6||(e.takeDamage(Math.round(this.damage*1.45),this.element,`${this.name} · ${n}`),this.game.spawnPulse(e.position,Pt(this.element),3.2,.45))}),this.specialKind==="volley")for(let i=0;i<3;i++)this.game.after(.45+i*.22,()=>{!this.dead&&!e.dead&&this.game.spawnEnemyProjectile(this,e)})}update(e,t){if(this.dead){this.respawnTimer-=e,this.dying>0&&(this.dying-=e,this.root.rotation.z=Math.min(Math.PI*.48,this.root.rotation.z+e*3.4),this.root.position.y-=e*.18,this.dying<=0&&(this.root.visible=!1)),this.respawnTimer<=0&&this.respawn();return}this.bob+=e,this.hitWobble=Math.max(0,this.hitWobble-e*5),this.attackCooldown=Math.max(0,this.attackCooldown-e),this.specialTimer=Math.max(0,this.specialTimer-e);const n=t.position.x-this.root.position.x,i=t.position.z-this.root.position.z,a=Math.hypot(n,i),r=Je(this.root.position.x,this.root.position.z,this.spawn.x,this.spawn.z);!this.aggroed&&!t.dead&&a<this.aggroRange&&(this.aggroed=!0,this.isBoss&&this.game.onBossAggro(this)),this.aggroed&&(t.dead||a>34||r>42)&&(this.aggroed=!1);let o=0,l=this.spawn.x,c=this.spawn.z;this.aggroed?(l=t.position.x,c=t.position.z):r<.8&&(l=this.root.position.x,c=this.root.position.z);const h=l-this.root.position.x,d=c-this.root.position.z,u=Math.hypot(h,d)||1;if(this.attacking>0)this.attacking-=e,this.attacking<=0&&(this.attacking=0,this.releaseAttack(t),this.attackCooldown=this.attackInterval);else if(this.aggroed&&!t.dead&&a<(this.ranged?this.range:this.range+.9)&&this.attackCooldown<=0)this.attacking=this.windupTime,this.attackTotal=this.windupTime,this.game.spawnPulse(this.root.position,Pt(this.element),this.radius+1.1,this.windupTime);else if(this.aggroed&&!t.dead&&a>(this.ranged?this.range*.72:this.range*.7)){const f=Math.min(this.speed*e,Math.max(0,a-(this.ranged?this.range*.68:this.range*.72))),y=this.root.position.x+h/u*f,v=this.root.position.z+d/u*f;this.game.world.heightAt(y,v)>Et+.15&&(this.root.position.x=y,this.root.position.z=v,o=f/Math.max(e,1e-4))}else if(!this.aggroed&&r>=.8){const f=Math.min(this.speed*.55*e,r);this.root.position.x+=h/u*f,this.root.position.z+=d/u*f,o=f/Math.max(e,1e-4)}this.aggroed&&!t.dead?this.root.rotation.y=Fs(this.root.rotation.y,Math.atan2(-n,-i),e*8):o>.05&&(this.root.rotation.y=Fs(this.root.rotation.y,Math.atan2(-h,-d),e*7)),this.isBoss&&this.aggroed&&!t.dead&&this.specialTimer<=0&&(this.specialTimer=8+Math.random()*5,this.bossSpecial(t));const p=this.game.world.heightAt(this.root.position.x,this.root.position.z);this.root.position.y+=(p-this.root.position.y)*Math.min(1,e*14);const g=this.hitWobble>0?Math.sin(this.bob*55)*.07:0;this.root.position.x+=g*e*.4;const x=this.attacking>0?1-this.attacking/Math.max(.001,this.attackTotal):0;Z0(this.root,this.bob,o/Math.max(1,this.speed),x),this.root.scale.setScalar(this.baseScale*(1+Math.sin(this.bob*2.4)*.012+(this.attacking>0?.035:0)))}}try{const s=new Cg;window.aetherfall=s}catch(s){console.error("Aetherfall failed to start:",s);const e=document.getElementById("viewport"),t=document.getElementById("creator");t&&t.classList.add("hidden"),e&&(e.innerHTML=`
      <div style="position:absolute;inset:0;display:grid;place-items:center;padding:2rem;background:#081018;color:#e8ddc4;font-family:monospace;text-align:center;">
        <div>
          <p style="font-size:14px;letter-spacing:.18em;color:#d8b26a;">AETHERFALL COULD NOT OPEN</p>
          <p style="max-width:46ch;line-height:1.6;font-size:13px;">This browser could not create a WebGL renderer. Enable hardware acceleration or try a recent Chrome, Edge, Firefox, or Safari release.</p>
          <pre style="max-width:70ch;white-space:pre-wrap;opacity:.6;font-size:11px;text-align:left;">${String(s?.message||s)}</pre>
        </div>
      </div>`)}
