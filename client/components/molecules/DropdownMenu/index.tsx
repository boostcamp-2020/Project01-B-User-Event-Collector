import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { DropdownMenuProps } from 'interfaces/props';
import useDropDownAction from 'hooks/useDropDownAction';
import PlaylistModal from '@components/organisms/PlaylistModal';
import ComponentInfoContext from 'utils/context/ComponentInfoContext';
import apiUrl from 'constants/apiUrl';
import { addToPlaylist } from 'utils/apis';

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
    const [playlistModal, setPlaylistModal] = useState({ visibility: false, data: [] });
    const componentInfo = useContext(ComponentInfoContext);
    const user = useSelector((state) => state.user);

    const [handleClick, handleClose] = useDropDownAction({
        userId: user.id,
        setAnchorEl,
        state: { ...state, setPlaylistModal },
    });

    const removePlaylistModal = () => {
        setPlaylistModal({
            visibility: false,
            data: [],
        });
    };
    const onClickHandler = (e) => {
        let type = undefined;
        if (componentInfo.data.type === 'magazine') type = 'playlist';
        else if (componentInfo.data.type === 'news') type = 'album';
        else type = componentInfo.data.type;

        const playlistId = e.currentTarget.firstChild.innerText;
        const url = `${apiUrl.playlist}/${type}`;
        const reqBodyData = {
            data: {
                id: parseInt(playlistId),
                data: [componentInfo.data.id],
            },
        };
        addToPlaylist(url, reqBodyData);
        removePlaylistModal();
    };
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
                {menuItems.map(({ content }, idx) => (
                    <MenuItem
                        key={`${id}_${idx}`}
                        onClick={(e) => {
                            handleClick(e);
                            handleClose(e);
                        }}
                    >
                        {content}
                    </MenuItem>
                ))}
            </StyledMenu>
            <PlaylistModal
                visibility={playlistModal.visibility}
                data={playlistModal.data}
                handleClick={onClickHandler}
                onClickFunc={removePlaylistModal}
            />
        </>
    );
};

export default DropdownMenu;
