import React, { FC, useCallback } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ListItemIcon, List, ListItem } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { CalendarTodayOutlined } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

interface IProps {
  onChange: (value: number) => any;
  initialValue: number;
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 120,
      maxWidth: 300,
      textAlign: 'right',
    },
  }),
);

const SelectButton: FC<IProps> = ({ onChange, initialValue }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [selectValue, setsSelectValue] = React.useState<string | number>(5);
  const [open, setOpen] = React.useState(false);

  const handleChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      setsSelectValue(event.target.value as number);
      onChange(event.target.value as number);
    },
    [setsSelectValue, onChange],
  );

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem>
        <ListItemIcon>
          <CalendarTodayOutlined />
        </ListItemIcon>
        <FormControl className={classes.formControl}>
          <Select
            labelId="controlled-open-select-label"
            id="controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={selectValue}
            onChange={handleChange}
          >
            <MenuItem value={1}>{t('filterBar.yearChoices.0')}</MenuItem>
            <MenuItem value={3}>{t('filterBar.yearChoices.1')}</MenuItem>
            <MenuItem value={5}>{t('filterBar.yearChoices.2')}</MenuItem>
            <MenuItem value={8}>{t('filterBar.yearChoices.3')}</MenuItem>
          </Select>
        </FormControl>
      </ListItem>
    </List>
  );
};

export default SelectButton;
