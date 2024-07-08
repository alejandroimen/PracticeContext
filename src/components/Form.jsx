import React from "react";
import Panel from "./Panel";
import Button from "./Button";

function Form(props){
    return (
        <Panel title="Welcome">
          <Button>Sign up</Button>
          <Button>Log in</Button>
        </Panel>
      );
}

export default Form;