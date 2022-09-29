import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Stack,
  Row,
  Button,
  Img,
  Text,
  List,
  Line,
  Input,
  TextArea,
  CheckBox,
} from "components";

const AddSongsToAlbumModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[52%]"
        overlayClassName="fixed flex h-[100%] inset-y-[0] rounded-radius5 w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="items-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] rounded-radius5 w-[100%]">
            <Stack className="bg-white_A700 lg:h-[467px] xl:h-[534px] 2xl:h-[601px] 3xl:h-[721px] rounded-radius5 w-[100%]">
              <Stack className="absolute lg:h-[467px] xl:h-[534px] 2xl:h-[601px] 3xl:h-[721px] inset-x-[0] w-[100%]">
                <div className="absolute bg-white_A700 lg:h-[479px] xl:h-[548px] 2xl:h-[616px] 3xl:h-[739px] rounded-radius5 w-[100%]"></div>
                <Column className="absolute bottom-[0] inset-x-[0] items-center mx-[auto] w-[94%]">
                  <Row className="items-center justify-center pr-[1px] w-[67%]">
                    <Column className="w-[36%]">
                      <Column
                        className="bg-cover bg-repeat xl:h-[113px] 2xl:h-[128px] 3xl:h-[153px] lg:h-[99px] items-end px-[3px] xl:w-[112px] 2xl:w-[127px] 3xl:w-[152px] lg:w-[98px]"
                        style={{
                          backgroundImage:
                            "url('images/img_uploadalbumar.png')",
                        }}
                      >
                        <Button
                          className="flex lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] items-center justify-center 2xl:mb-[107px] 3xl:mb-[128px] lg:mb-[83px] xl:mb-[95px] mt-[1px] rotate-[5deg] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                          shape="icbCircleBorder8"
                          size="smIcn"
                          variant="icbFillGray507e"
                        >
                          <Img
                            src="images/img_path1629.svg"
                            className="flex items-center justify-center lg:h-[4px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[5px]"
                            alt="Path1629"
                          />
                        </Button>
                      </Column>
                      <Text className="font-semibold ml-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                        Midnight Train
                      </Text>
                    </Column>
                    <Column className="pt-[3px] w-[64%]">
                      <Row className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[79%]">
                        <Text className="font-semibold mt-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Name
                        </Text>
                        <Text className="font-semibold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] mt-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Type
                        </Text>
                        <Text className="font-semibold lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] mt-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Upload
                        </Text>
                        <Text className="font-semibold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_900 w-[auto]">
                          Preview
                        </Text>
                      </Row>
                      <List
                        className="gap-[0] min-h-[auto] mt-[3px] pr-[1px] pt-[1px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="items-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            1.
                          </Text>
                          <Text className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Suzanna
                          </Text>
                          <Text className="font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Mp3
                          </Text>
                          <Button
                            className="2xl:ml-[44px] 3xl:ml-[52px] flex items-center justify-center lg:ml-[34px] my-[2px] text-center w-[16%] xl:ml-[39px]"
                            rightIcon={
                              <Img
                                src="images/img_vector.svg"
                                className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[5px] xl:w-[7px] xl:h-[8px] xl:ml-[6px] 2xl:w-[8px] 2xl:h-[9px] 2xl:ml-[7px] 3xl:w-[9px] 3xl:h-[10px] 3xl:ml-[8px]"
                                alt="Vector"
                              />
                            }
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            <div className="bg-transparent font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-bluegray_101">
                              Upload
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[7%]"
                            shape="icbRoundedBorder3"
                            size="smIcn"
                            variant="icbFillBluegray40019"
                          >
                            <Img
                              src="images/img_previewimage.svg"
                              className="flex items-center justify-center"
                              alt="PreviewImage"
                            />
                          </Button>
                          <Button
                            className="font-medium mb-[2px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-bluegray_400 text-center w-[15%]"
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            + Add
                          </Button>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                        <Row className="items-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            1.
                          </Text>
                          <Text className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Suzanna
                          </Text>
                          <Text className="font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Mp3
                          </Text>
                          <Button
                            className="2xl:ml-[44px] 3xl:ml-[52px] flex items-center justify-center lg:ml-[34px] my-[2px] text-center w-[16%] xl:ml-[39px]"
                            rightIcon={
                              <Img
                                src="images/img_vector.svg"
                                className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[5px] xl:w-[7px] xl:h-[8px] xl:ml-[6px] 2xl:w-[8px] 2xl:h-[9px] 2xl:ml-[7px] 3xl:w-[9px] 3xl:h-[10px] 3xl:ml-[8px]"
                                alt="Vector"
                              />
                            }
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            <div className="bg-transparent font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-bluegray_101">
                              Upload
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[7%]"
                            shape="icbRoundedBorder3"
                            size="smIcn"
                            variant="icbFillBluegray40019"
                          >
                            <Img
                              src="images/img_previewimage.svg"
                              className="flex items-center justify-center"
                              alt="PreviewImage One"
                            />
                          </Button>
                          <Button
                            className="font-medium mb-[2px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-bluegray_400 text-center w-[15%]"
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            + Add
                          </Button>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                        <Row className="items-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            1.
                          </Text>
                          <Text className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Suzanna
                          </Text>
                          <Text className="font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Mp3
                          </Text>
                          <Button
                            className="2xl:ml-[44px] 3xl:ml-[52px] flex items-center justify-center lg:ml-[34px] my-[2px] text-center w-[16%] xl:ml-[39px]"
                            rightIcon={
                              <Img
                                src="images/img_vector.svg"
                                className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[5px] xl:w-[7px] xl:h-[8px] xl:ml-[6px] 2xl:w-[8px] 2xl:h-[9px] 2xl:ml-[7px] 3xl:w-[9px] 3xl:h-[10px] 3xl:ml-[8px]"
                                alt="Vector"
                              />
                            }
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            <div className="bg-transparent font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-bluegray_101">
                              Upload
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[7%]"
                            shape="icbRoundedBorder3"
                            size="smIcn"
                            variant="icbFillBluegray40019"
                          >
                            <Img
                              src="images/img_previewimage.svg"
                              className="flex items-center justify-center"
                              alt="PreviewImage Two"
                            />
                          </Button>
                          <Button
                            className="font-medium mb-[2px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-bluegray_400 text-center w-[15%]"
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            + Add
                          </Button>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                        <Row className="items-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            1.
                          </Text>
                          <Text className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Suzanna
                          </Text>
                          <Text className="font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Mp3
                          </Text>
                          <Button
                            className="2xl:ml-[44px] 3xl:ml-[52px] flex items-center justify-center lg:ml-[34px] my-[2px] text-center w-[16%] xl:ml-[39px]"
                            rightIcon={
                              <Img
                                src="images/img_vector.svg"
                                className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[5px] xl:w-[7px] xl:h-[8px] xl:ml-[6px] 2xl:w-[8px] 2xl:h-[9px] 2xl:ml-[7px] 3xl:w-[9px] 3xl:h-[10px] 3xl:ml-[8px]"
                                alt="Vector"
                              />
                            }
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            <div className="bg-transparent font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-bluegray_101">
                              Upload
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[7%]"
                            shape="icbRoundedBorder3"
                            size="smIcn"
                            variant="icbFillBluegray40019"
                          >
                            <Img
                              src="images/img_previewimage.svg"
                              className="flex items-center justify-center"
                              alt="PreviewImage Three"
                            />
                          </Button>
                          <Button
                            className="font-medium mb-[2px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-bluegray_400 text-center w-[15%]"
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            + Add
                          </Button>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                        <Row className="items-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            1.
                          </Text>
                          <Text className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Suzanna
                          </Text>
                          <Text className="font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Mp3
                          </Text>
                          <Button
                            className="2xl:ml-[44px] 3xl:ml-[52px] flex items-center justify-center lg:ml-[34px] my-[2px] text-center w-[16%] xl:ml-[39px]"
                            rightIcon={
                              <Img
                                src="images/img_vector.svg"
                                className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[5px] xl:w-[7px] xl:h-[8px] xl:ml-[6px] 2xl:w-[8px] 2xl:h-[9px] 2xl:ml-[7px] 3xl:w-[9px] 3xl:h-[10px] 3xl:ml-[8px]"
                                alt="Vector"
                              />
                            }
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            <div className="bg-transparent font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-bluegray_101">
                              Upload
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[7%]"
                            shape="icbRoundedBorder3"
                            size="smIcn"
                            variant="icbFillBluegray40019"
                          >
                            <Img
                              src="images/img_previewimage.svg"
                              className="flex items-center justify-center"
                              alt="PreviewImage Four"
                            />
                          </Button>
                          <Button
                            className="font-medium mb-[2px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-bluegray_400 text-center w-[15%]"
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            + Add
                          </Button>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                        <Row className="items-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            1.
                          </Text>
                          <Text className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Suzanna
                          </Text>
                          <Text className="font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Mp3
                          </Text>
                          <Button
                            className="2xl:ml-[44px] 3xl:ml-[52px] flex items-center justify-center lg:ml-[34px] my-[2px] text-center w-[16%] xl:ml-[39px]"
                            rightIcon={
                              <Img
                                src="images/img_vector.svg"
                                className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[5px] xl:w-[7px] xl:h-[8px] xl:ml-[6px] 2xl:w-[8px] 2xl:h-[9px] 2xl:ml-[7px] 3xl:w-[9px] 3xl:h-[10px] 3xl:ml-[8px]"
                                alt="Vector"
                              />
                            }
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            <div className="bg-transparent font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-bluegray_101">
                              Upload
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[7%]"
                            shape="icbRoundedBorder3"
                            size="smIcn"
                            variant="icbFillBluegray40019"
                          >
                            <Img
                              src="images/img_previewimage.svg"
                              className="flex items-center justify-center"
                              alt="PreviewImage Five"
                            />
                          </Button>
                          <Button
                            className="font-medium mb-[2px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-bluegray_400 text-center w-[15%]"
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            + Add
                          </Button>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                        <Row className="items-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            1.
                          </Text>
                          <Text className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Suzanna
                          </Text>
                          <Text className="font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-black_901 w-[auto]">
                            Mp3
                          </Text>
                          <Button
                            className="2xl:ml-[44px] 3xl:ml-[52px] flex items-center justify-center lg:ml-[34px] my-[2px] text-center w-[16%] xl:ml-[39px]"
                            rightIcon={
                              <Img
                                src="images/img_vector.svg"
                                className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[5px] xl:w-[7px] xl:h-[8px] xl:ml-[6px] 2xl:w-[8px] 2xl:h-[9px] 2xl:ml-[7px] 3xl:w-[9px] 3xl:h-[10px] 3xl:ml-[8px]"
                                alt="Vector"
                              />
                            }
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            <div className="bg-transparent font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-bluegray_101">
                              Upload
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[7%]"
                            shape="icbRoundedBorder3"
                            size="smIcn"
                            variant="icbFillBluegray40019"
                          >
                            <Img
                              src="images/img_previewimage.svg"
                              className="flex items-center justify-center"
                              alt="PreviewImage Six"
                            />
                          </Button>
                          <Button
                            className="font-medium mb-[2px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-bluegray_400 text-center w-[15%]"
                            shape="RoundedBorder2"
                            variant="OutlineGray4011_2"
                          >
                            + Add
                          </Button>
                        </Row>
                      </List>
                    </Column>
                  </Row>
                  <Column className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[72%]">
                    <Row className="items-center justify-evenly w-[99%]">
                      <Column className="w-[53%]">
                        <Text className="font-semibold ml-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-black_901 w-[auto]">
                          Thank You Thumbnail
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                          wrapClassName="2xl:mt-[5px] 3xl:mt-[6px] flex lg:mt-[3px] w-[89%] xl:mt-[4px]"
                          name="GroupTwentySix"
                          placeholder="Upload Picture"
                          prefix={
                            <Img
                              src="images/img_camera.svg"
                              className="lg:w-[17px] lg:mx-[7px] xl:w-[19px] xl:mx-[8px] 2xl:w-[22px] 2xl:mx-[10px] 3xl:w-[26px] 3xl:mx-[12px] my-[auto]"
                              alt="camera"
                            />
                          }
                          size="sm"
                        ></Input>
                      </Column>
                      <Input
                        className="font-semibold p-[0] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] placeholder:text-black_901 text-black_901 w-[100%]"
                        wrapClassName="mt-[1px] w-[47%]"
                        name="thankyou"
                        placeholder="Thank You Note"
                        size="md"
                        variant="edittext2"
                      ></Input>
                    </Row>
                    <TextArea
                      className="font-semibold lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:pr-[27px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] placeholder:text-black_901 text-black_901 w-[100%]"
                      name="tos"
                      placeholder="Terms & Conditions"
                      size="sm"
                      variant="textarea1"
                    ></TextArea>
                    <CheckBox
                      className="font-normal ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-teal_A400"
                      inputClassName="h-[22px] mr-[5px] w-[22px]"
                      name="Label"
                      label="I agree to all the Terms & Conditions"
                      shape="RoundedBorder5"
                      size="sm"
                    ></CheckBox>
                  </Column>
                  <Row className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                    <Button
                      className="common-pointer font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[16%]"
                      onClick={props.onRequestClose}
                      shape="RoundedBorder5"
                      variant="OutlineGray601"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="font-semibold lg:ml-[181px] xl:ml-[207px] 2xl:ml-[233px] 3xl:ml-[279px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[20%]"
                      shape="RoundedBorder5"
                      variant="FillYellowA700"
                    >
                      Save Song
                    </Button>
                    <Button
                      className="font-semibold lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[22%]"
                      shape="RoundedBorder5"
                      variant="FillTealA400"
                    >
                      Save & Add Another
                    </Button>
                  </Row>
                </Column>
              </Stack>
              <Line className="absolute bg-bluegray_900 bottom-[7%] h-[1px] w-[100%]" />
              <Column
                className="absolute bg-cover bg-repeat items-center justify-end lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] top-[0] w-[100%]"
                style={{ backgroundImage: "url('images/img_formtitle.svg')" }}
              >
                <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Add Songs to Album
                </Text>
              </Column>
            </Stack>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default AddSongsToAlbumModal;
