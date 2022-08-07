import EditData from "../../components/editData";
import { useRouter } from "next/router";
import { getDetail, ediDetail } from "./../../redux/actions/detailAction";
import useDetail from "../../helpers/useDetail";
import { connect } from "react-redux";
import { useEffect } from "react";

const DataEdit = ({ getDetail, ediDetail }) => {
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

  //Update data detail
  const updateData = (id, values) => {
    ediDetail(id, values);
  };

  return (
    <div>
      <div className="w-[240px] mx-auto text-center font-bold mt-4 mb-4">
        Edit Data
      </div>
      <EditData
        id={id}
        userId={userId}
        title={title}
        body={body}
        updateData={updateData}
      />
    </div>
  );
};

export default connect(null, { getDetail, ediDetail })(DataEdit);
