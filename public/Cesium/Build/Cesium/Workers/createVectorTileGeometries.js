/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.123.1
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as P}from"./chunk-JRWO4A35.js";import{a as z}from"./chunk-UKZZTGS4.js";import"./chunk-LW7YJFTG.js";import{a as H}from"./chunk-Z3TOOHXE.js";import{a as Y}from"./chunk-S2ETKY43.js";import{a as j}from"./chunk-MBVQL4GM.js";import"./chunk-DUJALUGY.js";import"./chunk-E3JWUR3Y.js";import{a as W}from"./chunk-MMUM2K3W.js";import"./chunk-KYQV7GBQ.js";import"./chunk-QAZHJDBR.js";import{d as E}from"./chunk-DHJSNIID.js";import{b as d}from"./chunk-TZA2EBXA.js";import"./chunk-N2BNZIW6.js";import{a as o}from"./chunk-HCEU6S2D.js";import"./chunk-CU56QGQW.js";import"./chunk-D6INCCYP.js";import"./chunk-2M3RUB3T.js";import"./chunk-FA3XILPW.js";import"./chunk-IEHYVM5Q.js";import{e as l}from"./chunk-RT4BZSKE.js";function X(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}var J=X;var S=new o,$=d.packedLength+o.packedLength,ee=d.packedLength+2,ne=d.packedLength+o.packedLength,te=o.packedLength+1,u={modelMatrix:new d,boundingVolume:new E};function oe(e,c){let n=c*$,i=o.unpack(e,n,S);n+=o.packedLength;let r=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(r,i,r);let t=u.boundingVolume;return o.clone(o.ZERO,t.center),t.radius=Math.sqrt(3),u}function ce(e,c){let n=c*ee,i=e[n++],r=e[n++],t=o.fromElements(i,i,r,S),s=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(s,t,s);let h=u.boundingVolume;return o.clone(o.ZERO,h.center),h.radius=Math.sqrt(2),u}function se(e,c){let n=c*ne,i=o.unpack(e,n,S);n+=o.packedLength;let r=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(r,i,r);let t=u.boundingVolume;return o.clone(o.ZERO,t.center),t.radius=1,u}function ie(e,c){let n=c*te,i=e[n++],r=o.unpack(e,n,S),t=d.fromTranslation(r,u.modelMatrix);d.multiplyByUniformScale(t,i,t);let s=u.boundingVolume;return o.clone(o.ZERO,s.center),s.radius=1,u}var de=new o;function R(e,c,n,i,r){if(!l(c))return;let t=n.length,s=i.attributes.position.values,h=i.indices,a=e.positions,x=e.vertexBatchIds,y=e.indices,I=e.batchIds,p=e.batchTableColors,T=e.batchedIndices,U=e.indexOffsets,v=e.indexCounts,L=e.boundingVolumes,F=e.modelMatrix,Z=e.center,V=e.positionOffset,B=e.batchIdIndex,O=e.indexOffset,D=e.batchedIndicesOffset;for(let w=0;w<t;++w){let C=r(c,w),k=C.modelMatrix;d.multiply(F,k,k);let M=n[w],A=s.length;for(let f=0;f<A;f+=3){let m=o.unpack(s,f,de);d.multiplyByPoint(k,m,m),o.subtract(m,Z,m),o.pack(m,a,V*3+f),x[B++]=M}let b=h.length;for(let f=0;f<b;++f)y[O+f]=h[f]+V;let g=w+D;T[g]=new J({offset:O,count:b,color:P.fromRgba(p[M]),batchIds:[M]}),I[g]=M,U[g]=O,v[g]=b,L[g]=E.transform(C.boundingVolume,k),V+=A/3,O+=b}e.positionOffset=V,e.batchIdIndex=B,e.indexOffset=O,e.batchedIndicesOffset+=t}var K=new o,Q=new d;function re(e){let c=new Float64Array(e),n=0;o.unpack(c,n,K),n+=o.packedLength,d.unpack(c,n,Q)}function le(e){let c=e.length,n=0;for(let i=0;i<c;++i)n+=P.packedLength+3+e[i].batchIds.length;return n}function ae(e,c,n){let i=n.length,r=2+i*E.packedLength+1+le(c),t=new Float64Array(r),s=0;t[s++]=e,t[s++]=i;for(let a=0;a<i;++a)E.pack(n[a],t,s),s+=E.packedLength;let h=c.length;t[s++]=h;for(let a=0;a<h;++a){let x=c[a];P.pack(x.color,t,s),s+=P.packedLength,t[s++]=x.offset,t[s++]=x.count;let y=x.batchIds,I=y.length;t[s++]=I;for(let p=0;p<I;++p)t[s++]=y[p]}return t}function fe(e,c){let n=l(e.boxes)?new Float32Array(e.boxes):void 0,i=l(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,r=l(e.cylinders)?new Float32Array(e.cylinders):void 0,t=l(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,s=l(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,h=l(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,a=l(e.spheres)?new Float32Array(e.spheres):void 0,x=l(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,y=l(n)?i.length:0,I=l(r)?t.length:0,p=l(s)?h.length:0,T=l(a)?x.length:0,U=j.getUnitBox(),v=z.getUnitCylinder(),L=H.getUnitEllipsoid(),F=U.attributes.position.values,Z=v.attributes.position.values,V=L.attributes.position.values,B=F.length*y;B+=Z.length*I,B+=V.length*(p+T);let O=U.indices,D=v.indices,w=L.indices,C=O.length*y;C+=D.length*I,C+=w.length*(p+T);let k=new Float32Array(B),M=new Uint16Array(B/3),A=W.createTypedArray(B/3,C),b=y+I+p+T,g=new Uint16Array(b),f=new Array(b),m=new Uint32Array(b),q=new Uint32Array(b),_=new Array(b);re(e.packedBuffer);let G={batchTableColors:new Uint32Array(e.batchTableColors),positions:k,vertexBatchIds:M,indices:A,batchIds:g,batchedIndices:f,indexOffsets:m,indexCounts:q,boundingVolumes:_,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:Q,center:K};R(G,n,i,U,oe),R(G,r,t,v,ce),R(G,s,h,L,se),R(G,a,x,L,ie);let N=ae(A.BYTES_PER_ELEMENT,f,_);return c.push(k.buffer,M.buffer,A.buffer),c.push(g.buffer,m.buffer,q.buffer),c.push(N.buffer),{positions:k.buffer,vertexBatchIds:M.buffer,indices:A.buffer,indexOffsets:m.buffer,indexCounts:q.buffer,batchIds:g.buffer,packedBuffer:N.buffer}}var Oe=Y(fe);export{Oe as default};
