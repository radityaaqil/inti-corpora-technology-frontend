import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import DetailDataList from "../../components/detailData";
import { getDetail, deleteData } from "./../../redux/actions/detailAction";
import useDetail from "../../helpers/useDetail";
import { connect } from "react-redux";

const DetailData = ({ getDetail, deleteData }) => {
  //Router query to get id from URL
  const router = useRouter();
  const { idData } = router.query;

  //Get Data
  const getData = async () => {
    getDetail(idData);
  };

  // Get Data page load
  useEffect(() => {
    getData();
  }, []);

  //Get data from redux
  const { id, userId, title, body } = useDetail();

  return (
    <div>
      <DetailDataList
        id={id}
        userId={userId}
        title={title}
        body={body}
        deleteData={deleteData}
      />
    </div>
  );
};

export default connect(null, { getDetail, deleteData })(DetailData);
