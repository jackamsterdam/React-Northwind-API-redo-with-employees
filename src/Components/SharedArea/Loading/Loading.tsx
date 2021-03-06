import "./Loading.css";
import loadingSource from '../../../Assets/Images/loading-loop.gif'

function Loading(): JSX.Element {
    return (
        <div className="Loading">
			<img src={loadingSource} />
        </div>
    );
}

export default Loading;
