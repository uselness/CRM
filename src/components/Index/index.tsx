import React from "react";

function Index (props: any) {
  console.log(props.location.state.num);
  return (
    <div>
      Index
    </div>
  );
}

export default Index;