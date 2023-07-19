import { Grid } from '@mui/material';
import { AppLink, AppIcon } from '../../components';
import FinalMessage from '../../components/FinalMessage';
import ButtonsSection from '../components/Buttons';
import TagsSection from '../components/Tags';
import TypographySection from '../components/Typography';
import IconButtonsSection from '../components/IconButtons';
import AlertsSection from '../components/Alerts';
import AppSubjectCard from '../../components/AppSubjectCard';

/**
 * Renders Welcome page/view
 * Url: /welcome and /
 */
const HomeView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FinalMessage title="Welcome to _TITLE_">
          <AppSubjectCard
              imageUrl="https://media.istockphoto.com/id/1193842936/photo/mobile-communication-concept-global-communication-network.webp?b=1&s=170667a&w=0&k=20&c=oHUUjJBFUM47PBu24btnPFkPiZUd1Cs2jG_2mV4oGds="
              content="Lorem ipsum dolor sit amet consecutar"
              title="Lorem ipsum"
              buttonLabel="Coucou"
          />
          <p>
            This <AppLink href="https://react.dev/">React</AppLink> application is built using{' '}
            <AppLink href="https://mui.com/">Material UI</AppLink> components.
          </p>
          <p>
            The project is <AppLink href="https://github.com/karpolan/react-mui-pro-starter">Open Source</AppLink> and
            contains lots of useful components and utilities.
          </p>
          <p>
            Everyone can use the source code as a{' '}
            <AppLink href="https://github.com/karpolan/react-mui-pro-starter/blob/main/README.md">
              starter for new React project
            </AppLink>
            . Any{' '}
            <AppLink href="https://github.com/karpolan/react-mui-pro-starter/issues">comments and suggestions</AppLink>{' '}
            are welcome <AppIcon name="smile" />
          </p>
        </FinalMessage>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TypographySection />
      </Grid>

      <Grid item xs={12} sm={6}>
        <ButtonsSection />
        <br />
        <IconButtonsSection />
        <br />
        <TagsSection />
        <br />
        <AlertsSection />
      </Grid>
    </Grid>
  );
};

export default HomeView;
