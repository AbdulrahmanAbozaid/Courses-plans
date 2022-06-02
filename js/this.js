/**=============copying to clibboard script================= */
const btnToggle = document.querySelectorAll('.btn_toggle');
const code = document.querySelectorAll('.code');

//array of btns
const [btn1, btn2, btn3] = ['btn_toggle1', 'btn_toggle2', 'btn_toggle3'];

//fn to copy to clipboard
function copyToClb(i) {
    navigator.clipboard.writeText(code[i].innerText);
};

//event
btnToggle.forEach((item) => {
        item.onclick = () => {
            item.setAttribute('title', 'copied');
            if (item.id == btn1) {
                copyToClb(0);
            } else if (item.id == btn2) {
                copyToClb(1);
            } else {
                copyToClb(2);
            };
        };
    })
    // console.log(code[0].innerHTML);

/**========================================================= */