import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";

const Single = () => {
const [list , setList] = useState([])

  const { data, loading, error } = useFetch(`/users`);
  // console.log(data);
  useEffect(async () => {
    setList(data);
  }, [data]);
 

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle"></h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">UserId</span>
                  <span className="itemValue">  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
