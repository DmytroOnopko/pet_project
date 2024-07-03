import { useForm as useReactHookForm } from 'react-hook-form';
import { LoginForm } from '../../login/domain';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
  onSubmit(credential: LoginForm): void;
}

export const useForm = ({ onSubmit }: Props) => {
  const validationSchema = useValidationSchema();

  const form = useReactHookForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = form.handleSubmit((data) => onSubmit(data));

  return {
    control: form.control,
    handleSubmit: handleFormSubmit,
  };
};

export const useValidationSchema = () => {
  const requiredMessage = 'This field is required';

  return Yup.object<LoginForm>().shape({
    email: Yup.string().required(requiredMessage),
    password: Yup.string().required(requiredMessage),
  });
};
