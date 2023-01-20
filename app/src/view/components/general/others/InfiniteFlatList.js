import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useInfiniteQuery, useQuery} from 'react-query';
import {COLORS} from '../../../../conts';
import {Text} from '../text';
export const InfiniteFlatList = ({request, searchValue, ...props}) => {
  const loadingNextPage = React.useRef(false);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isFetched,
    isRefetching,
    isLoading,
    status,
    refetch,
  } = useInfiniteQuery('transactions', request, {
    getNextPageParam: (lastPage, pages) => {
      // console.log(pages, 'pages');
      const {next_page_url, per_page, total, current_page} = lastPage || {};

      // return undefined;
      return next_page_url ? current_page + 1 : undefined;
    },
  });

  React.useEffect(() => {
    refetch();
  }, [searchValue]);

  React.useEffect(() => {
    loadingNextPage.current = false;
  }, [isFetched, error]);
  const getData = pages => {
    const currentPages = [];
    if (Array.isArray(pages)) {
      pages?.forEach(element => {
        currentPages.push(...element?.data);
      });
    }

    return currentPages;
  };

  if (
    (error && !hasNextPage) ||
    (!data?.pages?.[0]?.next_page_url && isFetched)
  ) {
    return (
      <Text size={20} style={{marginTop: 40, textAlign: 'center'}}>
        No data found
      </Text>
    );
  }
  if (isRefetching && searchValue && !loadingNextPage.current) {
    return (
      <View style={{marginTop: 40}}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <FlatList
      onEndReached={() => {
        loadingNextPage.current = true;
        setTimeout(() => {
          if (hasNextPage && !isFetching) {
            fetchNextPage();
          }
        }, 2000);
      }}
      contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 20}}
      data={getData(data?.pages)}
      ListFooterComponent={
        <View>
          {isFetching && (
            <ActivityIndicator size="large" color={COLORS.primary} />
          )}
        </View>
      }
      {...props}
    />
  );
};
