'use client';
import { useEffect,useState } from 'react';
export default function ScrollProgress(){const[p,setP]=useState(0);useEffect(()=>{const f=()=>{const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;setP(max?window.scrollY/max*100:0)};window.addEventListener('scroll',f,{passive:true});f();return()=>window.removeEventListener('scroll',f)},[]);return <div aria-hidden className="fixed left-0 right-0 top-0 z-[60] h-0.5 bg-transparent"><div className="h-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,.55)]" style={{width:`${p}%`}}/></div>}
