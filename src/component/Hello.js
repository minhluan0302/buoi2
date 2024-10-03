function Hello() {
  const preson = {
    name: "Peter",
    theme: {
      backgroundColor: "green",
      color: "red",
    },
  };
  return (
    <>
      <div style={preson.theme}>
        <h1>Xin chào : {preson.name}</h1>
      </div>
      <div>Chúc bạn thành công với react</div>
    </>
  );
}
function HelloPersion({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}
export { Hello, HelloPersion };
