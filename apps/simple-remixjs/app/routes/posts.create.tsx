import { ActionFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { useActionData, useNavigate, useNavigation } from '@remix-run/react';
import { useEffect, useMemo } from 'react';
import { getValidatedFormData } from 'remix-hook-form';
import { Post, createPost } from 'services';
import { SimpleActionResponse } from '../@types/SimpleActionResponse';
import Button from '../components/Button/Button';
import Error from '../components/Error/Error';
import { i18next } from '../i18n';
import { getFormCreateResolver } from '../packages/Posts/@constants/zodResolver';
import { Form, FormCreateValues, FormProps } from '../packages/Posts/Form';
import { handleCatchClauseSimple } from '../utils/handleErrors/handleCatchClauseSimple';
import { handleFormResolverError } from '../utils/handleErrors/handleFormResolverError';
import { preventRevalidateOnListingPage } from '../utils/preventRevalidateOnListingPage';

export type ActionResponse = SimpleActionResponse<Pick<Post, 'id'>, FormProps['fieldsError']>;
export const action = async ({ request }: ActionFunctionArgs): Promise<TypedResponse<ActionResponse>> => {
  try {
    const t = await i18next.getFixedT(request, ['common']);
    const { errors, data } = await getValidatedFormData<FormCreateValues>(request, getFormCreateResolver(t));
    if (data) {
      const response = await createPost({ body: data.body, title: data.title, userId: 1 });
      if (response.status === 'success') {
        return json({
          hasError: false,
          message: 'Created',
          post: response.data,
        });
      }
      return json({
        hasError: true,
        message: '...',
      });
    }
    return json(...handleFormResolverError(errors));
  } catch (error) {
    return handleCatchClauseSimple(error);
  }
};

export const shouldRevalidate = preventRevalidateOnListingPage;

export function ErrorBoundary() {
  return <Error />;
}

const FORM_ID = 'FormCreatePost';
const CreatePost = () => {
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();
  const navigate = useNavigate();

  const isSubmiting = useMemo(() => {
    return navigation.state === 'loading' || navigation.state === 'submitting';
  }, [navigation.state]);

  useEffect(() => {
    if (actionData) {
      if (actionData.hasError) {
        alert('Form action error');
      } else {
        alert('Created');
        navigate('/posts');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData]);

  return (
    <div>
      <Form uid={FORM_ID} variant="Create" isSubmiting={isSubmiting} />
      <Button isLoading={isSubmiting} type="submit" form={FORM_ID}>
        Create
      </Button>
    </div>
  );
};

export default CreatePost;
