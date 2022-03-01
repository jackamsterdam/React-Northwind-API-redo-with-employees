import { Typography } from "@material-ui/core";

function Discount(): JSX.Element {
    const discount = 10   //not good only happens once 
    return (
        <div className="Discount Box">
			<p>Only Now {discount}% discount on all products!</p>
			<Typography variant="h6">Only Now {discount}% discount on all products!</Typography>
			<Typography variant="subtitle1">Only Now {discount}% discount on all products!</Typography>
			<Typography variant="subtitle2">Only Now {discount}% discount on all products!</Typography>
			<Typography variant="body1">Default Typography is body1</Typography>
			<Typography variant="body2">Only Now {discount}% discount on all products!</Typography>
			<Typography variant="body2">Only Now {discount}% discount on all products!</Typography>
            {/* span: */}
			<Typography variant="overline">Only Now {discount}% discount on all products!</Typography>
			<Typography variant="caption">Only Now {discount}% discount on all products!</Typography>

{/* span with display block */}
            <Typography variant="overline" display="block"> My text will be on the next line </Typography>
            <Typography variant="caption" display="block"> My text will be on the next line </Typography>

        </div>
    );
}

export default Discount;


{/* // The actual React/HTML component to be used is determined by the variant prop. So a variant of h1 renders a <h1>, and so on for h2, h3, h4, h5 and h6. Then, you have subtitle1 and subtitle2 which are variations of h6, and body1 and body2 which are variations of <p> paragraph with font size 16px and 14px respectively. There are also overline and caption caption variants which are both smaller font sized <span> components.

// Typography Usage
// The default <Typography> with no props will render a body1 variant, which is just a <p>. So: <Typography> my text </Typography> is just like rendering <p> my text </p> except Material-UI will apply additional CSS. To render an <h1>, simply pass "h1" as the variant to the <Typography component:

Typography Line-break
To line break with Typography, set the display prop to block, which will break the line before the text inside. Example: <Typography display="block"> My text will be on the next line </Typography. This may apply if you are using the overline or caption variants, which are <span> and so are normally display inline-block. */}