const tokens = ["A", "+", "B", "*", "C"];
const steps = [
  { stack: [], output: [], message: "按「下一步」，從左至右讀取算式。" },
  { stack: [], output: ["A"], message: "A 是運算元，直接加到後序輸出。" },
  { stack: ["+"], output: ["A"], message: "堆疊是空的，將 + 放入堆疊。" },
  { stack: ["+"], output: ["A", "B"], message: "B 是運算元，直接加到後序輸出。" },
  { stack: ["+", "*"], output: ["A", "B"], message: "* 的優先順序比 + 高，將 * 放到堆疊頂端。" },
  { stack: ["+", "*"], output: ["A", "B", "C"], message: "C 是運算元，直接加到後序輸出。" },
  { stack: [], output: ["A", "B", "C", "*", "+"], message: "讀完整個算式，從堆疊頂端依序取出 * 和 +。" }
];

const demo = document.querySelector("[data-demo]");
const tokenList = demo.querySelector(".tokens");
const stack = demo.querySelector("[data-stack]");
const output = demo.querySelector("[data-output]");
const message = demo.querySelector("[data-message]");
const counter = demo.querySelector("[data-counter]");
const previous = demo.querySelector("[data-previous]");
const next = demo.querySelector("[data-next]");
const reset = demo.querySelector("[data-reset]");
const last = steps.length - 1;
let position = 0;

function render() {
  const step = steps[position];
  tokenList.replaceChildren(...tokens.map((token, index) => {
    const item = document.createElement("li");
    item.textContent = token;
    if (index + 1 === position) item.setAttribute("aria-current", "step");
    if (index + 1 < position) item.classList.add("read");
    return item;
  }));
  stack.textContent = step.stack.join(" ") || "空";
  output.textContent = step.output.join(" ") || "空";
  message.textContent = step.message;
  counter.textContent = position + " / " + last;
  previous.disabled = position === 0;
  next.disabled = position === last;
}

previous.addEventListener("click", () => {
  position -= 1;
  render();
});
next.addEventListener("click", () => {
  position += 1;
  render();
});
reset.addEventListener("click", () => {
  position = 0;
  render();
  next.focus();
});

render();
