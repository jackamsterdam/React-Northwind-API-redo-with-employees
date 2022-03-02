import { Component } from "react";

interface SuggestionsProps {
	header: string
}

interface SuggestionsState {
	suggestion: string
}

class Suggestions extends Component<SuggestionsProps, SuggestionsState> {

    public constructor(props: SuggestionsProps) {
        super(props);
        this.state = {
			suggestion: ''
        };
    }

    componentDidMount(): void {
        console.log('Created')
        console.log('this.props', this.props)
        console.log('this.state', this.state)
    }

    componentDidUpdate(prevProps: Readonly<SuggestionsProps>, prevState: Readonly<SuggestionsState>) {
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
    }

    componentWillUnmount(): void {
        console.log('exited')
    }
//bind 'this' with arrow function goes up ONE level not all the way and takes the this of the class
    private makeSuggestion = () => {
        this.setState({suggestion: 'Cranberries'})
    }

    public render(): JSX.Element {
        return (
            <div className="Suggestions Box">
                <p>
                    {this.props.header}
                    <button onClick={this.makeSuggestion}> Suggest Product</button>

                    <span>Suggestion: {this.state.suggestion}</span>

                    <button onClick={() => console.log('innerTest')}>Inside function</button>
                </p>
				
            </div>
        );
    }
}

export default Suggestions;
