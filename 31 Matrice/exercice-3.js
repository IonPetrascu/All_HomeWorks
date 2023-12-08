const styles = [
  { name: "color", value: "red" },
  { name: "font-size", value: "16px" },
  { name: "font-weight", value: 400 },
  { name: "text-decoration", value: "underline" },
  { name: "cursor", value: "pointer" },
];

function func(styles, text) {
  document.write(`<p style=`);

  styles.forEach((style) => {
    document.write(`${style.name}:${style.value};`);
  });
  document.write(`>${text}</p>`);
}
func(styles, "hello every ho see this text ");
