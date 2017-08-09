/**
 * Created by Moritz on 09.08.2017.
 */
const t=require('microtime');
const t0 = t.nowDouble();
const m1 = require('mathjax-node');
const t1 = t.nowDouble();
const m2 = require('mathoid-mathjax-node');
const t2 = t.nowDouble();
console.log("MathJax-node loaded in " + (t1 - t0) + "s");
console.log("mathoid-MathJax-node loaded in " + (t2 - t1) + "s");
