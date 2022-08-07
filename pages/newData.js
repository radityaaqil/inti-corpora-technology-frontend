import AddNewData from "../components/addData";
import { addNewData } from "../redux/actions/detailAction";
import { connect } from "react-redux";

const NewData = ({ addNewData }) => {
  //Add new data
  const addData = (values) => {
    addNewData(values);
  };
  return (
    <div>
      <div className="w-[240px] mx-auto text-center font-bold mt-4 mb-4">
        New Data
      </div>
      <AddNewData addData={addData} />
    </div>
  );
};

export default connect(null, { addNewData })(NewData);
