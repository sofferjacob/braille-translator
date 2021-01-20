import React from "react";

import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";
import g from "../assets/g.png";
import h from "../assets/h.png";
import i from "../assets/i.png";
import j from "../assets/j.png";
import k from "../assets/k.png";
import l from "../assets/l.png";
import m from "../assets/m.png";
import n from "../assets/n.png";
import o from "../assets/o.png";
import p from "../assets/p.png";
import q from "../assets/q.png";
import r from "../assets/r.png";
import s from "../assets/s.png";
import t from "../assets/t.png";
import u from "../assets/u.png";
import v from "../assets/v.png";
import w from "../assets/w.png";
import x from "../assets/x.png";
import y from "../assets/y.png";
import z from "../assets/z.png";

const characterToBraille = {
  a: a,
  b: b,
  c: c,
  d: d,
  e: e,
  f: f,
  g: g,
  h: h,
  i: i,
  j: j,
  k: k,
  l: l,
  m: m,
  n: n,
  o: o,
  p: p,
  q: q,
  r: r,
  s: s,
  t: t,
  u: u,
  v: v,
  w: w,
  x: x,
  y: y,
  z: z,
};

export default function Character({ char }) {
  return (
    <img height={260} src={characterToBraille[char]} alt={char} title={char} />
  );
}
