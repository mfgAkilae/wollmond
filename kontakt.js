(() => {
  const m = [atob("c3VwcG9ydA=="), atob("YWtpbGFlLmF0")].join("@");
  const p = [atob("KzQz"), atob("Njc3"), atob("NjM2ODMwMTM=")].join(" ");
  const tel = p.replace(/\s+/g, "");

  for (const el of document.querySelectorAll(".k-mail")) {
    const a = document.createElement("a");
    a.href = "mailto:" + m;
    a.textContent = m;
    el.replaceChildren(a);
  }

  for (const el of document.querySelectorAll(".k-tel")) {
    const a = document.createElement("a");
    a.href = "tel:" + tel;
    a.textContent = p;
    el.replaceChildren(a);
  }
})();
