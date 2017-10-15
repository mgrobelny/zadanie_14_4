var Counter = React.createClass({

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    // Metody cyklu życia - początek
    
    componentDidMount: function () {
        console.log( 'Testowy tekst');
    },

    componentWillReceiveProps: function() {
        console.log('Testowy tekst');
    },

    // Metody cyklu życia - koniec

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    reset: function() {
        this.setState({
            counter: 0
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('p', {}, 'Wynik: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+ '),
            React.createElement('button', {onClick: this.decrement}, '- '),
            React.createElement('button', {onClick: this.reset}, 'Reset')
        );
    }

});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));


var CounterSecond = React.createClass({
    getInitialState: function() {
        return {
            counter: 1
        };
    },

    multiply: function() {
        this.setState({
            counter: this.state.counter * 2
        });
    },

    divide: function() {
        this.setState({
            counter: this.state.counter / 2
        });
    },

    reset: function() {
        this.setState({
            counter: 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('p', {}, 'Wynik: ' + this.state.counter),
            React.createElement('button', {onClick: this.multiply}, '* 2 '),
            React.createElement('button', {onClick: this.divide}, '/ 2 '),
            React.createElement('button', {onClick: this.reset}, 'Reset')
        );
    }

});

var elementSecond = React.createElement(CounterSecond);
ReactDOM.render(elementSecond, document.getElementById('appSecond'));

var CounterThird = React.createClass({
    getInitialState: function() {
        return {
            counter: 5
        };
    },

    multiplyByFive: function() {
        this.setState({
            counter: this.state.counter * 5
        });
    },

    divideByFive: function() {
        this.setState({
            counter: this.state.counter / 5
        });
    },

    reset: function() {
        this.setState({
            counter: 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('p', {}, 'Wynik: ' + this.state.counter),
            React.createElement('button', {onClick: this.multiplyByFive}, '* 5 '),
            React.createElement('button', {onClick: this.divideByFive}, '/ 5 '),
            React.createElement('button', {onClick: this.reset}, 'Reset')
        );
    }

});

var elementThird = React.createElement(CounterThird);
ReactDOM.render(elementThird, document.getElementById('appThird'));

var CounterFourth = React.createClass({
    getInitialState: function() {
        return {
            counter: 1
        };
    },

    multiplyByTen: function() {
        this.setState({
            counter: this.state.counter * 10
        });
    },

    divideByTen: function() {
        this.setState({
            counter: this.state.counter / 10
        });
    },

    reset: function() {
        this.setState({
            counter: 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('p', {}, 'Wynik: ' + this.state.counter),
            React.createElement('button', {onClick: this.multiplyByTen}, '* 10 '),
            React.createElement('button', {onClick: this.divideByTen}, '/ 10 '),
            React.createElement('button', {onClick: this.reset}, 'Reset')
        );
    }

});

var elementFourth = React.createElement(CounterFourth);
ReactDOM.render(elementFourth, document.getElementById('appFourth'));