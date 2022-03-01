import { Box, Typography } from "@material-ui/core";

function Desserts(): JSX.Element {
    const allDesserts = [
        {id: 1, name: "Ice Cream"},
        {id: 2, name: "Pavlova"},
        {id: 3, name: "Eclair"},
        {id: 4, name: "Apple Pie"}
    ]
    return (
        <div className="Desserts Box">
			{allDesserts.map(item=>  <span key={item.id}>{item.name} | </span>)}
            <br/>
			{/* {allDesserts.map(item=>  <Box component="span" key={item.id}>{item.name} | </Box>)} */}
            {/* {allDesserts.map(item => <Typography variant="caption" key={item.id}>{item.name} | </Typography>)} */}
            {allDesserts.map(item => <Typography variant="overline" key={item.id}>{item.name} | </Typography>)}
            {/* We want a span so we used overline or caption */}
        </div>
    );
}

export default Desserts;

// פונקצית מפ אומרת לי שמע אני הולך למפות את המערך הזה למערך אחר אחזיר לך מערך אחר לא את המקורי כאשר במערך האחר יש אותו מספר פריטים כמו המערך המקורי אבל עשיתי  איזהשי מניפולציה על כל אחד מהפריטים של המערך המקורי. תגיד לי איזה מניפולציה אתה רוצה שאעשה על כל אחד מה פריטים של המערך המקורי ואני אחזיר לך מערך כשכל פריט עבר את המניפולציה אנחנו מפינו כל פריט מקורי לפריט חדש למערך חדש ואז אחזיר לך אמ המערך החדש הזה
