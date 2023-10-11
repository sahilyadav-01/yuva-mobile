import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import {
  getPopularTestsPackages,
  getSearchTests,
} from '../../../../../store/reducers/HomeSearchSlice';
import {
  clearSearchHistory,
  getSearchHistory,
  setSearchHistory,
} from '../../../../../store/LocalStore';
import {useNavigation} from '@react-navigation/native';

export const useHomeSearch = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    showSearchView,
    getPopularTestsLoading,
    getPopularTestsError,
    totalPages,
    popularTestsPackages,
    searchLoading,
    searchError,
    searchData,
  } = useSelector(state => state.homeSearch);
  const [popularTestsData, setPopularTestsData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [elasticSearchData, setElasticSearchData] = useState([]);
  useEffect(() => {
    if (showSearchView) {
      dispatch(
        getPopularTestsPackages({
          pageNo: 1,
          pageSize: 10,
          rangeEnum: 'NO_RANGE',
          testPackageRequestDto: {},
        }),
      );
    }
  }, [showSearchView]);

  useEffect(() => {
    if (
      !getPopularTestsLoading &&
      !getPopularTestsError &&
      popularTestsPackages?.length > 0 &&
      pageNo <= totalPages
    ) {
      setPopularTestsData(
        _.uniq(popularTestsData.concat(popularTestsPackages)),
      );
    }
  }, [getPopularTestsLoading, getPopularTestsError, getPopularTestsPackages]);

  useEffect(() => {
    if (pageNo > 1)
      dispatch(
        getPopularTestsPackages({
          pageNo,
          pageSize: 10,
          rangeEnum: 'NO_RANGE',
          testPackageRequestDto: {},
        }),
      );
  }, [pageNo]);

  useEffect(() => {
    if (!searchLoading && !searchError) {
      getSearchHistory().then(arg => {
        setResults(
          _.uniq(
            JSON.parse(arg)
              .split(',')
              .map(item => {
                if (item.includes('%2C')) {
                  return item.split('%2C').join(',');
                }
                return item;
              }),
          ),
        );
      });
      searchData !== null &&
        setElasticSearchData([
          ...searchData?.popularTestResponseDtoList,
          ...searchData?.popularPackageResponseDtoList,
        ]);
      text.length >= 3 && setOverlay(true);
    }
  }, [searchLoading, searchError, searchData]);

  const data = [
    {
      text: 'Book\nTest',
      icon: 'BOOK_TEST_SVG_ICON',
      onPress: () => {
        console.log('Book test');
      },
      props: {searchScreen: true},
    },
    {text: 'Book\nAppointment', icon: 'BookAppointment', onPress: () => {}},
    {text: 'Get\nMedicine', icon: 'GetMedicine', onPress: () => {}},
    {text: 'Consult\nDoctor', icon: 'ConsultDoctor', onPress: () => {}},
  ];

  const onListEndReached = () => {
    if (!getPopularTestsLoading) {
      setPageNo(pageNo + 1);
    }
  };

  const onSearch = text => {
    setText(text);
    text.length === 0 && setOverlay(false);
  };

  const onSubmit = () => {
    if (text.length >= 3 && !text.includes('%2C')) {
      getSearchHistory().then(arg => {
        if (typeof arg === 'string' && arg.length > 0) {
          if (text.includes(',')) {
          }
          setSearchHistory(
            `${JSON.parse(arg)},${
              text.includes(',') ? text.split(',').join('%2C') : text
            }`,
          ).then(() => {
            dispatch(getSearchTests(text));
          });
        } else {
          setSearchHistory(text).then(() => {
            dispatch(getSearchTests(text));
          });
        }
      });
    }
  };

  const onResultPress = item => {
    setText(item);
    dispatch(getSearchTests(item));
  };

  const onClearPress = () => {
    clearSearchHistory().then(() => {
      setResults([]);
    });
  };

  const onCrossPress = () => {
    setText('');
    setOverlay(false);
  };

  const onItemPress = item => {
    navigation.navigate('HomeSearchDetails', item);
  };

  return {
    data,
    popularTestsData,
    onListEndReached,
    onSubmit,
    onSearch,
    results,
    onResultPress,
    text,
    onClearPress,
    onCrossPress,
    elasticSearchData,
    overlay,
    onItemPress,
  };
};
