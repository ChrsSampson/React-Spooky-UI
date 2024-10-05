import t from "react";
function u({ disabled: n, onClick: o, children: e, variant: s, label: a, type: r }) {
  return a || console.warn(
    "Button: Passing an aria-label prop will allow screen readers to function better."
  ), /* @__PURE__ */ t.createElement(
    "button",
    {
      data: s,
      "aria-label": a || "Button",
      className: "spooky-button",
      disabled: n,
      onClick: o,
      type: r
    },
    e
  );
}
function p({ element: n, font: o, children: e }) {
  function s() {
    switch (n) {
      case "h1":
        return /* @__PURE__ */ t.createElement("h1", { className: "spooky-heading" }, e);
      case "h2":
        return /* @__PURE__ */ t.createElement("h2", { className: "spooky-heading" }, e);
      case "h3":
        return /* @__PURE__ */ t.createElement("h3", { className: "spooky-heading" }, e);
      case "h4":
        return /* @__PURE__ */ t.createElement("h4", { className: "spooky-heading" }, e);
      case "h5":
        return /* @__PURE__ */ t.createElement("h5", { className: "spooky-heading" }, e);
      case "sub":
        return /* @__PURE__ */ t.createElement("sub", { className: "spooky-type" }, e);
      default:
        return /* @__PURE__ */ t.createElement("p", { className: "spooky-type" }, e);
    }
  }
  const a = s();
  return (
    // @ts-ignore - data used for styling
    /* @__PURE__ */ t.createElement("div", { data: o, className: "spooky-type-container" }, a)
  );
}
function i({ type: n = "text", value: o, onChange: e, placeholder: s, label: a }) {
  a || console.warn(
    "Input: Passing an aria-label prop will allow screen readers to function better."
  );
  function r(c) {
    e(c.currentTarget.value);
  }
  return /* @__PURE__ */ t.createElement(
    "input",
    {
      className: "spooky-input",
      "aria-label": a || "Input Field",
      type: n,
      onChange: r,
      value: o
    }
  );
}
export {
  u as Button,
  i as Input,
  p as Typography
};
