import { Typography } from "@material-ui/core";  //named export

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<Typography>The page you are looking for does not exist</Typography>


{/* 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=1" allow="autoplay" title="Page not Found"></iframe> */}
        </div>
    );
}

export default PageNotFound;
