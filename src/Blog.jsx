import React from 'react';
import Article from './Article';
// 名前あり
import * as FooBar from './components/FooBar';
// import { Foo, Bar } from './components/FooBar';

// 名前なし
import Hoge from './components/Hoge';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPublished: false,
            count: 0,
        }
    }

    componentDidMount() {
        // ボタンがクリックされたらいいねをカウントアップする　
        document.getElementById('counter').addEventListener('click', this.countUp);
    }
    componentDidUpdate() {
        // console.log(this.state.count)
        if(this.state.count >= 10) {
            this.setState({
                count: 0
            });
        }
    }
    componentWillUnmount() {
        document.getElementById('counter').removeEventListener('click', this.countUp);
    }

    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    };
    countUp = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {        
        return (
            <>
                <Article 
                    title={'React Component'} 
                    isPublished={this.state.isPublished} 
                    toggle={() => this.togglePublished()} 
                    count={this.state.count}
                />
                {/* <Bar /> */}
                <FooBar.Foo />
                <FooBar.Bar />
                <Hoge />
            </>
        );
    }
}
export default Blog;