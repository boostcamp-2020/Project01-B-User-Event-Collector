import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { DropdownMenuProps } from '@interfaces/props';
import useDropDownAction from '@hooks/useDropDownAction';

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

const DropdownMenu = ({ id, control: ControlComponent, menuItems, children, state }: DropdownMenuProps) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [handleClick, handleClose] = useDropDownAction({ anchorEl, setAnchorEl, state });
    return (
        <>
            {ControlComponent && (
                <ControlComponent
                    style={{ fontSize: 30 }}
                    aria-controls={id}
                    aria-haspopup="true"
                    onClick={handleClick}
                />
            )}
            {!ControlComponent && (
                <span aria-controls={id} aria-haspopup="true" onClick={handleClick}>
                    {children}
                </span>
            )}
            <StyledMenu id={id} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {menuItems.map(({ content }) => (
                    <MenuItem
                        onClick={(e) => {
                            handleClick(e);
                            handleClose(e);
                        }}
                    >
                        {content}
                    </MenuItem>
                ))}
            </StyledMenu>
        </>
    );
};

export default DropdownMenu;
