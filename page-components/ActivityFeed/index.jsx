import { Spacer } from '@/components/Layout';
import styles from './ActivityFeed.module.css';
import ActivityList from './ActivityList';

export const ActivityFeed = () => {
  return (
    <div className={styles.root}>
      <Spacer size={1} axis="vertical" />
      <ActivityList />
    </div>
  );
};
