
function Discount(): JSX.Element {
    const discount = 10   //not good only happens once 
    return (
        <div className="Discount Box">
			<p>Only Now {discount}% discount on all products!</p>
        </div>
    );
}

export default Discount;
