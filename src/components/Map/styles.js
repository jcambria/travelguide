import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    '@media (min-width:600px)': { /* Media query for screens with minimum width of 600px */
      width: '100px', /* Set width to 100px for larger screens */
    },
  },
  mapContainer: {
    height: 'calc(100vh - 64px)', /* Updated height to subtract the height of the navbar */
    width: '100%',
    marginLeft: '0', /* Updated margin left to 0 for mobile devices */
    marginTop: '64px', /* Updated top margin to be the height of the navbar */
    '@media (min-width:600px)': { /* Media query for screens with minimum width of 600px */
      width: 'calc(100% - 100px)', /* Set width to calc(100% - 100px) for larger screens */
      marginLeft: '300px', /* Set margin left to 100px for larger screens */
      marginTop: '0', /* Set top margin to 0 for larger screens */
    },
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': {
      zIndex: 2,
    },
  },
  pointer: {
    cursor: 'pointer',
  },
}));
