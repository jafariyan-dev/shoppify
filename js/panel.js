const panelButtonEl = document.querySelector(".panelbutton");
const panelToolEl = document.querySelector(".paneltool");
panelButtonEl.addEventListener("click", () => {
  if (panelToolEl.style.right = "-325px") {
    panelToolEl.style.right="0px";
  }
  else if (panelToolEl.style.right = "0px") {
    panelToolEl.style.removeProperty("right");
    panelToolEl.style.right="-325px";
  }
});
