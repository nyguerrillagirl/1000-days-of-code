import React from "react";

class AppInner extends React.Component {
    componentWillUnmount() {
        console.log("This AppInner component is being unmounted");
    }
    render() {
        return <div>This is the inner component</div>;
    }
}

export default AppInner;