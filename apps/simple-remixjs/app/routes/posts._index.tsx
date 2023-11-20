import { TypedResponse, json } from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import { Post, getPosts } from 'services';
import Button from '../components/Button/Button';
import Error from '../components/Error/Error';
import { Listing } from '../packages/Posts/Listing';
import { preventRevalidateOnListingPage } from '../utils/preventRevalidateOnListingPage';

export interface LoaderResponse {
  results: Post[];
  totalPage: number;
}
export const loader = async (): Promise<TypedResponse<LoaderResponse>> => {
  try {
    const response = await getPosts();
    if (response.status === 'success') {
      return json({
        results: response.data.hits,
        totalPage: response.data.pagination.totalPages,
      });
    }
    return json({
      results: [],
      totalPage: 1,
    });
  } catch (error) {
    return json({
      results: [],
      totalPage: 1,
    });
  }
};

const DestinationsPage = () => {
  const navigate = useNavigate();

  //#region Listing
  const loaderData = useLoaderData<typeof loader>();
  //#endregion

  return (
    <div>
      <div className="w-full flex items-center justify-between ">
        <h1 className="font-bold text-3xl">Listing posts simple demo</h1>
        <Button onClick={() => navigate('/posts/create')}>New post</Button>
      </div>

      <Listing data={loaderData.results} />
    </div>
  );
};

export const shouldRevalidate = preventRevalidateOnListingPage;

export function ErrorBoundary() {
  return <Error />;
}

export default DestinationsPage;
