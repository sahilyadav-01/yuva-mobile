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

export const useHomeSearch = () => {
  const dispatch = useDispatch();
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
  useEffect(() => {
    if (showSearchView) {
      dispatch(
        getPopularTestsPackages({
          pageNo: 1,
          pageSize: 5,
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
      setPopularTestsData(_.uniq(popularTestsData.concat(popularTestsPackages)));
    }
  }, [getPopularTestsLoading, getPopularTestsError, getPopularTestsPackages]);

  useEffect(() => {
    if (pageNo > 1)
      dispatch(
        getPopularTestsPackages({
          pageNo,
          pageSize: 5,
          rangeEnum: 'NO_RANGE',
          testPackageRequestDto: {},
        }),
      );
  }, [pageNo]);

  useEffect(() => {
    if (!searchLoading && !searchError) {
      getSearchHistory().then(arg => {
        if(typeof arg === 'string' && arg.length > 0)
        setResults(_.uniq(results.concat(JSON.parse(arg))));
      });
      //make the search operation here
    }
  }, [searchLoading, searchError, searchData]);

  const data = [
    {text: 'Book Test', icon: 'BOOK_TEST_SVG_ICON', onPress: () => {console.log('Book test')}, props:{searchScreen: true}},
    {text: 'Book Appointment', icon: 'BookAppointment', onPress: () => {}},
    {text: 'Get Medicine', icon: 'GetMedicine', onPress: () => {}},
    {text: 'Consult Doctor', icon: 'ConsultDoctor', onPress: () => {}},
  ];

  const onListEndReached = () => {
    if (!getPopularTestsLoading) {
      setPageNo(pageNo + 1);
    }
  };

  const onSearch = text => setText(text);

  const onSubmit = () => {
    if (text.length >= 3) {
      setSearchHistory(text).then(() => {
        dispatch(getSearchTests(text));
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
  };
};
