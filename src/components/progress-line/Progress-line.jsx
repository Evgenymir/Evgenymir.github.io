import React from 'react';
import './Progress-line.scss';

class ProgressLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
        };
    }

    componentDidMount() {
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        window.addEventListener('scroll', () => {
          const scroll = window.pageYOffset;
          const value = Math.floor((scroll / (documentHeight - windowHeight)) * 100);
          this.setState({ width: value });
        });
    }

    render() {
        const { width } = this.state;
        return <div className="b-progress-bar" style={{ width: `${width}%` }} />;
    }
}

export default ProgressLine;
