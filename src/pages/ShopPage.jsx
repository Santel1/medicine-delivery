import { useDispatch, useSelector } from "react-redux";
import {
  selectCart,
  selectDrugs,
  selectDrugsIsLoading,
} from "../redux/drugsSelectors";
import { addToCart, requestDrugs } from "../redux/drugsSlice";
import { useEffect, useState } from "react";
import { ShopPageStyled } from "./ShopPage.styled";
import { Loader } from "../components/Loader";
import ListItemShop from "../components/ListItemShop";

const ShopPage = () => {
  const allDrugs = useSelector(selectDrugs);
  const cart = useSelector(selectCart);
  const isLoading = useSelector(selectDrugsIsLoading);
  const dispatch = useDispatch();
  const [filterParams, setFilterParams] = useState("");
  const [filteredDrugs, setFilteredDrugs] = useState([]);

  useEffect(() => {
    if (allDrugs.length === 0) {
      dispatch(requestDrugs());
    } else {
      setFilteredDrugs(filterDrugs(allDrugs, filterParams));
    }
  }, [dispatch, allDrugs, filterParams]);

  const handleAddToCart = (drug) => {
    if (cart.some((cartDrug) => cartDrug._id === drug._id)) {
      return;
    }
    dispatch(addToCart(drug));
  };

  const handleButtonClick = (value) => {
    setFilterParams(value);
  };

  const filterDrugs = (drugs, shopName) => {
    if (shopName === "") {
      return drugs;
    }
    return drugs.filter((drug) => drug.shopName === shopName);
  };

  return (
    <ShopPageStyled>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="sidebarFilter">
            <ul className="sidebarList">
              <li className="sidebarItem">
                <button
                  onClick={() => handleButtonClick("")}
                  type="button"
                  className="sidebarBtn"
                >
                  All
                </button>
              </li>
              {allDrugs &&
                [...new Set(allDrugs.map((drug) => drug.shopName))].map(
                  (shopName) => (
                    <li key={shopName} className="sidebarItem">
                      <button
                        onClick={() => handleButtonClick(shopName)}
                        type="button"
                        className="sidebarBtn"
                      >
                        {shopName}
                      </button>
                    </li>
                  )
                )}
            </ul>
          </section>
          <section>
            <ul className="shopList">
              {filteredDrugs.map((drug) => (
                <ListItemShop
                  key={drug._id}
                  drug={drug}
                  handleAddToCart={handleAddToCart}
                  isAdded={cart.some((cartDrug) => cartDrug._id === drug._id)}
                />
              ))}
            </ul>
          </section>
        </>
      )}
    </ShopPageStyled>
  );
};

export default ShopPage;
