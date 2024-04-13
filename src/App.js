import React, { Children } from "react";

function SwitchComponent({ children, value }) {
  let cases = [];
  let defaults = [];

  Children.forEach(children, (e) => {
    if (e.type.name === "CaseComponent") {
      if (typeof e.props.value === "function" && e.props.value(value)) {
        cases.push(e);
      } else if (e.props.value === value) {
        cases.push(e);
      }
    } else if (e.type.name === "DefaultComponent") {
      defaults.push(e);
    }
  });

  return cases.length > 0 ? cases : defaults;
}

function CaseComponent({ children }) {
  return <>{children}</>;
}

function DefaultComponent({ children }) {
  return <>{children}</>;
}

function App() {
  return (
    <SwitchComponent value="36">
      <CaseComponent value={(e) => e > 20}>
        <h1>Function hun main</h1>
      </CaseComponent>
      <CaseComponent value="10">
        <h1>10 is the value</h1>
      </CaseComponent>
      <CaseComponent value="20">
        <h1>20 is the value</h1>
      </CaseComponent>
      <CaseComponent value="30">
        <h1>30 is the value</h1>
      </CaseComponent>
      <CaseComponent value="40">
        <h1>40 is the value</h1>
      </CaseComponent>
      <DefaultComponent>
        <h1>Default hun main</h1>
      </DefaultComponent>
    </SwitchComponent>
  );
}

export default App;
