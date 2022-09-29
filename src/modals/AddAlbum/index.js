import React from "react";
import ModalProvider from "react-modal";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Button,
  Row,
  Text,
  Img,
  Input,
  SelectBox,
  Line,
} from "components";

const AddAlbumModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/addsongstoalbum");
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[52%]"
        overlayClassName="bg-black_900_7e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center lg:mb-[196px] xl:mb-[224px] 2xl:mb-[252px] 3xl:mb-[302px] 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] w-[100%]">
            <Button
              className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
              size="md"
              variant="FillBlack901"
            >
              Add Album
            </Button>
            <Row className="justify-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[65%]">
              <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pb-[4px] pr-[4px] w-[33%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                  Cover Image
                </Text>
                <Img
                  src="images/img_uploadimage_127X127.svg"
                  className="xl:h-[113px] 2xl:h-[128px] 3xl:h-[153px] lg:h-[99px] ml-[3px] mt-[3px] xl:w-[112px] 2xl:w-[127px] 3xl:w-[152px] lg:w-[98px]"
                  alt="uploadimage"
                />
                <Row className="ml-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[80%]">
                  <Text className="font-semibold mt-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_800 w-[auto]">
                    Upload Image
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_401 w-[auto]">
                    Remove
                  </Text>
                </Row>
              </Column>
              <Column className="pt-[3px] w-[67%]">
                <Column className="rounded-radius4 w-[100%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Album Title
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="2xl:h-[31px] 2xl:mt-[7px] 3xl:h-[37px] 3xl:mt-[8px] flex lg:h-[24px] lg:mt-[5px] w-[100%] xl:h-[27px] xl:mt-[6px]"
                    name="border"
                    placeholder=""
                  ></Input>
                </Column>
                <Text className="font-semibold 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-black_901 w-[auto]">
                  Number of Songs
                </Text>
                <SelectBox
                  className="mt-[3px] w-[100%]"
                  placeholderClassName=""
                  name="select"
                  placeholder=""
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_mail.svg"
                      className="lg:w-[7px] lg:h-[7px] lg:mr-[6px] xl:w-[8px] xl:h-[9px] xl:mr-[7px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[8px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[9px]"
                      alt="mail"
                    />
                  }
                  variant="OutlineBluegray400"
                ></SelectBox>
              </Column>
            </Row>
            <Line className="bg-bluegray_900 h-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[90%]">
              <Button
                className="common-pointer font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[13%]"
                onClick={props.onRequestClose}
                shape="RoundedBorder5"
                variant="OutlineGray6011_2"
              >
                Cancel
              </Button>
              <Button
                className="common-pointer font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[23%]"
                onClick={handleNavigate5}
                shape="RoundedBorder5"
                variant="FillTealA400"
              >
                Proceed
              </Button>
            </Row>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default AddAlbumModal;
