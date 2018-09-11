import React, { PureComponent } from 'react';

export const Component = config => ViewModel => {
  const WrappedComponent = config.view;

  return class extends PureComponent {
    constructor(props) {
      super(props);
      const $viewModel = new ViewModel(props);
      $viewModel.reloadView = this.forceUpdate.bind(this);

      this.state = {
        $viewModel,
      }
    }

    async componentDidMount() {
      this.state.$viewModel.onInit && await this.state.$viewModel.onInit();
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
}
export * from './form';
export * from './router';