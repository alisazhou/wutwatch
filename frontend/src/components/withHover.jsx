import React from 'react';


const withHover = WrappedComponent => {
    class ComponentWithHover extends React.Component {
        state = {
            hovering: false,
        };

        handleMouseEnter = () => {
            this.setState({ hovering: true });
        };

        handleMouseLeave = () => {
            this.setState({ hovering: false });
        };

        render() {
            return (
                <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <WrappedComponent hovering={this.state.hovering} {...this.props} />
                </div>
            );
        }
    }

    return ComponentWithHover;
}

export default withHover;
