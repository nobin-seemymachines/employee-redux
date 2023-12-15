type Props = {
  userData: {
    email: string;
    password: string;
  };
  errors: {
    email: string;
    password: string;
  };
};

const emailValidate = (props: Props) => {
  const { email } = props.userData;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    props.errors.email = "Invalid email address";
  }
  return props;
};

const passwordValidate = (props: Props) => {
  const { password } = props.userData;
  if (!password) {
    props.errors.password = "Invalid password";
  }
  return props;
};

export const Validation = (props: Props) => {
  const isEmail = emailValidate(props);
  const isPassword = passwordValidate(props);

  return {
    ...props,
    isValid: isEmail && isPassword,
    errors: {
      email: props.errors.email,
      password: props.errors.password,
    },
  };
};
