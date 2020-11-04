import {useState, useEffect, useCallback, useRef} from 'react';
import Axios from 'axios';

const Cancellation = Axios.CancelToken;
let Source = Cancellation.source();

interface FetchProps<T> extends ApiProps {
  request(props: ApiProps): ApiResponse<T>;
  dependencies?: readonly any[];
}

interface ReturnData<T> {
  data: T;
  error?: string;
  loading: boolean;
  hasError(): boolean;
  retry(): void;
}

const delay = (): Promise<string> =>
  new Promise(resolve => setTimeout(() => resolve('Hello World'), 3000));

/**
 * `useFetch` Fetch data in API Service..
 *
 * @param request Promise Request.
 * @param dependencies Dependency array that will trigger to request to re fetch again.
 */
function useFetch<T>({
  request,
  dependencies = [],
  params = {},
  config,
}: FetchProps<T>): ReturnData<T> {
  let didCancel = useRef<boolean>(false).current;

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const [data, setData] = useState<T | any>(null);

  const fetchData = useCallback(async () => {
    didCancel = false;
    setLoading(true);

    try {
      const response = await request({
        params,
        config: {...config, cancelToken: Source.token},
      });

      if (!didCancel) {
        if (response.status === 200) {
          setData(response.data);
        }
      }
    } catch (error) {
      console.log('[Error]', error);
      if (!didCancel) {
        setError(error.message);
      }
    } finally {
      if (!didCancel) {
        setLoading(false);
      }
    }
  }, [didCancel, request]);

  useEffect(() => {
    fetchData();

    return () => {
      // Flag to prevent setState to unmounted component...
      didCancel = true;

      Source.cancel('Request has been cancelled.');
      Source = Cancellation.source();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);

  const hasError = (): boolean => {
    // Typecast return because TypeScript doesn't allow
    // return error && !loading
    return !!(error && !loading);
  };

  return {
    data,
    error,
    loading,
    hasError,
    retry: fetchData,
  };
}

export default useFetch;
