const txt = "mobiwise ";
const txt_with_spaces = txt.split("").join(" ");

const txt_rep = txt_with_spaces.repeat(1000);

document.body.setAttribute("data-bg", txt_rep);
