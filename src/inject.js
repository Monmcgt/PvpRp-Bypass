(function () {

if (!window.location.href.startsWith("https://pvprp.com/pack?p=")) {
	return;
}

const scripts = document.getElementsByTagName("script");
let s = scripts[scripts.length - 1].innerText.split("\n");

let t;
for (let i = 0; i < s.length; i++) {
    let a = s[i];
    if (a.includes("#step-btn-2")) {
        t = a;
        break;
    }
}

while (t.includes("\t")) {
	t = t.replace("\t", "");
}

const href = t.split("\"href\",\"")[1].split("\").addClass(")[0];

const button_2 = document.getElementById("step-btn-2");
button_2.getElementsByClassName("tooltip")[0].remove();
const r = ["gray-button", "not-allowed-button", "tooltip-trigger"];
for (let i = 0; i < r.length; i++) {
	const m = r[i];
	button_2.className = button_2.className.replace(m, "");
}
button_2.href = href;
button_2.className = button_2.className + " dowbt";

})();
