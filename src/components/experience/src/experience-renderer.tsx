import React from 'react';
import { ExperienceCardRenderer } from './experience-card-renderer';
import { IExperienceRendererProps } from './experience-interface';
import { Scroll } from 'components/scroll';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import experienceStyle from './style/experience-style';
import Grid from '@material-ui/core/Grid';

export const ExperienceRenderer: React.FC<IExperienceRendererProps> = ({
  experiences
}) => {
  const theme = useTheme();
  const styles = experienceStyle(theme);

  const composedClass = [styles.experience, 'experience-page'].join(' ');

  const areExperiencesVisible = experiences?.length > 0;

  return (
    <Box className={composedClass}>
      {areExperiencesVisible ? (
        <Box className={styles.main}>
          <Grid container className={styles.experiencesContainer}>
            {experiences.map((exp, index) => (
              <ExperienceCardRenderer key={index} experience={exp} />
            ))}
          </Grid>
        </Box>
      ) : null}
      <Box className={styles.toTopContainer}>
        <Scroll />
      </Box>
    </Box>
  );
};
