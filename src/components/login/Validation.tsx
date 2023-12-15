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

export const Validation = (props: Props) => {
  console.log(props);
};
