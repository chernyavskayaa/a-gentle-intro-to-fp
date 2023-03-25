function withLogging(Component) {
  return function WithLogging(props) {
    console.log('Rendering', Component.name, 'with props', props);
    return <Component {...props} />;
  };
}

const LoggedGreeting = withLogging(Greeting);
