import React, { memo } from 'react';
import { Theme } from 'models';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import myNameStyle from './style/my-name-style';
import Typography from '@material-ui/core/Typography';

export const MyNameRenderer: React.FC = memo(() => {
  const theme = useTheme() as Theme;
  const styles = myNameStyle(theme);
  const { formatMessage } = useIntl();

  return (
    <Typography className={styles.name} variant='h2'>
      {formatMessage({ id: 'home.nikitaKuznetsov' })}
    </Typography>
  );
});

MyNameRenderer.displayName = 'MyNameRenderer';
