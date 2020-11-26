import React, { MouseEvent, ComponentType } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface DropdownMenuProps {
    id: string;
    control: ComponentType<{
        onClick?:  (e: MouseEvent<HTMLElement>) => void; 
    }>;
    menuItems: {
        content: string;
        handleClick?: (e: MouseEvent<HTMLElement>) => void; 
    }[];
}

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props: MenuProps) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

const DropdownMenu = ({ id, control : ControlComponent, menuItems }: DropdownMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose =  () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ControlComponent style={{ fontSize: 30 }} aria-controls={id} aria-haspopup="true" onClick={handleClick}/>
      <StyledMenu
        id={id}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map(({ content, handleClick }) => (
             <MenuItem onClick={(e) => { handleClick(e); handleClose(); }}>{content}</MenuItem>
        ))}
      </StyledMenu>
    </>
  );
}

export default DropdownMenu;