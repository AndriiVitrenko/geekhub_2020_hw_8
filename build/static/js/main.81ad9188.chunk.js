(this.webpackJsonplesson_8=this.webpackJsonplesson_8||[]).push([[0],{12:function(A,n,e){},16:function(A,n,e){"use strict";e.r(n);var c=e(0),s=e(1),a=e.n(s),t=e(6),r=e.n(t),i=(e(12),e(3));function v(A){var n=A.date;return Object(c.jsx)("div",{className:"time",children:Object(c.jsxs)("time",{children:[n.hours<10?"0".concat(n.hours):n.hours,"\xa0:\xa0",n.minutes<10?"0".concat(n.minutes):n.minutes,"\xa0:\xa0",n.seconds<10?"0".concat(n.seconds):n.seconds,"\xa0\xa0",n.parametr?n.parametr:""]})})}function m(A){var n=A.format,e=A.onClickHandler;return Object(c.jsxs)("div",{className:"switch",children:[Object(c.jsx)("span",{className:"24"===n?"24 active":"24",onClick:function(){return e("24")},children:"24-hours"}),Object(c.jsx)("span",{className:"12"===n?"12 active":"12",onClick:function(){return e("12")},children:"12-hours"})]})}function l(A){var n=A.country,e=A.onClickHandler;return Object(c.jsxs)("ul",{className:"country_list",children:[Object(c.jsxs)("li",{className:"UA"===n?"active":"",onClick:function(){return e("UA")},children:["1. ",Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABlCAMAAAB3G4FZAAAAD1BMVEUAW7v/1QAAUsGln3r/2gCJ1VxiAAAAWElEQVRoge3OQQ3AMAwAsXQbf8zDcL+oshF4BgAAAAAAAOByz07z7jTfTnN28mq8Gq/Gq/FqvBqvxqvxarwar8ar8Wq8Gq/Gq/FqvBqvxqvxarwar8ar+QFHrSI3FeA5FAAAAABJRU5ErkJggg==",className:"flag",alt:"flag of this country"}),Object(c.jsx)("p",{className:"country_name",children:"Ukraine"})]}),Object(c.jsxs)("li",{className:"GB"===n?"active":"",onClick:function(){return e("GB")},children:["2. ",Object(c.jsx)("img",{src:"data:image/png;base64,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",className:"flag",alt:"flag of this country"}),Object(c.jsx)("p",{className:"country_name",children:"Great Britain"})]}),Object(c.jsxs)("li",{className:"US"===n?"active":"",onClick:function(){return e("US")},children:["3. ",Object(c.jsx)("img",{src:"data:image/png;base64,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",className:"flag",alt:"flag of this country"}),Object(c.jsx)("p",{className:"country_name",children:"USA"})]}),Object(c.jsxs)("li",{className:"AU"===n?"active":"",onClick:function(){return e("AU")},children:["4. ",Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAACVBMVEXtKTn////sABjQ6c2jAAAAs0lEQVR4nO3csQ3AMAzAMLf/H93dmjoFAcgTdIBmAAAAAAAAAAAAAAAAAAAAAH562eZh06Q0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT8rWo06sRAAAAAAAAAAAAAAAAAAAA4D4fZdRF1FegWJQAAAAASUVORK5CYII=",className:"flag",alt:"flag of this country"}),Object(c.jsx)("p",{className:"country_name",children:"Australia"})]}),Object(c.jsxs)("li",{className:"NZ"===n?"active":"",onClick:function(){return e("NZ")},children:["5. ",Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAA5FBMVEUBIWn////IEC4AAF0AG2fEAA3HACT35ufYc3zGABrosrfHACYABWHc3eQAAFmlqb3EAAD02Ny8wdHUV2aCGU/EAAbRDigrPXgAFmUAAGDad4Lkp6wxRH0pO3YAHmglOngAE2QADmPSUF+1usxibZXFABMAAFT/7/BbZ5LQQ1SZobrVX23PPU9KWIjy9flWYo8QK2/hmJ95gqPl6fAAAEsNKW7LJj74/f+OlK6WeJNBUITnq7LzztPR1+LXaXbvwcbOAAB1f6LOLUbfi5TlnqbJGjXmhYzUABWTZIR8ADiccIyQmLOPzU1LAAAJRUlEQVR4nO2de3uiOhCHHQGV0irq8VRdixdqqVZpT91e1rbr9rR7bv3+3+cQFKiKkEAWUef9p8XnISQ/M5MJJpPMVRlW0M8EMUOPcEJuOpKzn5GPyIcnAkM5onCmk5vyTWVRiFLrlRsMJWwDRaquCVhpMQjIRz5RaFVs8QpSzhGPVKwYpU0JYtXTT8BTagF5yCcKp3PxvrviLSqVfvmcL3pFQFoTji+fZbaLnldb6nm7Ip9VXzWygHHl88RT18RLv3yyT52ZfGA8+Tyft97zdkE+o9lfcTeMAsaRz2fAWKlE2uUjkYIU1APDBpHo8rkDxkbxdkE+AKPp53ZcAduBAkaVTxTaqz7PxwGnXb55G4xmLaANgT0wmnxeqBL8zbEE8NvAaUdkHxhFvk1BMqPfSAVuR4jmA9nlo/F5uyIewRMwgg9klc/zef6hyq6JR3DaFMEHssnn9bwYo1UKcYJ/oxloUes+kEW+sCB58RC2Vz4pwTPhwEFktQfSy7dvPm8VT0AGt0QrnydebS/FI7jzd/pBhE4+uiB5N832M94gQhnG0MiXmgGj/ovLz1D7QGcQCZcvPT6vfp6AfmyBdJh86REvk2mYyfx2whBIB8vnEySzTqr5Ub+G6yS6X4YhkC4GyFdMi8+b09BBT+ynO8pA+iZAvhuaFwPJjbYNM5+Q9drQDSLmRvnMFfG2HOeJ11CFMd/HHQfSuLhZ/HZdk+dIau95VYNN8oH9Pk9a3OnT8/Sbi0ZwBXg2taEbqsHZekthDPW5Dl9c/vDRb4N85T+829bEA30Y+nQO+mniAsF8V99NwbnU4hc9f1nPgU29Ly7xX9ZrZ9Mzm/YlDHIDuGzPL6dnPPTj1MwUyzcfvwiGlJUM56Jyg/LRoAm3YFQHvV5vZNVsZP0dVA24FdB4KTluT6CpKvOVW4qiNmHS5jQo5fnwnluSL/fOp1iDZYnbZkShBDN5IZ88gxK3aEniw7J6ln58iv3BxcIshPMHY0D0UwbGwyWfL4WQTTW/85IvczyFK1u+K5hyjCa3LVAwHOUbQj+bs2ZPfRiifMwIkyNZujKuJPlows92D0U+8RSq6hOcwJNahTN+895tCxQMN/m6Q8jm4fXiFfIKDLucSj0Y+YRJ3g72SAiY52i92xYoGF7yiW1YBHskBAR+C7e2LVAwvOSzbPfa6XLCNUfr3bZAwXCTr5TpuBedTAnlY6P7uSANh46UsG2BgkH5YpF6+XJ8UFbarfApVk67fAUuNHvL+im9Jp+CO4mKITLHg5zeCqf6bTMt9fNrVv04NXMv5DvWmX8Y5dTMvZBPMJlnw5yauQ/yiS2AFqP1cmrmPsh3PDQM1tlwMZiLr6K+2qRyVXVxMklQyPc88G5r5sknuvj1IuT5v0Yof4TJF65vot0lVsviSYsgJScV8ky9r1ytubfOBUzFQnqxbtM9hV4Vzrrzq/jVohNPD1jf59Nx3dv7nAWMvGxUHL+eEy51UPugX9oXr3EXsjnLSzd0H7WwaP3XAPm+toKKkJr2ghM+i0ujr/rW7pxKHsnybPFvJRNrvuMsLV1uuboqntXywLXNYd9B0y0mTmUJwgtzyOugFV8hf69ac0SrSrmc+mcezmOtgPE3W7fVtYV49rLakJX1YUVxMmFNhBhrAbs3J/Cm2jVS1Dc4uYvzQpDO5zktDt3X4ewD3FAcHx/YeQUzxjAtCkN4vif1uS/DME5N/M12ree5WyspdhWFCOj4wDhrxIWKwRzyLhdwDgVivE2IswKGdsDwWkq1p82/Q6ueCcccRLRjaBqxVvJ2HyGnyLIiw21kyw1rZcHH01PuqAzp1Go8E+6cg/IUK+QVXmbqfd4aQZ5fIhbD5vPc59Lu5w0ZRCIF0u6q70pZrcJpPfKqb60OVwWYTKDwHSLFLGGt8xePaTd56CBiMAp4Nz1r29zBW64GpZv5VavFLED3Fo5AFxq69ee2w3p3BJ/nwJTLwF/AWlQf2Bm6pdx/mihOpsweQHgBEuxp1ggCzNZLHyT7PJgtkwZlIE05CjdaE3j7czAYjKwCfpK/ozKUiszqWWHjS8YeMrp3J6Axdd5oPs+BOY8L10C6Tsytn5sv+1aUWg8eriO4/s5jqag51SuxWC+leBvTCEXIIhTyyD5LD9SEVzAGi6dL7/CiMbTdK+XzSvvjNn3vYwySfQqIksOKMpBu03SkbtsyYHtp+s8yPBajTVa1jRfB+LxTohkwPCJmUKMMpGk28InFh3f78Tn4SDrjWnjPC7GhyPn7qAJpGjnEaxgp1owh258xpTrmwUb7CTfbOTGyR1L4QBr5yEZTeWQ8SbnvcJfwsgT/r55avJi5S8MC6b86FE0gG03fYAL5ewke+a09o8LXbr4zxA4xM+f6C+j4wD5FZ6qPYfRsBXstE65mUSesUVn32oFB8jqx8zYHBdI0K6waJTAexiRphw5l4LPLmZpNPo964skha/jmQJpGvqIJlXrHroo144r+uikSMcXjlLN+kw+kkE8ce3tzrRlXwmOvVcsfvytz5IJBO2B4LOTrK5/pM5+Y4Cvg1d/hN3Yep15wKApDLpvEqfnn399cvukk+wLjG8vuI7np22/LfCMfsg2DlgmvJoLQ/6P49bGzVN1usr7vc/3qdu4P1tcVXXJTZ+XDDvmQ1Q2Ja3lIEkqZhCAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiDIFsH1gnFI5oTUvUUwk960tU8keELqPpLoCan7R8InpO4Z9TE5IRWtNyK/4oTUA0Iwv6hfcOxlwz1ftjO2T0gdd7ieMLvnaNPWgrZun5Cqt50PpqhfKOLUdLcYPslZ+cm9MtlzDR0g5GynZ3KsbK/3M5vN/rT/I9vPU5CzdycQLh+MEdkwa281tv5KI67HfO473cwLvNXcvdq1NydhFUKFRlKTOmfg5p7hI2KuoYNFmJr5/jw5R96couGyUpws0i3IR5OkMzXtPmKbnG6ck3PkfGN+ZyweCt0hqFmpAIVaVoUPHDcYESYzSZ7BC8zk2ozrqRKHgGW7VRLsXZAQsIrWy0j3A+bBHgkB/0LrZYTk6vmwcw1pwgdbfh4ko92A6eYaakxNSDbV0K7THVYa3kv6eqPC8XTyA0AcN5bO523EPUrnwFhVC9VDEARBEARBEARBEARBEARBkD3hf9MrIeqtD/sXAAAAAElFTkSuQmCC",className:"flag",alt:"flag of this country"}),Object(c.jsx)("p",{className:"country_name",children:"New Zeland"})]}),Object(c.jsxs)("li",{className:"EG"===n?"active":"",onClick:function(){return e("EG")},children:["6. ",Object(c.jsx)("img",{src:"data:image/png;base64,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",className:"flag",alt:"flag of this country"}),Object(c.jsx)("p",{className:"country_name",children:"Egypt"})]})]})}var o=e(2),j=e.n(o);var f=function(){var A=Object(s.useState)("24"),n=Object(i.a)(A,2),e=n[0],a=n[1],t=Object(s.useState)("UA"),r=Object(i.a)(t,2),o=r[0],f=r[1],g=j.a.tz.zonesForCountry(o)[0],u=Object(s.useState)(j.a.tz(g).format()),C=Object(i.a)(u,2),k=C[0],y=C[1],b=k.match(/\d{2}:\d{2}:\d{2}/)[0].split(":"),w={hours:+b[0]>12&&"12"===e?+b[0]-12:+b[0],minutes:+b[1],seconds:+b[2],parametr:("12"===e&&+b[0]<12?"AM":"")||("12"===e&&+b[0]>=12?"PM":"")||""},U=setTimeout((function(){y(j.a.tz(g).format()),clearTimeout(U)}),1e3);return Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsxs)("div",{className:"clock",children:[Object(c.jsx)(v,{date:w}),Object(c.jsx)(m,{format:e,onClickHandler:function(A){a(A)}})]}),Object(c.jsx)(l,{country:o,onClickHandler:function(A){f(A)}})]})},g=function(A){A&&A instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(n){var e=n.getCLS,c=n.getFID,s=n.getFCP,a=n.getLCP,t=n.getTTFB;e(A),c(A),s(A),a(A),t(A)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.81ad9188.chunk.js.map