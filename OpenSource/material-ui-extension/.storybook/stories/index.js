import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },

  note: {
    opacity: 0.5,
  }
};

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Material UI Extension</h1>
        <p>基于Material UI的一系列扩展组件</p>
        <p>Contributor 王下邀月熊 @wxyyxc1992</p>
        <p>Contributor SZzzzz @SZzzzz</p>
      </div>
    );
  }
}


//加载欢迎界面
storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));


