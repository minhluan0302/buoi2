function Hola() {
  return (
    <span>
      <button
        onClick={() => {
          hiAll("hola");
        }}
      >
        Hi All
      </button>
      <button
        onClick={() => {
          hiYou("hello");
        }}
      >
        Hi you
      </button>
    </span>
  );
}
const hiAll = () => {
  alert("hello everyone");
};
const hiYou = (name) => {
  alert("Hello " + name);
};
export { Hola, hiAll, hiYou };
