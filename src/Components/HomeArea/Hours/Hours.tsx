import { Typography } from '@material-ui/core';
import css from './Hours.module.css'

function Hours(): JSX.Element {
    return (
        <div className="Hours Box">
			<Typography className={css.CoolText}>
             Opening hours: 09:00 AM - 08: 00 PM   
             {/* //not outline but overline */}
             <Typography className={css.Smaller} variant="overline">Sunday To Thursday</Typography>
            </Typography>
        </div>
    );
}

export default Hours;
