import React, { Component } from 'react';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      maxWidth: 354,
    },
    media: {
      height: 140,
    },
  });

class CardComponent extends Component {
    
    state = {
        user: ''
    }

    componentDidMount(){
        axios
          .get(`https://api.github.com/users/erferguson`)
          .then(result => {
            console.log('1st', result);
            this.setState({user: result.data});
          })
          .catch(error => {
            console.log(`Error, oh to error: ${error}`)
          })
      }
    
      render() {
          console.log(this.state)
          
          return (
              <>
              <Card className='user-card'>
                <CardActionArea>
                  {/* <CardMedia className={useStyles.media}/>  */}
                    <CardContent className='card-content'>
                        <Typography>
                            <img src = {this.state.user.avatar_url} />
                            <p>Name: {this.state.user.name}</p>
                            <p>About: {this.state.user.bio}</p>
                            <p>Location: {this.state.user.location}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              </>
          )
      }
}
export default CardComponent;