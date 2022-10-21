import * as React from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import axios from 'axios';
import { useEffect } from 'react';

const baseURL = 'https://axialis.github.io/json-kit/microjson.json';

function createItemsAMP(data: any[], popupState: any) {
  return data[0].amplifiers.map((el: any) => {
    return <MenuItem onClick={popupState.close} key={el}>{el}</MenuItem>
  })
}
function createItemsCalculators(data: any[], popupState: any) {
  return data[0].calculators.map((el: any) => {
    return <MenuItem onClick={popupState.close} key={el}>{el}</MenuItem>
  })
}

function createItemsGraph(data: any[], popupState: any) {
  return data[0].graph.map((el: any) => {
    return <MenuItem onClick={popupState.close} key={el}>{el}</MenuItem>
  })
}

export function MenuSite() {
  const [post, setPost] = React.useState<any[]>();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div style={{padding: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center'}}>
      <PopupState variant="popover" popupId="popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button variant="contained" {...bindTrigger(popupState)} style={{ width: '140px' }}>
              {Object.keys(post[0])[0]}
            </Button>
            <Menu {...bindMenu(popupState)}>
              {createItemsAMP(post, popupState)}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>

      <PopupState variant="popover" popupId="popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button variant="contained" {...bindTrigger(popupState)} style={{ width: '140px' }}>
              {Object.keys(post[0])[1]}
            </Button>
            <Menu {...bindMenu(popupState)}>
              {createItemsCalculators(post, popupState)}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>

      <PopupState variant="popover" popupId="popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button variant="contained" {...bindTrigger(popupState)} style={{ width: '140px' }}>
              {Object.keys(post[0])[2]}
            </Button>
            <Menu {...bindMenu(popupState)}>
              {createItemsGraph(post, popupState)}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>

    </div>

  );
}