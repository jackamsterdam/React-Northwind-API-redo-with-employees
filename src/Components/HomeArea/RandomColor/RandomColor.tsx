import { Component } from "react";

interface RandomColorState {
	color: string
}

class RandomColor extends Component<{}, RandomColorState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			color: ''
        };
    }

    componentDidMount(): void {
        document.title="Northwind | Redo"
    }

    doWork = () => {
        this.setState({color: this.getColor()})
    }

    getColor(): string {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        
        const color = `rgb(${r}, ${g}, ${b})`
        return color
    }

    public render(): JSX.Element {
        return (
            <div style={{backgroundColor: this.state.color}} className="RandomColor">
				<p>
                    <button onClick={this.doWork}>Click me to change color</button>
                </p>
            </div>
        );
    }
}

export default RandomColor;
