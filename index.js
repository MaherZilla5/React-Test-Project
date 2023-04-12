


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "Hello there",
            liveText: "",
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleClick(){
           this.setState(state => {
                    if(state.text === "Hello there"){
                        return {text: "You Clicked!"}
                    }else{
                        return {text: "Hello there"}
                    }

           })
    }

    handleCheck(event){
           this.setState({
            liveText: event.target.value
           })
    }

    increment(){
        this.setState( state => ({
            counter: this.state.counter + 1
        }))
    }
    decrement(){
       this.setState(state => ({
        counter: this.state.counter - 1
       }))
    }
    reset(){
          this.setState({
            counter: 0
          })
    }
    render(){
        return(

            <div id = "site">
                <div id = "function">

                <h1>{this.state.text}</h1>
                <button onClick={this.handleClick}>Click</button>
                <input value = {this.state.liveText} onChange={this.handleCheck}/>
                <h1>{this.state.liveText}</h1>
                <p>This site is simply a test site for establishing functionality in a react site while connecting a css page to it.</p>
                <ButtonClass text={"Increment"} value = {this.state.counter} click={this.increment}/>
                <ButtonClass text={"Decrement"} value = {this.state.counter} click={this.decrement}/>
                <ButtonClass text={"Reset"} value = {this.state.counter} click={this.reset}/>


                <h1>{this.state.counter}</h1>

                <div id = "testBlock"></div>

                </div>


            </div>
        );
    }
}


class ButtonClass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            <button onClick={this.props.click} value={this.props.value}>{this.props.text}</button>
        </div>);
    }
}



















ReactDOM.render(<App/>, document.getElementById("root"));