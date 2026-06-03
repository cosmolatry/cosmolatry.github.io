/* make thumbnail look nicer */
// if (/screenjesus/i.test(navigator.userAgent)) {
//   document.addEventListener("DOMContentLoaded",()=>{
//     document.documentElement.style.backgroundColor = "black";
//     document.documentElement.style.color = "white";
//     document.documentElement.style.fontSize = "2rem";

//     const h1 = document.querySelector('h1');
//     const container = h1.parentElement;

//     if (!h1) return;

//     // 1. Force the header to stay on one line to measure its true width
//     h1.style.whiteSpace = 'nowrap';
//     h1.style.display = 'inline-block';

//     // 2. Calculate the ratio between the container and the current text width
//     const containerWidth = container.clientWidth;
//     const textWidth = h1.offsetWidth;
//     const currentFontSize = parseFloat(window.getComputedStyle(h1).fontSize);

//     // 3. Apply the new font size mathematically
//     // New Size = (Container Width / Text Width) * Current Size
//     const idealSize = (containerWidth / textWidth) * currentFontSize;

//     // 4. Set the size (minus a small buffer to prevent rounding overflows)
//     h1.style.fontSize = (idealSize * 0.95) + 'px';
//   });
// }

/* thumbnail replacement */
// if (/screenjesus/i.test(navigator.userAgent)) {
//     document.addEventListener("DOMContentLoaded",()=>{
//         document.body.style.margin="0";
//         document.body.innerHTML=`
//             <div style="
//             position:fixed; inset:0;
//             display:flex; align-items:center; justify-content:center;
//             background:#f6f0e6;
//             /* padding-top:0 6vmin; */
//             z-index:999999;
//             ">
//             <img src="test.png" style="
//             width:100%;
//             height:100%;
//             object-fit:contain;
//             /* margin-top:-3vmin; */
//             ">
//             </div>
//             `;
//     });
// }

if (/screenjesus/i.test(navigator.userAgent)) {
  document.addEventListener("DOMContentLoaded",()=>{
    document.documentElement.style.backgroundColor = "#1F004F";
    document.documentElement.style.color = "#F4F5F0";
    document.querySelector('body').style.color = "#F4F5F0";
    document.querySelector('main').style.backgroundColor = "black";
    document.querySelectorAll('a').forEach(link => {
        link.style.color = "greenyellow";
    });
    // Select all elements with the class
    const digits = document.querySelectorAll('.svg-digit');

    // Loop through each element and apply the filter
    digits.forEach(svg => {
      svg.style.filter = 'invert(1)';
    });
  });
}