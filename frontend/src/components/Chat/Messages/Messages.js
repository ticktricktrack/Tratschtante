import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Messages = ({messages}) => {
  return (
    <List>
      {messages.map((message, index) => (
        <div key={'message' + index }>
          <ListItem alignItems="flex-start" key={index}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://api.adorable.io/avatars/100/foo.png" />
            </ListItemAvatar>
            <ListItemText
              primary={message.body}
            />
          </ListItem>
          <Divider key={'divider' + index } variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}

export default Messages;
