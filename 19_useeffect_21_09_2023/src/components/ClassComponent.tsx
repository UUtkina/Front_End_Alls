import React, { Component } from "react";

export default class ClassComponent extends Component {
   
   
    componentDidMount(): void {
       // console.log("komponemt smontirovan");
    }


    componentDidUpdate(
        prevProps: Readonly<{}>,
        prevState: Readonly<{}>,
        snapshot?: any
    ): void { }

    componentWillUnmount(): void {} ;
    
    
    render() {
        return <div>ClassComponent</div>;
    }
}
