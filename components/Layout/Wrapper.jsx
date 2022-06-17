import clsx from 'clsx';
import styles from './Wrapper.module.css';
// import { Box } from '@mui/system';

const Wrapper = ({ children, className }) => {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
};

export default Wrapper;

// export default function BoxSx({ children, className }) {
//   return (
//     <Box
//       sx={{
//         width: 300,
//         height: 300,
//         backgroundColor: 'primary.dark',
//         '&:hover': {
//           backgroundColor: 'primary.main',
//           opacity: [0.9, 0.8, 0.7],
//         },
//       }}
//     />
//   );
// }
