import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import './DetailsPage.css'

const DetailsPage = () => {
  const [detailImage, setdetailImage] = useState("");
  const [detailinfo, setdetailinfo] = useState("");
  const params = useParams();
  console.log(params);

  const getImage = async () => {
    try {
      const resp = await axios.get(
        `https://www.course-api.com/react-store-products/`
      );
      let s = "";
      let n = "";
      const getTheImage = resp.data;
      console.log(getTheImage);
      for (let i = 0; i < getTheImage.length; i++) {
        if (getTheImage[i].id === params.id) {
          s = getTheImage[i].image;
          n = getTheImage[i].name;
        } else {
          continue;
        }
      }
      setdetailImage(s);
      setdetailinfo(n);

    } catch (error) {
      setdetailImage("Error in image loading")
    }
  };

  useEffect(() => {
    getImage();
  },[])

  return (
    <>
    <div className="details_container">
      <h1>This is {detailinfo}</h1>
      <img src={detailImage} alt="Imag" />
    </div>
    </>
  );
};

export default DetailsPage;
