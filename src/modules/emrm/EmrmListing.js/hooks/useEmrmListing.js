import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { documentTypeThunk, getAllErmReportThunk } from '../../../../store/reducers/EmrmSlice';

export const useEmrmListing = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const focused = useIsFocused();
  const [medicalReportData, setMedicalReportData] = useState([]);
  const { dropDownData, ermReportData } = useSelector(state => state.Emrm);
  const [documentType, setDocumentType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const setSelectedDocumentType = (arg) => {
    setPageNumber(1);
    setDocumentType(dropDownData.find(item => {
      if (item.name.toString() === arg.toString()) return item;
    }).id
    );
  }
  useEffect(() => {
    if (
      ermReportData &&
      typeof ermReportData?.ermResponseDtoList === 'object' &&
      ermReportData?.ermResponseDtoList.length > 0
    ) {
      setMedicalReportData(
        _.uniqBy(
          medicalReportData.concat(ermReportData?.ermResponseDtoList),
          // 'name',
        ),
      );
    }
  }, [ermReportData]);
  useEffect(() => {
    if (navigation.isFocused() && pageNumber === 1) {
      setMedicalReportData([]);
      dispatch(documentTypeThunk());
      dispatch(getAllErmReportThunk({ pageNo: pageNumber, pageSize: 10, documentType, searchKey: '' }));
    }

  }, [focused, documentType, pageNumber]);
  useEffect(() => {
    if (pageNumber > 1) {
      dispatch(getAllErmReportThunk({ pageNo: pageNumber, pageSize: 10, documentType, searchKey: '' }));
    }
  }, [pageNumber]);

  const onPressAddButton = () => {
    navigation.navigate('EmrmCreateRecord');
  }
  const onChangeSearch = (query) => {
    setPageNumber(1);
    setDocumentType('');
    setSearchQuery(query)
    setMedicalReportData([]);
    let searchKey = "";
    if (query.length > 1) {
      searchKey = query;
    }
    dispatch(
      getAllErmReportThunk({ pageNo: pageNumber, pageSize: 10, documentType, searchKey })
    );
  }
  const onEndReached = () => {
    if (pageNumber < ermReportData?.totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };
  return {
    dropDownData: dropDownData?.map((dropDownData) => ({ label: dropDownData?.id, value: dropDownData?.name, })),
    onPressAddButton,
    medicalReportData,
    setSelectedDocumentType,
    onChangeSearch,
    searchQuery,
    onEndReached,
  };
};
