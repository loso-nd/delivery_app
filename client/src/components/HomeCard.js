import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(6),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: '30px'
    },
  }));
  
  // import styled from 'styled-components'

// const Card = styled.div`
//   padding: 1em;
//   @media (min-width: 1375px) {
//     width: 31%;
//   }
// `;

// const Image = styled.img`
//   max-width:100%;
// `;
// or less ideally
//import { Card } from 'react-bootstrap';

function ItemCard({ company }) {
        const classes = useStyles();

        return (
          <div>
            <Grid container spacing={6}>
              <Grid item={12}>
                <Paper className={classes.paper}>{company.company_name}
                <p>Speciality: {company.speciality}</p>
                <p>Rating: {company.ratings}</p></Paper>
              </Grid>
            </Grid>
        </div>


    );
}

export default ItemCard;
