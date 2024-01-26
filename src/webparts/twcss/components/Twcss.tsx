import * as React from 'react';
import styles from './Twcss.module.scss';
import type { ITwcssProps } from './ITwcssProps';

export default class Twcss extends React.Component<ITwcssProps, {}> {
  public render(): React.ReactElement<ITwcssProps> {
    const {
      hasTeamsContext,
    } = this.props;

    return (
      <section className={`${styles.twcss} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <div className="bg-green-300 border-green-600 border-b p-4 m-4 rounded">
          Some text here
          </div>
        </div>
      </section>
    );
  }
}
